import React, { useState, useEffect } from 'react';
import { Play, Pause, ExternalLink } from 'lucide-react';

// Define the Song interface
/**
 * @typedef {Object} Song
 * @property {string} id - The unique identifier of the song.
 * @property {string} code - The song's unique code.
 * @property {string} title - The title of the song.
 * @property {string} platform - The streaming platform (e.g., 'APPLE MUSIC', 'YOUTUBE').
 * @property {string} [duration] - The duration of the song in 'mm:ss' format.
 * @property {boolean} [isPlaying] - Indicates if the song is currently playing.
 */

// Mock data for songs
const mockSongs = [
  {
    id: '1',
    code: 'MU016J000E81 •• 08U05C20',
    title: 'THANKS (OFFICIAL VIDEO)',
    platform: 'APPLE MUSIC',
    duration: '3:42',
  },
  {
    id: '2',
    code: 'MU018J000E81 •• 28U07C20',
    title: 'NEXT TIME (TINY DESK ENTRY)',
    platform: 'YOUTUBE',
    duration: '4:15',
  },
  {
    id: '3',
    code: 'MU018J000E81 •• 28U07C20',
    title: 'TELEPHONE LOVE (OFFICIAL VIDEO)',
    platform: 'APPLE MUSIC',
    duration: '3:28',
  },
  {
    id: '4',
    code: 'MU018J000E81 •• 28U07C20',
    title: 'NEXT TIME (ALTERNATIVE VERSION)',
    platform: 'APPLE MUSIC',
    duration: '4:22',
  },
  {
    id: '5',
    code: 'MU018J000E83 •• 08U08IC20',
    title: 'UR ALRIGHT (LYRIC VIDEO)',
    platform: 'YOUTUBE',
    duration: '3:55',
  },
  {
    id: '6',
    code: 'MU018J000E82 •• 28U07C20',
    title: 'NICE GUY ANTHEM (OFFICIAL VIDEO)',
    platform: 'APPLE MUSIC',
    duration: '3:33',
  },
  {
    id: '7',
    code: 'REM110.09180085.28',
    title: "I'M FINE (BLACKMANCHANT LO-FI REMIX)",
    platform: 'APPLE MUSIC',
    duration: '5:12',
  },
];

const SongsPage = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPlaying, setCurrentPlaying] = useState(null);

  useEffect(() => {
    // Simulate fetching songs
    const fetchSongs = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSongs(mockSongs);
      setLoading(false);
    };

    fetchSongs();
  }, []);

  const handlePlay = (songId) => {
    setCurrentPlaying(currentPlaying === songId ? null : songId);
  };

  const getPlatformColor = (platform) => {
    switch (platform) {
      case 'APPLE MUSIC':
        return 'text-red-400';
      case 'YOUTUBE':
        return 'text-red-500';
      default:
        return 'text-gray-400';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="space-y-4">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-400 text-lg">Loading songs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-purple-900/10"></div>

      {/* Circular VIBES element */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-10">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center shadow-xl">
            <span className="text-xs font-bold text-white transform rotate-12">VIBES</span>
          </div>
          <div className="absolute -inset-2 rounded-full border border-red-500/30 animate-pulse"></div>
        </div>
      </div>

      {/* Vertical CHILL text */}
      <div className="fixed left-4 bottom-20 z-10">
        <div className="transform rotate-90 origin-bottom-left">
          <span className="text-gray-500 text-sm font-light tracking-[0.3em]">CHILL</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 pt-12 pb-20">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
              SONGS
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500"></div>
          </div>

          {/* Songs list */}
          <div className="space-y-1">
            {songs.map((song, index) => (
              <div
                key={song.id}
                className="group relative border-b border-gray-800 hover:border-red-500/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center py-6 px-4 hover:bg-gray-900/30 transition-all duration-300 rounded-lg">
                  {/* Song code */}
                  <div className="flex-shrink-0 mr-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-gray-800 text-gray-300 border border-gray-700 group-hover:border-red-500/50 group-hover:bg-red-900/20 transition-all duration-300">
                      {song.code}
                    </span>
                  </div>

                  {/* Play button */}
                  <button
                    onClick={() => handlePlay(song.id)}
                    className="flex-shrink-0 mr-6 w-10 h-10 rounded-full bg-gray-800 group-hover:bg-red-500 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    {currentPlaying === song.id ? (
                      <Pause className="w-4 h-4 text-white" />
                    ) : (
                      <Play className="w-4 h-4 text-white ml-0.5" />
                    )}
                  </button>

                  {/* Song title */}
                  <div className="flex-1 min-w-0 mr-8">
                    <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 truncate">
                      {song.title}
                    </h3>
                    {song.duration && (
                      <p className="text-gray-500 text-sm mt-1">{song.duration}</p>
                    )}
                  </div>

                  {/* Platform and external link */}
                  <div className="flex items-center space-x-4 flex-shrink-0">
                    <span className={`text-sm font-medium tracking-wide ${getPlatformColor(song.platform)} group-hover:text-white transition-colors duration-300`}>
                      {song.platform}
                    </span>
                    <button className="w-8 h-8 rounded-full bg-gray-800 group-hover:bg-white group-hover:text-black flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Animated progress bar for playing song */}
                {currentPlaying === song.id && (
                  <div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 animate-pulse"
                    style={{ width: '100%' }}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Footer stats */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex justify-between items-center text-gray-500 text-sm">
              <span>{songs.length} songs loaded</span>
              <span>Total duration: 28:37</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating action button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-red-500 to-pink-600 shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 z-30">
        <Play className="w-6 h-6 ml-0.5" />
      </button>
    </div>
  );
};

export default SongsPage;