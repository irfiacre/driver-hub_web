import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const ThirdSection = () => {
  const metrics = [
    { icon: "octicon:people-16", title: "Drivers", amount: "150,100" },
    { icon: "carbon:document", title: "Applications", amount: "150,264" },
    { icon: "mdi:company", title: "Consultations", amount: "828,867" },
    {
      icon: "icon-park-outline:cooperative-handshake",
      title: "Cooperatives",
      amount: "438",
    },
  ];
  return (
    <section className="px-36 py-16 flex flex-row items-center  justify-between bg-backgroundColor3/10 max-md:px-5 max-md:flex-wrap max-md:space-y-10">
      <div>
        <p className="text-textDarkColor text-4xl font-medium max-md:text-3xl">
          Helping a local
        </p>
        <p className="text-primary text-4xl font-medium max-md:text-3xl">
          Industry reinvent itself
        </p>
        <p className="text-textLightColor pt-5">
          We reached here with our hard work and dedication!
        </p>
      </div>
      <div className="w-2/4 grid grid-cols-2 gap-4 max-md:w-full">
        {metrics.map((item) => (
          <div key={item.title} className="flex flex-row items-center gap-8">
            <div>
              <Icon
                icon={item.icon}
                fontSize={48}
                className="text-primary -mx-4"
              />
            </div>
            <div>
              <p className="text-textDarkColor text-2xl font-bold max-md:text-xl">
                {item.amount}
              </p>
              <p className="text-textLightColor">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThirdSection;
