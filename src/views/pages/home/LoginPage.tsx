import LoginForm from "@/src/views/forms/LoginForm";
import LogoComponent from "@/src/components/logo/LogoComponent";

const LoginPage = () => {
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
          <LoginForm />
        </div>
      </div>
      <div className="max-sm:hidden w-full bg-taxiMeter h-lvh bg-cover bg-no-repeat bg-center brightness-50"></div>
    </main>
  );
};

export default LoginPage;
