import LoginPage from "@/src/views/pages/home/LoginPage";
import DashboardPage from "@/src/views/pages/home/Dashboard";

export default function Home() {
  const user = {
    photoUrl: "https://i.pravatar.cc",
    name: "Lego Admin",
  };
  return !user ? <LoginPage /> : <DashboardPage />;
}
