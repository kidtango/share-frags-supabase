import React, { FC } from 'react'

import Link from 'next/link'

interface IMonkfishLogo {
  theme?: 'light' | 'dark'
}

const ShareFragLogo: FC<IMonkfishLogo> = () => (
  <Link href="/">
    <div className="flex items-center text-4xl font-bold hover:opacity-70 text-primary-400 hover:cursor-pointer">
      <span className="text-3xl text-primary-400 font-cursive">Share</span>
      <span className="text-3xl text-pink-600 font-cursive">F</span>
      <span className="text-3xl text-pink-600 font-cursive">rags</span>
    </div>
  </Link>
)


export default ShareFragLogo
