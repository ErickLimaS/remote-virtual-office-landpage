import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav>
      <ul className="flex justify-between gap-x-2">
        <li>
          <Link href={"#product"}>Product</Link>
        </li>
        <li>
          <Link href={"#what-it-can-do"}>What it can do</Link>
        </li>
        <li>
          <Link href={"#price"}>Prices</Link>
        </li>
        <li>
          <Link href={"#about"}>About us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
