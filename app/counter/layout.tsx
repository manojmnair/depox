'use client';

import { LeftSidebar } from "../../components/lsidebar";
import { RightSidebar } from "../../components/rsidebar";
import { playlists } from "../../data/playlist"
export default function DashBoardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="grid lg:grid-cols-6  ">
        <LeftSidebar playlists={playlists} className="hidden lg:block" />
        <div className="col-span-4 space-y-4 py-4 bg-[#e2e8f0] dark:bg-[#1e293b] rounded-md mt-2">
                    {children}
                </div>
        <RightSidebar playlists={playlists} className="hidden lg:block" />
            </div>
</>
  );
}
