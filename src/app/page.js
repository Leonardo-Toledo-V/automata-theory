"use client"

import CardNext from "./components/Card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <h1 className="text-3xl text-center xl:text-7xl font-interBold mb-4">
          <span className="bg-gradient-to-r from-[#ccd0d3] to-[#2c3e50] text-transparent bg-clip-text">Lenguages and automata</span>
        </h1>
      </div>
      <div className="font-inter">
        <CardNext />
      </div>
    </main>
  )
}
