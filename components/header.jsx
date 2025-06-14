"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Process", id: "process" },
    { name: "Technologies", id: "technologies" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact Us", id: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo with hover animation */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
  <img
    src="/logo.png" 
    alt="Devviox Logo"
    className="h-auto w-8 transition-transform duration-300 group-hover:scale-110"
  />
  <span className="text-2xl font-bold text-primary group-hover:scale-105 transition-transform duration-300">
    Devviox
  </span>
</Link>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex items-center space-x-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 focus:outline-none focus:text-primary px-3 py-2 rounded-md hover:bg-accent"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            <Button
              onClick={() => scrollToSection("contact")}
              className="ml-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Talk To Us
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="transition-all duration-300 hover:scale-105 hover:rotate-90"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left py-2 text-lg font-medium hover:text-primary hover:translate-x-2 transition-all duration-300 ease-out"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {item.name}
                    </button>
                  ))}
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="mt-4 transition-all duration-300 hover:scale-105"
                  >
                    Talk To Us
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
