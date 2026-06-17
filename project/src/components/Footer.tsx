import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Share2, Tv, Play } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Membership Plans", href: "#membership" },
  { label: "Personal Training", href: "#personal-training" },
  { label: "Our Trainers", href: "#trainers" },
]

const serviceLinks = [
  "Gym Membership",
  "Strength Training",
  "Weight Loss Programs",
  "Cardio Training",
  "Body Transformation",
  "Functional Training",
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <div>
              <span className="text-primary font-black text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>RIGAN</span>
              <span className="text-foreground font-semibold text-sm tracking-widest uppercase ml-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Fitness Studio</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              One of Uttara's highest-rated fitness studios with 4.8 stars and 500+ reviews. Premium equipment, expert trainers, and real results.
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-accent text-lg">★</span>
              ))}
              <span className="text-sm text-muted-foreground ml-2">4.8/5 · 505+ Reviews</span>
            </div>
            <div className="flex gap-3">
              <a href="#" className="size-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors">
                <Share2 className="size-4" />
              </a>
              <a href="#" className="size-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors">
                <Tv className="size-4" />
              </a>
              <a href="#" className="size-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors">
                <Play className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="size-1 rounded-full bg-primary inline-block" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-widest">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="size-1 rounded-full bg-primary inline-block" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-widest">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>House-14/16, Lift-9, Khan Tower, Sonargaon Janapath Road, Uttara, Dhaka 1230</span>
                </li>
                <li>
                  <a href="tel:+8801709919522" className="flex gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="size-4 text-primary shrink-0" />
                    +880 1709-919522
                  </a>
                </li>
                <li>
                  <a href="mailto:info@riganfitness.com" className="flex gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="size-4 text-primary shrink-0" />
                    info@riganfitness.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-widest">Newsletter</h4>
              <div className="flex gap-2">
                <Input
                  placeholder="Your email"
                  className="bg-muted border-border text-sm h-9"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white border-0 shrink-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-border" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 Rigan Fitness Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
