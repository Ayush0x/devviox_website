import { CheckCircle, Users, Code, Rocket } from "lucide-react"
import { useScrollAnimation } from "../hooks/use-scroll-animation"

export default function ProcessSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation()

  const processSteps = [
    {
      icon: Users,
      title: "Discovery & Planning",
      description:
        "We start by understanding your business goals, target audience, and project requirements through detailed discussions and research.",
      details: ["Requirements gathering", "Market research", "Project timeline", "Technology selection"],
    },
    {
      icon: Code,
      title: "Design & Development",
      description:
        "Our team creates wireframes, designs, and develops your solution using modern technologies and best practices.",
      details: ["UI/UX design", "Frontend development", "Backend development", "Database design"],
    },
    {
      icon: CheckCircle,
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing ensures your project works flawlessly across all devices and browsers before launch.",
      details: ["Functionality testing", "Performance optimization", "Security testing", "Cross-browser compatibility"],
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "We deploy your project and provide ongoing support to ensure everything runs smoothly post-launch.",
      details: ["Deployment", "Performance monitoring", "Ongoing support", "Future enhancements"],
    },
  ]

  return (
    <section id="process" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-1000 ease-out ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Our{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-300 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            We follow a structured approach to ensure your project is delivered on time, within budget, and exceeds your
            expectations.
          </p>
        </div>

        <div ref={stepsRef} className="relative">
          {/* Process Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-purple-400 hidden lg:block"></div>

          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`flex items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col lg:space-x-8 space-y-8 lg:space-y-0 transition-all duration-1000 ease-out ${
                    stepsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${isEven ? "lg:text-right lg:pr-8" : "lg:text-left lg:pl-8"} text-center lg:text-left`}
                  >
                    <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                      <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                        {step.description}
                      </p>
                      <ul className={`space-y-2 ${isEven ? "lg:text-right" : "lg:text-left"} text-left`}>
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group">
                      <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
