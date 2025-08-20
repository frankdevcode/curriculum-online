import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { profile } from '../../data/profile';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Contacto
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          ¿Interesado en colaborar? No dudes en contactarme. Estoy disponible para proyectos freelance y nuevas oportunidades.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a href={`mailto:${profile.contact.email}`}>
            <Button>
              <Mail className="mr-2" /> Enviar un correo
            </Button>
          </a>
        </motion.div>
        <div className="mt-12 flex justify-center space-x-6">
          <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <Linkedin size={32} />
          </a>
          <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <Github size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
