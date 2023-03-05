import React from "react";
import Image from "next/image";
import Link from "next/link";
import PesLogo from "../public/assets/pes_logo.svg";
import AtLogo from "../public/assets/at_logo.svg";

export default function Nav() {
    return (
        <nav className="w-full bg-red-500 flex flex-row h-[80px] fixed z-50">
            <div className="hidden md:w-full md:h-full md:flex-row md:items-center md:flex md:flex-row md:items-center md:pl-[20px] md:pr-[20px] md:justify-between md:bg-red-600">
                <Link href="/">
                    <Image src={PesLogo} alt="PES University" />
                </Link>
                <div className="flex flex-row items-center gap-5">
                    <Link href="/">HOME</Link>
                    <Link href="/">SPONSORS</Link>
                    <Link href="/">AT23</Link>
                </div>
                <Image src={AtLogo} alt="Aatmatrisha 2023" />
            </div>
            <div className="flex flex-row items-center w-full pl-[20px] pr-[20px] justify-between md:hidden">
                <button><Image alt="Menu" /></button>
                <Image alt="Aatmatrisha 2023" />
                <Image alt="PES University" />
            </div>
        </nav>
    )
}