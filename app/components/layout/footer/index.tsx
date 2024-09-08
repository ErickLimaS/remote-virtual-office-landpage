import React from "react";
import CompanyDetails from "./CompanyDetails";
import WebsiteNagivationLinks from "./WebsiteNavigationLinks";

function Footer() {
  return (
    <footer className="border-t-2 border-[#767676] bg-background">
      <div className="container text-font_black pt-20 pb-8 justify-between max-md:flex max-md:flex-col-reverse max-md:items-center max-md:mx-auto md:grid md:grid-cols-footer gap-x-12">
        <CompanyDetails />

        <WebsiteNagivationLinks />
      </div>
    </footer>
  );
}

export default Footer;
