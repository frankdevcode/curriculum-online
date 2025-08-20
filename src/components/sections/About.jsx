import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/3 flex justify-center">
            <img
              src={profile.photo}
              alt={profile.name}
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-blue-500 shadow-lg"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">Sobre Mí</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">{profile.role}</p>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
              {profile.about}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
