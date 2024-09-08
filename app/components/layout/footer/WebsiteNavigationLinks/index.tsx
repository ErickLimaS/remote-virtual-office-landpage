import React from "react";
import List from "./List";

function WebsiteNagivationLinks() {
  return (
    <nav className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
      <List
        title="USE CASES"
        items={[
          { name: "Virtual Office Hours", url: "" },
          { name: "Icebreakers", url: "" },
          { name: "Slack & RoboMeet", url: "" },
          { name: "Calendar Meetings", url: "" },
        ]}
      />
      <List
        title="TOOLS"
        items={[
          { name: "Revitalize", url: "" },
          { name: "US Remote Trends", url: "" },
          { name: "PH Leaderboard", url: "" },
        ]}
      />
      <List
        title="SOCIAL"
        items={[
          { name: "Newsletter", url: "" },
          { name: "Blog", url: "" },
          { name: "Twitter", url: "" },
          { name: "Instagram", url: "" },
          { name: "Facebook", url: "" },
          { name: "LinkedIn", url: "" },
        ]}
      />
      <List
        title="CONTACT"
        items={[
          { name: "Email", url: "" },
          { name: "DM on Twitter", url: "" },
          { name: "Press kit", url: "" },
        ]}
      />
    </nav>
  );
}

export default WebsiteNagivationLinks;
