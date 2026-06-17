import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const trainers = [
  {
    name: "Rahim Hossain",
    title: "Head Trainer & Strength Coach",
    specializations: ["Powerlifting", "Body Transformation", "Strength & Conditioning"],
    experience: "7+ years",
    certifications: "CSCS, CPT",
    image: "/trainer-1.webp",
  },
  {
    name: "Sumaiya Akter",
    title: "Women's Fitness Specialist",
    specializations: ["Weight Loss", "Yoga & Mobility", "Pre/Post Natal Fitness"],
    experience: "5+ years",
    certifications: "ACE-CPT, Women's Fitness",
    image: "/trainer-2.webp",
  },
  {
    name: "Karim Uddin",
    title: "Functional Fitness Coach",
    specializations: ["Functional Training", "Athletic Performance", "HIIT Coaching"],
    experience: "6+ years",
    certifications: "NSCA-CPT, FMS Level 2",
    image: "/trainer-3.webp",
  },
]

export function Trainers() {
  return (
    <section id="trainers" className="section-padding" style={{ background: 'oklch(0.09 0 0)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Expert Team</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Meet Our{" "}
            <span className="text-gradient-red">Trainers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Certified professionals dedicated to your transformation with personalized coaching
            and proven methodologies.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-card/80 text-muted-foreground border-border backdrop-blur-sm text-xs">
                    {trainer.experience}
                  </Badge>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-bold text-foreground text-xl mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {trainer.name}
                </h3>
                <p className="text-primary text-sm font-semibold mb-3">{trainer.title}</p>
                <p className="text-xs text-muted-foreground mb-3">
                  <span className="font-medium text-foreground">Certifications:</span> {trainer.certifications}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {trainer.specializations.map((s) => (
                    <span key={s} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
                <Button
                  size="sm"
                  className="w-full bg-muted text-foreground hover:bg-primary hover:text-white transition-colors border-0"
                  onClick={() => document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Schedule Session
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
