import { useScrollAnimation } from "../hooks/use-scroll-animation"

export default function TechnologiesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: techRef, isVisible: techVisible } = useScrollAnimation()

  const technologies = [
    {
      category: "Frontend",
      tools: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "JavaScript", icon: "🟨" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "HTML5", icon: "🌐" },
      ],
    },
    {
      category: "Backend",
      tools: [
        { name: "Node.js", icon: "🟢" },
        { name: "Java", icon: "☕" },
        { name: "Spring Boot", icon: "🍃" },
        { name: "Express.js", icon: "🚀" },
        { name: "REST APIs", icon: "🔗" },
        { name: "GraphQL", icon: "📊" },
      ],
    },
    {
      category: "Database",
      tools: [
        { name: "MySQL", icon: "🐬" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Redis", icon: "🔴" },
        { name: "Firebase", icon: "🔥" },
        { name: "Supabase", icon: "⚡" },
      ],
    },
    {
      category: "Tools & Others",
      tools: [
        { name: "Git", icon: "📝" },
        { name: "Docker", icon: "🐳" },
        { name: "AWS", icon: "☁️" },
        { name: "Vercel", icon: "▲" },
        { name: "Figma", icon: "🎨" },
        { name: "Postman", icon: "📮" },
      ],
    },
  ]

  return (
    <section id="technologies" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-1000 ease-out ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Tools &{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-300 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            We use cutting-edge technologies and proven tools to build robust, scalable, and modern web solutions.
          </p>
        </div>

        <div ref={techRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 group ${
                techVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center group-hover:text-primary transition-colors duration-300">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 cursor-pointer group-hover:translate-x-1"
                    style={{ transitionDelay: `${toolIndex * 50}ms` }}
                  >
                    <span className="text-2xl">{tool.icon}</span>
                    <span className="font-medium text-gray-700 hover:text-primary transition-colors duration-300">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 ease-out delay-700 ${
            techVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Our technology stack is carefully chosen to ensure optimal performance, security, and scalability. We stay
            updated with the latest trends and continuously expand our toolkit to deliver the best solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
