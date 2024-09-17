"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { VT323 } from 'next/font/google'
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const fearvt23 = localFont({
  src: "../../app/VT323-Regular.ttf",
})


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!open);
  };
  type navMenu = {
    id: number,
    link: string,
    name: string,
  }

  const someCondition = true;
  const about: string | undefined = someCondition ? "#about" : undefined;
  const home: string | undefined = someCondition ? "#home" : undefined;
  const faculty: string | undefined = someCondition ? "#faculty" : undefined;
  const sjcet: string | undefined = someCondition ? "#sjcet" : undefined;
  const contact: string | undefined = someCondition ? "#contact" : undefined;
  

  const links = [
    {
      id: 1,
      name: home ?? "#home", 
      link: "Home",         
    },
    {
      id: 2,
      name: about ?? "#about",
      link: "About",
    },
    {
      id: 3,
      name: faculty ?? "#faculty",
      link: "Faculty",
    },
    {
      id: 4,
      name: sjcet ?? "#sjcet",
      link: "SJCET",
    },
    {
      id: 5,
      name: contact ?? "#contact",
      link: "Contact",
    },
  ];

  return (
    <div className={cn("z-50 fixed top-0 pt-4 w-full bg-transparent border-transparent flex justify-between items-center text-center text-2xl nav", fearvt23.className)}>
      <div>


        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, name, link }:navMenu) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={name}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>


      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={name}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Navbar;

function setIsOpen(arg0: boolean) {
  throw new Error("Function not implemented.");
}