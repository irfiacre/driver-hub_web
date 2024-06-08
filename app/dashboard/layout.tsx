import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { primaryColorBg } from "@/constants/colors";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
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
  return (
    <html lang="en">
      <body
        className={poppins.className}
        style={{ backgroundColor: primaryColorBg }}
      >
        {children}
      </body>
    </html>
  );
}
