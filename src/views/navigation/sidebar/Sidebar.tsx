"use client";
import SearchableInput from "@/src/components/inputs/SearchInput";
import LogoComponent from "@/src/components/logo/LogoComponent";
import React, { useState } from "react";
import MenuSection, { MenuItem } from "./MenuSection";
import Link from "next/link";
import { Icon } from "@iconify/react";

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
        title: "Employees",
        subtitle: "Track employees onboarding progress",
        url: "employees",
        icon: "material-symbols:supervised-user-circle",
      },
    ],
  };
  const [searchText, setSearchText] = useState("");

  const handleSidebarSearch = (e: any) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };
  return (
    <div className="px-6 py-9 border border-r-sidebarBorderColor h-lvh flex flex-col gap-6">
      <div>
        <LogoComponent small />
        <div className="p-3.5">
          <SearchableInput
            inputID="sidebarSearch"
            value={searchText}
            onInputChange={handleSidebarSearch}
            inputClassName="rounded-xl"
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
      <div>
        <MenuSection title="Onboarding" menuItems={sidebarMenu.onboarding} />
      </div>
      <div className="py-6 ml-4">
        <Link
          href="/courses"
          scroll={false}
          className="flex items-center text-textLightColor text-xl cursor-pointer hover:underline"
        >
          <p>Courses</p>
          <Icon
            icon="mingcute:right-fill"
            fontSize={24}
            className="pt-1 -ml-1"
          />
        </Link>
      </div>
    </div>
  );
};
