import BaseInput from "@/src/components/inputs/BaseInput";
import SearchableInput from "@/src/components/inputs/SearchInput";
import LogoComponent from "@/src/components/logo/LogoComponent";
import React from "react";

export const Sidebar = () => {
  const sidebarMenu = {
    dashboard: [
      {
        title: "Dashboard",
        subtitle: "Daily analytics",
        url: "dashboard",
      },
    ],
    applications: [
      {
        title: "All Applications",
        subtitle: "All submitted Applications",
        url: "applications",
      },
      {
        title: "Chats",
        subtitle: "Your chats with applicants",
        url: "chats",
      },
    ],
    onboarding: [
      {
        title: "All Plans",
        subtitle: "Onboarding plans",
        url: "plans",
      },
      {
        title: "Applicants",
        subtitle: "Track applicants progress",
        url: "applicants",
      },
    ],
  };
  return (
    <div className="px-6 py-9">
      <div>
        <LogoComponent small />
        <div>
          <SearchableInput />
        </div>
      </div>
      <div>Applications</div>
      <div>Onboarding</div>
      <div>Courses</div>
    </div>
  );
};
