import React, { ReactNode } from 'react';
import { NewProject } from '~/design-system';
import { Modal as ModalComponent } from '~/design-system';

type Padding = 'none' | 'small' | 'medium' | 'large';
type Size = 'small' | 'medium' | 'large' | 'fit';

type ModalContextType = {
  isOpen: boolean;
  openModal: (action: {
    type: string;
    content?: any;
    padding: Padding;
    size: Size;
    align?: 'center' | 'left' | 'right';
    showBar?: boolean;
    onClose?: () => void;
  }) => void;
  afterClose: () => void;
  closeModal: () => void;
};

enum ModalTypeE {
  NEW_PROJECT = 'new_project',
}

const modalAssert = (action: { type: string; content: any }) => {
  switch (action.type) {
    case ModalTypeE.NEW_PROJECT:
      return <NewProject />;
    default:
      return <></>;
  }
};

export const ModalContext = React.createContext<ModalContextType>(
  {} as ModalContextType
);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [state, setState] = React.useState({
    type: '',
    content: {},
    onClose: () => {},
    padding: 'small' as Padding,
    size: 'small' as Size,
    showBar: true,
    overflow: false
  });

  const openModal = (action: {
    type: string;
    content?: any;
    padding: Padding;
    size: Size;
    align?: 'center' | 'left' | 'right';
    showBar?: boolean;
    overflow?: boolean;
    onClose?: () => void;
  }) => {
    setIsOpen(true);
    setState({
      ...state,
      ...action,
    });
  };

  const closeModal = () => {
    setIsOpen(false);
    if (state.onClose) {
      state.onClose();
    }
  };

  const afterClose = () => {};

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, afterClose }}
    >
      {children}
      <ModalComponent
        theme="midnight"
        initialState={isOpen}
        closeModal={closeModal}
        padding={state.padding}
        size={state.size}
        showBar={state.showBar}
        overflow={state.overflow}
      >
        {modalAssert(state)}
      </ModalComponent>
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  return React.useContext(ModalContext);
};
