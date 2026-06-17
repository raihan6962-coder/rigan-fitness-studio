import { Button } from "@/components/ui/button"

const transformations = [
  {
    name: "Rakib H.",
    duration: "3 Months",
    loss: "-18 kg",
    program: "Weight Loss Program",
    quote: "I went from 95kg to 77kg in just 3 months. The trainers here genuinely care about your progress.",
    before: "95 kg",
    after: "77 kg",
  },
  {
    name: "Nadia S.",
    duration: "4 Months",
    loss: "+8 kg muscle",
    program: "Body Transformation",
    quote: "As a woman I was nervous to start, but the team made me feel so welcome. Best decision of my life!",
    before: "Body fat: 32%",
    after: "Body fat: 22%",
  },
  {
    name: "Arafat K.",
    duration: "6 Months",
    loss: "-25 kg",
    program: "Personal Training",
    quote: "The personal training program is worth every taka. My trainer pushed me beyond what I thought possible.",
    before: "110 kg",
    after: "85 kg",
  },
]

export function Transformations() {
  return (
    <section id="transformations" className="section-padding bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Real{" "}
            <span className="text-gradient-red">Transformations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These are real members who committed to their goals and achieved incredible results at Rigan Fitness Studio.
          </p>
        </div>

        {/* Transformation Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12 aspect-[21/6]">
          <img
            src="/transformation.webp"
            alt="Fitness transformation results"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/90" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-black text-gradient-red mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                100s
              </p>
              <p className="text-xl text-foreground font-semibold">of Transformations Achieved</p>
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transformations.map((story) => (
            <div key={story.name} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all">
              {/* Before/After badge */}
              <div className="flex gap-3 mb-5">
                <div className="flex-1 bg-muted rounded-xl p-3 text-center">
                  <div className="text-xs text-muted-foreground mb-1 uppercase font-semibold tracking-wide">Before</div>
                  <div className="font-bold text-foreground">{story.before}</div>
                </div>
                <div className="flex items-center text-2xl font-black text-primary">→</div>
                <div className="flex-1 bg-primary/10 border border-primary/20 rounded-xl p-3 text-center">
                  <div className="text-xs text-primary mb-1 uppercase font-semibold tracking-wide">After</div>
                  <div className="font-bold text-foreground">{story.after}</div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-3 mb-4 text-sm">
                <span className="bg-muted px-2 py-1 rounded-full text-muted-foreground">{story.duration}</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold">{story.loss}</span>
              </div>

              {/* Quote */}
              <p className="text-sm text-muted-foreground italic leading-relaxed mb-4">
                "{story.quote}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-foreground text-sm">{story.name}</div>
                  <div className="text-xs text-muted-foreground">{story.program}</div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-sm">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            size="lg"
            className="bg-gradient-red text-white font-bold border-0 glow-red hover:opacity-90"
            onClick={() => document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Your Transformation Today
          </Button>
        </div>
      </div>
    </section>
  )
}
