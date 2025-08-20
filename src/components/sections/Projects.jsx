import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { profile } from '../../data/profile';
import Card from '../ui/Card';

const Projects = () => {
  const cardVariants = {
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
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Proyectos Destacados
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {profile.projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card className="h-full flex flex-col">
                <img src={project.image} alt={project.name} className="rounded-t-lg w-full h-48 object-cover" />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow">{project.description}</p>
                  <div className="mt-4 flex space-x-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                      <Github size={24} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                      <ExternalLink size={24} />
                    </a>
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

export default Projects;
