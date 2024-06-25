"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    let user: string | null = null;
    useEffect(() => {
      const userStr: string | null = localStorage.getItem("user");
      user = JSON.parse(userStr);
      if (!user) {
        return redirect("/");
      }
    }, []);

    if (!user) {
      return null;
    }

    return <Component {...props} />;
  };
}
