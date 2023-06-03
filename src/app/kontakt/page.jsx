import React from "react";
import ButtonLight from "../../components/ButtonLight";

function ContactPage() {
  return (
    <>
      <section className="py-12 md:py-22 lg:py-28 max-w-[1238px] m-auto px-section">
        <div className="flex flex-col items-center justify-center gap-2 md:gap-3 lg:gap-4 pb-4 md:pb-6 lg:pb-8">
          <h2 className="heading">Kontakt</h2>
          <p className="base pb-1 text-center">
            Kontaktirate nas lahko na nowa@t-2.net ali na telefonsko številko
            +386 41 389 099. V kratkem dodamo obrazec za povpraševanje. Hvala za
            razumevanje in zaupanje.
          </p>
        </div>
        <div className="text-center pt-6 md:pt-8 lg:pt-12">
          <ButtonLight href="mailto:nowa@t-2.net" value="nowa@t-2.net" />
        </div>
      </section>
    </>
  );
}

export default ContactPage;
