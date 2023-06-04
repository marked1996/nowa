"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import MobileNav from "./MobileNav";
import PcNav from "./PcNav";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <MobileNav isNavOpen={isNavOpen} handleClick={handleClick} />
      <PcNav />
    </>
  );
}

export default Header;
