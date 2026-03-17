import { ArrowUpRight } from 'lucide-react';
import podcastLogo from '../assets/creativePodcast.png';
import komolImg from '../assets/Komol.jpg';
import ziaImg from '../assets/book 2.jpg';

const FeaturedWorks = () => {
  const books = [
    {
      title: 'কমল (Komol)',
      tagline: 'Centered on the life of Shaheed President Ziaur Rahman.',
      image: komolImg,
      link: 'https://www.rokomari.com/book/442211/komol',
    },
    {
      title: 'Zia in International Media',
      tagline: 'A serious analytical exploration of global media portrayal.',
      image: ziaImg,
      link: 'https://www.rokomari.com/book/536989/antarjatik-gonomaddhome-ziya',
    }
  ];

  return (
    <section id="featured-works" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-4 font-medium">Featured Works</p>
        <h2 className="section-heading mb-16 max-w-3xl">
          Creative Podcast & Publications by Asif Ahmed
        </h2>

        {/* Podcast Feature */}
        <a 
          href="https://www.youtube.com/@creativepodcastofficial" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full bg-white rounded-3xl p-8 md:p-12 lg:p-16 mb-12 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01] transition-all duration-500 group relative overflow-hidden"
        >
          {/* Subtle background glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 group-hover:bg-gray-100 transition-colors duration-500"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-2xl mx-auto">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-md border border-gray-100">
              <img src={podcastLogo} alt="Creative Podcast" className="w-full h-full object-cover" />
            </div>
            
            <div>
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed mb-8">
                Where stories, analysis, and perspectives come together.
              </p>
              
              <div className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-black/10">
                Watch on YouTube
                <ArrowUpRight size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </a>

        {/* Books Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {books.map((book, i) => (
            <a 
              key={i}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row items-center sm:items-stretch gap-8 bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 group"
            >
              <div className="w-40 sm:w-44 flex-shrink-0 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
                <h3 className="text-2xl md:text-3xl font-semibold text-black mb-3 tracking-tight group-hover:text-gray-700 transition-colors leading-tight">
                  {book.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed mb-6 sm:mb-8">
                  {book.tagline}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-black uppercase tracking-widest pb-1 border-b-2 border-transparent group-hover:border-black transition-all">
                    Get on Rokomari
                    <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedWorks;
