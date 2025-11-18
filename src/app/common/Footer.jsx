'use client';
import React, { useState } from 'react';
import { 
  Music, 
  Play, 
  Instagram, 
  Linkedin, 
  Mail, 
  Download,
  ExternalLink,
  ArrowRight,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form:', contactForm);
    setContactForm({ name: '', email: '', company: '', message: '' });
    setShowContactModal(false);
    alert('Thank you for your inquiry! We\'ll get back to you soon.');
  };

  const streamingLinks = [
    { name: 'Spotify', icon: Music, url: 'https://spotify.com', color: 'text-green-500' },
    { name: 'Apple Music', icon: Play, url: 'https://music.apple.com', color: 'text-gray-800' },
    { name: 'YouTube', icon: Play, url: 'https://youtube.com', color: 'text-red-500' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com', color: 'text-pink-500' },
    { name: 'TikTok', icon: Play, url: 'https://tiktok.com', color: 'text-black' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', color: 'text-blue-600' }
  ];

  return (
    <>
      <footer className="bg-gradient-to-br from-black via-purple-950 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Footer Menu - Secondary Navigation */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-300">
                Menu
              </h3>
              <div className="space-y-4">
                {[
                  'The Experience',
                  'The Collection',
                  'Commission Art',
                  'Visual Realms',
                  'The Vision',
                  'The Future'
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-gray-500 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Streaming Universe */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-300">
                Streaming Universe
              </h3>
              <div className="space-y-4">
                {streamingLinks.map((platform) => {
                  const IconComponent = platform.icon;
                  return (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-500 hover:text-white transition-all duration-300 group hover:translate-x-1 transform"
                    >
                      <IconComponent className={`w-5 h-5  group-hover:scale-110 transition-transform`} />
                      <span>{platform.name}</span>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Business Portals */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-300">
                Business Portals
              </h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-gray-500  transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Licensing Terms
                </a>
                <a
                  href="#"
                  className="block text-gray-500 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Privacy Policy
                </a>
                <button
                  onClick={() => setShowContactModal(true)}
                  className="block text-gray-500 transition-colors duration-300 hover:translate-x-1 transform text-left"
                >
                  Business Collaborations
                </button>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 transform group"
                >
                  <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className='text-gray-500'>Media Kit Download</span>
                </a>
              </div>
            </div>

            {/* Stay Tuned */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-300">
                Stay Tuned
              </h3>
              <p className="text-gray-500 leading-relaxed">
                "Get first access to our newest creations."
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                    required
                  />
                  <Mail className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-300 text-gray-500 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400">
                  © 2025 Your Company. All rights reserved.
                </p>
              </div>
              <div className="flex items-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>New York, NY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Business Collaborations</h2>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  value={contactForm.company}
                  onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
                  required
                />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowContactModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
