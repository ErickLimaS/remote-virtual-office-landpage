import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function ListItem({ children, href }: { children: string; href: string }) {
  return (
    <motion.li
      whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,.2)" }}
      className="rounded-sm"
    >
      <Link href={href} className="flex py-2 px-2">
        {children}
      </Link>
    </motion.li>
  );
}

export default ListItem;
