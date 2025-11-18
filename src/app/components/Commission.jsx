'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const CTASection = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-24 py-20 bg-black text-white-500">
      {/* Left Side */}
      <div className="md:w-1/2 max-w-lg flex flex-col gap-20 p-8">
        {/* Header Card */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="bg-black rounded-2xl shadow-lg border border-gray-500 p-8"
        >
          <p className="text-purple-600 font-semibold uppercase tracking-widest mb-3 text-sm">
            Contact us
          </p>
          <p className="text-xl font-normal leading-snug mb-5 text-amber-50">
            We are always ready to help you and <br /> answer your questions
          </p>
        </motion.div>

        {/* Contact Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Call Center */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-black rounded-2xl shadow-md border border-gray-500 p-6">
            <h3 className="text-purple-700 font-semibold text-lg mb-3">Call</h3>
            <p className="text-gray-100">Contact : </p>
          </motion.div>

          {/* Email */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-black rounded-2xl shadow-md border border-gray-500 p-6">
            <h3 className="text-purple-700 font-semibold text-lg mb-3">Email</h3>
            <p className="text-gray-100">Email : </p>
          </motion.div>

          {/* Location */}
           <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-black rounded-2xl shadow-md border border-gray-500 p-6">
            <h3 className="text-purple-700 font-semibold text-lg mb-3">Location</h3>
            <p className="text-gray-100 font-semibold">Location : </p>
          </motion.div>
          
          {/* Social Network */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-black rounded-2xl shadow-md border border-gray-500 p-6 flex flex-col"
          >
            <h3 className="text-purple-700 font-semibold text-lg mb-5">Social Media</h3>
            <div className="flex space-x-6 text-gray-600">
</div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Form */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="md:w-1/2 max-w-md bg-black rounded-3xl p-10 shadow-xl border border-gray-500"
      >
        <h3 className="text-3xl font-semibold mb-8 text-gray-100">Get in Touch</h3>
        <form className="flex flex-col space-y-6">
          <input
            type="text"
            placeholder="Full name"
            className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            rows={4}
            placeholder="Message"
            className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition duration-300"
          >
            Send a message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default CTASection;










// No need for gsap or useRef in this simplified version, unless you add new animations.
// import gsap from "gsap";
// import { useRef } from "react";

// import { Button } from "./button";
// Assuming AnimatedTitle is a component you still want to use for the main heading
// import { AnimatedTitle } from "./animated-title";

// const CTASection = () => {
//   return (
//     <section id="contact" className="my-20 w-screen px-4 md:px-10">
//       <div className="container mx-auto rounded-lg bg-gray-900/30 py-16 text-blue-50 shadow-xl backdrop-blur-lg border border-gray-700">
//         <div className="text-center mb-12">
//           <p className="font-general text-[10px] uppercase text-gray-400">Connect with us</p>
//           {/* You can use AnimatedTitle here if you prefer, or a standard h2 */}
//           {/* <AnimatedTitle containerClass="mt-4 text-4xl md:text-6xl font-zentry leading-tight">
//             Let's Create Together
//           </AnimatedTitle> */}
//           <h2 className="special-font mt-4 text-4xl md:text-6xl font-zentry leading-tight">
//             Let's Create Together
//           </h2>
//           <p className="mt-4 max-w-2xl mx-auto text-gray-300">
//             Whether you're an artist, a musician, or a business, we're here to bring your vision to life.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
//           {/* 1. Commission Art Section */}
//           <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-800 hover:border-[#00f0ff] transition-colors duration-300">
//             <h3 className="text-2xl font-bold mb-3 text-[#00f0ff]">Commission Art</h3> {/* Neon Blue */}
//             <p className="text-gray-300 mb-6">
//               Bring your characters and worlds to life with custom illustrations and concept art. No dropdown, just a direct brief.
//             </p>
//             <button className="mt-auto w-full">Submit Art Brief</button>
//           </div>

//           {/* 2. Music Services Section */}
//           <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-800 hover:border-[#ff00ff] transition-colors duration-300">
//             <h3 className="text-2xl font-bold mb-3 text-[#ff00ff]">Music & Licensing</h3> {/* Neon Purple */}
//             <p className="text-gray-300 mb-6">
//               For custom music work, licensing requests, and client submissions.
//             </p>
//             <button className="mt-auto w-full">Music Inquiry</button>
//           </div>

//           {/* 3. Simple Brief Submission Form */}
//           <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col border border-gray-800 hover:border-[#00ff99] transition-colors duration-300">
//             <h3 className="text-2xl font-bold mb-3 text-[#00ff99] text-center">General Submissions</h3> {/* Neon Green */}
//             <p className="text-gray-300 mb-4 text-center">
//               Have a simple brief or general inquiry? Let us know!
//             </p>
//             <form className="space-y-4">
//               <div>
//                 <label htmlFor="generalName" className="sr-only">Name</label>
//                 <input
//                   type="text"
//                   id="generalName"
//                   placeholder="Your Name"
//                   className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ff99]"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="generalEmail" className="sr-only">Email</label>
//                 <input
//                   type="email"
//                   id="generalEmail"
//                   placeholder="Your Email"
//                   className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ff99]"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="generalMessage" className="sr-only">Message</label>
//                 <textarea
//                   id="generalMessage"
//                   rows="4"
//                   placeholder="Your Message"
//                   className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ff99]"
//                 ></textarea>
//               </div>
//               <button type="submit" className="w-full">Send Message</button>
//             </form>
//           </div>
//         </div>

//         {/* 4. Collaborate With Us Section (B2B Partnerships) */}
//         <div className="mt-16 px-6">
//           <div className="bg-gray-900 p-8 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-800 hover:border-[#ffff00] transition-colors duration-300">
//             <h3 className="text-3xl font-bold mb-4 text-[#ffff00]">Collaborate With Us</h3> {/* Neon Yellow */}
//             <p className="text-gray-300 mb-8 max-w-2xl">
//               For serious B2B partnerships and strategic alliances, let's discuss how we can build the new era of gaming together.
//             </p>
//             <form className="w-full max-w-xl space-y-4">
//               <div>
//                 <label htmlFor="collabCompany" className="sr-only">Company Name</label>
//                 <input
//                   type="text"
//                   id="collabCompany"
//                   placeholder="Company Name"
//                   className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ffff00]"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="collabContact" className="sr-only">Contact Person</label>
//                 <input
//                   type="text"
//                   id="collabContact"
//                   placeholder="Contact Person"
//                   className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ffff00]"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="collabEmail" className="sr-only">Company Email</label>
//                 <input
//                   type="email"
//                   id="collabEmail"
//                   placeholder="Company Email"
//                   className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ffff00]"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="collabProject" className="sr-only">Project Details</label>
//                 <textarea
//                   id="collabProject"
//                   rows="6"
//                   placeholder="Briefly describe your project or partnership idea"
//                   className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ffff00]"
//                 ></textarea>
//               </div>
//               <button type="submit" className="w-full">Propose Partnership</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };



// export default CTASection;