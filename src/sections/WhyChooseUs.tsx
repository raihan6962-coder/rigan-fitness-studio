import { Dumbbell, ShieldCheck, Sparkles, UserCheck, TrendingUp, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reasons = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description: "State-of-the-art machines updated regularly for the best workout experience.",
  },
  {
    icon: UserCheck,
    title: "Certified Trainers",
    description: "Professional, certified coaches who guide you safely to your goals.",
  },
  {
    icon: ShieldCheck,
    title: "Clean & Hygienic",
    description: "Immaculately maintained facility with sanitized equipment and fresh air.",
  },
  {
    icon: Sparkles,
    title: "Personalized Guidance",
    description: "Customized workout and nutrition plans tailored to your unique goals.",
  },
  {
    icon: TrendingUp,
    title: "Transformation Programs",
    description: "Structured programs that deliver real, measurable body transformations.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description: "A motivating community that keeps you accountable and inspired.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            The Rigan{" "}
            <span className="text-gradient-red">Difference</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're not just a gym — we're a premium fitness destination committed to
            delivering results that last a lifetime.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <Card key={i} className="bg-card border-border hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "500+", label: "Active Members" },
            { value: "4.8★", label: "Google Rating" },
            { value: "5+", label: "Expert Trainers" },
            { value: "3+", label: "Years of Excellence" },
          ].map((stat) => (
            <div key={stat.label} className="text-center border-gradient-red rounded-2xl p-6">
              <div className="text-4xl font-black text-gradient-red mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
