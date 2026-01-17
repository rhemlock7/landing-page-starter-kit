"use client";

import { useRef, useState } from "react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * duration;
      audioRef.current.currentTime = newTime;
      setProgress(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative max-w-2xl mx-auto mb-16">
      
      {/* Elegant frame */}
      <div className="absolute -inset-px bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-sm" />

      <div className="relative bg-gradient-to-br from-card via-background to-secondary/30 border border-border/50 p-8 md:p-12">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]" />

        <div className="relative z-10">
          {/* Sample label */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-primary/30" />
            <span className="text-primary/80 text-xs tracking-[0.25em] uppercase font-light">
              Sample Audio
            </span>
            <div className="h-px w-12 bg-primary/30" />
          </div>

          {/* Track title */}
          <h3 className="text-center text-2xl md:text-3xl font-light tracking-wide mb-2">
            Day One: Awakening
          </h3>
          <p className="text-center text-muted-foreground text-sm tracking-wider mb-10">
            Introduction to Self-Love
          </p>

          {/* Play button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={togglePlay}
              className="group relative w-24 h-24 rounded-full border border-primary/30 hover:border-primary/60 transition-all duration-500 flex items-center justify-center hover:scale-105"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />

              {/* Icon */}
              <div className="relative">
                {isPlaying ? (
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg
                    className="w-8 h-8 text-primary ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
            </button>
          </div>

          {/* Progress bar */}
          <div className="space-y-3">
            <div
              onClick={handleProgressClick}
              className="relative h-1 bg-muted/50 cursor-pointer group"
            >
              {/* Progress fill */}
              <div
                className="absolute inset-y-0 left-0 bg-primary/70 transition-all duration-100"
                style={{
                  width: duration ? `${(progress / duration) * 100}%` : "0%",
                }}
              />
              {/* Hover indicator */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Time display */}
            <div className="flex justify-between text-xs text-muted-foreground/70 tracking-wider font-light">
              <span>{formatTime(progress)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Hidden audio element */}
          <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            src="/audio/sample.mp3"
            preload="metadata"
          />
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-primary/20" />
      <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-primary/20" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-primary/20" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-primary/20" />
    </div>
  );
}
