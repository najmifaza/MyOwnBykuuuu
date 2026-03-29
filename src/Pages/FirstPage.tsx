"use client";
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { Meteors } from "@/components/ui/meteors";
import PopUp from "@/components/ui/PopUp";

function FirstPage() {
  const words1 = `  You're the best, I'm so happy I met you! I'm always here if you need
          someone. Please keep living because you worth so much to me
`;

  const items = [
    {
      title: "sIAPA",
      image: "",
      className: "absolute top-40 left-[25%] rotate-[-7deg] translate-y-20",
    },
    {
      title: "sIAPA",
      image: "",
      className: "absolute top-32 left-[55%] rotate-[10deg] translate-y-20",
    },
    {
      title: "sIAPA",
      image: "",
      className: "absolute top-24 left-[45%] rotate-[-7deg] translate-y-20",
    },
    {
      title: "sIAPA",
      image: "",
      className: "absolute top-8 left-[30%] rotate-[4deg] translate-y-20",
    },
  ];
  return (
    <main className="relative flex min-h-screen w-full items-start justify-center overflow-hidden bg-black">
      {/* <div className="relative flex h-200 w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center"> */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-size-[40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <BackgroundLines
        svgOptions={{ duration: 15 }}
        className="min-h-screen w-full flex flex-col"
      >
        <Meteors number={50} />
        <DraggableCardContainer className="relative flex min-h-screen w-full flex-col items-start pt-20 md:flex-row md:items-center md:justify-center md:pt-0 overflow-hidden">
          <div className=" absolute top-1/2 mx-auto max-w-2xl -translate-y-3/4 text-center text-9xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
            <div>
              {" "}
              <div className="translate-y-20">
                <TextGenerateEffect words={words1} className="mt-20 mb-7" />
                <PopUp></PopUp>
              </div>
            </div>{" "}
          </div>

          {items.map((item) => (
            <DraggableCardBody key={item.title} className={item.className}>
              <img
                src={item.image}
                alt={item.title}
                className="pointer-events-none relative z-10 h-80 w-80 object-cover"
              />
              <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                {item.title}
              </h3>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </BackgroundLines>
      {/* </div> */}
    </main>
  );
}

export default FirstPage;
