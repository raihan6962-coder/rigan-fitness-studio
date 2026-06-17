import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const reviews = [
  {
    name: "Ahmmed Ridoy",
    rating: 5,
    text: "Rigan Fitness Studio is the number one gym in Uttara. The management team is professional, friendly and maintains excellent cleanliness. I've been a member for 2 years and I'm still blown away by the quality.",
    time: "2 months ago",
  },
  {
    name: "Hakim Mahmood",
    rating: 5,
    text: "Best gym center in Uttara. Machines are very updated and high quality. The trainers are knowledgeable and always ready to help. Highly recommend this gym to anyone serious about fitness.",
    time: "1 month ago",
  },
  {
    name: "Tamzid Ali Jim",
    rating: 5,
    text: "Very quality machines. Love this gym. The environment is always clean and the staff are super friendly. This place has changed my life completely. 10/10 would recommend.",
    time: "3 weeks ago",
  },
  {
    name: "Nusrat Jahan",
    rating: 5,
    text: "As a woman, I was looking for a safe and welcoming gym. Rigan Fitness exceeded all my expectations. The female trainers are amazing and the facility is impeccably clean.",
    time: "1 month ago",
  },
  {
    name: "Shahidul Islam",
    rating: 5,
    text: "Joined for weight loss and lost 15kg in 3 months! The trainers here know what they're doing. Premium equipment, professional coaching, and great results. Worth every taka.",
    time: "5 weeks ago",
  },
  {
    name: "Farhana Begum",
    rating: 5,
    text: "Absolutely love this gym! Very clean environment, friendly staff, and excellent training programs. The personal training sessions are worth every penny. My fitness has improved dramatically.",
    time: "2 weeks ago",
  },
]

export function Reviews() {
  const [current, setCurrent] = useState(0)
  const perPage = 3
  const pages = Math.ceil(reviews.length / perPage)

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(pages - 1, c + 1))

  const visible = reviews.slice(current * perPage, current * perPage + perPage)

  return (
    <section id="reviews" className="section-padding" style={{ background: 'oklch(0.09 0 0)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            What Our{" "}
            <span className="text-gradient-red">Members</span> Say
          </h2>

          {/* Rating Summary */}
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-2xl px-6 py-4">
            <div className="text-5xl font-black text-gradient-red" style={{ fontFamily: 'Poppins, sans-serif' }}>4.8</div>
            <div>
              <div className="flex mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-xl">★</span>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">Based on <span className="text-foreground font-semibold">505+ Google Reviews</span></div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visible.map((review, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/20 transition-all">
              <Quote className="size-8 text-primary/30 mb-4" />

              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <span key={j} className="text-accent">★</span>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{review.name}</div>
                    <div className="text-xs text-muted-foreground">Verified Member</div>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{review.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <Button
            size="icon"
            variant="outline"
            onClick={prev}
            disabled={current === 0}
            className="border-border hover:bg-primary hover:border-primary hover:text-white transition-all disabled:opacity-30"
          >
            <ChevronLeft className="size-4" />
          </Button>

          <div className="flex gap-2">
            {[...Array(pages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`size-2.5 rounded-full transition-all ${
                  i === current ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>

          <Button
            size="icon"
            variant="outline"
            onClick={next}
            disabled={current === pages - 1}
            className="border-border hover:bg-primary hover:border-primary hover:text-white transition-all disabled:opacity-30"
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>

        {/* Google link */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Read all 505+ reviews on Google →
          </a>
        </div>
      </div>
    </section>
  )
}
