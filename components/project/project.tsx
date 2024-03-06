import React from 'react';
import Image from 'next/image';
import ProjectItem from './projectItem';

const Project: React.FC = () => {
  return (
        <div id="project" className="mt-[150px]">
            <div className="flex flex-col items-center justify-center gap-9">
                <p id="skill" className="flex flex-row items-center justify-center text-center bg-black text-white w-[100px] rounded-md h-[40px]">Project</p>
                <p className="text-blue-700 text-5xl text-center">Projets</p>
                <p className="text-[#a8a8a8] text-xl text-center">Vous trouverez ci-dessous les projets que j&apos;ai réalisé et dont je suis fier de les partager</p>
            </div>
            <ProjectItem />
        </div>
  );
};

export default Project;
    