export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      {/* Background gradient blob */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <p className="text-indigo-400 text-sm font-mono tracking-widest uppercase mb-4">
        Hi, my name is
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
        Alejandro Castillo
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-400 mb-6">
        Software Engineer
      </h2>
      <p className="max-w-xl text-gray-500 text-base md:text-lg leading-relaxed mb-10">
        Recent CS graduate from CSUN, building across the full stack — embedded IoT systems and production web apps.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors duration-200"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-[#2a2a2a] hover:border-indigo-500 text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
        >
          Get in Touch
        </a>
        <a
          href="/Alejandro_Castillo_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg border border-[#2a2a2a] hover:border-indigo-500 text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
        >
          Resume ↗
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
