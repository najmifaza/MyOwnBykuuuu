"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

function SecDua() {
  return (
    <>
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-full text-center text-8xl font-bold text-slate-800 dark:text-white">
            <span className="max-w-2xl block mx-auto">
              Hiiii {""}
              <span className="text-blue-500">Gzptiaaaa</span>
            </span>
          </p>
        }
        className=" h-160 rounded-md border text-white dark:text-black"
      >
        <span className="max-w-2xl text-8xl  block mx-auto">
          Gizka Septia Ramadhani
        </span>
      </MaskContainer>
    </>
  );
}

export default SecDua;
