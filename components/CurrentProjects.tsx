"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

const CurrentProjects = () => {
  return (
    <section id="projects" className="section-padding border-t border-gray">
      <div className="container-custom">
        <h2 className="mb-12 md:mb-16">Current Options</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dm-dark-gray border border-dm-gray-6 p-6 hover:bg-dm-gray-2 hover:-translate-y-1 transition-all cursor-pointer"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <span
                  className={`inline-block px-3 py-1 text-xs uppercase mb-4 
                  ${project.status === "launched" ? "bg-green-500/20 text-green-400" : ""}
                  ${project.status === "beta" ? "bg-dm-yellow/20 text-dm-yellow" : ""}
                  ${project.status === "demo" ? "bg-blue-500/20 text-blue-400" : ""}
                  ${project.status === "concept" ? "bg-dm-gray-3/20 text-dm-gray-3" : ""}
                `}
                >
                  {project.status}
                </span>
                <h3 className="mb-3">{project.title}</h3>
                <p className="text-dm-gray-3">{project.description}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentProjects;
