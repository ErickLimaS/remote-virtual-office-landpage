"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import MenuSvg from "@/public/assets/svgs/menu.svg";
import ListItem from "./ListItem";

function MobileMenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="sm:hidden"
        data-active={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
      >
        <MenuSvg className="scale-[2] hover:fill-black" fill="#767676" />
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          // BACKDROP
          <motion.div
            data-disabled-scroll={true}
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,.5)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* NAVBAR */}
            <nav onClick={(e) => e.stopPropagation()}>
              <ul className="absolute top-0 right-0 bottom-0 w-3/4 bg-background p-4 flex flex-col gap-y-2 text-md font-black">
                <ListItem href={"/faq"}>FAQ</ListItem>
                <ListItem href={"/use-case"}>USE CASES</ListItem>
                <ListItem href={"/blog"}>BLOG</ListItem>
                <ListItem href={"/newsletter"}>NEWSLETTER</ListItem>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileMenuButton;
