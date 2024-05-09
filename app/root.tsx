import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styleUrl from '~/assets/index.css?url';
import { TitleBar } from '~/design-system/components';
import { ProjectProvider, ModalProvider, FileSystemProvider } from "./context";

export const links = () => {
  return [{ rel: 'stylesheet', href: "https://use.typekit.net/vkh2lev.css" },
  { rel: 'stylesheet', href: styleUrl }];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <FileSystemProvider>
        <ProjectProvider>
          <TitleBar />
          <body className="light overflow-hidden">
            <ModalProvider>
              {children}
            </ModalProvider>
            <ScrollRestoration />
            <Scripts />
          </body>
        </ProjectProvider>
      </FileSystemProvider>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
