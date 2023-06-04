"use client";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import ButtonLight from "../components/ButtonLight";
import { motion } from "framer-motion";

import Marquee from "react-fast-marquee";

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Brand Inženiring"
        text="Podjetje, ki ureja tisk, grafično oblikovanje, organizacijo
              dogodkov. Smo podjetje, ki vašo znamko pokažemo svetu in jo
              dvigamo na višjo raven učinkovitega trženja."
        hrefDark="/kontakt"
        hrefLight="/o-nas"
      />
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="py-12 md:py-22 lg:py-28 max-w-[1238px] m-auto px-section"
      >
        <div className="flex flex-col items-center justify-center md:flex-row md:items-end md:justify-center gap-2 md:gap-3 lg:gap-4 pb-4 md:pb-6 lg:pb-8">
          <h2 className="heading">Kaj znamo?</h2>
          <p className="base pb-1">Že več kot 30 let gradimo naše znanje.</p>
        </div>
        <Cards />
        <div className="text-center pt-6 md:pt-8 lg:pt-12">
          <ButtonLight href="/kontakt" value="Začnimo uspešno zgodbo" />
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="pt-12 md:pt-22 lg:pt-28 pb-28 md:pb-36 lg:pb-48"
      >
        <h2 className="heading text-center pb-4 md:pb-6 lg:pb-8 max-w-[1238px] m-auto px-section flex-wrap">
          Znanje. Zanesljivost. Rezultati.
        </h2>
        <p className="base text-center max-w-[1238px] m-auto pb-4 md:pb-6 lg:pb-8 px-section">
          Z vami že od leta 1990, od 2023 z novo podobo. Za naše naročnike
          ustvarjamo uspešne zgodbe. Vsako leto uspešno izpeljemo več kot 100n
          projektov, dogodkov, sejmov in razstav. Potrditev naše zanesljivosti
          in kvalitete lahko potrdijo številna podjetja, kot so Spar, Hervis,
          OMW in še mnogo drugih.
        </p>
        <Marquee
          autoFill={true}
          gradient={true}
          gradientWidth={100}
          gradientColor={[247, 247, 247]}
          className="border-t border-b border-border "
        >
          <h4 className="font-inter text-xl font-medium md:text-heading md:font-medium text-hover py-3 md:py-4 lg:py-5 px-5 md:px-8 lg:px-12">
            Garmin
          </h4>
          <h4 className="font-inter text-xl font-medium md:text-heading md:font-medium text-hover py-3 md:py-4 lg:py-5 px-5 md:px-8 lg:px-12">
            Spar
          </h4>
          <h4 className="font-inter text-xl font-medium md:text-heading md:font-medium text-hover py-3 md:py-4 lg:py-5 px-5 md:px-8 lg:px-12">
            Hervis
          </h4>
          <h4 className="font-inter text-xl font-medium md:text-heading md:font-medium text-hover py-3 md:py-4 lg:py-5 px-5 md:px-8 lg:px-12">
            Sport Media Focus
          </h4>
          <h4 className="font-inter text-xl font-medium md:text-heading md:font-medium text-hover py-3 md:py-4 lg:py-5 px-5 md:px-8 lg:px-12">
            OMW
          </h4>
          <h4 className="font-inter text-xl font-medium md:text-heading md:font-medium text-hover py-3 md:py-4 lg:py-5 px-5 md:px-8 lg:px-12">
            Ironman Slovenia
          </h4>
          <h4 className="font-inter text-xl font-medium md:text-heading md:font-medium text-hover py-3 md:py-4 lg:py-5 px-5 md:px-8 lg:px-12">
            Enervit
          </h4>
          <h4 className="font-inter text-xl font-medium md:text-heading md:font-medium text-hover py-3 md:py-4 lg:py-5 px-5 md:px-8 lg:px-12">
            Hofer
          </h4>
        </Marquee>
        <div className="text-center pt-6 md:pt-8 lg:pt-12 px-section">
          <ButtonLight href="/kontakt" value="Začnimo uspešno zgodbo" />
        </div>
      </motion.section>
    </>
  );
}
