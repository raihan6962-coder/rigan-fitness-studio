import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/gym-hero.webp"
          alt="Rigan Fitness Studio"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Red accent glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #E50914, transparent)' }} />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-16 w-full">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <div className="flex items-center gap-2 mb-6">
            <Badge className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 text-xs font-semibold tracking-widest uppercase">
              #1 Rated Gym in Uttara
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Transform Your{" "}
            <span className="text-gradient-red">Body.</span>
            <br />
            Elevate Your{" "}
            <span className="text-gradient-gold">Lifestyle.</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
            Join one of Uttara's highest-rated fitness studios with professional trainers,
            modern equipment, and a motivating fitness community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-gradient-red text-white font-bold text-base px-8 h-14 glow-red hover:opacity-90 border-0 transition-all"
              onClick={() => document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" })}
            >
              Join Now — Start Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground font-semibold text-base px-8 h-14 hover:bg-white/10 transition-all"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Free Gym Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            {/* Rating */}
            <div className="flex items-center gap-2 card-glass rounded-xl px-4 py-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <div>
                <div className="font-bold text-sm text-foreground">4.8 Rating</div>
                <div className="text-xs text-muted-foreground">505+ Reviews</div>
              </div>
            </div>
            <div className="flex items-center gap-2 card-glass rounded-xl px-4 py-3">
              <span className="text-2xl font-black text-primary">500+</span>
              <div>
                <div className="font-bold text-sm text-foreground">Happy Members</div>
                <div className="text-xs text-muted-foreground">Active & growing</div>
              </div>
            </div>
            <div className="flex items-center gap-2 card-glass rounded-xl px-4 py-3">
              <span className="text-2xl font-black text-accent">✓</span>
              <div>
                <div className="font-bold text-sm text-foreground">Women Friendly</div>
                <div className="text-xs text-muted-foreground">Safe & welcoming</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#trust-bar"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="size-5" />
      </a>
    </section>
  )
}
