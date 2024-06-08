import React from "react";
import { Icon } from "@iconify/react";
import { primaryColor } from "@/constants/colors";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "800",
});

const LogoComponent = () => {
  return (
    <div className="flex justify-evenly align-middle items-center gap-2">
      <div className="bg-primary p-2 rounded-md">
        <Icon
          icon="healthicons:truck-driver"
          fontSize={110}
          className="text-white"
        />
      </div>

      <div>
        <h1 className="text-5xl font-bold text-primary">Driver</h1>
        <h1
          className={poppins.className}
          style={{ fontSize: 88, color: primaryColor, lineHeight: 1 }}
        >
          Hub
        </h1>
      </div>
    </div>
  );
};

export default LogoComponent;
