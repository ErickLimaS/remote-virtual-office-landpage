import React from "react";
import MobileNavbar from "./MobileNavbar";
import TabletAndDesktopNavbar from "./TabletAndDesktopNavbar";

function Navbar() {
  return (
    <>
      <MobileNavbar />

      <TabletAndDesktopNavbar />
    </>
  );
}

export default Navbar;
