"use client";
import SearchableInput from "@/src/components/inputs/SearchInput";
import LogoComponent from "@/src/components/logo/LogoComponent";
import React from "react";
import MenuSection, { MenuItem } from "./MenuSection";

export const Sidebar = () => {
  const sidebarMenu = {
    dashboard: [
      {
        title: "Dashboard",
        subtitle: "Daily analytics",
        url: "dashboard",
        icon: "material-symbols:dashboard",
      },
    ],
    applications: [
      {
        title: "All Applications",
        subtitle: "All submitted Applications",
        url: "applications",
        icon: "fa:send",
      },
      {
        title: "Chats",
        subtitle: "Your chats with applicants",
        url: "chats",
        icon: "ic:baseline-message",
      },
    ],
    onboarding: [
      {
        title: "All Plans",
        subtitle: "Onboarding plans",
        url: "plans",
        icon: "icon-park-outline:list",
      },
      {
        title: "Applicants",
        subtitle: "Track applicants progress",
        url: "applicants",
        icon: "material-symbols:supervised-user-circle",
      },
    ],
  };
  const handleSidebarSearch = () => console.log("======");
  return (
    <div
      className="px-6 py-9 border-r-borderColorLight"
      style={{ backgroundColor: "#F7F8FA" }}
    >
      <div>
        <LogoComponent small />
        <div>
          <SearchableInput
            inputID="sidebarSearch"
            value={""}
            onInputChange={handleSidebarSearch}
          />
        </div>
      </div>
      <div>
        <MenuItem content={sidebarMenu.dashboard[0]} />
      </div>
      <div>
        <MenuSection
          title="Applications"
          menuItems={sidebarMenu.applications}
        />
      </div>
      <div>Onboarding</div>
      <div>Courses</div>
    </div>
  );
};
