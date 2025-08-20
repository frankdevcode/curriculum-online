import React from 'react';
import Layout from './components/Layout';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
