import Link from 'next/link';
import React, { useEffect } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  let wid;
  let hei;
  useEffect(() => {
    window.addEventListener('resize', () => {
      hei = window.innerHeight;
      wid = window.innerWidth;
    });
  }, [hei, wid]);
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-around items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#5651e5]"> Nishan</span>
          </h1>
          <h1 className="py-2 text-gray-700">A FullStack Engineer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I specialize in building full stack applications: mobile and web
            apps
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/nishan-thapa0x01/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/nishanprime"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <div className="hidden md:block">
              <Link href="/resume">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </Link>
            </div>
            <div className="md:hidden">
              <a href="assets/nishan-thapa-resume.pdf" target={'_blank'}>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block justify-right p-8 shadow-xl shadow-gray-500 border-8 rounded-xl hover:scale-110 ease-in duration-300">
          <img
            src="assets/user_pp.png"
            alt="nishan thapa picture"
            width={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
