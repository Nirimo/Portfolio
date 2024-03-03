import React from 'react';
import Image from 'next/image';
import projects from "./../../data/project.json"

const ProjectItem: React.FC = () => {
  return (
        <div className="mt-[70px] flex flex-row flex-wrap items-center justify-center gap-[75px]">
            {projects.map((element, index) => (
                <div key={index} className="border border-gray-500 rounded-[30px] overflow-hidden">
                    <div>
                        <Image
                        src={element.ImagePath}
                        alt={`Image of project of ${element.name}`}
                        width={250}
                        height={250}
                    />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className='h-[85%] w-[85%] bg-black'>
                            <p className="text-white">{element.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
  );
};

export default ProjectItem;
    