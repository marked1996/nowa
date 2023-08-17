import React from "react";
import Link from "next/link";

function ButtonLight({ href, value }) {
  return (
    <Link
      className="base px-5 py-2 border border-border rounded-lg text-gray bg-light hover:border-dark hover:text-dark duration-300"
      href={href}
    >
      {value}
    </Link>
  );
}

export default ButtonLight;
