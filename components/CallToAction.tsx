"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="section-padding border-t border-gray bg-gradient-to-br from-dm-dark-gray to-dm-black"
    >
      <div className="container-custom text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 md:mb-8"
        >
          Help us build a better future
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-dm-gray-3 mb-8 md:mb-10 max-w-3xl mx-auto"
        >
          We're looking for partners, funders, and collaborators who share our
          vision for civic technology that serves the commons.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href="mailto:civic-tech@darkmatterlabs.org"
            className="inline-block px-6 py-3 border border-dm-gray-1 text-dm-gray-1 hover:bg-dm-gray-1 hover:text-dm-black transition-colors"
          >
            Contact Us
          </a>
          <Link
            href="https://darkmatterlabs.org"
            className="inline-block px-6 py-3 border border-dm-gray-1 text-dm-gray-1 hover:bg-dm-gray-1 hover:text-dm-black transition-colors"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
