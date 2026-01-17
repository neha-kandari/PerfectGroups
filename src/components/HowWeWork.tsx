const steps = [
  {
    id: 1,
    title: "Requirement Understanding",
    description: "We carefully analyze client needs, industry standards, and product specifications.",
    align: "left"
  },
  {
    id: 2,
    title: "Design & Customization",
    description: "Customized mould designs are created to match functionality and branding.",
    align: "left"
  },
  {
    id: 3,
    title: "Material Selection",
    description: "High-quality, chemical-resistant materials are selected for durability and safety.",
    align: "left"
  },
  {
    id: 4,
    title: "Precision Manufacturing",
    description: "Products are manufactured using advanced moulding technology for accuracy.",
    align: "right"
  },
  {
    id: 5,
    title: "Quality Inspection",
    description: "Each product undergoes strict quality checks to ensure consistency and reliability.",
    align: "right"
  },
  {
    id: 6,
    title: "Timely Delivery & Support",
    description: "We ensure on-time delivery with continuous client support.",
    align: "right"
  }
];

const HowWeWork = () => {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-black mb-6 font-sans">How We work</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
           We follow a structured, technology-driven process to deliver high-quality, reliable plastic packaging solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="hidden sm:block absolute left-6 top-0 bottom-0">
            <div className="w-px h-full bg-gradient-to-b from-[#f89a24] via-[#f89a24]/40 to-[#f89a24]/10" />
          </div>

          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.id} className="relative flex gap-4 sm:gap-8">
                {/* Timeline marker */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#f89a24] text-white flex items-center justify-center text-sm font-bold shadow-md">
                    {step.id}
                  </div>
                  {/* Connector for mobile */}
                  <div className="sm:hidden w-px flex-1 bg-[#f89a24]/40 mt-2" />
                </div>

                {/* Card */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl shadow-md border border-[#f89a24]/10 px-4 py-4 sm:px-6 sm:py-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#f89a24] mb-1">
                      Step {step.id}
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
