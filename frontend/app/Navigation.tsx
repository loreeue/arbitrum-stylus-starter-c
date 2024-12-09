"use client"

import Image from "next/image"

import ConnectButton from "./ConnectButton"

export default function Navigation() {
  return (
    <nav className="max-w-screen-2xl mx-auto mt-4 b-red-200  flex w-full justify-between gap-4 items-center h-16">
      <nav className="flex gap-1 items-center">
        <figure className="max-w-[3rem] bg-red-200">
          <Image className="w-full" src="/banner.png" width="200" height="150" alt="" />
        </figure>
        <strong className="text-lg">NALANDA</strong>
      </nav>
      <ConnectButton />
    </nav>
  )
}
