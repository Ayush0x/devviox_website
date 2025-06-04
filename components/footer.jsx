"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import { useScrollAnimation } from "../hooks/use-scroll-animation"

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation()

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact Us", href: "#contact" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61577102301044" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/devviox" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/devviox/" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "GitHub", icon: Github, href: "https://github.com/Ayush0x" },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer ref={ref} className="bg-gray-900 text-white py-12 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors duration-300">Devviox</h3>
            <p className="text-gray-400 mb-6">
              Delivering tailored web solutions that bring your brand to life and fuel long-term growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 hover:rotate-12 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 ease-out delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-2 text-gray-400">
              <p className="hover:text-white transition-colors duration-300">Phone: (+91) - 9528746979</p>
              <p className="hover:text-white transition-colors duration-300">Phone: (+91) - 8130315780</p>
              <p className="hover:text-white transition-colors duration-300">Email: dev.v.io.x.28@gmail.com</p>
              <p className="hover:text-white transition-colors duration-300">Response Time: Within 12-24 hours</p>
            </div>
          </div>
        </div>

        <div
          className={`border-t border-gray-800 mt-8 pt-8 text-center transition-all duration-1000 ease-out delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-400 hover:text-white transition-colors duration-300">
            © {new Date().getFullYear()} Devviox. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
