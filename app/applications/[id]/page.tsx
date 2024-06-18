"use client";
import { useParams } from "next/navigation";
import React from "react";

const Application = () => {
  const params = useParams();
  console.log(params);

  return (
    <div className="flex flex-col gap-3">
      <div>
        <h1> Application For user {params?.id}</h1>
      </div>
    </div>
  );
};

export default Application;
