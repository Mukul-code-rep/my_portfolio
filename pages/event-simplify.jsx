import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Head from 'next/head';

const EventSimplify = () => {
  return (
    <div className="w-full">
      <Head>
        <title>EventSimplify</title>
        <meta
          name="description"
          content="Eventsimplify is a event automation platform. It is a platform where event organizers can create their event and invite their guests. It has a dashboard for event organizers to manage their event."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div className="w-screen h-[50vh] relative">
        <div
          className="absolute top-0 left-0 w-full h-[50vh]"
          style={{
            backgroundImage: 'url(assets/projects/event-simplify-banner.png)',
            backgroundSize: 'cover',
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />

        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Event Simplify</h2>
          <h3>Next JS / Node JS / MongoDB</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 z-20">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This webapp is in beta phase and a work in progress. I am one of the
            senior developers and dev ops engineer. This webapp is build on
            NextJS, NodeJS, and for database we are using MongoDB. This webapp
            is very similar to EventBride, but we are targeting Nepal as our
            niche location. This website automates event process, for both
            audience and organizers of the events. User can create events,
            customize ticket types and other attributes, take payments online,
            and manage their events. Audience can buy tickets, and get notified
            of the events and much more
          </p>

          <button className="px-8 py-2 mt-4 mr-8 !bg-gradient-to-r from-[#ff4203] to-[#ff0000] text-white cursor-not-allowed">
            Code (Private)
          </button>
          <a href="https://eventsimplify.com" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google API
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

export default EventSimplify;
