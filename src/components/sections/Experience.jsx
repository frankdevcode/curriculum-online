import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { profile } from '../../data/profile';

const Experience = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
      },
    }),
  };

  return (
    <section id="experience" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Experiencia Laboral
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500"></div>
          {profile.experience.map((job, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className="w-5/12"></div>
              <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full shadow-lg">
                <Briefcase className="text-white" />
              </div>
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{job.role}</h3>
                  <p className="text-blue-500 dark:text-blue-400 font-semibold mb-2">{job.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{job.period}</p>
                  <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
