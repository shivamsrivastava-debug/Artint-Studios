'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Heart, Share2, ArrowUpRight } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

const CollectionArt = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const artworks = [
    {
      id: 1,
      title: "Stories",
      category: "",
      description: "A mesmerizing blend of sound and visual artistry",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=500&fit=crop",
    },
    {
      id: 2,
      title: "Emotions",
      category: "Interactive Art",
      description: "Where technology meets classical composition",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
      likes: 189,
      views: 890
    },
    {
      id: 3,
      title: "Neon Dreams",
      category: "Visual Design",
      description: "Cyberpunk-inspired audio-visual experience",
      image: "https://images.unsplash.com/photo-1621228694335-ed7809d05441?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      title: "Journeys",
      category: "Nature Sounds",
      description: "Natural soundscapes reimagined",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=550&fit=crop",
    },
    {
      id: 5,
      title: "Echoes",
      category: "City Sounds",
      description: "The heartbeat of metropolitan life",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=480&fit=crop",
      likes: 278,
      views: 1340
    },
    {
      id: 6,
      title: "Echoes",
      category: "Ambient",
      description: "Journey through space and sound",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=520&fit=crop",
      likes: 445,
      views: 2100
    },
  ];

  return (
    <section className="relative min-h-screen px-6 md:px-16 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(255_255_255)_1px,_transparent_0)] bg-[size:32px_32px]"></div>
      </div>

      {/* Refined background glows */}
      <div className="absolute top-[20%] left-[15%] w-[200px] h-[200px] bg-gradient-to-r from-purple-600 to-blue-600 rounded-full filter blur-[80px] opacity-[0.08]"></div>
      <div className="absolute bottom-[25%] right-[20%] w-[250px] h-[250px] bg-gradient-to-r from-pink-500 to-red-500 rounded-full filter blur-[90px] opacity-[0.06]"></div>
      <div className="absolute top-[50%] right-[10%] w-[150px] h-[150px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full filter blur-[70px] opacity-[0.05]"></div>

      <div className="w-full m-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full text-sm font-medium text-emerald-500 border border-gray-700/50 mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
            Featured Collection
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
              Collection
            </span>
            <span className="block bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
              Artworks
           </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explore our curated collection of audio-visual masterpieces, where sound meets art 
            in extraordinary ways.
          </p>
        </div>

        {/* Masonry Grid */}
      <div className="overflow-hidden mt-12">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 20, 
            },
          }}
        >
          {[...artworks, ...artworks].map((artwork, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-72 lg:w-80 h-80 mr-4 relative rounded-xl overflow-hidden"
            >
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-full object-cover rounded-xl"
              />
              {/* Optional overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-black/25 flex flex-col justify-end p-4 opacity-0 hover:opacity-100 transition-opacity"
              >
                <h3 className="text-lg font-semibold">{artwork.title}</h3>
                <p className="text-sm text-gray-300">{artwork.category}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold  text-emerald-300 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            Explore Full Collection
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionArt;




{/* <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 break-inside-avoid mb-6 group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={index}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(artwork.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -8 }}
            >
              // {/* Image Container */}
              // <div className="relative overflow-hidden">
              //   <img
              //     src={artwork.image}
              //     alt={artwork.title}
              //     className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              //   />
                
              //   {/* Overlay on hover */}
              //   <motion.div
              //     className="absolute inset-0 bg-black/60 flex items-center justify-center"
              //     initial={{ opacity: 0 }}
              //     animate={{ opacity: hoveredCard === artwork.id ? 1 : 0 }}
              //     transition={{ duration: 0.3 }}
              //   >
                  
              //   </motion.div>

              //   {/* Category Badge */}
              //   <div className="absolute top-4 left-4">
              //     <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-gray-200 border border-gray-600/30">
              //       {artwork.category}
              //     </span>
              //   </div>
              // </div>

              // {/* Content */}
        //       <div className="p-6">
        //         <div className="flex items-start justify-between mb-3">
        //           <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
        //             {artwork.title}
        //           </h3>
        //           <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        //         </div>
                
        //         <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        //           {artwork.description}
        //         </p>

        //         {/* Stats */}
              
        //       </div>
        //     </motion.div>
        //   ))}
        // </div> */}