"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";

import { useEffect } from "react";

function MobileNav({ isNavOpen, handleClick }) {
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, []);

  return (
    <>
      {isNavOpen ? (
        <header className="z-50 sticky top-0 flex flex-col lg:hidden w-screen h-screen justify-between py-4 px-5 bg-light">
          <nav className="flex justify-between items-start">
            <ul className="flex flex-col gap-4 font-medium text-[20px] tracking-[-0.0825ch]">
              <li onClick={handleClick}>
                <Link href="/">Domov</Link>
              </li>
              <li onClick={handleClick}>
                <Link href="o-nas">O Nas</Link>
              </li>
              <li onClick={handleClick}>
                <Link href="/storitve">Storitve</Link>
              </li>
              <li onClick={handleClick}>
                <Link href="/reference">Reference</Link>
              </li>
              <li onClick={handleClick}>
                <Link href="/kontakt">Kontakt</Link>
              </li>
            </ul>
            <button
              className="font-medium text-[20px] tracking-[-0.0825ch] relative w-5 h-5"
              onClick={handleClick}
            >
              <div className="absolute top-1/2 left-0 w-full h-[2px] rotate-45 translate-y-1/2 bg-dark"></div>
              <div className="absolute top-1/2 left-0 w-full h-[2px] -rotate-45 translate-y-1/2 bg-dark"></div>
            </button>
          </nav>
          <section className="info base">
            <p>+386 41 335 749</p>
            <a href="mailto:nowa@t-2.net">nowa@t-2.net</a>
          </section>
        </header>
      ) : (
        <header className="z-50 sticky top-0 flex justify-between items-center w-screen py-4 px-5 lg:hidden border-b border-border bg-light">
          <div className="logo h-8 w-20 relative">
            <Link href="/">
              <Image
                src={logo}
                alt="Nowa logo"
                style={{
                  objectFit: "contain",
                  backgroundPosition: "center",
                  opacity: "0.95",
                }}
                fill={true}
              />
            </Link>
          </div>
          <button
            className="w-5 h-4 flex flex-col group justify-around"
            onClick={handleClick}
          >
            <div className="w-full h-[2px] bg-dark"></div>
            <div className="w-full h-[2px] bg-dark"></div>
            <div className="w-2/3 h-[2px] bg-dark"></div>
          </button>
        </header>
      )}
    </>
  );
}

export default MobileNav;
