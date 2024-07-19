import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Profile = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-2">
      <Link
        href="/"
        className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
      >
        <Image src="/posts.png" alt="" width={20} height={20} />
        <span>My Posts</span>
      </Link>
      <hr className="border-t-1 border-gray-50 w-36 self-center" />
      <Link
        href="/"
        className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
      >
        <Image src="/activity.png" alt="" width={20} height={20} />
        <span>Activity</span>
      </Link>
      <hr className="border-t-1 border-gray-50 w-36 self-center" />
      <Link
        href="/"
        className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
      >
        <Image src="/market.png" alt="" width={20} height={20} />
        <span>Marketplace</span>
      </Link>
      </div>
  )
}

export default Profile
