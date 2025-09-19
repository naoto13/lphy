"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import ShaderBackground from "@/components/shader-background"

export default function HypernovaLanding() {
  return (
    <ShaderBackground>
      <Header />
      <HeroContent />

      <section className="relative z-20 py-6 text-center mb-45">
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="text-white/80 text-4xl font-light">
            <span>Built on</span>
          </div>
          <img
            src="https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/825368/HL_logo_green_and_white-90178d06-0840-400b-82d5-11bfef47a61a.png"
            alt="Hyperliquid Logo"
            width={320}
            height={320}
            className="object-contain mb-8"
          />
          <div className="flex flex-col items-center justify-center">
            <p className="text-white text-opacity-80 text-4xl">Liquidity via</p>
            <img src="/assets/images/kinetiq-logo.png" alt="Kinetiq Logo" className="h-16 mt-6" />
          </div>
        </div>
      </section>

      <footer className="relative z-20 py-16 text-center mt-4">
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="text-white font-medium mb-4">Protocol</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mint zUSD
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Stake kHYPE
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    X
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <p className="text-sm font-light" style={{ color: "#A3A3A3" }}>
            © 2025 Hypenova – All rights reserved.
          </p>
          <a
            href="#"
            className="transition-all duration-200 hover:drop-shadow-[0_0_8px_#00CC66]"
            style={{ color: "#00CC66" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <title>X (Twitter)</title>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </footer>
    </ShaderBackground>
  )
}
