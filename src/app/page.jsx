import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import ButtonLight from "@/components/ButtonLight";

//marquee assets
import asset_1 from "../../public/Asset 1.svg";

import asset_3 from "../../public/Asset 3.svg";
import asset_4 from "../../public/Asset 4.svg";
import asset_5 from "../../public/Asset 5.svg";
import asset_6 from "../../public/Asset 6.svg";

import Marquee from "react-fast-marquee";
import Image from "next/image";

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
      <section className="py-12 md:py-22 lg:py-28">
        <div className="flex flex-col items-center justify-center md:flex-row md:items-end md:justify-center gap-2 md:gap-3 lg:gap-4 pb-4 md:pb-6 lg:pb-8">
          <h2 className="heading">Kaj znamo?</h2>
          <p className="base pb-1">Že več kot 30 let gradimo naše znanje.</p>
        </div>
        <Cards />
        <div className="text-center pt-6 md:pt-8 lg:pt-12">
          <ButtonLight href="/kontakt" value="Začnimo uspešno zgodbo" />
        </div>
      </section>
      <section className="py-12 md:py-22 lg:py-28">
        <h2 className="heading text-center pb-4 md:pb-6 lg:pb-8">
          Znanje.Zanesljivost.Rezultati.
        </h2>
        <p className="base text-center ">
          Z vami že od leta 1990, od 2023 z novo podobo. Za naše naročnike
          ustvarjamo uspešne zgodbe. Vsako leto uspešno izpeljemo več kot 100
          projektov, dogodkov, sejmov in razstav. Potrditev naše zanesljivosti
          in kvalitete lahko potrdijo številna podjetja, kot so Spar, Hervis,
          OMW in še mnogo drugih.
        </p>
        <Marquee>
          <p>tryhard</p>
          <p>tryhard</p>
          <p>tryhard</p>
          <p>tryhard</p>
          <p>tryhard</p>
          <p>tryhard</p>
        </Marquee>
        <div className="text-center">
          <ButtonLight href="/kontakt" value="Začnimo uspešno zgodbo" />
        </div>
      </section>
    </>
  );
}
