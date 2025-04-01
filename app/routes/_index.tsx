import { useEffect } from "react";
import { Button } from "~/design-system";
import { useModal, useProject } from '~/context';
import { Loader } from '~/design-system/components';

export default function Index() {
  const { openModal } = useModal();
  const { projects, openProject, refreshProjects } = useProject();

  useEffect(() => {
    refreshProjects();
  }, []);

  return (
    <div className="p-8 min-h-screen w-full bg-neutral-200">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-neutral-2400">Projects</h1>
          <Button 
            text="New Project" 
            variant="outline" 
            onClick={() => openModal({
              type: 'new_project',
              showBar: false,
              padding: 'large',
              size: 'medium'
            })} 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(([id, name]) => (
            <div
              key={id}
              onClick={() => openProject({ id: String(id), name })}
              className="bg-neutral-100 rounded-lg shadow-sm border border-neutral-1100 overflow-hidden transition-all hover:shadow-md cursor-pointer"
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-semibold text-neutral-2400">{name}</h2>
                  <span className="px-2 py-1 text-xs rounded-full bg-neutral-400 text-neutral-1900">
                    Active
                  </span>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center text-neutral-1900">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span className="text-sm">View Project</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
