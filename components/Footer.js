import React from "react";
import Image from "next/image";
import FbLogo from "../public/assets/fb_logo.svg";
import LinkedInLogo from "../public/assets/linkedin_logo.svg";
import InstaLogo from "../public/assets/insta_logo.svg";
import TwitterLogo from "../public/assets/twitter_logo.svg";

export default function Footer() {
    return(
        <footer className="flex flex-col w-full h-auto bg-primary items-center">
            <div className="flex flex-col w-[80%] gap-8 mt-[30px] mb-[30px]">
                <div className="flex flex-col gap-3">
                    <h2 className="text-secondary font-Redhat text-3xl font-bold">DOTSLASH</h2>
                    <div className="flex flex-row gap-4">
                        <button onClick={() => window.open("https://google.com")} className="flex flex-col items-center justify-center bg-secondary w-[35px] h-[35px] rounded-full cursor-pointer"><Image src={FbLogo} alt="Facebook" /></button>
                        <button onClick={() => window.open("https://google.com")} className="flex flex-col items-center justify-center bg-secondary w-[35px] h-[35px] rounded-full cursor-pointer"><Image src={LinkedInLogo} alt="LinkedIn" /></button>
                        <button onClick={() => window.open("https://google.com")} className="flex flex-col items-center justify-center bg-secondary w-[35px] h-[35px] rounded-full cursor-pointer"><Image src={InstaLogo} alt="Instagram" /></button>
                        <button onClick={() => window.open("https://google.com")} className="flex flex-col items-center justify-center bg-secondary w-[35px] h-[35px] rounded-full cursor-pointer"><Image src={TwitterLogo} alt="Twitter" /></button>
                    </div>
                </div>
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-col gap-2">
                        <p className="text-white text-base font-Redhat">PES University<br />100 Feet Ring Road, BSK III Stage, <br />Bangalore-560085</p>
                        <span className="text-[#6C6B6B] text-base font-Redhat">AT&#39;23 Tech & Design Team</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-white text-base font-Redhat">Contact Us</p>
                        <p className="text-white text-sm"></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}