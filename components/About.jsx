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
          <p className="sm:text-center md:text-left mb-5 py-2  text-gray-600">
            I am a <span className="font-bold text-red-500">Physics major with minors in CS and Math</span> at Drexel University, graduating
            in 2025, also one of the two recipients of <span className="font-bold text-red-500">Larson Endowed Scholarship</span> (awarded based
            on exceptional academic excellence and experimental science research contribution).
            Moreover, I am also one of the recipients of <span className="font-bold text-red-500">Dean’s List</span> (recognizes prolonged maintained
            academic excellence).
          </p>
          <p className="sm:text-center md:text-left mb-5 py-2  text-gray-600">
            I started my programming journey in the summer of the freshmen year, self-learning from online forums and videos.
            I invested my time on computing topics like data structures, data science, web development. To further my knowledge
            in this field, I accepted <span className="font-bold text-red-500">Teaching Assistant</span> position in the computer science department
            of the university where I helped hundreds of students to grasp the basic concepts of programming and much more.
          </p>
          <p className="sm:text-center md:text-left mb-5 py-2  text-gray-600">
            My most recent experience come with my <span className="font-bold text-red-500">full time, 6-month, internship at Genesis Global Trading as
            a Blockchain Research Engineer</span>. As someone who adores doing research, this job gave me opportunity
            to combine my CS skills with my passion in research. In my 6 month period, I, along with my team,
            built a software to facilitate transaction on various cryptocurrencies, which not only made me adept in the field
            of blockchain but helped me foster my programming architecture skills to a whole new level.
          </p>
          <Link href="/#projects">
            <p className="sm:text-center mb-5 md:py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="sm:hidden md:block w-full h-auto m-auto shadow-xl  shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img src="assets/about.png" className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
