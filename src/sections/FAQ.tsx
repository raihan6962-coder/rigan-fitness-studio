import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "How much does a gym membership cost?",
    a: "Our memberships start from ৳1,500/month for Basic and go up to ৳8,000/month for full Personal Training packages. Contact us for current promotional offers and student discounts.",
  },
  {
    q: "Do you offer personal training?",
    a: "Yes! We offer one-on-one personal training sessions with certified coaches. Personal training includes a customized workout plan, nutrition guidance, and progress tracking tailored to your specific goals.",
  },
  {
    q: "Are beginners welcome?",
    a: "Absolutely! We welcome members of all fitness levels. Our trainers are experienced in working with complete beginners and will guide you through proper form, equipment usage, and create a beginner-friendly program.",
  },
  {
    q: "Do you have women-friendly facilities?",
    a: "Yes, we are proudly women-friendly. We have female trainers available, a comfortable and safe environment, and ensure all our female members feel respected and supported in their fitness journey.",
  },
  {
    q: "What are your opening hours?",
    a: "We are open 6 AM – 10 PM, 7 days a week. Please contact us to confirm current hours during holidays and special occasions.",
  },
  {
    q: "Can I take a free gym tour before joining?",
    a: "Absolutely! We encourage prospective members to visit and see the facilities firsthand. Call us at +880 1709-919522 or use our contact form to schedule your free tour.",
  },
  {
    q: "What equipment do you have?",
    a: "We have a comprehensive range including free weights, cable machines, squat racks, modern cardio machines (treadmills, ellipticals, bikes), functional training equipment, and more — all regularly maintained and updated.",
  },
  {
    q: "Do you offer trial memberships?",
    a: "Yes, we offer trial sessions for new members. Contact us to learn about our current trial offers so you can experience Rigan Fitness Studio before committing.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Frequently Asked{" "}
            <span className="text-gradient-red">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about joining Rigan Fitness Studio.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-card border rounded-xl overflow-hidden transition-all duration-200 ${
                open === i ? "border-primary/40" : "border-border hover:border-border/80"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-foreground text-sm pr-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`size-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground text-sm">
            Still have questions?{" "}
            <button
              className="text-primary hover:underline font-semibold"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact us →
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}
