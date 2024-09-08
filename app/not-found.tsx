import React from "react";

export async function generateMetadata() {
  return {
    title: "404: Page Not Found | RoboMeet - Virtual office for remote teams",
    description: `RoboMeet offers a dynamic virtual workspace for remote teams, providing an immersive environment with tools for communication, collaboration, and project management.`,
  };
}

function NotFoundPage() {
  return (
    <main className="container flex h-[70vh] bg-background">
      <div className="m-auto">
        <h1 className="font-black text-6xl text-center">404</h1>

        <p className="font-medium text-3xl text-center">Page Not Found</p>
      </div>
    </main>
  );
}

export default NotFoundPage;
