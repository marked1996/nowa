"use client";
import React from "react";
import HeroSection from "../../components/HeroSection";
import Values from "../../components/Values";
import ButtonLight from "../../components/ButtonLight";
import { motion } from "framer-motion";
function AboutPage() {
  return (
    <>
      <HeroSection
        title="O nas"
        text="Več kot 20 let izkušenj. Več kot 1500 uspešno zaključenih projektov doma in v tujini. Več kot 25 stalnih 
        sodelavcev, ki skrbijo za zadovoljstvo naročnikov.
        "
        hrefDark="/kontakt"
      />
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="pt-12 md:pt-22 lg:pt-28 "
      >
        <h2 className="heading text-center pb-4 md:pb-6 lg:pb-8 max-w-[1238px] m-auto px-section flex-wrap">
          Naše vrednote
        </h2>
        <p className="base text-center max-w-[1238px] m-auto pb-4 md:pb-6 lg:pb-8 px-section">
          Potrebujete le osnovno idejo, za ostalo bomo poskrbeli mi. Pomagali jo
          vam bomo razviti, svetovali ter jo realizirali. Od oblikovanja do
          montaže v kratkem času in ugodni ceni.
        </p>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="pb-12 md:pb-22 lg:pb-28 max-w-[1238px] m-auto px-section"
      >
        <Values />
        <div className="text-center pt-6 md:pt-8 lg:pt-12 px-section">
          <ButtonLight href="/kontakt" value="Začnimo uspešno zgodbo" />
        </div>
      </motion.section>
    </>
  );
}

export default AboutPage;
