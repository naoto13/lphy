"use client"

export default function HeroContent() {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6">
      <div className="text-center max-w-4xl mx-auto">
        <div
          className="inline-flex items-center px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm mb-8 relative border border-primary/30"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full" />
          <span className="text-white text-sm font-light relative z-10">
            Decentralized Stablecoin Protocol on Hyperliquid
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-thin text-white mb-6 tracking-tight">Hypenova</h1>

        <p className="text-xl md:text-2xl font-light text-white/80 mb-6 leading-relaxed">
          A pooled-collateral stablecoin built on HyperEVM — no liquidations, native yield.
        </p>

        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            disabled
            className="px-8 py-4 rounded-full bg-gray-600 text-gray-400 font-normal text-sm cursor-not-allowed opacity-60"
          >
            Enter App
          </button>
          <button className="px-8 py-4 rounded-full bg-transparent border border-primary/50 text-white font-normal text-sm transition-all duration-200 hover:bg-primary/10 hover:border-primary cursor-pointer">
            Explore Docs
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="group relative h-full">
            <div className="relative bg-black/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 h-full flex flex-col hover:border-primary/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 text-center">Stable Value</h3>
              <p className="text-white/70 text-sm leading-relaxed text-center flex-grow">
                zUSD maintains its $1 peg through algorithmic mechanisms and pooled collateral backing.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative h-full">
            <div className="relative bg-black/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 h-full flex flex-col hover:border-primary/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 text-center">Liquidation-Free</h3>
              <p className="text-white/70 text-sm leading-relaxed text-center flex-grow">
                Pooled debt model eliminates individual liquidation risk. kHYPE holders absorb volatility collectively.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative h-full">
            <div className="relative bg-black/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 h-full flex flex-col hover:border-primary/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 text-center">Capital Efficient</h3>
              <p className="text-white/70 text-sm leading-relaxed text-center flex-grow">
                Mint more zUSD with less collateral through shared risk pooling and automated yield generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
