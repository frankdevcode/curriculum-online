import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { profile } from '../../data/profile';
import Card from '../ui/Card';

const Education = () => {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <section id="education" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Educación y Formación
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {profile.education.map((edu, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <Card>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                    <GraduationCap className="text-blue-500 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                    <p className="font-semibold text-gray-700 dark:text-gray-300">{edu.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{edu.period}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
