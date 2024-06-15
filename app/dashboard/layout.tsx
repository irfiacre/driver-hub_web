import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { primaryColorBg } from "@/constants/colors";
import { Sidebar } from "@/src/views/navigation/sidebar/Sidebar";
import TopNav from "@/src/views/navigation/topNavbar/TopNav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Drive Hub is a specialized software solution designed to streamline the driver recruitment and onboarding process for YEGO, addressing the unique needs of the transportation industry in Rwanda. The platform focuses on efficiently recruiting qualified drivers, conducting necessary background checks, and facilitating comprehensive training programs to ensure a safe and reliable transportation service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
        style={{ backgroundColor: primaryColorBg }}
      >
        <div className="flex flex-row">
          <div className="w-2/6">
            <Sidebar />
          </div>

          <main className="w-full p-6 mt-8">
            <div className="">
              <TopNav />
            </div>
            <div>{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
