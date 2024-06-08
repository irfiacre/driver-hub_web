import LoginForm from "@/components/forms/LoginForm";
import LogoComponent from "@/components/logo/LogoComponent";

const background_img = "@/assets/taxi_car.jpg";
export default function Home() {
  return (
    <main className="flex flex-row">
      <div className="w-full flex flex-col justify-around items-center gap-10">
        <div>
          <LogoComponent />
        </div>
        <div>
          <p className="text-textDarkColor text-2xl font-semibold">
            Login to Dashboard
          </p>
          <p className="text-textLightColor text-sm text-center">
            Complete details to sign in
          </p>
        </div>
        <div className="w-full">
          <LoginForm />
        </div>
      </div>
      <div className=" w-full bg-taxiMeter"></div>
    </main>
  );
}
