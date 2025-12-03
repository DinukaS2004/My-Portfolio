import React from "react";
import { EXPERIENCES } from "../constants";
const experiences = EXPERIENCES;
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 lg:px-20 text-stone-300">
      <motion.h2 
        whileInView ={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
      className="text-4xl font-semibold text-center mb-16">Experience</motion.h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
          whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1.5}}
            key={index}
            
          >
            <h3 className="text-1xl ">{exp.role}</h3>
            <p className="text-stone-400 text-sm mt-1">{exp.company}</p>
            <p className="text-primary text-sm mb-4">{exp.period}</p>

            <ul className="list-disc ml-6 space-y-1 bg-linear-to-r from-stone-300 to-stone-600 bg-clip-text  tracking-tighter text-transparent">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience