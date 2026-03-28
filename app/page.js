"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import FlightSection from "./components/FlightSection";
import SkyBackground from "./components/SkyBackground";
import useIsMobile from "./hooks/useIsMobile";
import Mobile from "./components/Mobile";

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);

// Main component
export default function Home() {
  // Initialize scroll position
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const isMobile = useIsMobile();

  return (
    <main className="w-screen">
      {!isMobile ? (
        <>
          <Header />
          <div data-section-1 className="w-full h-[500vh] bg-container">
            <HeroSection />
            <AboutSection />
            <SkyBackground />
          </div>
          <FlightSection />
        </>
      ) : (
        <>
          <Mobile />
        </>
      )}
    </main>
  );
}
