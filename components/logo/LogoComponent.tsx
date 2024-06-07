import React from "react";
import { Icon } from "@iconify/react";
import { primaryColor } from "@/constants/colors";

const LogoComponent = () => {
  return (
    <div>
      <Icon
        icon="healthicons:truck-driver"
        fontSize={70}
        color={primaryColor}
      />
    </div>
  );
};

export default LogoComponent;
