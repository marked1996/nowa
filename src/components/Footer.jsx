import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";

function Footer() {
  return (
    <footer className="w-full m-auto  py-8 px-5 border-t border-border bg-light flex flex-col md:flex-row justify-around items-start gap-12 md:gap-0 relative">
      <div className="flex flex-col">
        <div className="logo h-6 w-16 lg:h-4 lg:w-20 relative">
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
        <ul className="flex flex-col pt-8 small">
          <li>nowa d.o.o.</li>
          <li>+386 41 335 749</li>
          <li className="hover:text-gray duration-300">
            <a href="mailto:nowa@t-2.net">nowa@t-2.net</a>
          </li>
          <li>Rožna dolina cesta XIX/6, 1000 Ljubljana</li>
        </ul>
      </div>
      <nav className="pb-12 md:pb-16 base">
        <ul className="font-medium">
          <li className="hover:text-hover duration-300">
            <Link href="/">Domov</Link>
          </li>
          <li className="hover:text-hover duration-300">
            <Link href="/o-nas">O nas</Link>
          </li>
          <li className="hover:text-hover duration-300">
            <Link href="/reference">Reference</Link>
          </li>
          <li className="hover:text-hover duration-300">
            <Link href="/storitve">Storitve</Link>
          </li>
          <li className="hover:text-hover duration-300">
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
      <p className="ultrasmall absolute bottom-2 left-5 md:left-1/2 md:-translate-x-1/2 text-hover ">
        Copyright © 2023 nowa d.o.o. Vse pravice pridržane.{" "}
        <span>
          Izdelava in dizajn:{" "}
          <a
            className="text-gray hover:text-dark"
            target="_blank"
            rel="noopener noreferrer"
            href="https://novakmark.co"
          >
            Marked
          </a>
        </span>
      </p>
    </footer>
  );
}

export default Footer;
