"use client";
import React from "react";
import { Monitor } from "lucide-react";

export const MobileGuard = () => {
  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-black p-6 text-center md:hidden">
      <div className="mb-4 rounded-full bg-white/10 p-4">
        <Monitor className="h-10 w-10 text-white" />
      </div>
      <h2 className="mb-2 text-xl font-bold text-white">
        Desktop Only Experience
      </h2>
      <p className="text-sm text-gray-400">
        Mohon maaf, website ini dirancang khusus untuk tampilan desktop. Silakan
        buka melalui komputer atau laptop untuk pengalaman terbaik.
      </p>

      {/* Opsional: Tombol untuk memaksa masuk jika pengguna tetap ingin melihat */}
    </div>
  );
};
