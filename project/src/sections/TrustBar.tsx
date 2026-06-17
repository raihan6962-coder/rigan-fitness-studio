import { CheckCircle2 } from "lucide-react"

const trustItems = [
  "505+ Google Reviews",
  "Professional Trainers",
  "Premium Equipment",
  "Clean & Hygienic",
  "Women Friendly",
  "Results Driven",
]

export function TrustBar() {
  return (
    <section id="trust-bar" className="bg-primary py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2 text-white whitespace-nowrap">
              <CheckCircle2 className="size-4 shrink-0" />
              <span className="text-sm font-semibold tracking-wide">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
