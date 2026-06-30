export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-indigo-400 text-sm font-mono tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Building things that matter
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I&apos;m a recent Computer Science graduate from Cal State Northridge. I finished my degree
              in December 2025, with hands-on experience building across the full stack —
              from bare-metal embedded firmware to cloud-deployed web applications.
            </p>
            <p>
              My recent projects span IoT systems (ESP32 + FreeRTOS + MQTT), voice AI agents
              (GPT-4o + Twilio), and production marketing sites deployed for real clients.
              I gravitate toward work where software meets the physical world or where
              automation can do something genuinely useful.
            </p>
            <p>
              Previously at UC Riverside before transferring to CSUN. Outside of code I&apos;m
              usually exploring new hardware, picking apart how things work, or looking for
              the next interesting problem to build a solution for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
