'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const SpotifyPreviewPlayer = ({ tracks }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Set default track on mount (e.g., "More Than Tonight")
  useEffect(() => {
    const defaultTrack = tracks.find(
      (track) => track.id === '1DlHB6YvOBDmPcZqg1SXtV'
    ) || tracks[0]; // Fallback to first track if ID not found
    setCurrentTrack(defaultTrack);

    // Auto-play if preview_url exists
    if (defaultTrack?.preview_url) {
      setIsPlaying(true);
    }
  }, [tracks]);

  // Handle play/pause
  useEffect(() => {
    if (!audioRef.current || !currentTrack?.preview_url) return;

    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error('Error playing audio:', error);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack]);

  // Handle track click (for selecting a new track)
  const handleTrackClick = (track) => {
    setCurrentTrack(track);
    setIsPlaying(!!track.preview_url); // Play only if preview_url exists
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Fallback UI if no preview is available
  if (!currentTrack || !currentTrack.preview_url) {
    return (
      <div className="w-full h-72 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center text-white text-center p-4 sticky top-4">
        <p>No preview available for "{currentTrack?.name || 'this track'}"</p>
      </div>
    );
  }

  return (
    <div className="w-full h-72 bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col sticky top-4">
      {/* Album Art */}
      <div className="relative w-full h-48">
        <Image
          src={currentTrack.album.images[0]?.url || '/images/placeholder.jpg'}
          alt={currentTrack.name}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-t-lg"
        />
      </div>

      {/* Track Info and Controls */}
      <div className="flex-1 p-3 flex flex-col justify-between">
        <div>
          <h3 className="text-white text-sm font-semibold truncate">
            {currentTrack.name}
          </h3>
          <p className="text-gray-400 text-xs truncate">
            {currentTrack.artists.map((artist) => artist.name).join(', ')}
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={togglePlayPause}
            className="text-white bg-green-500 hover:bg-green-600 rounded-full w-10 h-10 flex items-center justify-center"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={currentTrack.preview_url}
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />
    </div>
  );
};

export default SpotifyPreviewPlayer;