import React from 'react';
import Image from 'next/image';
import robotGif from "./../../assets/robot.gif"

const Robot: React.FC = () => {
  return (
        <div className="flex flex-row items-center justify-center mt-[200px]">
            <div className="flex flex-row items-center justify-start gap-[600px] w-[80%]">
                <div className="flex flex-col gap-10">
                    <p className="text-white text-5xl">Salut,<br/> Je m'appel Faustin</p>
                    <p className="text-[#a8a8a8] text-xl">Un développeur talentueux en full-stack avec <br />plus d'un an d'éxperience avec vous</p>
                    <a href="" className="flex flex-row items-center justify-center text-white bg-blue-700 px-4 py-2 rounded-[10px] text-lg w-[150px]">Me Contacter</a>
                </div>
                <div>
                    <Image 
                    src={robotGif}
                    alt="Gif of robot for presentation"
                    width={500}
                    height={500} />
                </div>
            </div>
        </div>
  );
};

export default Robot;
