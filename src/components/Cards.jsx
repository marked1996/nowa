import React from "react";
import Image from "next/image";
import prevozi from "../../public/prevozi.svg";
import dogodki from "../../public/dogodki.svg";
import print from "../../public/print.svg";
import cgp from "../../public/cgp.svg";
import grid from "../../public/gridbg.svg";
import panoji from "../../public/panoji.svg";
import stickers from "../../public/stickers.svg";

function Cards() {
  return (
    <div className="cards grid grid-cols-1 gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
      <article className="rounded-lg border border-border p-6 bg-light flex flex-col justify-between relative">
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
        {/* illustration image */}
        <div className="w-8/12 m-auto z-10">
          <Image src={prevozi} alt="prevozi svg" />
        </div>
        <div className="z-10">
          <h3 className="xlarge pt-6 md:pt-8 lg:pt-10 font-bold">
            Prevozi vaših materialov
          </h3>
          <p className="small text-gray">
            Tiskamo, oblikujemo in montiramo reklamne materiale na dogodkih po
            Sloveniji in tudi v tujini.
          </p>
        </div>
      </article>

      <article className="rounded-lg border border-border p-6 bg-light flex flex-col justify-between relative">
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
        {/* illustration image */}
        <div className="w-8/12 m-auto z-10">
          <Image src={dogodki} alt="prevozi svg" />
        </div>
        <div className="z-10">
          <h3 className="xlarge pt-6 md:pt-8 lg:pt-10 font-bold">Dogodki</h3>
          <p className="small text-gray">
            Izdelamo in opremimo razstavni prostor za sejem, maraton, dogodek na
            prostem v celoti. Za sejem, razstavni prostor ali promocijski
            dogodek vam izdelamo in postavimo ter brendiramo prostor po vaših
            željah. Kjer koli kadar koli.
          </p>
        </div>
      </article>
      <article className="rounded-lg border border-border p-6 bg-light flex flex-col justify-between relative">
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
        {/* illustration image */}
        <div className="w-8/12 m-auto z-10">
          <Image src={cgp} alt="prevozi svg" />
        </div>
        <div className="z-10">
          <h3 className="xlarge pt-6 md:pt-8 lg:pt-10 font-bold">
            Celostne rešitve
          </h3>
          <p className="small text-gray">
            Prizadevamo si k celostni ponudbi vizualnih komunikacij. S tem bi
            vam radi prihranili stroške, čas in trud.
          </p>
        </div>
      </article>
      <article className="rounded-lg border border-border p-6 bg-light flex flex-col justify-between relative">
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
        {/* illustration image */}
        <div className="w-8/12 m-auto z-10">
          <Image src={print} alt="prevozi svg" />
        </div>
        <div className="z-10">
          <h3 className="xlarge pt-6 md:pt-8 lg:pt-10 font-bold">Print</h3>
          <p className="small text-gray">
            Potrebujete digitalni tisk, nalepke, izreze, PVC ceradna platna ali
            ostale materiale vizualnih komunikacij?
          </p>
        </div>
      </article>
      <article className="rounded-lg border border-border p-6 bg-light flex flex-col justify-between relative">
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
        {/* illustration image */}
        <div className="w-8/12 m-auto z-10 relative flex justify-center items-center">
          <Image src={stickers} alt="prevozi svg" />
        </div>
        <div className="z-10">
          <h3 className="xlarge pt-6 md:pt-8 lg:pt-10 font-bold">
            Avto nalepke
          </h3>
          <p className="small text-gray">
            Bi radi zamenjali barvo vašega vozila? Želite, da vaše vozilo
            postane potujoča reklama? Bi radi zatemnili stekla z reklamno
            nalepko? Ali pa potrebujete le majhen napis za vaš avto? Smo pravi
            naslov za vas.
          </p>
        </div>
      </article>
      <article className="rounded-lg border border-border p-6 bg-light flex flex-col justify-between relative">
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
        {/* illustration image */}
        <div className="w-8/12 m-auto z-10">
          <Image src={panoji} alt="prevozi svg" />
        </div>
        <div className="z-10">
          <h3 className="xlarge pt-6 md:pt-8 lg:pt-10 font-bold">
            Velike grafike
          </h3>
          <p className="small text-gray">
            Tiskamo in montiramo grafike velikih formatov, nalepke, fasadne
            grafike, reklamne panoje, mash grafike, velike grafike na PVC
            ceradno platno itd. Dimenzija za nas ni ovira.
          </p>
        </div>
      </article>
    </div>
  );
}

export default Cards;
