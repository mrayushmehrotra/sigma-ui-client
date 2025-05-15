import { Hero } from "@/components/main/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  flex-col gap-[32px] row-start-2 items-center sm:items-start ">
      <Hero />
      <div className="h-screen gap-12 flex items-center justify-center">
        <div className=" w-[30%] text-right">
          <h3 className="text-6xl text-[FiraSans] ">
            A Component UI Library that makes your website building 10x fast
          </h3>
        </div>
        <div className="  bg-blue-800 ">
          <Image height={300} width={400} alt="log" src="/sigma_ui.png" />
        </div>
      </div>
    </main>
  );
}
