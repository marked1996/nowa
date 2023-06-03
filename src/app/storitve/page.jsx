import React from "react";
import HeroSection from "../../components/HeroSection";
import Cards from "../../components/Cards";
import ButtonLight from "@/components/ButtonLight";

function StoritvePage() {
  return (
    <>
      <HeroSection
        hrefDark="/kontakt"
        hrefLight="/o-nas"
        title="Storitve"
        text="Potrebujete le osnovno idejo, za ostalo bomo poskrbeli mi. Pomagali jo vam bomo razviti, svetovali ter jo realizirali. Od oblikovanja do montaže v kratkem času in ugodni ceni."
      />
      <section className="py-12 md:py-22 lg:py-28 max-w-[1238px] m-auto px-section">
        <div className="flex flex-col items-center justify-center md:flex-row md:items-end md:justify-center gap-2 md:gap-3 lg:gap-4 pb-4 md:pb-6 lg:pb-8">
          <h2 className="heading">Kaj znamo?</h2>
          <p className="base pb-1">Že več kot 30 let gradimo naše znanje.</p>
        </div>
        <Cards />
        <div className="text-center pt-6 md:pt-8 lg:pt-12">
          <ButtonLight href="/kontakt" value="Začnimo uspešno zgodbo" />
        </div>
      </section>
    </>
  );
}

export default StoritvePage;
