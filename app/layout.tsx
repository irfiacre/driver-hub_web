import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { primaryColorBg } from "@/constants/colors";
import { Sidebar } from "@/src/views/navigation/sidebar/Sidebar";
import TopNav from "@/src/views/navigation/topNavbar/TopNav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Driver Hub",
  description:
    "Drive Hub is a specialized software solution designed to streamline the driver recruitment and onboarding process for YEGO, addressing the unique needs of the transportation industry in Rwanda. The platform focuses on efficiently recruiting qualified drivers, conducting necessary background checks, and facilitating comprehensive training programs to ensure a safe and reliable transportation service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = {
    photoUrl: "https://i.pravatar.cc",
    name: "Lego Admin",
  };

  return (
    <html lang="en">
      <body
        className={poppins.className}
        style={{ backgroundColor: primaryColorBg }}
      >
        {!user ? (
          children
        ) : (
          <div className="flex flex-row">
            <div className="w-2/6">
              <Sidebar />
            </div>

            <main className="w-full p-6 mt-8">
              <div className="">
                <TopNav user={user} title="Overview" />
              </div>
              <div>{children}</div>
            </main>
          </div>
        )}
      </body>
    </html>
  );
}
