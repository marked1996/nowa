import React from "react";
import ButtonLight from "./ButtonLight";
import ButtonDark from "./ButtonDark";

function HeroSection({ title, text, hrefDark, hrefLight }) {
  return (
    <>
      {hrefLight ? (
        <section className=" my-12 md:my-28 lg:my-32 max-w-[1238px] m-auto px-section">
          <div className=" relative py-5 px-2 md:py-6 md:px-4 lg:py-8 lg:px-4">
            <div className="absolute rounded-full w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border border-dashed border-border_hero top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
            <div
              data-position="top"
              className="absolute w-[110%] -translate-x-[5%] top-0 left-0 border border-dashed  border-border_hero"
            ></div>
            <div
              data-position="left"
              className="absolute h-[115%] md:h-[120%] lg:h-[130%] bottom-0 left-0 border-dashed border border-border_hero"
            ></div>
            <div
              data-position="right"
              className="absolute h-[115%] md:h-[120%] lg:h-[130%] bottom-0 right-0 border-dashed border border-border_hero"
            ></div>
            <h1 className="title text-center">{title}</h1>
          </div>
          <div className=" relative py-5 px-2 md:py-6 md:px-4 lg:py-8 lg:px-4">
            <div className="absolute w-[110%] -translate-x-[5%] top-0 left-0 border-dashed border border-border_hero "></div>
            <h3 className="xlarge text-gray text-center">{text}</h3>
            <div
              data-position="left"
              className="absolute h-full top-0 left-0 border-dashed border border-border_hero"
            ></div>
            <div
              data-position="right"
              className="absolute h-full top-0 right-0 border-dashed border border-border_hero"
            ></div>
          </div>
          <div className="flex gap-3 md:gap-4 justify-center items-center relative py-8">
            <div
              data-position="top"
              className="absolute w-[110%] -translate-x-[5%] top-0 left-0 border-dashed border border-border_hero"
            ></div>
            <ButtonLight href={hrefLight} value="Več o nas" />
            <ButtonDark href={hrefDark} value="Kontakt" />
            <div
              data-position="bottom"
              className="absolute w-[110%] -translate-x-[5%] bottom-0 left-0 border-dashed border border-border_hero"
            ></div>
            <div
              data-position="left"
              className="absolute h-[115%] md:h-[120%] lg:h-[130%] top-0 left-0 border-dashed border border-border_hero"
            ></div>
            <div
              data-position="right"
              className="absolute h-[115%] md:h-[120%] lg:h-[130%] top-0 right-0 border-dashed border border-border_hero"
            ></div>
          </div>
        </section>
      ) : (
        <section className=" my-12 md:my-28 lg:my-32 max-w-[1238px] m-auto px-section">
          <div className=" relative py-5 px-2 md:py-6 md:p3-4 lg:py-8 lg:px-4">
            <div className="absolute rounded-full w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border border-dashed border-border_hero top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
            <div
              data-position="top"
              className="absolute w-[110%] -translate-x-[5%] top-0 left-0 border border-dashed  border-border_hero"
            ></div>
            <div
              data-position="left"
              className="absolute h-[115%] md:h-[120%] lg:h-[130%] bottom-0 left-0 border-dashed border border-border_hero"
            ></div>
            <div
              data-position="right"
              className="absolute h-[115%] md:h-[120%] lg:h-[130%] bottom-0 right-0 border-dashed border border-border_hero"
            ></div>
            <h1 className="title text-center">{title}</h1>
          </div>
          <div className=" relative py-8 px-4">
            <div className="absolute w-[110%] -translate-x-[5%] top-0 left-0 border-dashed border border-border_hero "></div>
            <h3 className="xlarge text-gray text-center">{text}</h3>
            <div
              data-position="left"
              className="absolute h-full top-0 left-0 border-dashed border border-border_hero"
            ></div>
            <div
              data-position="right"
              className="absolute h-full top-0 right-0 border-dashed border border-border_hero"
            ></div>
          </div>
          <div className="flex gap-4 justify-center items-center relative py-8">
            <div
              data-position="top"
              className="absolute w-[110%] -translate-x-[5%] top-0 left-0 border-dashed border border-border_hero"
            ></div>
            <ButtonDark href={hrefDark} value="Kontakt" />
            <div
              data-position="bottom"
              className="absolute w-[110%] -translate-x-[5%] bottom-0 left-0 border-dashed border border-border_hero"
            ></div>
            <div
              data-position="left"
              className="absolute h-[115%] md:h-[120%] lg:h-[130%] top-0 left-0 border-dashed border border-border_hero"
            ></div>
            <div
              data-position="right"
              className="absolute h-[115%] md:h-[120%] lg:h-[130%] top-0 right-0 border-dashed border border-border_hero"
            ></div>
          </div>
        </section>
      )}
    </>
  );
}

export default HeroSection;
