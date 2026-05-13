import Image from "next/image";

export default function ComingSoon() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/coming-soon-bg.png"
          alt="Luxury Swimming Pool"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-950/40 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <div className="animate-in fade-in zoom-in duration-1000">
          {/* Logo Placeholder */}
          <div className="mb-8 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-md p-4 px-8 rounded-full border border-white/20 shadow-2xl">
              <span className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                JJ<span className="text-blue-400">POOLS</span> <span className="text-blue-200 text-3xl font-light">&</span> <span className="text-white">SPA</span>
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Under <span className="text-blue-400">Construction</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-2xl text-blue-50/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            We are preparing something incredible for you. JJ Pools and SPA is coming with high-end swimming pool and wellness solutions.
          </p>

          {/* Progress Bar */}
          <div className="w-full max-w-md mx-auto h-1.5 bg-white/20 rounded-full mb-12 overflow-hidden">
            <div className="h-full bg-blue-400 w-2/3 rounded-full animate-pulse shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
          </div>

          {/* Note: Buttons removed as requested */}
          <p className="text-white/40 italic text-sm">
            Launching soon
          </p>
        </div>

        {/* Footer info */}
        <div className="absolute bottom-10 left-0 right-0 text-white/60 text-sm animate-in slide-in-from-bottom duration-1000 delay-500">
          &copy; {new Date().getFullYear()} JJ Pools and SPA. All rights reserved.
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
    </main>
  );
}
