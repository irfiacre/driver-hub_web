"use client";
import LoginPage from "@/src/views/pages/home/LoginPage";
import DashboardPage from "@/src/views/pages/home/Dashboard";
import { Metadata } from "next";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: "Driver Hub",
//   description:
//     "Drive Hub is a specialized software solution designed to streamline the driver recruitment and onboarding process for YEGO, addressing the unique needs of the transportation industry in Rwanda. The platform focuses on efficiently recruiting qualified drivers, conducting necessary background checks, and facilitating comprehensive training programs to ensure a safe and reliable transportation service.",
// };
export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
  }, []);

  return !user ? <LoginPage /> : <DashboardPage />;
}
