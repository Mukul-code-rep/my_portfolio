import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="sm:text-center mb-5 md:uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="sm:text-center mb-5 md:py-4">Who I am</h2>
          <p className="sm:text-center mb-5 md:py-2 text-gray-600">
            I am CS major and Finance Minor at Drexel University, graduating in
            2025. I am also one of the 12 recipients worldwide to receive{' '}
            <span className="!text-red-500 !font-bold">
              Drexel Global Scholarship
            </span>
            , full ride scholarship to study at Drexel University. I am a Full
            Stack Engineer with a passion for building web applications and
            mobile application.
          </p>
          <p className="sm:text-center mb-5 md:py-2 text-gray-600">
            I started my programming journey since I was 14 years old, in 2014.
            I dived deep into full stack application development since 2019,
            getting my hands on multiple programming languages, databases, and
            different development stacks. I worked as Full Stack developer at WP
            Agency to build web applications on ReactJS and NodeJS. I am
            currently working on a personal project called EventSimplify (demo
            link in project section).
          </p>
          <Link href="/#projects">
            <p className="sm:text-center mb-5 md:py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="sm:hidden md:block w-full h-auto m-auto shadow-xl  shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img src="assets/about.jpg" className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
