"use client";

import { motion } from "framer-motion";

export default function OurApproach() {
  const items = [
    {
      title: "Modular & Protocol First",
      description:
        "Building interoperable units with open protocols that enable flexibility, reuse, and collaborative evolution across contexts.",
    },
    {
      title: "Open Source & Commons-Centric",
      description:
        "Creating shared digital infrastructure that remains accessible and modifiable by communities who use it.",
    },
    {
      title: "Multi-Actor Driven",
      description:
        "Engaging diverse stakeholders in design and governance to ensure technologies serve collective needs.",
    },
  ];

  return (
    <section
      id="approach"
      className="section-padding border-t border-gray bg-dm-dark-gray/40"
    >
      <div className="container-custom">
        <h2 className="mb-12 md:mb-16">Our Approach</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dm-dark-gray border border-dm-gray-6 p-6 hover:bg-dm-gray-2 hover:-translate-y-1 transition-all"
            >
              <h3 className="mb-3 text-dm-yellow">{item.title}</h3>
              <p className="text-dm-gray-3">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
