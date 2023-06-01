import React from "react";
import Link from "next/link";

function ButtonDark({ href, value }) {
  return (
    <button className="base px-5 py-2 border border-dark rounded-lg text-light bg-dark hover:bg-light hover:text-dark duration-300 hover:border-dark">
      <Link href={href}>{value}</Link>
    </button>
  );
}

export default ButtonDark;
