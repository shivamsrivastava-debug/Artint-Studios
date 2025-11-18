// components/MusicPlayer.jsx
'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function MusicPlayer({ track, onPlayPause }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(30); // Default for previews
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return; // Prevent accessing null

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setAudioDuration = () => setDuration(audio.duration || 30);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', setAudioDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', setAudioDuration);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !track) return; // Prevent accessing null or undefined track

    if (track.preview_url) {
      audio.src = track.preview_url;
      if (isPlaying) {
        audio.play().catch((err) => console.error('Playback error:', err));
      }
    } else {
      audio.src = ''; // Clear src if no preview_url
      setIsPlaying(false);
    }
  }, [track]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio || !track?.preview_url) {
      setIsPlaying(false);
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch((err) => console.error('Playback error:', err));
      setIsPlaying(true);
    }
    if (onPlayPause) onPlayPause(!isPlaying);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = e.target.value;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="music-player shadow-sm">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-3 col-md-2">
            {track?.album?.images[0]?.url && (
              <Image
                src={track.album.images[0].url}
                alt={track.name || 'Track'}
                width={60}
                height={60}
                className="rounded"
              />
            )}
          </div>
          <div className="col-9 col-md-10">
            <div className="d-flex align-items-center">
              <div className="me-3">
                <p className="mb-0 fw-bold">{track?.name || 'No Track Selected'}</p>
                <p className="mb-0 text-muted">{track?.artists?.[0]?.name || ''}</p>
              </div>
              <button
                className="btn btn-success rounded-circle me-3"
                onClick={togglePlayPause}
                aria-label={isPlaying ? 'Pause' : 'Play'}
                disabled={!track?.preview_url}
              >
                {isPlaying ? (
                  <i className="bi bi-pause-fill" />
                ) : (
                  <i className="bi bi-play-fill" />
                )}
              </button>
              <div className="flex-grow-1">
                <input
                  type="range"
                  min="0"
                  max={duration}
                  value={currentTime}
                  onChange={handleSeek}
                  className="form-range"
                  disabled={!track?.preview_url}
                />
                <div className="d-flex justify-content-between">
                  <span>{Math.floor(currentTime)}s</span>
                  <span>{Math.floor(duration)}s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <audio ref={audioRef} />
    </div>
  );
}