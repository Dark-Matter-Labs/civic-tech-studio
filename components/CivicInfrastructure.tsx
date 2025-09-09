"use client";

import { motion } from "framer-motion";

const functionsData = [
  {
    title: "Sense",
    description:
      "From environmental signals to collective behaviours, sensing technologies help us attend to the subtle and the systemic and measure what matters.",
  },
  {
    title: "Register",
    description:
      "Novel ways to store, classify, and manage data. Deeply related to ontologies and what we value, how we order and re-order.",
  },
  {
    title: "Interface",
    description:
      "Creating new affordances for different kinds of interactivity, comprehension, collaboration, and relationships.",
  },
  {
    title: "Calculate",
    description:
      "Computing and analysing complex dynamics to support decision-making, forecasting, and accounting impact.",
  },
];

export default function CivicInfrastructure() {
  return (
    <section className="section-padding border-t border-gray">
      <div className="container-custom">
        <h2 className="mb-12 md:mb-16">Civic Tech Infrastructure</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {functionsData.map((fn, index) => (
            <motion.div
              key={fn.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dm-dark-gray border border-dm-gray-6 p-6 hover:bg-dm-gray-2 hover:-translate-y-1 transition-all"
            >
              <h3 className="mb-3 text-dm-yellow">{fn.title}</h3>
              <p className="text-dm-gray-3">{fn.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
