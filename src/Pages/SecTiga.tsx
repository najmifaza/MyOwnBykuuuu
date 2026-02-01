"use client";
import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

function SecTiga() {
  const words = `  You're the best, I'm so happy I met you! I'm always here if you need
          someone. Please keep living because you worth so much to me
`;

  const items = [
    {
      title: "Tyler Durden",
      image:
        "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "The Narrator",
      image:
        "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Iceland",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Japan",
      image:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Norway",
      image:
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "New Zealand",
      image:
        "https://instagram.fcgk41-1.fna.fbcdn.net/v/t51.75761-15/504147705_18065584997490471_1913236056416754410_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=104&ig_cache_key=MzY0OTg0OTcwOTc1MTM3ODI2NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=WvI_DtpXPSMQ7kNvwH0345L&_nc_oc=AdkSf_ds56XtDkCiKiB-3tw8vII8Zk0xUUqV_XBYtvfnpRoMf1V34b_9_M-JlX1nsK4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcgk41-1.fna&_nc_gid=SFuNVhjgosCAYEUTOLC3MQ&oh=00_AfsiRLE1DhaMedVXYv7BNXik38IMU_QGaY5MAJ-uBnPXKQ&oe=69852D59",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Canada",
      image:
        "https://instagram.fcgk41-1.fna.fbcdn.net/v/t51.75761-15/504205567_18065585726490471_580472762980436920_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=101&ig_cache_key=MzY0OTg1MjkwMjcwNzA1Mzc3Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=DYfm-3dwksQQ7kNvwGfEVtm&_nc_oc=Adl3mayA84iPi5zEYFa0Hik0AGJHASOHsWP4BNEuuZyjy4cJ6lvgvhk8nHXTnD41Sik&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcgk41-1.fna&_nc_gid=SFuNVhjgosCAYEUTOLC3MQ&oh=00_AfsnNKWf0IBfC9CY8TmBoSuIlMjrHSwvl0psMxRjr51I6w&oe=6985172D",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <>
      <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
        <div className="absolute top-1/2 mx-auto max-w-xl -translate-y-3/4 text-center text-5xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
          <TextGenerateEffect words={words} />
        </div>
        {items.map((item) => (
          <DraggableCardBody className={item.className}>
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
    </>
  );
}

export default SecTiga;
