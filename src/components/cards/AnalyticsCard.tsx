import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const AnalyticsCard = ({ title, count }: { title: string; count: number }) => {
  return (
    <div className="w-full bg-white border text-textLightColor border-backgroundColor2 p-10 rounded-xl cursor-pointer hover:text-primary hover:border-primary max-sm:p-5 ">
      <p className="text-sm">{title}</p>
      <p className={`${poppins.className} pt-4 text-3xl`}>{count}</p>
    </div>
  );
};

export default AnalyticsCard;
