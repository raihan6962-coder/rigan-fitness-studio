const facilityItems = [
  { title: "Free Weights Area", description: "Complete range of dumbbells, barbells, and weight plates", emoji: "🏋️" },
  { title: "Cardio Machines", description: "Treadmills, ellipticals, bikes, and rowing machines", emoji: "🏃" },
  { title: "Strength Machines", description: "Modern cable machines, squat racks, and chest press", emoji: "💪" },
  { title: "Functional Zone", description: "Kettlebells, resistance bands, TRX, battle ropes", emoji: "⚡" },
  { title: "Locker Rooms", description: "Clean, secure lockers with shower facilities", emoji: "🚿" },
  { title: "Stretching Zone", description: "Dedicated area for warm-up, cool-down, and mobility", emoji: "🧘" },
]

export function Facilities() {
  return (
    <section id="facilities" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Our Facilities</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Premium{" "}
            <span className="text-gradient-red">Equipment</span>
            {" "}& Facilities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Train like a professional with our regularly updated, premium fitness equipment
            in a clean, motivating environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="/gym-facilities.webp"
              alt="Rigan Fitness Studio Facilities"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
          </div>

          {/* Facilities list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {facilityItems.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h4 className="font-bold text-foreground mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
