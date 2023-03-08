import styles from '@/styles/Home.module.css'
import Image from "next/image";
import GlobeImage from "../public/assets/hero_globe.svg";
import DotslashLogo from "../public/assets/dotslash_logo.svg";
import Vector1 from "../public/assets/hero_img1.svg";
import Vector2 from "../public/assets/hero_img2.svg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden">
      <div className="flex flex-col h-screen w-full bg-primary items-center justify-center relative">
        <Image className="absolute bottom-[10%] left-[-30px] h-60 w-60 md:bottom-[15%]" priority src={Vector1} alt="Vector1" />
        <Image className="absolute top-[10%] right-[-40px] h-48 w-48 md:top-[15%]" priority src={Vector2} alt="Vector2" />
        <Image className="absolute left-[10%] top-[20%] h-20 w-20" priority src={DotslashLogo} alt="DotSlash" />
        <Image className="absolute w-full md:h-[90%]" priority src={GlobeImage} alt="Globe" />
        <div className="flex flex-col items-center justify-center gap-5 absolute">
          <h1 className="font-Redhat text-7xl font-extrabold text-white select-none md:text-9xl">dotSlash4<span className="text-secondary">.</span>0</h1>
          <h2 className="text-white font-Poppins font-semibold text-xl select-none md:text-2xl">HACKUS POCKUS</h2>
        </div>
      </div>
      {/* hero ends here */}

      <div>
        <h2>SPONSORS</h2>
        <div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>
      {/* sponsors section ends here */}

      <div>
        <Image src="" alt="Vector3" />
        <div>
          <h2>What is dotSlash</h2>
          <p>Lorem ipsum dolor</p>
        </div>
        <Image src="" alt="Vector4" />
      </div>
    </div>
  )
}
