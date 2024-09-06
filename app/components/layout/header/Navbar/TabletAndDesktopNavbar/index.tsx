import React from "react";
import ListItem from "./ListItem";

function TabletAndDesktopNavbar() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex justify-between items-center sm:gap-x-4 lg:gap-x-14 text-md font-black text-center">
        <ListItem href={"/faq"}>FAQ</ListItem>
        <ListItem href={"/use-case"}>USE CASES</ListItem>
        <ListItem href={"/blog"}>BLOG</ListItem>
        <ListItem href={"/newsletter"}>NEWSLETTER</ListItem>
      </ul>
    </nav>
  );
}

export default TabletAndDesktopNavbar;
