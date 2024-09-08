import React from "react";
import CompanyLogo from "./CompanyLogo";
import Navbar from "./Navbar";
import SignUpButton from "../../buttons/SignUpButton";

function Header() {
  return (
    <header className="sticky z-10 top-0 bg-background border-b-2 border-[#767676]">
      <div className="container text-font_black flex justify-between items-center py-6 sm:max-lg:gap-x-10">
        <CompanyLogo />

        <div className="flex flex-row-reverse sm:flex-row items-center gap-4 lg:gap-10">
          <Navbar />

          <SignUpButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
