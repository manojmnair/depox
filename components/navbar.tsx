"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { ConnectWalletButton } from "./connectWallet";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./mobilemenu";
import { useAccount } from 'wagmi';
import { useTheme } from "next-themes"


export function Navbar() {

  const { address } = useAccount()
  const { theme, setTheme } = useTheme();
  
  return (
    <div className="sticky top-0 left-0 h-16 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link className="flex flex-row" href="/">
          {/* <div className="flex flex-row"> */}
          <Image
            width={36}
            height={36}
            src="/logo.png"
            className="w-9 h-9 mr-3 mt-1 "
            alt="logo"
          />
          <span className="text-md  uppercase text-blue-700 dark:text-blue-300 hover:decoration-blue-400 decoration-double font-dosis mt-3">Depox</span>
          {/* </div> */}
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        {/* LINKS */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/home.png"
              alt="Home"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Home</span>
          </Link>
          <Link href="/greeting" className="flex items-center gap-2">
            <Image
              src="/friends.png"
              alt="Greeting"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Greeting</span>
          </Link>
          <Link href="/counter" className="flex items-center gap-2">
            <Image
              src="/stories.png"
              alt="Stories"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Counter</span>
          </Link>
        </div>
{/*         <div className='hidden xl:flex p-2 bg-slate-100 items-center rounded-xl'>
          <input type="text" placeholder="search..." className="bg-transparent outline-none" />
          <Image src="/search.png" alt="" width={14} height={14} />
        </div> */}
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        {address ?
          <div className="hidden md:flex  flex-row items-end">
            <Button variant="outline" className="text-[#0891b2] hover:text-[#0f766e] dark:text-[#2dd4bf] "><Link href="/counter">Deposit</Link></Button>
            <Button variant="outline" className="ml-3 text-[#be185d] dark:text-[#fb7185] hover:text-[#be123c] "><Link href="/counter">Withdraw</Link></Button>
          </div> : <></>
        }
        <ConnectWalletButton />
{/*         <Button variant="outline" size="icon" className="mr-3 bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800"
          onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
>
          <SunIcon className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>  */}
        <MobileMenu />
      </div>
    </div>
  );
};


