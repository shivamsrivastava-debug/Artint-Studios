'use client';

import Image from 'next/image';
import React from 'react';
// import Video from '../../../public/video.mp4'; Ensure this path is correct

const Hero = () => {
  
  return (
    <div className="hero-wrapper relative">
      {/* Full-screen video */}
      <video
        autoPlay
        loop
        muted
        preload="auto"
        className="hero-video"
      >
        <source src="https://artint-studios.s3-eu-central-2.ionoscloud.com/artint-studios-music-website.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for text content */}
      <div className="hero-overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="container text-center text-white">
          <h1 className="text-5xl font-bold leading-loose bg-gradient-to-r from via-red-500 to-yellow-500 bg-clip-text text-transparent">Artint Studios</h1>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">Where Sound Meets Emotion – A Journey Through Music.</h2>
          {/* <p className="text-xl my-4">
            Even while listening to music, simply say “Olivia” to interact with Olivia.
          </p> */}
          <div className="slider_btn ms_cover">
            <div className="lang_apply_btn">
              <ul>
                {/* <li>
                  <a href="#" className="text-lg bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition">
                    <i className="flaticon-play-button"></i> Browse
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for the video */}
      <style jsx>{`
        .hero-wrapper {
          position: relative;
          height: 100vh; /* Full screen */
        }

        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); /* Dark overlay */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container {
          padding: 0 15px; /* Optional: Padding to prevent text from touching the edges */
        }
      `}</style>
    </div>
  );
};

export default Hero;


    //  <div className="main-video">
    //     <h1 className='content-video'>Video for Artint</h1>
    //     <video src={Video} autoPlay muted loop className='styled-video-hero'/>
    //   </div>