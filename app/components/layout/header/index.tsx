import React from "react";
import CompanyLogo from "./CompanyLogo";
import Navbar from "./Navbar";
import SignUpButton from "./SignUpButton";

function Header() {
  return (
    <header className="border-b-[1px] border-[#767676]">
      <div className="container flex justify-between items-center py-6 sm:max-lg:gap-x-10">
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
