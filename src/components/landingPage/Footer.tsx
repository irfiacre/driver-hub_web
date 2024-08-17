"use client";
import React, { useState } from "react";
import LogoIcon from "../logo/LogoIcon";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
  const socialMedia = [
    { icon: "jam:linkedin", url: "https://www.linkedin.com/in/irfiacre/" },
    { icon: "mdi:github", url: "https://github.com/irfiacre" },
    { icon: "mdi:instagram", url: "https://www.instagram.com/irfiacre/" },
    { icon: "ant-design:x-outlined", url: "https://x.com/irfiacre" },
  ];
  const [email, setEmail] = useState("");

  return (
    <footer className="px-36 py-10 bg-footerBackground flex flex-row items-center justify-between max-md:px-5 max-md:flex-wrap max-md:space-y-10">
      <div className="space-y-10">
        <div className="flex items-center">
          <LogoIcon color="#263238" size={40} />
          <span className="text-white text-4xl font-semibold">Driver Hub</span>
        </div>
        <div>
          <p className="text-white text-sm pl-2">
            Copyright © 2024 Iradukunda Allelua Fiacre.
          </p>
          <p className="text-white text-sm pl-2 py-2">All rights reserved</p>
        </div>
        <div className="pl-2 flex flex-row items-center justify-start gap-5">
          {socialMedia.map((elt) => (
            <div key={elt.url} className="p-2 bg-white/10 rounded-full z-50">
              <a href={elt.url} target="_blank" className="z-1">
                <Icon
                  icon={elt.icon}
                  fontSize={18}
                  className="text-white opacity-100"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/4 flex flex-row items-start justify-between gap-5 max-md:flex-wrap max-md:space-y-10 max-md:pl-2">
        <div className="space-y-4 max-md:w-full">
          <p className="text-white text-xl font-semibold">Support</p>
          <p>
            <a
              href="#"
              className="text-white text-sm font-extralight hover:underline"
            >
              Download our App
            </a>
          </p>
          <p>
            <a
              href="/dashboard"
              className="text-white text-sm font-extralight hover:underline"
            >
              Login
            </a>
          </p>
          <p>
            <a
              href="https://yegomoto.com/en/terms-and-conditions.html"
              target="_blank"
              className="text-white text-sm  font-extralight hover:underline"
            >
              Terms of service
            </a>
          </p>
          <p>
            <a
              href="https://yegomoto.com/en/privacy-policy.html"
              target="_blank"
              className="text-white text-sm font-extralight hover:underline"
            >
              Privacy policy
            </a>
          </p>
        </div>
        <div className="space-y-4 max-md:w-full">
          <p className="text-white text-xl">Stay up to date</p>
          <div>
            <label
              htmlFor="emailInput"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="email"
                id="emailInput"
                className="rounded-md w-full p-4 ps-10 h-12 bg-white/10 border text-white border-borderColorLight focus:bg-white/10 focus:border-borderColorLight text-md focus:outline-none"
                placeholder="Enter Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none cursor-pointer">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
