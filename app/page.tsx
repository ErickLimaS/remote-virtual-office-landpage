import BuildAvatarOutroSection from "./components/HomePage/BuildAvatarOutroSection";
import ClickToTalkOutroSection from "./components/HomePage/ClickToTalkOutroSection";
import HeroSection from "./components/HomePage/HeroSection";

export default function Home() {
  return (
    <main className="container my-20">
      <HeroSection />

      <ClickToTalkOutroSection />

      <BuildAvatarOutroSection />
    </main>
  );
}
