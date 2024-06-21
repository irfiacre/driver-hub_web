export const COURSES_ARRAY = [
  { id: "xxxxxx1", title: "Introduction", duration: 1 },
  { id: "xxxxxx2", title: "KJDKKS", duration: 1 },
  { id: "xxxxxx3", title: "UWUTOQUEWRIQ", duration: 1 },
  { id: "xxxxxx4", title: "KHAJBSDVHJASKVBHJAKSD", duration: 1 },
];

export const APPLICATION_DETAILS = {
  applicant: {
    name: "Lego Applicant",
    photoUrl: "https://i.pravatar.cc",
    id: 1,
  },
  nationalID: "XXXXX-XXXX-XXX",
  driverLicenseNumber: "XXXXX-XXXX-XXX",
  createdAt: new Date(),
  status: "pending",
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
    { title: "Introduction", duration: 1 },
    { title: "[HowTo] - Driver Tool Kit", duration: 1.5 },
    { title: "Road Safety", duration: 0.5 },
  ],
};

export const OFFICER = {
  photoUrl: "https://i.pravatar.cc",
  name: "YEGO Officer",
  role: "officer",
};

export const ADMIN = {
  photoUrl: "https://i.pravatar.cc",
  name: "YEGO Admin",
  role: "admin",
};

export const APPLICANT = {
  photoUrl: "https://i.pravatar.cc",
  name: `YEGO Applicant - ${Math.round(Math.random() * 1000)}`,
  role: "driver",
  id: `${Math.round(Math.random() * 1000)}-driver`,
};

export const generateApplicant = () => ({
  photoUrl: "https://i.pravatar.cc",
  name: `YEGO Applicant - ${Math.round(Math.random() * 1000)}`,
  role: "driver",
  id: `${Math.round(Math.random() * 1000)}-driver`,
});
