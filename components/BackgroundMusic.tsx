"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/audio/drimel-ambient-score.mp3");

    audio.loop = true;
    audio.volume = 0.18;
    audio.preload = "auto";

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleSound = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Audio could not be played:", error);
    }
  };

  return (
    <button
      onClick={toggleSound}
      aria-label={isPlaying ? "Turn sound off" : "Turn sound on"}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-white/20 bg-black/70 px-5 py-3 text-sm text-white backdrop-blur-md transition-all duration-300 hover:bg-black/90"
    >
      <span className="relative flex h-3 w-3">
        {isPlaying && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-50" />
        )}
        <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
      </span>

      {isPlaying ? "Sound On" : "Sound Off"}
    </button>
  );
}
