import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Head from 'next/head';

const MindSetts = () => {
  return (
    <div className="w-full">
      <Head>
        <title>MindSetts</title>
        <meta
          name="description"
          content="Mindsetts is a client and therapist matching platform. It is a platform where therapists can create their profile and clients can find the right therapist for them."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div className="w-screen h-[50vh] relative">
        <div
          className="absolute top-0 left-0 w-full h-[50vh]"
          style={{
            backgroundImage: 'url(assets/projects/mindsetts_banner.png)',
            backgroundSize: 'cover',
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">MindSetts</h2>
          <h3>React JS / MongoDB / NodeJS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This was a project for client for my first COOP. I was the sole
            fullstack developer, and I was responsible for the entire project.
            This webapp is build on ReactJS, NodeJS, and for database I used
            MongoDB. This webapp is for matching clients to therapists. It
            basically automates the process of finding a therapist for clients,
            from the dataset, based on the client&apos;s needs. It has stripe
            payment integration so that clients/therapist can pay for the
            service. The project is still a work on progress and I will be
            adding more features to it during my free time. As of now, you can
            access the demo version of the app and go through codebase if you
            want.
          </p>
          <a
            href="https://github.com/nishanprime/mindsettsapp"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://mindsetts.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ReactJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NodeJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ExpressJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> StripeAPI
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default MindSetts;
