import React from "react";
import { Icon } from "@iconify/react";
import { primaryColor } from "@/constants/colors";
import { Poppins } from "next/font/google";
import LogoIcon from "./LogoIcon";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "800",
});

const LogoComponent = ({
  small,
  medium,
}: {
  small?: boolean;
  medium?: boolean;
}) => {
  const logoParams = {
    iconSize: small ? 50 : medium ? 80 : 110,
    fontSize1: small ? 22 : medium ? 32 : 48,
    fontSize2: small ? 34 : medium ? 48 : 88,
  };
  return (
    <div className="flex justify-center align-middle items-center gap-2">
      <LogoIcon size={logoParams.iconSize} />
      <div>
        <h1
          className="font-bold text-primary"
          style={{ fontSize: logoParams.fontSize1 }}
        >
          Driver
        </h1>
        <h1
          className={poppins.className}
          style={{
            fontSize: logoParams.fontSize2,
            color: primaryColor,
            lineHeight: 1,
          }}
        >
          Hub
        </h1>
      </div>
    </div>
  );
};

export default LogoComponent;
