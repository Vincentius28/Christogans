import Image from "next/image";
import Link from "next/link";
import { WISHLIST, COMPARE, LOGIN, MENU, DOWNARROW, HELP, SEARCH } from "./svg";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="bg-white h-auto w-full flex items-center flex-row justify-between p-2">
        <p className="hidden md:block">
          Now, Shopping is easy! Prices are subject to change, kindly call for
          prices.
        </p>
        <div className="flex flex-row text-black text-xs gap-2">
          <Link href={""} className="p-1 flex items-center gap-1">
            <COMPARE />
            <p>COMPARE</p>
          </Link>
          <Link href={""} className="p-1 flex items-center gap-1">
            <WISHLIST />
            <p>WISHLIST</p>
          </Link>
          <Link href={""} className="p-1 flex items-center gap-1">
            <LOGIN />
            <p>LOGIN {"/"} REGISTER</p>
          </Link>
        </div>
      </div>
      <div className="bg-purp h-auto w-full flex items-center w-full justify-center">
        <div className="flex flex-col md:flex-row w-full flex items-center w-full max-w-7xl justify-between">
          <Image
            src={require("../public/logo.png")}
            className="hidden md:block w-72 h-14 "
          />
          <div className="flex flex-row py-4 text-xs text-white gap-2 md:text-base">
            <Link href={""}>
              <p>HOME</p>
            </Link>
            <Link href={""}>
              <p>ABOUT US</p>
            </Link>
            <Link href={""}>
              <p>CONTACT</p>
            </Link>
            <Link href={""}>
              <p>OUR BLOG</p>
            </Link>
            <Link href={""}>
              <p>ACCESORIES</p>
            </Link>
            <Link href={""}>
              <p>CATALOGUE</p>
            </Link>
          </div>
          <div className="flex items-center gap-x-2">
            <Image src={require("../public/facebook.png")} />
            <Image src={require("../public/twitter.png")} />
            <Image src={require("../public/instagram.png")} />
            <Image src={require("../public/telegram.png")} />
            <Image src={require("../public/youtube.png")} />
          </div>
        </div>
      </div>
      <div className="bg-purp h-20 w-full flex items-center w-full justify-center">
        <div className="w-full flex items-center w-full max-w-7xl justify-between gap-4 px-2 ">
          <div className="relative">
            <button
              className={`w-10 md:w-52 flex outline-none items-center justify-between bg-ora p-2 rounded-md`}
              onClick={() => setOpen(!open)}
            >
              <MENU />
              <p className="text-white hidden md:block">Browse Category</p>
              <div className="hidden md:block">
                <DOWNARROW />
              </div>
            </button>

            <div
              className={`${
                open ? "" : "hidden"
              } absolute w-52 top-12 h-fit bg-white z-30 border border-black rounded-md rounded-md`}
            >
              <Link href={""}>
                <p className="p-4 border-b border-black">New Arrival</p>
              </Link>
              <Link href={""}>
                <p className="p-4 border-b border-black">Phones</p>
              </Link>
              <Link href={""}>
                <p className="p-4 border-b border-black">Laptops</p>
              </Link>
              <Link href={""}>
                <p className="p-4 border-b border-black">Dekstops</p>
              </Link>
              <Link href={""}>
                <p className="p-4 border-b border-black">All About Gaming</p>
              </Link>
              <Link href={""}>
                <p className="p-4 border-b border-black">Phones Accsessories</p>
              </Link>
              <Link href={""}>
                <p className="p-4 border-b border-black">
                  Computer Accsessories
                </p>
              </Link>
              <Link href={""}>
                <p className="p-4 border-b border-black">
                  Networking, Projectors, Priters
                </p>
              </Link>
            </div>
          </div>
          <div className="w-full relative">
            <input
              className="py-2 pl-4 w-full outline-none rounded-md"
              placeholder="Search..."
            />
            <div className="absolute right-0 rounded-r-md top-0 bg-ora py-2 px-4">
              <SEARCH />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href={""} className="flex gap-2 items-center">
              <div className="w-8">
                <Image src={require("../public/headset.png")} />
              </div>
              <div className="pt text-white text-center text-xs hidden md:block">
                <p>SUPPORT_CENTER</p>
                <p>+6262332142</p>
              </div>
            </Link>
            <Link href={"/cart"} className="flex gap-2 items-center pl-2">
              <div className="w-8">
                <Image src={require("../public/tas.png")} />
              </div>
              <div className="pt text-white text-center text-xs hidden md:block">
                <p>Rp10.999.000</p>
                <p>1 Items</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
