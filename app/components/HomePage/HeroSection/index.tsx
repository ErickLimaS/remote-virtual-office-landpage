import Image from "next/image";
import React from "react";
import SignUpButton from "../../buttons/SignUpButton";

function HeroSection() {
  return (
    <section className="grid md:grid-cols-2 gap-4 lg:gap-24">
      <div className="flex flex-col my-auto gap-y-12">
        <h1 className="text-5xl sm:text-6xl font-black">
          {`Wherever you are, you're better together.`}
        </h1>

        <p className="text-xl sm:text-2xl font-medium">
          Virtual office for remote teams
        </p>

        <div>
          <SignUpButton />
        </div>
      </div>

      <div className="relative max-h-[576px] w-full aspect-[5/5]">
        <Image
          src={"/imgs/homepage/hero.png"}
          alt="People on a Virtual Office"
          fill
          quality={100}
        />
      </div>
    </section>
  );
}

export default HeroSection;
