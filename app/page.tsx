import BuildAvatarOutroSection from "./components/HomePage/BuildAvatarOutroSection";
import ClickToTalkOutroSection from "./components/HomePage/ClickToTalkOutroSection";
import HeroSection from "./components/HomePage/HeroSection";
import PageFooter from "./components/HomePage/PageFooter";
import VideoSupportOutroSection from "./components/HomePage/VideoSupportOutroSection";

export async function generateMetadata() {
  return {
    title: "RoboMeet - Virtual office for remote teams",
    description: `RoboMeet offers a dynamic virtual workspace for remote teams, providing an immersive environment with tools for communication, collaboration, and project management.`,
  };
}

export default function Home() {
  return (
    <main className="container mt-20">
      <HeroSection />

      <ClickToTalkOutroSection />

      <BuildAvatarOutroSection />

      <VideoSupportOutroSection />

      <PageFooter />
    </main>
  );
}
