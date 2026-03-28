"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitText from "gsap/SplitText";

const AboutSection = () => {
  const aboutRef = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        ".about-text-container",
        {
          yPercent: 100,
        },
        {
          yPercent: 50,
          scrollTrigger: {
            trigger: ".about-text-container",
            start: "top bottom",
            end: "bottom center",
            scrub: 1,
          },
        },
      );

      const heroText = SplitText.create(".about-text", {
        type: "words, chars",
      });

      gsap.set(heroText.chars, { opacity: 0.2 });

      gsap.fromTo(
        heroText.chars,
        {
          opacity: 0.2,
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".about-text",
            start: "top 80%",
            end: "bottom 90%",
            scrub: 1,
            pinSpacing: false,
            invalidateOnRefresh: true,
          },
          ease: "power3.out",
          stagger: 0.05,
        },
      );

      gsap.fromTo(
        "[data-about-blur-reveal]",
        {
          filter: `blur(100px)`,
        },
        {
          filter: `blur(0px)`,
          scrollTrigger: {
            trigger: ".about-text-container",
            start: "top 60%",
            end: "bottom center",
          },
          duration: 1.2,
        },
      );
    },
    {
      scope: aboutRef,
    },
  );

  return (
    <section
      ref={aboutRef}
      data-about-parallax
      className="relative about-section w-screen h-screen z-20 flex flex-col justify-start items-center"
    >
      <div className="about-text-container w-full h-full flex flex-col justify-start items-center gap-[10vh]">
        <h3 className="about-text w-full font-montserrat flex justify-start items-start flex-wrap gap-x-2 gap-y-1 max-w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h3>

        <div className="w-full flex justify-end items-start max-w-[75%]">
          <div
            data-about-blur-reveal
            className="flex flex-wrap justify-between items-center basis-[65%] gap-y-7"
          >
            <div className="flex flex-col justify-start items-start gap-5 basis-[45%]">
              <h5 className="font-unbounded">
                Direct Access to Private Travel
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
            <div className="flex flex-col justify-start items-start gap-5 basis-[45%]">
              <h5 className="font-unbounded">
                Direct Access to Private Travel
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
            <div className="flex flex-col justify-start items-start gap-5 basis-[45%]">
              <h5 className="font-unbounded">
                Direct Access to Private Travel
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
            <div className="flex flex-col justify-start items-start gap-5 basis-[45%]">
              <h5 className="font-unbounded">
                Direct Access to Private Travel
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
