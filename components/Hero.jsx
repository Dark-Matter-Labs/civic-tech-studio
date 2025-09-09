"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-40 md:pt-48 lg:pt-56 section-padding bg-gradient-to-b from-dm-dark-gray/60 to-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-8 md:mb-12">Civic Tech Studio</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-dm-gray-3 max-w-4xl leading-relaxed">
            Building technology designed to expand the sovereignty and freedom
            of individuals as citizens — not as subjects of the state nor as
            consumers of the market, but as sovereign agents entangled within
            complex systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
