import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Story } from './components/Story';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="relative min-h-screen w-dvw overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;