import { ArrowRight } from 'lucide-react';
import author from '../assets/asif.jpg'
const Hero = () => {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Author Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={author}
                alt="Asif Ahmed"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right — Text Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.1]">
                Asif<br />Ahmed
              </h1>
              <p className="text-base md:text-lg text-gray-500 font-light tracking-wide">
                Novelist · Founder, Creative Podcast
              </p>

            </div>

            <p className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed italic border-l-2 border-black pl-6">
              "From thought to dialogue, from dialogue to impact."
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="apple-button-filled group">
                Contact
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#podcast" onClick={(e) => scrollTo(e, 'podcast')} className="apple-button">
                Podcast
              </a>
            </div>
          </div>
        </div>

        {/* Podcast / Studio Visual */}
        <div className="mt-24 lg:mt-32">
          <div className="aspect-[21/9] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-gray-200 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[12px] border-l-gray-400 border-y-[8px] border-y-transparent ml-1"></div>
                </div>
                <p className="text-sm text-gray-400">Podcast / Studio Visual</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

