"use client";
import PillComponent from "@/src/components/PillComponent";
import BaseCard from "@/src/components/cards/BaseCard";
import ImageModel from "@/src/components/models/ImageModel";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const Application = () => {
  const params = useParams();
  console.log(params);
  const application = {
    applicant: {
      name: "Lego Applicant",
      photoUrl: "https://i.pravatar.cc",
      id: params?.id,
    },
    nationalID: "XXXXX-XXXX-XXX",
    driverLicenseNumber: "XXXXX-XXXX-XXX",
    documents: [
      {
        name: "national id",
        type: "jpeg",
        url: "https://picsum.photos/400/500.jpg",
      },
      {
        name: "Proof of ownership",
        type: "jpeg",
        url: "https://picsum.photos/400/500.jpg",
      },
      {
        name: "Certificate of Good Conduct",
        type: "jpeg",
        url: "https://picsum.photos/400/500.jpg",
      },
      {
        name: "Last car checkup",
        type: "jpeg",
        url: "https://picsum.photos/400/500.jpg",
      },
    ],
    onboardingPlan: [
      { title: "Introduction", duration: 140 },
      { title: "[HowTo] - Driver Tool Kit", duration: 100 },
      { title: "Road Safety", duration: 90 },
    ],
  };

  return (
    <BaseCard className="px-10 py-5 flex flex-row divide-x-1">
      <div>
        <Image
          className="rounded-xl cursor-pointer w-52 bg-textLightColor"
          loader={() => application.applicant.photoUrl}
          src={application.applicant.photoUrl}
          alt="Applicant photo"
          height={100}
          width={100}
          unoptimized
        />
        <h1>{application.applicant.name}</h1>
        <div>
          <p>
            NationalID number:<span>{application.nationalID}</span>
          </p>
          <p>
            Driver License Number:
            <span>{application.driverLicenseNumber}</span>
          </p>
        </div>
        <ImageModel title="xxxzzz" imageUrl="xxxyyy" open={false} />
        <h2>Documents</h2>
        <div className="flex flex-row flex-wrap">
          {application.documents.map((document) => (
            <PillComponent key={document.name} text={document.name} />
          ))}
        </div>
      </div>
      <div>
        <h1>Trainings</h1>
      </div>
    </BaseCard>
  );
};

export default Application;
