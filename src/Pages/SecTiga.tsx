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

function SecTiga() {
  const words1 = `  You're the best, I'm so happy I met you! I'm always here if you need
          someone. Please keep living because you worth so much to me
`;
  const words2 = ` a little aprecition massage for u
`;

  const items = [
    {
      title: "The Narrator",
      image:
        "https://instagram.fcgk41-1.fna.fbcdn.net/v/t51.75761-15/504213228_18065587556490471_4916763991456069309_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzY0OTg2NTM4MzA5MzUyOTQ5Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=tXhKE99NSLQQ7kNvwFaLFMj&_nc_oc=AdnuXcBZFAm5dYH846NJkj-J2jhhgnu0hQpPXFzRFgPTlNEPOH1uVDe99YGzY0En6fM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcgk41-1.fna&_nc_gid=IuOy80ZkdpQ0b56MvVA7QA&oh=00_Aftr6IaLIpAVZqTiat0K0XsFZ067h24q9L9wRfG9vSlv4g&oe=69854D77",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Japan",
      image: "/image.png",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
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
      <div className="relative flex h-200 w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
          )}
        />
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <BackgroundLines>
          {" "}
          <Meteors number={50} />
          <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
            <div className="absolute top-1/2 mx-auto max-w-2xl -translate-y-3/4 text-center text-9xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
              <TextGenerateEffect words={words1} />
              {/* <TextGenerateEffect words={"najmi - 18/2/26"} /> */}
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
        </BackgroundLines>
      </div>
    </>
  );
}

export default SecTiga;
