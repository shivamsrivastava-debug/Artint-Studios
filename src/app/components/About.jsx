'use client';

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const rightDivRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // LEFT CONTENT ANIMATION
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }
      );

      // RIGHT IMAGE ANIMATION
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 60, scale: 0.9 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
      );

      // RIGHT SIDE BOXES STAGGER ANIMATION
      gsap.fromTo(
        rightDivRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.3,
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Artists Collaborated" },
    { number: "10+", label: "Years Experience" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black text-gray-200 px-8 md:px-20 py-24 overflow-hidden"
    >
      {/* LEFT + RIGHT GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE CONTENT */}
        <div ref={contentRef} className="space-y-10">

          <div className=" bg-gray-900/60 border border-gray-700 text-sm rounded-full inline-flex items-center px-4 py-2 font-medium text-emerald-500 hover:text-emerald-900 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
            About Artint Studio
          </div>

          <h2 className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            Crafting  
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
              Audio Excellence
            </span>
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
            Artint Studios transforms creative visions into premium audio experiences using
            world-class tools and award-winning sound engineering.
          </p>

          <h3 className="text-xl font-semibold text-green-700 border-l-4 border-amber-500 pl-3">Our Approach</h3>
          <div className="space-y-4">
            {[
              { title: "Innovation First", desc: "Using modern audio technologies" },
              { title: "Client Focused", desc: "Tailored to your creative vision" },
              { title: "Quality Driven", desc: "We refine every detail for perfection" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 bg-gray-900/50 border border-gray-700 rounded-xl hover:border-gray-500
                shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1
                "
              >
                <h4 className=" text-emerald-500 font-semibold">{item.title}</h4>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE: IMAGE + BELOW DIVS */}
        <div className="space-y-10">

          {/* RIPPED EDGE IMAGE */}
          <div ref={imageRef} className="relative w-full">

            {/* Ripped Edge Mask */}
            <div className="absolute inset-0 pointer-events-none">
              <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <defs>
                  <clipPath id="rippedEdge" clipPathUnits="objectBoundingBox">
                    <path d="
                      M0,0  
                      L1,0 
                      L1,1 
                      C0.8,0.95 0.6,0.99 0.5,0.95 
                      C0.35,0.88 0.2,0.93 0,1 
                      Z" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <img
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=600&fit=crop"
              className="w-full h-96 object-cover rounded-2xl border border-gray-700 shadow-xl backdrop-brightness-125 bg-white/30"
              style={{ clipPath: "url(#rippedEdge)" }}
            />
          </div>

          {/* RIGHT SIDE DIVS BELOW IMAGE */}
          <div ref={rightDivRef} className="space-y-6">

            {/* BOX 1 */}
            <div className="p-6 bg-gray-900/50 border border-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h4 className=" text-emerald-500 font-semibold text-lg">State-of-the-Art Facility</h4>
              <p className="text-gray-400 text-sm mt-1">
                Acoustically engineered rooms with premium hardware and high-end production setup.
              </p>
            </div> 

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-5 bg-gray-900/50 border border-gray-700 rounded-xl
                shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-3xl font-bold  text-emerald-500">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;







































// 'use client';

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const sectionRef = useRef(null);
//   const contentRef = useRef(null);
//   const imageRef = useRef(null);
//   const statsRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         contentRef.current,
//         { opacity: 0, y: 60 },
//         { opacity: 1, y: 0, duration: 1, ease: 'power3.out'}
//       );

//       gsap.fromTo(
//         imageRef.current,
//         { opacity: 0, scale: 0.9, rotation: -2 },
//         { opacity: 1, scale: 1, rotation: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
//       );

//       gsap.fromTo(
//         statsRef.current?.children || [],
//         { opacity: 0, y: 30 },
//         { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.2, delay: 0.6 }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const stats = [
//     { number: '500+', label: 'Projects Completed' },
//     { number: '50+', label: 'Artists Collaborated' },
//     { number: '10+', label: 'Years Experience' },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen bg-black text-gray-300 py-20 px-6 md:px-16 overflow-hidden"
//     >
//       {/* Subtle background pattern */}
//       <div className="absolute inset-0 opacity-[0.03]">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[size:24px_24px]"></div>
//       </div>

//       {/* Floating geometric shapes */}
//       <div className="absolute top-20 right-[10%] w-24 h-24 border border-gray-600 rounded-2xl rotate-12 opacity-20"></div>
//       <div className="absolute bottom-32 left-[8%] w-16 h-16 bg-gray-800 rounded-full opacity-30"></div>
//       <div className="absolute top-1/2 right-[5%] w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full opacity-40"></div>

//       <div className="max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           {/* Left Side - Content */}
//           <div ref={contentRef} className="space-y-8">
//             <div className="space-y-6">
//               <div className="inline-flex items-center px-4 py-2 bg-gray-900 rounded-full text-sm font-medium text-gray-400 border border-gray-700">
//                 <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
//                 About Our Studio
//               </div>
              
//               <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.1]">
//                 Crafting Audio
//                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
//                   Excellence
//                 </span>
//               </h2>
              
//               <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
//                 Artint Studios transforms creative visions into exceptional audio experiences. 
//                 With cutting-edge technology and artistic expertise, we deliver premium sound 
//                 design, music production, and audio post-production services that resonate with 
//                 audiences worldwide.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <h3 className="text-xl font-semibold text-white">Our Approach</h3>
//               <div className="grid gap-4">
//                 {[
//                   { title: 'Innovation First', desc: 'Leveraging the latest audio technologies and creative techniques' },
//                   { title: 'Client-Centric', desc: 'Tailored solutions that perfectly match your creative vision' },
//                   { title: 'Quality Assured', desc: 'Rigorous quality control ensures exceptional final products' }
//                 ].map((item, index) => (
//                   <div key={index} className="flex items-start space-x-4 p-4 bg-gray-900 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
//                     <div className="w-2 h-2 bg-gray-500 rounded-full mt-3 flex-shrink-0"></div>
//                     <div>
//                       <h4 className="font-medium text-white mb-1">{item.title}</h4>
//                       <p className="text-gray-400 text-sm">{item.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Image & Stats */}
//           <div className="space-y-8">
//             <div ref={imageRef} className="relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl transform rotate-3"></div>
//               <div className="relative bg-gray-900 p-6 rounded-3xl shadow-xl border border-gray-700">
//                 <img
//                   src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=600&fit=crop"
//                   alt="Professional recording studio setup"
//                   className="w-full h-80 object-cover rounded-2xl"
//                 />
//                 <div className="mt-6 space-y-2">
//                   <h4 className="font-semibold text-white">State-of-the-Art Facility</h4>
//                   <p className="text-gray-400 text-sm">
//                     Our acoustically-treated studios feature premium equipment and 
//                     comfortable spaces designed for creative excellence.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Stats */}
//             <div ref={statsRef} className="grid grid-cols-3 gap-4">
//               {stats.map((stat, index) => (
//                 <div key={index} className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-700 shadow-sm hover:shadow-md transition-shadow">
//                   <div className="text-2xl md:text-3xl font-bold text-white mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-sm text-gray-400 font-medium">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom CTA Section */}
//         <div className="mt-20 text-center">
//           <div className="inline-flex items-center justify-center space-x-4 p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl text-white shadow-xl">
//             <div className="space-y-2">
//               <h3 className="text-xl font-semibold">Ready to create something amazing?</h3>
//               <p className="text-gray-400">Let's discuss your next audio project</p>
//             </div>
//             <button className="px-6 py-3 bg-white text-black font-medium rounded-xl hover:bg-gray-200 transition-colors">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
