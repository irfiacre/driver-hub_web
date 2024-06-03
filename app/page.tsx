import LogoComponent from "@/components/logo/LogoComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LogoComponent />
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <h1>Welcome to Driver hub</h1>
      </div>
    </main>
  );
}
