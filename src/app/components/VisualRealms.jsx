"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, Heart, Share2, Clock, Film } from 'lucide-react';

// Define the animation separately
const createCardVariants = (i) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
});

const VisualRealms = () => {
  const projects = [
    {
      id: 1,
      title: "Neon Dreams",
      category: "Music Video",
      duration: "3:42",
      views: "2.1M",
      likes: "45K",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      isDirectorsCut: true,
      description: "A cyberpunk-inspired visual journey through electronic soundscapes"
    },
    {
      id: 2,
      title: "Behind the Beat",
      category: "Behind the Scenes",
      duration: "8:15",
      views: "890K",
      likes: "23K",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
      isDirectorsCut: false,
      description: "Exclusive look at our creative process in the studio"
    },
    {
      id: 3,
      title: "Ethereal Waves",
      category: "Visual Art",
      duration: "2:28",
      views: "1.5M",
      likes: "67K",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      isDirectorsCut: true,
      description: "Abstract visual interpretation of ambient compositions"
    },
    {
      id: 4,
      title: "Studio Sessions",
      category: "Documentary",
      duration: "12:30",
      views: "654K",
      likes: "18K",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      isDirectorsCut: false,
      description: "Raw footage from our most creative recording sessions"
    },
    {
      id: 5,
      title: "Midnight Frequencies",
      category: "Music Video",
      duration: "4:17",
      views: "3.2M",
      likes: "89K",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=350&fit=crop",
      isDirectorsCut: true,
      description: "Dark, atmospheric visuals paired with haunting melodies"
    },
    {
      id: 6,
      title: "Creative Process",
      category: "Behind the Scenes",
      duration: "6:45",
      views: "1.1M",
      likes: "34K",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=280&fit=crop",
      isDirectorsCut: false,
      description: "From concept to completion: our artistic journey"
    }
  ];

  return (
    <section className="relative min-h-screen px-6 md:px-16 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(255_255_255)_1px,_transparent_0)] bg-[size:32px_32px]"></div>
      </div>
      <div className="absolute top-[15%] left-[10%] w-[280px] h-[280px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-[120px] opacity-[0.08] animate-pulse"></div>
      <div className="absolute bottom-[20%] right-[15%] w-[320px] h-[320px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-[140px] opacity-[0.06] animate-pulse"></div>
      <div className="absolute top-[45%] right-[35%] w-[200px] h-[200px] bg-gradient-to-r from-pink-500 to-red-500 rounded-full filter blur-[100px] opacity-[0.05] animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-300 border border-gray-700 mb-6">
            <Film className="w-4 h-4 mr-2 text-emerald-500" />
            <p className='text-emerald-500'>Visual Portfolio</p>
          </div>
           <h2 className=" text-4xl font-bold mb-5 gap-7 bg-gradient-to-r from-purple-500 to-red-400 bg-clip-text text-transparent">
            Visual <span className="bg-gradient-to-r from-purple-500 to-red-400 bg-clip-text text-transparent">Realms</span>
          </h2>
          <p className="text-xl mb-4 max-w-2xl bg-gradient-to-r from-purple-500 via-green-600 to-red-400 bg-clip-text text-transparent m-auto">
            Music videos, behind-the-scenes, and visual storytelling
          </p>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Cinematic presentation of our visual catalog featuring director's cut versions,
            exclusive behind-the-scenes content, and artistic interpretations of our audio work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
              viewport={{ once: true }}
              className={` relative rounded-3xl overflow-hidden bg-gray-900/50 backdrop-blur-xl border border-gray-800 shadow-xl hover:shadow-purple-500/20 transition-all duration-500 group hover:-translate-y-3 hover:rotate-1 ${index % 2 === 0 ? "sm:-mt-10" : ""} ${index % 3 === 0 ? "lg:-mt-14" : ""}`}>

              {/* Floating Glow Behind Card */}
              <div className="absolute -inset-2 bg-purple-500/10 blur-2xl opacity-0 group-hover:opacity-50 transition"></div>

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition duration-700 group-hover:scale-110 rounded-t-3xl"
                  style={{ height: `${240 + (index % 4) * 50}px` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-60 transition"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <button className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                    <Play className="w-7 h-7 text-white ml-1" />
                  </button>
                </div>

                {/* Badge */}
                <span className="absolute top-4 left-4 text-xs px-3 py-1 bg-black/50 backdrop-blur-md text-white rounded-full">
                  {project.category}
                </span>

                {project.isDirectorsCut && (
                  <span className="absolute top-4 right-4 text-xs px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold">
                    DIRECTOR’S CUT
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl text-green-500 font-bold mb-2 group-hover:text-purple-300 transition">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Bottom Row */}
                <div className="flex justify-between items-center">
                  <div className="text-gray-500 text-xs flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {project.duration}
                  </div>

                  <div className="flex gap-3">
                    <button className="px-3 py-1.5 text-sm bg-yellow-800 hover:bg-white/20 text-gray-500 rounded-md transition">
                      Watch
                    </button>
                    <button className="p-2 text-gray-400 hover:text-white transition">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default VisualRealms;
