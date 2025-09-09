"use client";

import { motion } from "framer-motion";

const learnings = [
  {
    title: "Impact-led & non-extractive business models",
    description:
      "Civic technologies often emerge from ambiguity—they're not solutions to fixed problems, but instruments for exploring what public value means in shifting, complex systems. We've learned that new financial architectures are essential: business models that reward impact and honest discovery, not just delivery.",
  },
  {
    title: "New ways of working and sharing risk",
    description:
      "Traditional project and partnership structures collapse under the weight of uncertainty, especially when responsibilities are split across civic, public, and private actors. To sustain meaningful collaboration, we must design partnership models that allow distributed development without dissolving accountability.",
  },
  {
    title: "Modular, interoperable civic tech infrastructure",
    description:
      "Monolithic systems concentrate control and become brittle. Modular development enables flexibility, reuse, and collaborative evolution across contexts. But modularity isn't just a technical principle—it's a governance principle.",
  },
];

export default function LearningSection() {
  return (
    <section
      id="learning"
      className="section-padding border-t border-gray bg-dm-dark-gray/40"
    >
      <div className="container-custom">
        <h2 className="mb-6 md:mb-8">What We're Learning</h2>
        <div className="divide-y divide-dm-gray-6">
          {learnings.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="py-8 md:py-10"
            >
              <h3 className="mb-3">{item.title}</h3>
              <p className="text-dm-gray-3 max-w-4xl">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
