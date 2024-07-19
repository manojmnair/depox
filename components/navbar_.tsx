
"use client"

import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarLabel,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "./ui/menubar"
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { ConnectWalletButton } from "./connectWallet"
import Image from "next/image"
import Link from "next/link"
import MobileMenu from "./mobilemenu"
import { useAccount } from 'wagmi'
import { useTheme } from "next-themes"


export function Navbar() {
    const { address } = useAccount()

    const { theme, setTheme } = useTheme();
    return (
        <>
            <Menubar className="sticky top-0 left-0 w-full h-15 z-10 flex flex-row items-center justify-between px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32 bg-[#e2e8f0] dark:bg-[#1e293b] rounded  ml-1 mr-1 shadow-md shadow-gray-900/50 dark:shadow-gray-200/50">
               
{/* START */}
                <div className="w-[20%] ">
 
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
{/* MIDDLE */}


                <div className="md:flex flex-row px-3 w-[30%] items-center hidden ">
                    <MenubarMenu>
                        <MenubarTrigger className="font-bold">Home</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>About Music</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>
                                Preferences... <MenubarShortcut>⌘,</MenubarShortcut>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>
                                Hide Music... <MenubarShortcut>⌘H</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>
                                Hide Others... <MenubarShortcut>⇧⌘H</MenubarShortcut>
                            </MenubarItem>
                            <MenubarShortcut />
                            <MenubarItem>
                                Quit Music <MenubarShortcut>⌘Q</MenubarShortcut>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="relative">File</MenubarTrigger>
                        <MenubarContent>
                            <MenubarSub>
                                <MenubarSubTrigger>New</MenubarSubTrigger>
                                <MenubarSubContent className="w-[230px]">
                                    <MenubarItem>
                                        Playlist <MenubarShortcut>⌘N</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem disabled>
                                        Playlist from Selection <MenubarShortcut>⇧⌘N</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        Smart Playlist... <MenubarShortcut>⌥⌘N</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>Playlist Folder</MenubarItem>
                                    <MenubarItem disabled>Genius Playlist</MenubarItem>
                                </MenubarSubContent>
                            </MenubarSub>
                            <MenubarItem>
                                Open Stream URL... <MenubarShortcut>⌘U</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>
                                Close Window <MenubarShortcut>⌘W</MenubarShortcut>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarSub>
                                <MenubarSubTrigger>Library</MenubarSubTrigger>
                                <MenubarSubContent>
                                    <MenubarItem>Update Cloud Library</MenubarItem>
                                    <MenubarItem>Update Genius</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Organize Library...</MenubarItem>
                                    <MenubarItem>Export Library...</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Import Playlist...</MenubarItem>
                                    <MenubarItem disabled>Export Playlist...</MenubarItem>
                                    <MenubarItem>Show Duplicate Items</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Get Album Artwork</MenubarItem>
                                    <MenubarItem disabled>Get Track Names</MenubarItem>
                                </MenubarSubContent>
                            </MenubarSub>
                            <MenubarItem>
                                Import... <MenubarShortcut>⌘O</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem disabled>Burn Playlist to Disc...</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>
                                Show in Finder <MenubarShortcut>⇧⌘R</MenubarShortcut>{" "}
                            </MenubarItem>
                            <MenubarItem>Convert</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Page Setup...</MenubarItem>
                            <MenubarItem disabled>
                                Print... <MenubarShortcut>⌘P</MenubarShortcut>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Edit</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem disabled>
                                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem disabled>
                                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem disabled>
                                Cut <MenubarShortcut>⌘X</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem disabled>
                                Copy <MenubarShortcut>⌘C</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem disabled>
                                Paste <MenubarShortcut>⌘V</MenubarShortcut>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>
                                Select All <MenubarShortcut>⌘A</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem disabled>
                                Deselect All <MenubarShortcut>⇧⌘A</MenubarShortcut>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>
                                Smart Dictation...{" "}
                                <MenubarShortcut>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                                        <circle cx="17" cy="7" r="5" />
                                    </svg>
                                </MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>
                                Emoji & Symbols{" "}
                                <MenubarShortcut>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                </MenubarShortcut>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>View</MenubarTrigger>
                        <MenubarContent>
                            <MenubarCheckboxItem><Link href="/about">About</Link></MenubarCheckboxItem>
                            <MenubarCheckboxItem><Link href="/dashboard/analytics">Analytics</Link></MenubarCheckboxItem>
                            <MenubarCheckboxItem><Link href="/counter">Counter</Link></MenubarCheckboxItem>
                            <MenubarCheckboxItem><Link href="/greeting">Greeting</Link></MenubarCheckboxItem>

                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="hidden md:block">Account</MenubarTrigger>
                        <MenubarContent forceMount>
                            <MenubarLabel inset>Switch Account</MenubarLabel>
                            <MenubarSeparator />
                            <MenubarRadioGroup value="benoit">
                                <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                                <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                            </MenubarRadioGroup>
                            <MenubarSeparator />
                            <MenubarItem inset>Manage Family...</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem inset>Add Account...</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>


                    <MenubarMenu>
                        <MenubarTrigger className="font-bold">Counter</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem><Link href="/counter">Counter</Link></MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>
                                Preferences... <MenubarShortcut>⌘,</MenubarShortcut>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>
                                Hide Music... <MenubarShortcut>⌘H</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>
                                Hide Others... <MenubarShortcut>⇧⌘H</MenubarShortcut>
                            </MenubarItem>
                            <MenubarShortcut />
                            <MenubarItem>
                                Quit Music <MenubarShortcut>⌘Q</MenubarShortcut>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
{/*                    {address ?
                        <div className="w-[20%] flex flex-row items-end">
                            <Button variant="outline" className="bg-green-300 hover: bg-green-200 dark:bg-green-500 dark:hover:bg-green-400"><Link href="/counter">Deposit</Link></Button>
                            <Button variant="outline" className="ml-3 bg-red-300 hover: bg-red-200 dark:bg-red-500 dark:hover:bg-red-400"><Link href="/counter">Withdraw</Link></Button>
                        </div> : <></>
                    } 
                </div> */}

                </div>
{/* RIGHT */}

                    <div className="hidden lg:flex flex-row w-[30%] ">
                {address ?
                    <div className="flex flex-row items-end">
                        <Button variant="outline" className="text-[#0891b2] hover:text-[#0f766e] dark:text-[#2dd4bf] bg-[#cbd5e1] hover:bg-[#94a3b8] dark:bg-[#64748b] dark:hover:bg-[#475569]"><Link href="/counter">Deposit</Link></Button>
                        <Button variant="outline" className="ml-3 text-[#be185d] dark:text-[#fb7185] hover:text-[#be123c] bg-[#cbd5e1] hover:bg-[#94a3b8] dark:bg-[#64748b] dark:hover:bg-[#475569]"><Link href="/counter">Withdraw</Link></Button>
                    </div> : <></>
                }


                <div className="w-[30%] hidden lg:flex flex-row mt-1   items-end ml-11">
{/*                     {address?
                    <Image
                        width={36}
                        height={36}
                        className="w-8 h-8 md:w-9 mr-11"
                        src={`https://effigy.im/a/${address}.png`}
                        alt="Address"
                    />:<></>
                    } */}
                    <ConnectWalletButton />

                    <Button variant="outline" size="icon" className="mr-3 "
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        <SunIcon className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <MoonIcon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button> 
                        </div>
 
                </div>
                <MobileMenu /> 


            </Menubar>

        </>
    )
}
