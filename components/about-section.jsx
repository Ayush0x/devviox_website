import { CheckCircle, Users, Award, Clock } from "lucide-react"
import { useScrollAnimation } from "../hooks/use-scroll-animation"

export default function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  const features = [
    {
      icon: CheckCircle,
      title: "Result-Driven Websites",
      description: "We create websites that deliver measurable results and drive business growth.",
    },
    {
      icon: Users,
      title: "Rooted in Craft",
      description:
        "We care about the small stuff — because the details make the difference. From backend logic to frontend polish, we've got you covered.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "We maintain the highest standards of quality in every project we deliver.",
    },
    {
      icon: Clock,
      title: "Ongoing Maintenance",
      description: "We provide continuous support and maintenance to keep your website running smoothly.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-1000 ease-out ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            About{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Devviox
            </span>
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-300 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            We are a passionate team of web designers and developers dedicated to creating exceptional digital
            experiences. Our mission is to deliver result-driven websites that not only look stunning but also perform
            exceptionally well.
          </p>
        </div>

        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 group cursor-pointer ${
                  contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 ease-out delay-700 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Devviox is built on a solid foundation of practical experience in backend development and system design. 
            We have years of authentic problem-solving, technical expertise, and a passion for crafting clean, efficient, 
            and reliable web solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
