import React from "react";
import Image from "next/image";

import skill from "./../../data/skills.json";

const Skills: React.FC = () => {
  return (
    <div className="mt-[150px]">
      <div className="flex flex-col items-center justify-center gap-9">
        <p id="skill" className="flex flex-row items-center justify-center text-center bg-black text-white w-[100px] rounded-md h-[40px]">Skills</p>
        <p className="text-blue-700 text-5xl text-center">
          Toutes mes compétences
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-[75px] w-[60%] flex flex-row flex-wrap gap-[90px] items-center justify-center max-sm:w-[90%] ">
          {skill.map((element, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4 "
            >
              <div className="w-[100px] h-[110px] flex flex-row items-center justify-center">
                <Image
                  src={`${element.path}`}
                  alt={`Logo of ${element.name}`}
                  width={100}
                  height={100}
                  className=""
                />
              </div>
              <p key={index} className="text-white">
                {element.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
