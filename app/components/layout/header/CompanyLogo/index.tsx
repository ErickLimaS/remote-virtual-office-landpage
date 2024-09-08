import Image from "next/image";
import Link from "next/link";
import React from "react";

function CompanyLogo() {
  return (
    <div className="relative">
      <Link href={"/"} className="flex w-[159px] h-[65px] max-sm:scale-90">
        <Image
          src={"/imgs/logo-no-bcg.png"}
          alt="Company Logo"
          fill
          quality={100}
        />
      </Link>
    </div>
  );
}

export default CompanyLogo;
