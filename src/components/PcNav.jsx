"use client";
import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonLight from "./ButtonLight";

function PcNav() {
  const pathname = usePathname();
  return (
    <header className=" z-50 hidden w-full m-auto lg:sticky top-0 lg:flex justify-between items-center py-2 px-5 border-b border-border bg-light">
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
      <nav>
        <ul className="lg:flex gap-8 base font-medium">
          <li
            className={`${
              pathname == "/" ? " text-hover" : ""
            }  hover:text-hover  duration-300 `}
          >
            <Link href="/">Domov</Link>
          </li>
          <li
            className={`${
              pathname == "/o-nas" ? " text-hover" : ""
            }  hover:text-hover  duration-300 `}
          >
            <Link href="o-nas">O Nas</Link>
          </li>
          <li
            className={`${
              pathname == "/storitve" ? " text-hover" : ""
            }  hover:text-hover  duration-300 `}
          >
            <Link href="/storitve">Storitve</Link>
          </li>
          <li
            className={`${
              pathname == "/reference" ? " text-hover" : ""
            }  hover:text-hover  duration-300 `}
          >
            <Link href="/reference">Reference</Link>
          </li>
          <li
            className={`${
              pathname == "/kontakt" ? " text-hover" : ""
            }  hover:text-hover  duration-300 `}
          >
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center items-center gap-4">
        <p className="base font-medium">+386 41 335 749</p>
        <ButtonLight href="/kontakt" value="Kontakt" />
      </div>
    </header>
  );
}

export default PcNav;
