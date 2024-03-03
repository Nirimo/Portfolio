import React from 'react';
import Image from 'next/image';

const Project: React.FC = () => {
  return (
        <div className="mt-[150px]">
            <div className="flex flex-col items-center justify-center gap-9">
                <p id="skill" className="flex flex-row items-center justify-center text-center bg-black text-white w-[100px] rounded-md h-[40px]">Project</p>
                <p className="text-blue-700 text-5xl text-center">Projects</p>
                <p className="text-[#a8a8a8] text-xl">Vous trouverez ci-dessous tous les projects que j'ai pus réaliser où je suis fère de vous les partager</p>
            </div>
        </div>
  );
};

export default Project;
    