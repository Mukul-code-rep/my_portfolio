import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {color} from "tailwindcss/lib/util/dataTypes";

const PeronalProject = ({ porjectName, description, link, isPrivate=false }) => {
  return (
    <div className="md:flex items-center justify-between w-70 mb-4 border-4 p-10 shadow-xl hover:scale-90 ease-in duration-100">
      <div className="p-4 shadow-lg shadow-gray-500 border-2">
        <h2 className="mb-1">{porjectName}</h2>
          {isPrivate?<p>{description} <span className="text-red-700 font-bold">(Private repo)</span></p>:<p>{description}</p>}

      </div>
      <div className={isPrivate?"mt-10 md:mt-0 p-5 md:p-5 shadow-lg shadow-gray-500 border-2 cursor-not-allowed hover:bg-red-700":"mt-10 md:mt-0 p-5 md:p-5 shadow-lg shadow-gray-500 border-2 cursor-pointer hover:bg-blue-300"}>
          {isPrivate?
              <FaGithub size={30}/>
         :<a href={link} target={'_blank'} rel="noreferrer"> <FaGithub size={30} />
          </a>}

      </div>
    </div>
  );
};

export default PeronalProject;
