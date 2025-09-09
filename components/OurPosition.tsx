"use client";

import { motion } from "framer-motion";

export default function OurPosition() {
  return (
    <section className="section-padding border-t border-gray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-12 lg:gap-20"
        >
          <div>
            <h2>Our Position</h2>
          </div>
          <div className="md:col-span-2 space-y-6">
            <p className="text-dm-gray-3 text-lg leading-relaxed">
              Civic Tech Studio is the craft layer of Dark Matter Labs, born
              from a decade of prototyping, testing and building digital and
              physical tools to explore new theories of governance,
              infrastructure, and value.
            </p>
            <p className="text-dm-gray-3 text-lg leading-relaxed">
              Our work supports and tests emerging ideas from across Dark Matter
              Labs' ecosystem, while staying attuned to the wider technological
              shifts shaping society — from AI and identity systems to planetary
              sensing and public trust infrastructures.
            </p>
            <p className="text-dm-gray-3 text-lg leading-relaxed">
              We don't see technology as separate from our work on climate,
              governance, or justice. We see it as a critical enabler and a
              terrain of struggle, for how futures are shaped, accessed, and
              governed.
            </p>
            <p className="text-dm-gray-3 text-lg leading-relaxed">
              Our role is to intervene at the level of method, architecture, and
              institution: to prototype, host, and steward technologies that
              uphold shared infrastructure commons and expand overall
              sovereignty.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
