"use client"

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      <div className="flex items-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-full">
          <img src="/images/hypenova-logo.png" alt="Hypenova Logo" width={80} height={80} className="rounded-full" />
        </div>
        <span className="ml-2 text-white font-light text-2xl">Hypenova</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          disabled
          className="px-6 py-2 rounded-full bg-gray-600 text-gray-400 font-normal text-sm opacity-60 cursor-not-allowed"
        >
          Enter App
        </button>
      </div>
    </header>
  )
}
