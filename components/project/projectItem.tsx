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
                                <div className="flex flex-row items-center justify-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="text-white">
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                                    </svg>
                                    <a href={element.link} target="_blank" className="text-white underline">{element.name}.{element.extension}</a>
                                </div>
                                <div>
                                    {element.codelink ? 
                                        <div className="flex flex-row items-center justify-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
                                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                                            </svg>
                                            <a href={element.codelink} target="_blank" className="text-white underline">Code</a> 
                                        </div>
                                        : 
                                        null}
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
    