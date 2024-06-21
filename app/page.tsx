import LoginPage from "@/src/views/pages/home/LoginPage";
import DashboardPage from "@/src/views/pages/home/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Driver Hub",
  description:
    "Drive Hub is a specialized software solution designed to streamline the driver recruitment and onboarding process for YEGO, addressing the unique needs of the transportation industry in Rwanda. The platform focuses on efficiently recruiting qualified drivers, conducting necessary background checks, and facilitating comprehensive training programs to ensure a safe and reliable transportation service.",
};
export default function Home() {
  const user = {
    photoUrl: "https://i.pravatar.cc",
    name: "Lego Admin",
    role: "admin",
  };

  return !user ? <LoginPage /> : <DashboardPage />;
}
