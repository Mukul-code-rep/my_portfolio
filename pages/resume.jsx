import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Nishan Thapa | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <div className="flex items-center justify-around">
          <div className="flex mb-4">
            <h2 className="text-center">Resume</h2>
            <a
              href="assets/nishan-thapa-resume.pdf"
              target="_blank"
              className="ml-10"
              onClick={() => {
                console.log('DOwnload');
              }}
            >
              <FaDownload size={'2rem'} />
            </a>
          </div>
        </div>
        <div className="hidden md:block overflow-scroll ">
          <img
            src="assets/resume-image.png"
            alt="resume image"
            width={940}
            height={1200}
            quality={100}
          />
        </div>
        <div className="md:hidden">
          <a href="assets/nishan-thapa-resume.pdf" target="_blank">
            <div className="text-center">
              <h1>Download</h1>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default resume;
