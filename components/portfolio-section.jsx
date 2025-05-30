"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { useScrollAnimation } from "../hooks/use-scroll-animation"

export default function PortfolioSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation()
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation()

  const projects = [
    {
      title: "Freelance CRM Project(Attendance Module & Analytics)",
      description: "Designed and developed a custom attendance module integrated with analytics for a CRM system, enhancing tracking and reporting capabilities. **Development complete; awaiting client launch.",
      image: "/images/project1.jpg",
      category: "Web Development",
    },
    {
      title: "Coaching Management Backend API",
      description: "Developed a scalable backend API using Java and Spring Boot  for managing coaching programs, including scheduling and user management.",
      github:"https://github.com/Ayush0x/coachingmanagementsystem",
      // <link rel="stylesheet" href="" />
      image: "/images/project2.jpg",
      category: "Education",
    },
    {
      title: "Personal Portfolio Website",
      description: "A fully responsive portfolio site designed and developed to highlight my skills, projects, and services. Built with performance and simplicity in mind.",
      image: "/images/project3.jpg",
      category: "Static Website",
    },
    {
      title: "Devviox Agency Website",
      description: "A clean, modern website built to showcase Devviox’s services and expertise. Designed with a focus on user experience and responsive design.",
      image: "/images/project4.jpg",
      category: "Dynamic Website",
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="portfolio" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-1000 ease-out ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Our{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 transition-all duration-1000 ease-out delay-300 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Discover our innovative and out-of-the-box solutions that have helped businesses achieve their digital goals
            and stand out in their industries.
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-700 ease-out overflow-hidden hover:scale-105 hover:-translate-y-4 cursor-pointer border-2 hover:border-primary/30 ${
                projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200 hover:scale-110"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" href="https://github.com/Ayush0x/coachingmanagementsystem"/>
                    View Project
                  </Button>
                </div> */}
                <div className="absolute top-4 left-4 transform -translate-x-20 group-hover:translate-x-0 transition-transform duration-500 delay-100">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          ref={ctaRef}
          className={`text-center transition-all duration-1000 ease-out ${
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss how we can create something amazing together.
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="px-8 py-3 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 group"
          >
            <span className="group-hover:scale-105 transition-transform duration-300">Contact Us Now</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
