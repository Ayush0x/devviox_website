import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, ShoppingCart, Layers, WorkflowIcon as Wordpress, Smartphone, TrendingUp } from "lucide-react"
import { useScrollAnimation } from "../hooks/use-scroll-animation"

export default function ServicesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()

  const services = [
    // {
      // icon: Globe,
      // title: "Web Design and Development",
      // description:
        // "Custom web solutions tailored to client needs with modern design principles and cutting-edge technology.",
      // features: ["Responsive Design", "Custom Development", "Performance Optimization","Future-Ready","Clean","Price: ₹5000 - ₹10000 / 60$ - 100$"],
      // price: "₹5000 - ₹10000 / 60$ - 100$",
    // },
    {
      icon: Globe,
      title: "Static Website Development",
      description: "Perfect for portfolios, small businesses, or informational pages that don’t require frequent updates.",
      features: ["Cost-Effective", "SEO-Friendly", "Responsive","Low-Maintenance","Clean Design","Price: ₹8000 - ₹14000 / 100$ - 200$"],
      // price: "₹4000 - ₹8000 / 50$ - 90$",
    },
    {
      icon: Layers,
      title: "Dynamic Website",
      description: "Websites that update with content from databases or CMS platforms like WordPress.",
      features: ["CMS-Integrated","User Login","SEO-Ready","Modular","Editable Content","Price: ₹15000 - ₹25000 / 200$ - 300$"],
      // price: "₹8000 - ₹15000 / 100$ - 200$",
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce Solutions",
      description:
        "Development of user-friendly online stores that drive sales and provide exceptional shopping experiences.",
      features: ["Payment Integration", "Inventory Management", "User Experience Design","Secure","Easy Management","Price: ₹30000 - ₹50000 / 350$ - 600$"],
      // price: "₹15000 - ₹40000 / 250$ - 500$",
    },
    {
      icon: Wordpress,
      title: "Custom Website Development",
      description: "Tailored websites built from the ground up — exactly how you envision it.From design to code, everything is made specifically for your brand, goals, and functionality needs.",
      features: ["Fully Customized","Scalable","Unique Design","Conversion-Focused","Interactive","Price: ₹45000 - ₹80000 / 550$ - 1000$"],
      // price: "₹25000 - ₹70000 / 500$ - 1000$",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-1000 ease-out ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Our{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-300 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            We offer comprehensive digital solutions to help your business thrive in the online world.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-3 group cursor-pointer border-2 hover:border-primary/20 ${
                  cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
