"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function ContactItem({ href, title, icon, arrow }) {
  return (
    <Link
      href=""
      className="flex w-full h-auto hover:cursor-pointer hover:bg-[whitesmoke] peer"
    >
      <div className="flex justify-between items-center w-full p-4 text-center">
        <div className="flex justify-center items-center gap-3">
          <span className="">
            <Image
              src={EmptySmiley}
              alt="black and white Empty smiley"
              height={35}
              width={35}
            />
          </span>
          <h1 className="">Youtube</h1>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={CoveredArrow}
            alt="black and white Empty smiley"
            height={35}
            width={35}
            className="peer-hover:hidden"
          />
        </div>
      </div>
    </Link>
  );
}
