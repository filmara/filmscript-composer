import React, { useEffect, useState } from 'react';
import { Menu, Header } from '~/design-system/components';
import { Button, Loader } from '~/design-system';
import { useProject, useFileSystem } from "~/context";
import { downloadImage } from '~/utils';
import { ProjectContextType } from '~/context';
import { LazyImage } from '~/design-system/components/LazyImage';

export default function Director() {
  const { scenes } = useProject() as ProjectContextType;

  return (
    <div>
      {/* <Header /> */}
      <div className="overflow-y-auto h-[88vh]">
        {scenes.length === 0 ? <Loader />
          :
          <div className="w-[842px] mx-auto">
            <div className="">
              {scenes.map((scene: any) => (
                <div key={scene.id} className="bg-neutral-1700 my-8 h-[full] w-full rounded-t-xl rounded-b-2xl shadow-md">
                  <div className="px-4 pt-6 text-h4-bold text-neutral-100">{scene.title}</div>

                  <div className="bg-neutral-200 rounded-b-xl">
                    {scene.shoots.map((shoot: any, key: number) => (
                      <div className="flex">
                        <div className="w-[70%]">
                          <LazyImage key={key} src={shoot.image_url} alt="Shoot" description={shoot.description} />
                        </div>

                        <div className="w-[30%] pt-8 px-2 flex-row">
                          <div className="text-neutral-1600">{shoot.description}</div>
                          <Button text="Generate" variant="outline" size="tiny" onClick={() => downloadImage(project.id, Number(shoot.id))} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      </div>
      <Menu />
    </div>
  );
}
