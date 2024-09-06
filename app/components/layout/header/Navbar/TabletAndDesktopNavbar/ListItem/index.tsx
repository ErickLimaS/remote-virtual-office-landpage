import Link from "next/link";
import React from "react";

function ListItem({ children, href }: { children: string; href: string }) {
  return (
    <li className="border-b-2 border-transparent hover:border-black">
      <Link href={href}>{children}</Link>
    </li>
  );
}

export default ListItem;
