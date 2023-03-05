import styles from '@/styles/Home.module.css'
import Image from "next/image";
import GlobeImage from "../public/assets/hero_globe.svg";
import DotslashLogo from "../public/assets/dotslash_logo.svg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex flex-col h-screen w-full bg-red-500 items-center justify-center relative">
        <Image src="" alt="" />
        <Image src="" alt="" />
        <Image className="absolute left-[20px] top-[20%]" src={DotslashLogo} alt="" />
        <Image className="absolute w-full" src={GlobeImage} alt="" />
        <div className="flex flex-col items-center justify-center gap-5 absolute">
          <h1 className="font-Redhat text-7xl font-extrabold text-white select-none">dotSlash4<span className="text-secondary">.</span>0</h1>
          <h2 className="text-white font-Poppins font-semibold text-xl">HACKUS POCKUS</h2>
        </div>
      </div>
    </div>
  )
}
