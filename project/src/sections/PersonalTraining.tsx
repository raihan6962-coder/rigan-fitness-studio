import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const benefits = [
  "One-on-one personalized coaching",
  "Customized workout program",
  "Nutrition & diet guidance",
  "Weekly progress tracking",
  "Body composition analysis",
  "Flexible scheduling",
  "Accountability & motivation",
  "Fast-track results",
]

export function PersonalTraining() {
  return (
    <section id="personal-training" className="section-padding overflow-hidden" style={{ background: 'oklch(0.09 0 0)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="/personal-training.webp"
                alt="Personal Training at Rigan Fitness Studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 card-glass rounded-2xl p-4 max-w-[200px]">
              <div className="text-3xl font-black text-gradient-red mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>95%</div>
              <div className="text-sm font-semibold text-foreground">Goal Achievement</div>
              <div className="text-xs text-muted-foreground">with personal training</div>
            </div>

            {/* Red accent bar */}
            <div className="absolute top-6 -left-3 w-1.5 h-24 bg-gradient-red rounded-full" />
          </div>

          {/* Content */}
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Personal Training</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Your Personal{" "}
              <span className="text-gradient-red">Coach</span>
              <br />Awaits
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Experience the fastest path to your fitness goals with dedicated one-on-one
              coaching from our certified professionals. Every session, every rep, every
              meal — optimized for your success.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">{b}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-red text-white font-bold border-0 glow-red hover:opacity-90"
                onClick={() => document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-white/5"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
