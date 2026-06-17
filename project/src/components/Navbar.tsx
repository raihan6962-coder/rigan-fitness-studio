import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Membership", href: "#membership" },
  { label: "Trainers", href: "#trainers" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="text-primary font-black text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            RIGAN
          </span>
          <span className="text-foreground font-semibold text-base tracking-widest uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Fitness Studio
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+8801709919522" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="size-4" />
            <span>+880 1709-919522</span>
          </a>
          <Button
            size="sm"
            className="bg-gradient-red text-white font-semibold px-6 glow-red hover:opacity-90 transition-opacity border-0"
            onClick={() => document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" })}
          >
            Join Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-b border-border">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border/50 last:border-0"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a href="tel:+8801709919522" className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="size-4" />
                +880 1709-919522
              </a>
              <Button
                className="bg-gradient-red text-white font-semibold w-full border-0"
                onClick={() => {
                  setMobileOpen(false)
                  document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Join Now — Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
