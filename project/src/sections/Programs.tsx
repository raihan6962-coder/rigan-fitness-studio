import { Flame, Dumbbell, Heart, Zap, TrendingUp, Activity } from "lucide-react"

const programs = [
  {
    icon: Flame,
    title: "Weight Loss Program",
    description: "Science-backed fat-loss strategies combining cardio, strength, and nutrition guidance for sustainable results.",
    tag: "Most Popular",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    icon: Dumbbell,
    title: "Muscle Building",
    description: "Progressive overload programming with proven hypertrophy techniques to pack on lean muscle.",
    tag: "Advanced",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    title: "Strength Training",
    description: "Build functional strength through compound movements, powerlifting fundamentals, and periodization.",
    tag: "All Levels",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Heart,
    title: "Cardio Training",
    description: "Improve cardiovascular health, endurance, and burn calories with varied HIIT and steady-state cardio.",
    tag: "Beginner Friendly",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    icon: Activity,
    title: "Body Transformation",
    description: "Complete 12-week transformation program covering nutrition, training, recovery, and mindset.",
    tag: "Premium",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Zap,
    title: "Functional Fitness",
    description: "Train movement patterns that enhance real-life performance, agility, and athletic capability.",
    tag: "Dynamic",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
]

export function Programs() {
  return (
    <section id="programs" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Fitness Programs</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Programs Built for{" "}
            <span className="text-gradient-red">Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every program is designed by certified professionals to deliver measurable transformations.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`size-12 rounded-xl ${program.bg} flex items-center justify-center`}>
                  <program.icon className={`size-6 ${program.color}`} />
                </div>
                <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  {program.tag}
                </span>
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {program.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {program.description}
              </p>
              <button
                className="text-primary text-sm font-semibold hover:gap-2 transition-all flex items-center gap-1 group-hover:gap-2"
                onClick={() => document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
