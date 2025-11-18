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
          <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-300 border border-gray-700 mb-6">
            <Film className="w-4 h-4 mr-2" />
            Visual Portfolio
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Visual
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
              Realms
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Music videos, behind-the-scenes, and visual storytelling
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Cinematic presentation of our visual catalog featuring director's cut versions, 
            exclusive behind-the-scenes content, and artistic interpretations of our audio work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 break-inside-avoid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={createCardVariants(index)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-xs font-medium text-white rounded-full border border-gray-600">
                    {project.category}
                  </span>
                </div>

                {/* Director's Cut Badge */}
                {project.isDirectorsCut && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-xs font-bold text-white rounded-full">
                      DIRECTOR'S CUT
                    </span>
                  </div>
                )}

                {/* Duration */}
                <div className="absolute bottom-3 right-3">
                  <div className="flex items-center px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white">
                    <Clock className="w-3 h-3 mr-1" />
                    {project.duration}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}

                {/* Action Buttons */}
                <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Now
                  </button>
                  <button className="p-2 text-gray-400 hover:text-white transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
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
