import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Hero } from "@/sections/Hero"
import { TrustBar } from "@/sections/TrustBar"
import { WhyChooseUs } from "@/sections/WhyChooseUs"
import { MembershipPlans } from "@/sections/MembershipPlans"
import { Programs } from "@/sections/Programs"
import { PersonalTraining } from "@/sections/PersonalTraining"
import { Facilities } from "@/sections/Facilities"
import { Trainers } from "@/sections/Trainers"
import { Transformations } from "@/sections/Transformations"
import { Reviews } from "@/sections/Reviews"
import { FAQ } from "@/sections/FAQ"
import { LeadCapture } from "@/sections/LeadCapture"
import { Location } from "@/sections/Location"
import { MessageCircle, Phone } from "lucide-react"

function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* Call button */}
      <a
        href="tel:+8801709919522"
        className="size-12 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform glow-red"
        aria-label="Call Rigan Fitness Studio"
      >
        <Phone className="size-5 text-white" />
      </a>
      {/* WhatsApp button */}
      <a
        href="https://wa.me/8801709919522?text=Hi%2C%20I%27m%20interested%20in%20joining%20Rigan%20Fitness%20Studio!"
        target="_blank"
        rel="noopener noreferrer"
        className="size-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        style={{ background: '#25D366' }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="size-7 text-white fill-white" />
      </a>
    </div>
  )
}

function StickyJoinButton() {
  return (
    <div className="fixed bottom-6 left-6 z-50 hidden md:block">
      <button
        onClick={() => document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" })}
        className="bg-gradient-red text-white font-bold text-sm px-5 py-3 rounded-full shadow-lg glow-red hover:opacity-90 transition-all hover:scale-105"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        🔥 Join Now — Free Week
      </button>
    </div>
  )
}

export function App() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WhyChooseUs />
        <MembershipPlans />
        <Programs />
        <PersonalTraining />
        <Facilities />
        <Trainers />
        <Transformations />
        <Reviews />
        <FAQ />
        <LeadCapture />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
      <StickyJoinButton />
    </div>
  )
}

export default App
