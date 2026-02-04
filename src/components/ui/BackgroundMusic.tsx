"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Fungsi khusus untuk menangani klik pertama kali di layar
    const handleFirstClick = async () => {
      if (!hasInteracted && audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          setHasInteracted(true); // Tandai bahwa user sudah interaksi
        } catch (err) {
          console.error("Gagal memutar audio:", err);
        }
      }
    };

    // Pasang listener di seluruh layar (window)
    window.addEventListener("click", handleFirstClick);

    // Bersihkan listener jika komponen dicopot
    return () => {
      window.removeEventListener("click", handleFirstClick);
    };
  }, [hasInteracted]); // Effect ini bergantung pada state hasInteracted

  // Fungsi toggle untuk tombol (Play/Pause manual)
  const toggleAudio = (e: React.MouseEvent) => {
    // e.stopPropagation() penting agar klik tombol tidak dianggap klik layar (opsional, tapi aman)
    e.stopPropagation();

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
      // Pastikan kita tandai sudah interaksi agar auto-clicker tidak jalan lagi
      setHasInteracted(true);
    }
  };

  return (
    <div className="fixed bottom-25 right-5 z-100">
      {/* Element Audio Tersembunyi */}
      <audio ref={audioRef} loop>
        <source src="/backsound.mp3" type="audio/mp3" />
      </audio>

      {/* Tombol Kontrol Tetap Ada */}
      <button
        onClick={toggleAudio}
        className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white shadow-lg hover:bg-white/20 transition-all active:scale-95"
        title={isPlaying ? "Matikan Musik" : "Putar Musik"}
      >
        {isPlaying ? (
          // Ikon Speaker Nyala
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        ) : (
          // Ikon Speaker Mati
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        )}
      </button>
    </div>
  );
}
