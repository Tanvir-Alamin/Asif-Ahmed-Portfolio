import { ArrowRight } from 'lucide-react';
import author from '../assets/Asif Ahmed.jpeg';

import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const fullText = "From thought to dialogue, from dialogue to impact.";

  useEffect(() => {
    const handleType = () => {
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }

      setTypingSpeed(isDeleting ? 75 : 150);
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed]);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen mb-[85px] flex items-center pt-16">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 mt-[15px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Top/Left — Author Image with Glow (Responsive: Top) */}
          <div className="relative order-1 lg:order-1 flex justify-center">
            {/* Glow effect (Vim of light) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-400/15 blur-[60px] rounded-full animate-pulse z-0" />

            <div className="relative w-full max-w-[240px] md:max-w-[320px] lg:max-w-[400px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl z-10 box-content">
              <img
                src={author}
                alt="Asif Ahmed"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Bottom/Right — Text Content (Responsive: Bottom/Centered) */}
          <div className="order-2 lg:order-2 space-y-8 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.1]">
                Asif<br />Ahmed
              </h1>
              <p className="text-base md:text-lg text-gray-500 font-light tracking-wide">
                Novelist · Founder, Creative Podcast
              </p>

            </div>

            <p className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed italic border-l-2 border-black lg:border-l-2 lg:pl-6 pl-0 border-l-0">
              "{text}"<span className="animate-pulse font-normal">|</span>
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="apple-button-filled group">
                Contact Me
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#podcast-snapshots" onClick={(e) => scrollTo(e, 'podcast-snapshots')} className="apple-button">
                Podcast
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

