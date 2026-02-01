"use client"; // PENTING: Tambahkan ini agar event handler bisa jalan

import { WebcamPixelGrid } from "@/components/ui/webcam-pixel-grid";

function Secsatu() {
  return (
    <>
      <div className="relative h-screen w-screen bg-black overflow-hidden">
        {/* Webcam pixel grid background */}
        <div className="absolute inset-0">
          <WebcamPixelGrid
            gridCols={60}
            gridRows={40}
            maxElevation={50}
            motionSensitivity={0.25}
            elevationSmoothing={0.2}
            colorMode="webcam"
            backgroundColor="#030303"
            mirror={true}
            gapRatio={0.1}
            invertColors={false}
            darken={0.6}
            borderColor="#ffffff"
            borderOpacity={0.06}
            className="w-full h-full"
            onWebcamReady={() => console.log("Webcam ready!")}
            onWebcamError={(err) => console.error("Webcam error:", err)}
          />
        </div>

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

        {/* Hero content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm">
              Ini Pakai Next JS + SHADCN UI &rarr;
            </div>

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-8xl">
              AK BE KAGET KOK BISA NGENE WEHH
            </h1>

            {/* Description */}

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Secsatu;
