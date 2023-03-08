import React from "react";
import Image from "next/image";
import Link from "next/link";
import PesLogo from "../public/assets/pes_logo.svg";
import AtLogo from "../public/assets/at_logo.svg";
import BurgerIcon from "../public/assets/burger_icon.svg";
import { useEffect, useState } from "react";

export default function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 90) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", () => {});
        } 
    }, [])

    return (
        <nav className={`w-full flex flex-row h-[80px] fixed z-50 ${show && "backdrop-blur-[20px]"}`}>
            <div className="hidden md:w-full md:h-full md:flex-row md:items-center md:flex md:flex-row md:items-center md:pl-[20px] md:pr-[20px] md:justify-between">
                <Link className="h-full flex flex-col justify-center" href="/">
                    <Image className="h-[90%]" priority src={PesLogo} alt="PES University" />
                </Link>
                <div className="flex flex-row items-center gap-20 font-Mouse text-white">
                    <Link className="hover:text-secondary" href="/">HOME</Link>
                    <Link className="hover:text-secondary" href="/">SPONSORS</Link>
                    <Link className="hover:text-secondary" href="/">AT23</Link>
                    <Link className="hover:text-secondary" href="/register">REGISTER</Link>
                </div>
                <Image className="h-[90%]" priority src={AtLogo} alt="Aatmatrisha 2023" />
            </div>
            <div className="flex relative flex-row items-center w-full justify-center md:hidden">
                <button className="absolute left-[20px]"><Image className="h-[90%]" priority src={BurgerIcon} alt="Menu" /></button>
                <Image className="h-[80%]" priority src={AtLogo} alt="Aatmatrisha 2023" />
                <Image className="h-[80%] absolute right-[5px]" priority src={PesLogo} alt="PES University" />
            </div>
        </nav>
    )
}