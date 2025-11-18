'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Film, Tv, Calendar, Users, Mail, Phone, Building, Send } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

const TheFuture = () => {
  const [formData, setFormData] = useState({
    studioName: '',
    contactName: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const projectsInDevelopment = [
    {
      title: "Example Proj 1",
      type: "Sci-Fi Series",
      status: "Pre-Production",
      description: "A dystopian future where sound is the last form of human connection",
      timeline: "Q2 2025",
      icon: Tv
    },
    {
      title: "Example Proj 2",
      type: "Psychological Thriller",
      status: "Development",
      description: "A sound engineer discovers hidden messages in ambient recordings",
      timeline: "Q3 2025",
      icon: Film
    },
    {
      title: "Example Proj 3",
      type: "Documentary Series",
      status: "Concept Phase",
      description: "Exploring the untold stories behind legendary recording studios",
      timeline: "Q4 2025",
      icon: Tv
    },
    {
      title: "Example Proj 4",
      type: "Feature Film",
      status: "Script Development",
      description: "A musician's journey through synesthesia and creative breakthrough",
      timeline: "2026",
      icon: Film
    }
  ];

  return (
    <section className="relative min-h-screen px-6 md:px-16 py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(255_255_255)_1px,_transparent_0)] bg-[size:32px_32px]"></div>
      </div>

      {/* Background glows */}
      <div className="absolute top-[20%] left-[15%] w-[280px] h-[280px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-[120px] opacity-[0.08] animate-pulse"></div>
      <div className="absolute bottom-[25%] right-[20%] w-[320px] h-[320px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-[140px] opacity-[0.06] animate-pulse"></div>

      {/* Floating geometric elements */}
      <div className="absolute top-32 right-[10%] w-16 h-16 border border-gray-700 rounded-xl rotate-12 opacity-20"></div>
      <div className="absolute bottom-48 left-[12%] w-12 h-12 bg-gray-800 rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm font-medium text-emerald-300 border border-emerald-500 mb-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <Calendar className="w-4 h-4 mr-2" />
            Coming Soon
          </div>
          
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 bg-clip-text text-transparent inline-block">
                The Future
              </span>
            </h2>
          
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto font-light bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 bg-clip-text text-transparent ">
            span Planting the seeds for your Film & Series Production.
          </p>
        </div>

        {/* Projects in Development */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-500">
            Projects in Development
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projectsInDevelopment.map((project, index) => (
              <motion.div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-emerald-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index}
                variants={cardVariants}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-emerald-500 mb-1">{project.title}</h4>
                      <p className="text-purple-400 text-sm font-medium">{project.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-500 mb-2">
                      {project.status}
                    </div>
                    <div className="text-sm text-gray-400">{project.timeline}</div>
                  </div>
                </div>
                
                <p className="text-gray-500 leading-relaxed">{project.description}</p>
                
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-yellow-700">Partnership Opportunities Available</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnership Contact Form */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          variants={cardVariants}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Start Early Partnerships
            </h3>
            <p className="text-xl mb-2 bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
              Invite film studios to collaborate on groundbreaking projects.
            </p>
            <p className="text-gray-500">
              Get involved in the creative process from day one and shape the future of audio-visual storytelling.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 hover:border-emerald-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 ">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-emerald-500 mb-2">
                    <Building className="w-4 h-4 inline mr-2" />
                    Studio Name *
                  </label>
                  <input
                    type="text"
                    name="studioName"
                    value={formData.studioName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    placeholder="Your studio name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-emerald-500">
                    <Users className="w-4 h-4 inline mr-2" />
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-emerald-500">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-emerald-500 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500 rounded-xl placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-500 mb-2">
                  <Film className="w-4 h-4 inline mr-2" />
                  Project Type of Interest
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500 rounded-xl text-gray-500"
                >
                  <option value="">Select a project type</option>
                  <option value="series">TV Series</option>
                  <option value="feature">Feature Film</option>
                  <option value="documentary">Documentary</option>
                  <option value="all">All Projects</option>
                  <option value="custom">Custom Collaboration</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-emerald-500">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                  placeholder="Tell us about your studio, your vision, and how you'd like to collaborate on our upcoming projects..."
                  required
                ></textarea>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Start Partnership Discussion
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            We typically respond to partnership inquiries within 48 hours. 
            For urgent matters, please include "URGENT" in your message subject.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheFuture;