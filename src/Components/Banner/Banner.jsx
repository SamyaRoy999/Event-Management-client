import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HoverButtonDemo } from "@/shared/HoverButton/HoverButton";

export function Banner() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }) // Autoplay every 3 seconds
  );

  const banners = [
    {
      img: "https://i.ibb.co.com/XWG0kVx/banner1.jpg",
      title: "Music Fest",
      description:
        "Experience live performances from top artists around the globe.",
    },
    {
      img: "https://i.ibb.co.com/DGmQLkD/banner2.jpg",
      title: "Tech Conference 2025",
      description:
        "Join the largest tech conference of the year and explore innovations.",
    },
    {
      img: "https://i.ibb.co.com/MRKnd9Q/banner3.jpg",
      title: "Art Exhibition",
      description:
        "Discover breathtaking art from emerging and established artists.",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full mx-auto max-w-full   "
      options={{ loop: true }}
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.reset()}
    >
      <CarouselContent>
        {banners.map((banner, index) => (
          <CarouselItem key={index}>
            <div className="p-4">
              <Card className="relative mt-16">
                <div className="absolute w-full h-[70vh]  bg-[#003d9f] opacity-20"></div>
                <img
                  src={banner.img}
                  alt={banner.title}
                  className="w-full h-[70vh] object-cover rounded-md"
                />
                <CardContent className="p-4 absolute  w-full h-full flex flex-col justify-center items-center  z-10 top-0  text-white text-center">
                  <h2 className="text-2xl font-bold">{banner.title}</h2>
                  <p className="text-sm text-white my-2">
                    {banner.description}
                  </p>
                  <HoverButtonDemo>More</HoverButtonDemo>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
