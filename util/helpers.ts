// import { Poppins } from "next/font/google";

export const emailValidate = (email: string) => {
  if (!email) return "No Email Provided!";
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email).toLowerCase())) {
    return email;
  } else {
    return "Invalid Email!";
  }
};

// export const changeTextWeight = (fontWeight: string): string => {
//   const weight = fontWeight ? fontWeight : "100";
//   const poppins = Poppins({
//     subsets: ["latin"],
//     weight: `${fontWeight}`,
//   });

//   return poppins.className;
// };
