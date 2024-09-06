import Image from "next/image";
import Link from "next/link";
import React from "react";

function CompanyLogo() {
  return (
    <div>
      <Link href={"/"}>
        <Image src={""} alt="Company Logo" />
      </Link>
    </div>
  );
}

export default CompanyLogo;
