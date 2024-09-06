import Image from "next/image";
import Link from "next/link";
import React from "react";
import FacebookSvg from "@/public/assets/svgs/facebook.svg";
import TwitterSvg from "@/public/assets/svgs/twitter-x.svg";
import InstagramSvg from "@/public/assets/svgs/instagram.svg";
import LinkedinSvg from "@/public/assets/svgs/linkedin.svg";

function CompanyDetails() {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="relative">
        <Link href={"/"} className="relative flex w-[159px] h-[65px] max-sm:scale-90">
          <Image src={"/imgs/logo.png"} alt="Company Logo" fill />
        </Link>
      </div>

      <small className="block font-semibold">
        Virtual office for remote teams
      </small>

      <small className="block  font-semibold">@ 2022 RoboMeet Inc.</small>

      <Link
        href={"/terms-and-privacy"}
        className="underline font-medium max-md:text-center"
      >
        Terms & Privacy
      </Link>

      <div className="flex gap-x-6 mt-5 max-md:justify-center">
        <Link href={"#"} aria-label="Twitter / X">
          <TwitterSvg className="fill-yellow_brand hover:fill-[rgba(0,0,0,.6)] transition-colors scale-150" />
        </Link>
        <Link href={"#"} aria-label="Instagram">
          <InstagramSvg className="fill-yellow_brand hover:fill-[rgba(0,0,0,.6)] transition-colors scale-150" />
        </Link>
        <Link href={"#"} aria-label="Facebook">
          <FacebookSvg className="fill-yellow_brand hover:fill-[rgba(0,0,0,.6)] transition-colors scale-150" />
        </Link>
        <Link href={"#"} aria-label="Linkedin">
          <LinkedinSvg className="fill-yellow_brand hover:fill-[rgba(0,0,0,.6)] transition-colors scale-150" />
        </Link>
      </div>
    </div>
  );
}

export default CompanyDetails;
