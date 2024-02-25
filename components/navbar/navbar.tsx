import React from 'react';
import Link from 'next/link';


const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full">
        <div className="flex items-center justify-center w-4/5 bg-[#272727] mt-10 h-[70px] border border-blue-700 rounded-[16px]">
            <div className="flex flex-row justify-between items-center w-[97%]">
                <div className="">
                    <a href="/" className="flex flex-row text-2xl"><span className="text-blue-600">{"<"}</span><p className="text-white">Faustin</p><span className="text-blue-600">{"Le"}</span><p className="text-white">Vrai</p><span className="text-blue-600">{" />"}</span></a>
                </div>
                <div className="flex flex-row items-center justify-center text-[#a8a8a8] gap-20 text-lg">
                    <a href="#home" className="hover:text-white">Accueil</a>
                    <a href="#about" className="hover:text-white">À propos</a>
                    <a href="#skill" className="hover:text-white">Skills</a>
                    <a href="#project" className="hover:text-white">Projets</a>
                </div>
                <a href="" className="flex flex-row items-center justify-center text-white bg-blue-700 px-4 py-2 rounded-[10px] text-lg">Me Contacter</a>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
