const projects = [
  {
    title: "Sentinel — IoT Air Quality Monitor",
    description:
      "End-to-end IoT system on ESP32 WROVER that samples temperature, humidity, and air quality at 1Hz, smooths data with EMA, and publishes over TLS MQTT to a cloud backend — with zero data loss.",
    tags: ["C", "ESP-IDF", "FreeRTOS", "MQTT", "Node.js", "TypeScript", "SQLite"],
    highlights: [
      "Bit-bang GPIO driver for DHT22 + I2C driver with CRC8 for SGP30 (cross-sensor humidity compensation)",
      "3-task FreeRTOS pipeline with mutex-protected queues for acquisition, smoothing, and publishing",
      "Node.js/TypeScript backend with REST API and SQLite; deployed on Render with GitHub CI/CD",
    ],
    github: 'https://github.com/acast12/Sentinel-firmware',
    live: null,
  },
  {
    title: "PGAI Voice Bot — Patient Simulator",
    description:
      "An automated voice bot that calls an AI medical receptionist, simulates 10 realistic patient scenarios, records and transcribes each call, and identifies edge-case bugs in the agent's behavior.",
    tags: ["Python", "Twilio", "OpenAI", "GPT-4o", "Flask", "ngrok"],
    highlights: [
      "10 patient scenarios: scheduling, cancellations, emergencies, Spanglish, pushy callers",
      "Full audio recording + structured JSON transcript storage per call",
      "Surfaces hallucinations, policy violations, and missed escalations",
    ],
    github: 'https://github.com/acast12/pgai-voice-bot',
    live: null,
  },
  {
    title: "Hotsman Construction — Marketing Site",
    description:
      "Production marketing website for a local contracting business, designed and deployed end-to-end as a freelance engagement.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "Custom domain, DNS configuration, and Vercel deployment pipeline",
      "Booking integration and contact workflows",
      "WCAG accessibility improvements based on client feedback",
    ],
    github: null,
    live: 'http://hotsmanconstruction.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <p className="text-indigo-400 text-sm font-mono tracking-widest uppercase mb-3">
          Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Featured Projects
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 flex flex-col hover:border-indigo-500/50 transition-colors duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <svg
                  className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                      aria-label="Live demo"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

              <ul className="space-y-1 mb-6 flex-1">
                {project.highlights.map((h) => (
                  <li key={h} className="text-xs text-gray-500 flex items-start gap-2">
                    <span className="text-indigo-400 mt-0.5">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-indigo-600/10 text-indigo-400 border border-indigo-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
