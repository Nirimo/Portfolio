import React from 'react';
import Image from 'next/image';
import projects from "./../../data/project.json"

const ProjectItem: React.FC = () => {
  return (
        <div className="mt-[70px] flex flex-row flex-wrap items-center justify-center gap-[75px] ">
            {projects.map((element, index) => (
                <div key={index} className="border border-gray-500 rounded-[30px] overflow-hidden w-[300px]">
                    <div className="">
                        <Image
                        src={element.ImagePath}
                        alt={`Image of project of ${element.name}`}
                        width={300}
                        height={200}
                        className=""
                    />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className='h-[85%] w-[85%] mt-5 flex flex-col gap-4'>
                            <div>
                                <p className="text-white text-3xl">{element.name}</p>
                            </div>
                            <div>
                                <p className="text-[#a8a8a8] text-xl">{element.description}</p>
                            </div>
                            <div className="text-[#a8a8a8] flex flex-row gap-2">
                                {element.langage.split(",").map((item, index) => (
                                    <div key={index} className="bg-zinc-800 p-2 rounded-xl">
                                        <div className="">{item}</div>
                                    </div>
                                ))}
                            </div>
                            <div className='mb-3 flex flex-row justify-between'>
                                <div>
                                    <a href={element.link} target="_blank" className="text-white underline">{element.name}.{element.extension}</a>
                                </div>
                                <div>
                                    {element.codelink ? <a href={element.codelink} target="_blank" className="text-white underline">Code</a> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
  );
};

export default ProjectItem;
    