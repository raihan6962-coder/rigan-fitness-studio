import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const hours = [
  { day: "Saturday – Thursday", time: "6:00 AM – 10:00 PM" },
  { day: "Friday", time: "8:00 AM – 10:00 PM" },
]

export function Location() {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Find Us</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Visit{" "}
            <span className="text-gradient-red">Rigan Fitness Studio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Conveniently located in the heart of Uttara, Dhaka. Come visit us for a free tour today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.028506438!2d90.39825!3d23.8797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDUyJzQ3LjAiTiA5MMKwMjMnNTMuNyJF!5e0!3m2!1sen!2sbd!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rigan Fitness Studio Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex gap-4">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="size-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Address</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    House-14/16, Lift-9, Khan Tower<br />
                    Sonargaon Janapath Road<br />
                    Uttara, Dhaka 1230, Bangladesh
                  </p>
                  <a
                    href="https://maps.google.com/?q=Uttara+Dhaka+Bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-semibold hover:underline mt-2 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex gap-4">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="size-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Phone</h4>
                  <a href="tel:+8801709919522" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                    +880 1709-919522
                  </a>
                  <div className="mt-3 flex gap-3">
                    <Button
                      size="sm"
                      className="bg-gradient-red text-white border-0 hover:opacity-90"
                      onClick={() => window.location.href = 'tel:+8801709919522'}
                    >
                      Call Now
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 text-white border-0 hover:bg-green-700"
                      onClick={() => window.open('https://wa.me/8801709919522', '_blank')}
                    >
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex gap-4">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="size-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Email</h4>
                  <a href="mailto:info@riganfitness.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    info@riganfitness.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex gap-4">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="size-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Opening Hours</h4>
                  <div className="space-y-2">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{h.day}</span>
                        <span className="text-foreground font-medium">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
