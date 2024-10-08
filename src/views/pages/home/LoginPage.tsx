"use client";
import React, { useEffect, useState } from "react";
import LoginForm from "@/src/views/forms/LoginForm";
import LogoComponent from "@/src/components/logo/LogoComponent";
import { signExistingUser } from "@/services/firebase/authentication";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loginError, setLoginError] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/applications");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleLoginBtn = async (email: string, password: string) => {
    setLoading(true);
    const user: any = await signExistingUser(email, password);
    if (user.name?.includes("FirebaseError")) {
      setLoginError("Invalid User Credentials");
    } else if (user) {
      setUser(user);
    }
    setLoading(false);
  };
  return (
    <main className="flex flex-row">
      <div className="w-full flex flex-col items-center gap-2">
        <div className="mt-28">
          <LogoComponent />
        </div>
        <div>
          <p className="text-textDarkColor text-2xl font-semibold">
            Login to Dashboard
          </p>
          <p className="py-2 text-textLightColor text-sm text-center">
            Complete details to sign in
          </p>
        </div>
        <div className="w-full flex justify-center">
          <LoginForm
            handleLoginBtn={handleLoginBtn}
            loading={loading}
            loginError={loginError}
          />
        </div>
      </div>
      <div className="max-sm:hidden w-full bg-taxiMeter h-lvh bg-cover bg-no-repeat bg-center brightness-50"></div>
    </main>
  );
};

export default LoginPage;
