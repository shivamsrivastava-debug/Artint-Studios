import React, { useState, useEffect } from 'react';
import { Play, Pause, Heart, Share2, MoreHorizontal, Calendar, Music } from 'lucide-react';

const AlbumsPage = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredAlbum, setHoveredAlbum] = useState(null);
  const [playingAlbum, setPlayingAlbum] = useState(null);

  // Mock data for albums
  const mockAlbums = [
    {
      id: '1',
      code: 'ALB190V0E01',
      title: 'MIDNIGHT REFLECTIONS',
      artist: 'NOVA COLLECTIVE',
      releaseYear: 2023,
      platform: 'SPOTIFY',
      duration: '42:15',
      tracks: 12,
      coverUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
      isLiked: true
    },
    {
      id: '2',
      code: 'ALB183V0E02',
      title: 'ELECTRIC DREAMS (DELUXE EDITION)',
      artist: 'SYNTHWAVE MASTERS',
      releaseYear: 2023,
      platform: 'APPLE MUSIC',
      duration: '38:42',
      tracks: 10,
      coverUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '3',
      code: 'ALB183V0E03',
      title: 'URBAN SYMPHONY',
      artist: 'CITY LIGHTS ORCHESTRA',
      releaseYear: 2022,
      platform: 'YOUTUBE MUSIC',
      duration: '51:28',
      tracks: 14,
      coverUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '4',
      code: 'ALB183V0E04',
      title: 'ACOUSTIC SESSIONS VOL. 2',
      artist: 'INDIE COLLECTIVE',
      releaseYear: 2023,
      platform: 'SPOTIFY',
      duration: '35:17',
      tracks: 9,
      coverUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400',
      isLiked: true
    },
    {
      id: '5',
      code: 'ALB190V0E05',
      title: 'NEON NIGHTS (REMASTERED)',
      artist: 'RETRO WAVE',
      releaseYear: 2023,
      platform: 'APPLE MUSIC',
      duration: '44:33',
      tracks: 11,
      coverUrl: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '6',
      code: 'ALB189V0E06',
      title: 'JAZZ FUSION EXPERIMENTS',
      artist: 'MODERN JAZZ QUARTET',
      releaseYear: 2022,
      platform: 'TIDAL',
      duration: '58:12',
      tracks: 16,
      coverUrl: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '7',
      code: 'REM110.G918005.2B',
      title: 'AMBIENT LANDSCAPES (EXTENDED MIX)',
      artist: 'ATMOSPHERIC SOUNDS',
      releaseYear: 2023,
      platform: 'BANDCAMP',
      duration: '72:45',
      tracks: 8,
      coverUrl: 'https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setAlbums(mockAlbums);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handlePlayPause = (albumId) => {
    if (playingAlbum === albumId) {
      setPlayingAlbum(null);
    } else {
      setPlayingAlbum(albumId);
    }
  };

  const toggleLike = (albumId) => {
    setAlbums(prev => prev.map(album =>
      album.id === albumId
        ? { ...album, isLiked: !album.isLiked }
        : album
    ));
  };

  const getPlatformColor = (platform) => {
    switch (platform.toLowerCase()) {
      case 'spotify': return 'text-green-400';
      case 'apple music': return 'text-blue-400';
      case 'youtube music': return 'text-red-400';
      case 'tidal': return 'text-cyan-400';
      case 'bandcamp': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg font-light">Loading Albums...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Circular Branding Element */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-10">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center shadow-2xl border-2 border-white/20">
            <Music className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
            <div className="writing-mode-vertical text-sm font-bold tracking-widest text-gray-400 select-none">
              ALBUMS
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-32 pr-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            ALBUM COLLECTION
          </h1>
          <p className="text-gray-400 text-lg">
            Discover and explore your favorite albums
          </p>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Music className="w-4 h-4" />
              {albums.length} Albums
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Updated Today
            </span>
          </div>
        </div>

        {/* Albums List */}
        <div className="space-y-4">
          {albums.map((album, index) => (
            <div
              key={album.id}
              className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 transition-all duration-500 hover:bg-gray-800/60 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 ${
                hoveredAlbum === album.id ? 'transform scale-[1.02]' : ''
              }`}
              onMouseEnter={() => setHoveredAlbum(album.id)}
              onMouseLeave={() => setHoveredAlbum(null)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'slideInUp 0.6s ease-out forwards'
              }}
            >
              <div className="flex items-center gap-6">
                {/* Album Cover */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={album.coverUrl}
                      alt={album.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => handlePlayPause(album.id)}
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                    >
                      {playingAlbum === album.id ? (
                        <Pause className="w-4 h-4 text-black" />
                      ) : (
                        <Play className="w-4 h-4 text-black ml-0.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Album Code */}
                <div className="flex-shrink-0">
                  <div className="px-4 py-2 bg-gray-800/80 rounded-full border border-gray-700/50">
                    <span className="text-xs font-mono text-gray-300 tracking-wider">
                      {album.code}
                    </span>
                  </div>
                </div>

                {/* Album Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white mb-1 truncate group-hover:text-purple-300 transition-colors duration-300">
                    {album.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    by {album.artist}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {album.releaseYear}
                    </span>
                    <span className="flex items-center gap-1">
                      <Music className="w-3 h-3" />
                      {album.tracks} tracks
                    </span>
                    <span>{album.duration}</span>
                  </div>
                </div>

                {/* Platform Tag */}
                <div className="flex-shrink-0">
                  <span className={`text-sm font-semibold tracking-wider ${getPlatformColor(album.platform)}`}>
                    {album.platform}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => toggleLike(album.id)}
                    className={`p-2 rounded-full transition-all duration-200 ${
                      album.isLiked
                        ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                        : 'bg-gray-700/50 text-gray-400 hover:bg-gray-600/50 hover:text-white'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${album.isLiked ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2 rounded-full bg-gray-700/50 text-gray-400 hover:bg-gray-600/50 hover:text-white transition-all duration-200">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-700/50 text-gray-400 hover:bg-gray-600/50 hover:text-white transition-all duration-200">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8">
          <button className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 flex items-center justify-center group">
            <Music className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default AlbumsPage;