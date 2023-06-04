"use client";
import React from "react";
import Image from "next/image";
import grid from "../../public/gridbg.svg";

import { motion } from "framer-motion";

function Values() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="cards grid grid-cols-1 gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      {/* card */}
      <article
        href="/kontakt"
        className="  rounded-lg border border-border p-6 bg-light flex flex-col justify-end relative "
      >
        <div className="grid-bg w-full h-full absolute top-0 left-0 overflow-hidden opacity-10">
          {/* grid image */}
          <Image
            src={grid}
            alt="Nowa Background"
            style={{
              objectFit: "cover",
              backgroundPosition: "center",
              opacity: "1",
            }}
            fill={true}
          />
        </div>
        <div className="grid-background absolute w-full h-full top-0 left-0 rounded-lg overflow-hidden z-[2]"></div>
        <div className="z-10 pt-8">
          <h3 className="xlarge pt-4 md:pt-6 lg:pt-18 font-bold">Iskrenost</h3>
          <p className="small text-gray pt-2">
            Iskrenost, etika in preglednost v vseh interakcijah, tako znotraj
            podjetja kot navzven. Gradnja zaupanja z zaposlenimi, strankami in
            deležniki.
          </p>
        </div>
      </article>

      <article
        href="/kontakt"
        className="  rounded-lg border border-border p-6 bg-light flex flex-col justify-end relative "
      >
        <div className="grid-bg w-full h-full absolute top-0 left-0 overflow-hidden opacity-10">
          {/* grid image */}
          <Image
            src={grid}
            alt="Nowa Background"
            style={{
              objectFit: "cover",
              backgroundPosition: "center",
              opacity: "1",
            }}
            fill={true}
          />
        </div>
        <div className="grid-background absolute w-full h-full top-0 left-0 rounded-lg overflow-hidden z-[2]"></div>
        <div className="z-10 pt-8">
          <h3 className="xlarge pt-4 md:pt-6 lg:pt-8 font-bold">Teamwork</h3>
          <p className="small text-gray pt-2">
            Sodelovanje in sodelovalno delo med zaposlenimi. Podjetja, ki cenijo
            ekipno delo, ustvarjajo podporno in vključujoče delovno okolje, v
            katerem posamezniki delajo skupaj za skupne cilje. Spodbujanje
            odprte komunikacije, medsebojnega spoštovanja in skupne
            odgovornosti.
          </p>
        </div>
      </article>
      <article
        href="/kontakt"
        className="  rounded-lg border border-border p-6 bg-light flex flex-col justify-end relative "
      >
        <div className="grid-bg w-full h-full absolute top-0 left-0 overflow-hidden opacity-10">
          {/* grid image */}
          <Image
            src={grid}
            alt="Nowa Background"
            style={{
              objectFit: "cover",
              backgroundPosition: "center",
              opacity: "1",
            }}
            fill={true}
          />
        </div>
        <div className="grid-background absolute w-full h-full top-0 left-0 rounded-lg overflow-hidden z-[2]"></div>
        <div className="z-10 pt-8">
          <h3 className="xlarge pt-4 md:pt-6 lg:pt-8 font-bold">Zanesljvost</h3>
          <p className="small text-gray pt-2">
            Dosledno izpolnjevanje obljub in zavez. Stremimo k zanesljivosti in
            zaupanja vrednosti v svojem delovanju. Poudarek je na zagotavljanju
            izdelkov ali storitev, ki redno izpolnjujejo ali presegajo
            pričakovanja strank. Zanesljivost vključuje tudi izpolnjevanje
            rokov, spoštovanje dogovorov in vzdrževanje močnih odnosov s
            deležniki.
          </p>
        </div>
      </article>
      <article
        href="/kontakt"
        className="  rounded-lg border border-border p-6 bg-light flex flex-col justify-end relative "
      >
        <div className="grid-bg w-full h-full absolute top-0 left-0 overflow-hidden opacity-10">
          {/* grid image */}
          <Image
            src={grid}
            alt="Nowa Background"
            style={{
              objectFit: "cover",
              backgroundPosition: "center",
              opacity: "1",
            }}
            fill={true}
          />
        </div>
        <div className="grid-background absolute w-full h-full top-0 left-0 rounded-lg overflow-hidden z-[2]"></div>
        <div className="z-10 pt-8">
          <h3 className="xlarge pt-4 md:pt-6 lg:pt-8 font-bold">Hitrost</h3>
          <p className="small text-gray pt-2">
            Agilnost in odzivnost v hitrem poslovnem okolju. Smo podjetje, ki
            ceni hitrost, si prizadevamo za poenostavljanje procesov,
            zmanjševanje nepotrebnega birokratskega bremena in sprejemanje
            pravočasnih odločitev.
          </p>
        </div>
      </article>
      <article
        href="/kontakt"
        className="  rounded-lg border border-border p-6 bg-light flex flex-col justify-end relative "
      >
        <div className="grid-bg w-full h-full absolute top-0 left-0 overflow-hidden opacity-10">
          {/* grid image */}
          <Image
            src={grid}
            alt="Nowa Background"
            style={{
              objectFit: "cover",
              backgroundPosition: "center",
              opacity: "1",
            }}
            fill={true}
          />
        </div>
        <div className="grid-background absolute w-full h-full top-0 left-0 rounded-lg overflow-hidden z-[2]"></div>
        <div className="z-10 pt-8">
          <h3 className="xlarge pt-4 md:pt-6 lg:pt-8 font-bold">
            Osredotočenost na stranke
          </h3>
          <p className="small text-gray pt-2">
            Osredotočenost na zadovoljstvo strank. Prizadevamo si zagotavljanje
            visokokakovostnih izdelkov ali storitev. Cilj je graditi dolgoročne
            odnose in zvestobo strank.
          </p>
        </div>
      </article>
    </motion.div>
  );
}

export default Values;
