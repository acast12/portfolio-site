const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "C / C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Next.js", "React", "Node.js"],
  },
  {
    category: "Embedded & Systems",
    skills: ["ESP-IDF", "FreeRTOS", "MQTT / TLS", "I2C / GPIO", "PlatformIO"],
  },
  {
    category: "Tools & Infra",
    skills: ["Git", "VS Code", "Vercel", "Render", "SQLite"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-indigo-400 text-sm font-mono tracking-widest uppercase mb-3">
          Toolbox
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Skills &amp; Technologies
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6"
            >
              <h3 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm text-gray-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
