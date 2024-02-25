"use client";

import React from "react";
import Image from "next/image";



const Skills: React.FC = () => {
  return (
    <div className="mt-[270px]">
      {skill.map((element, index) => (
        <>
          <Image
            key={index}
            src={`${basePath}${element.path}`}
            alt={`Logo of ${element.name}`}
            width={200}
            height={200}
          />
          <p>{element.name}</p>
          <p>{index}</p>
        </>
      ))}
    </div>
  );
};

export default Skills;
