import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Star } from "lucide-react"

const plans = [
  {
    name: "Basic",
    subtitle: "Perfect for beginners",
    price: "৳ 1,500",
    period: "/month",
    popular: false,
    features: [
      "Full gym access",
      "Cardio equipment",
      "Locker room access",
      "Basic fitness assessment",
      "Community support",
    ],
    cta: "Get Started",
  },
  {
    name: "Standard",
    subtitle: "Most popular choice",
    price: "৳ 2,500",
    period: "/month",
    popular: true,
    features: [
      "Everything in Basic",
      "Group fitness classes",
      "Monthly progress check-in",
      "Nutrition guidance",
      "Free weights area",
      "Priority equipment access",
    ],
    cta: "Join Standard",
  },
  {
    name: "Premium",
    subtitle: "For serious athletes",
    price: "৳ 4,000",
    period: "/month",
    popular: false,
    features: [
      "Everything in Standard",
      "2 PT sessions/month",
      "Customized workout plan",
      "Body composition analysis",
      "Supplement guidance",
      "24/7 trainer support",
    ],
    cta: "Go Premium",
  },
  {
    name: "Personal Training",
    subtitle: "1-on-1 coaching",
    price: "৳ 8,000",
    period: "/month",
    popular: false,
    features: [
      "Everything in Premium",
      "Daily PT sessions",
      "Fully customized program",
      "Meal planning",
      "Weekly body assessment",
      "Transformation guarantee",
    ],
    cta: "Book Consultation",
  },
]

export function MembershipPlans() {
  return (
    <section id="membership" className="section-padding" style={{ background: 'oklch(0.09 0 0)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Membership Plans</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Choose Your{" "}
            <span className="text-gradient-red">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flexible membership options designed to fit your lifestyle, goals, and budget.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-gradient-red bg-card glow-red"
                  : "bg-card border border-border hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-red text-white border-0 px-4 py-1 font-bold">
                    <Star className="size-3 mr-1 fill-white" /> Most Popular
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {plan.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">{plan.subtitle}</p>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-black text-gradient-red" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm pb-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-semibold border-0 ${
                  plan.popular
                    ? "bg-gradient-red text-white hover:opacity-90"
                    : "bg-muted text-foreground hover:bg-primary hover:text-white transition-colors"
                }`}
                onClick={() => document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" })}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          * Prices may vary. Contact us for current offers and student discounts.{" "}
          <button
            className="text-primary hover:underline font-medium"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get a free consultation →
          </button>
        </p>
      </div>
    </section>
  )
}
