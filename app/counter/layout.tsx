'use client';

import { LeftSidebar } from "../../components/lsidebar";
import { RightSidebar } from "../../components/rsidebar";
//import { playlists } from "../../data/playlist"
export default function DashBoardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-4 pt-4">
      <div className="hidden xl:block w-[20%]">
        <LeftSidebar  />
      </div>
      <div className="w-full lg:w-[80%] xl:w-[60%]">
        <div className="flex flex-col gap-6">
                    {children}
        </div>
      </div>
      <div className="hidden lg:block w-[20%]">
        <RightSidebar />
      </div>
</div>
  );
}
