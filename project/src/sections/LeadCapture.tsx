import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export function LeadCapture() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    goal: "",
    membership: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="lead-capture" className="section-padding" style={{ background: 'oklch(0.09 0 0)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - content */}
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Get Started</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Start Your{" "}
              <span className="text-gradient-red">Fitness Journey</span>{" "}
              Today
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Take the first step towards the body and lifestyle you deserve. Fill out the form
              and our team will contact you within 24 hours.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Free gym tour & consultation",
                "No obligation, no pressure",
                "Personalized program recommendation",
                "Exclusive membership offers",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Urgency */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
              <p className="text-sm font-semibold text-primary mb-1">🔥 Limited Time Offer</p>
              <p className="text-sm text-muted-foreground">
                Join this month and get your first week absolutely free! Spots are limited.
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {submitted ? (
              <div className="bg-card border border-primary/30 rounded-2xl p-10 text-center">
                <CheckCircle2 className="size-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  We've received your inquiry and will contact you within 24 hours to schedule your free consultation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-2xl p-8 space-y-4"
              >
                <h3 className="text-xl font-bold text-foreground mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Get Your Free Consultation
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Full Name *</label>
                    <Input
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Phone Number *</label>
                    <Input
                      required
                      placeholder="+880 XXXX-XXXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">Email Address</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">Fitness Goal *</label>
                  <Select onValueChange={(v) => setForm({ ...form, goal: v })} required>
                    <SelectTrigger className="bg-muted border-border w-full">
                      <SelectValue placeholder="Select your primary goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weight-loss">Weight Loss</SelectItem>
                      <SelectItem value="muscle-gain">Muscle Building</SelectItem>
                      <SelectItem value="strength">Strength Training</SelectItem>
                      <SelectItem value="transformation">Body Transformation</SelectItem>
                      <SelectItem value="fitness">General Fitness</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">Membership Interest</label>
                  <Select onValueChange={(v) => setForm({ ...form, membership: v })}>
                    <SelectTrigger className="bg-muted border-border w-full">
                      <SelectValue placeholder="Which plan interests you?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic Membership</SelectItem>
                      <SelectItem value="standard">Standard Membership</SelectItem>
                      <SelectItem value="premium">Premium Membership</SelectItem>
                      <SelectItem value="personal-training">Personal Training</SelectItem>
                      <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">Message (Optional)</label>
                  <Textarea
                    placeholder="Tell us anything else about your fitness goals..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-muted border-border focus:border-primary resize-none"
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-red text-white font-bold border-0 glow-red hover:opacity-90 h-12 text-base"
                >
                  Get Started — Free Consultation
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to be contacted by our team. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
