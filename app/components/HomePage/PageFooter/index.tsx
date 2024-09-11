import Image from "next/image";
import React from "react";
import SignUpButton from "../../buttons/SignUpButton";

function PageFooter() {
  return (
    <section className="relative mt-20 pt-20 border-t-2 border-[#767676] space-y-12">
      <h2 className="text-center font-black text-5xl">Ready to start?</h2>

      <div className="relative max-h-[345px] w-full md:w-[75%] mx-auto aspect-[16/6] lg:aspect-video ">
        <Image
          src={"/imgs/homepage/home-page-footer.png"}
          alt="Ready to start?"
          fill
          quality={100}
        />
      </div>

      <div className="absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4">
        <SignUpButton centerModalPosition modalPosition="left"/>
      </div>
    </section>
  );
}

export default PageFooter;
