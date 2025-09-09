"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function WhyCivicTech() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="why"
      className="section-padding border-t border-gray bg-dm-dark-gray/40"
    >
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-12 lg:gap-20"
        >
          <div>
            <h2>Why Civic Tech</h2>
          </div>
          <div className="md:col-span-2 space-y-6">
            <p className="text-dm-gray-3 text-lg leading-relaxed">
              In an age marked by deep volatility and widening asymmetries of
              control, civic technologies are essential counterweights to the
              consolidating power of both state and market infrastructures.
            </p>
            <p className="text-dm-gray-3 text-lg leading-relaxed">
              Yet for these technologies to be truly transformative, they must
              offer more than novel tools or interfaces. They must embody a
              fundamentally different paradigm — rooted in relationality, not
              domination; in care, not control.
            </p>
            <p className="text-dm-gray-3 text-lg leading-relaxed">
              The civic technologies we seek are built on infrastructures of
              tenderness, doubt, and attentiveness. They are technologies that
              honour entangled agency, designed with the humility to listen, the
              flexibility to adapt, and the resilience to sustain relationships
              over time.
            </p>
            <p className="text-dm-gray-3 text-lg leading-relaxed">
              This is the meaning of civic tech in the 21st century: not merely
              the digitisation of governance, but the cultivation of
              infrastructural care.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
