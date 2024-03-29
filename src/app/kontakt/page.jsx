"use client";
import { motion } from "framer-motion";
import React from "react";
// import ButtonLight from "../../components/ButtonLight";
import ContactForm from "@/components/ContactForm";

function ContactPage() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="py-12 md:py-22 lg:py-28 max-w-[1238px] m-auto px-section"
      >
        <div className="flex flex-col items-center justify-center gap-2 md:gap-3 lg:gap-4 pb-4 md:pb-6 lg:pb-8">
          <h2 className="heading">Kontakt</h2>
          <p className="base pb-1 text-center">
            Kontaktirate nas lahko na nowa@t-2.net ali na telefonsko številko
            +386 41 389 099. V kratkem dodamo obrazec za povpraševanje. Hvala za
            razumevanje in zaupanje.
          </p>
        </div>

        <ContactForm />
      </motion.section>
    </>
  );
}

export default ContactPage;
