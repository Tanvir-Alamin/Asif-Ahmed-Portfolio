import { useState, useCallback } from 'react';
import { ExternalLink } from 'lucide-react';
import img1 from '../assets/podcast 5.jpg';
import img2 from '../assets/podcast 8.jpg';
import img3 from '../assets/podcast.jpg';
import img4 from '../assets/podcast 3.jpg';
import img5 from '../assets/podcast 2.jpg';
import img6 from '../assets/podcast 1.jpg';
import ImageLightbox from '../components/ImageLightbox';

const allSnapshots = [
  { src: img1, caption: 'Creative Podcast' },
  { src: img2, caption: 'Creative Podcast' },
  { src: img3, caption: 'Creative Podcast' },
  { src: img4, caption: 'Creative Podcast' },
  { src: img5, caption: 'Creative Podcast' },
  { src: img6, caption: 'Creative Podcast' },
];

const highlights = [
  { label: 'Politics & History', desc: "Candid discussions on Bangladesh's political landscape and historical narrative." },
  { label: 'Literature & Society', desc: 'How storytelling shapes culture and drives social change.' },
  { label: 'Intellectual Dialogue', desc: 'Long-form conversations with thinkers, writers, and leaders.' },
];

const CreativePodcast = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const total = allSnapshots.length;
  const onPrev = useCallback(() => setLightboxIndex((i) => (i - 1 + total) % total), [total]);
  const onNext = useCallback(() => setLightboxIndex((i) => (i + 1) % total), [total]);
  const onClose = useCallback(() => setLightboxIndex(null), []);

  return (
    <section id="podcast-snapshots" className="section-padding bg-black text-white">
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <p className="text-xs text-white/40 uppercase tracking-widest mb-4 font-medium">Podcast</p>

        {/* ── FEATURED SPLIT LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Left — Large Featured Image */}
          <div
            className="relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
            onClick={() => setLightboxIndex(0)}
          >
            <img
              src={img3}
              alt="Creative Podcast"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Play overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors duration-300">
              <div className="w-20 h-20 rounded-full bg-white/10 border border-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="text-white/60 text-[10px] uppercase tracking-widest">Click to view</span>
            </div>
          </div>

          {/* Right — Editorial Content */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                Creative<br />Podcast
              </h2>
              <p className="text-white/50 text-base md:text-lg font-light leading-relaxed max-w-sm">
                Where stories, analysis, and perspectives come together.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-5 pt-2">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-4 group/item">
                  <div className="w-px h-10 bg-white/20 mt-0.5 flex-shrink-0 group-hover/item:bg-white/60 transition-colors duration-300" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">{h.label}</p>
                    <p className="text-xs text-white/40 font-light leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://www.facebook.com/CreativePodcastofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors duration-300"
            >
              Watch on Facebook
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* ── SECONDARY GALLERY — Horizontal scroll ── */}
        <div>
          <p className="text-xs text-white/30 uppercase tracking-widest mb-6 font-medium">From the studio</p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
            {allSnapshots.map((shot, i) => (
              <div
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="flex-shrink-0 w-56 h-72 rounded-xl overflow-hidden cursor-pointer group relative snap-start"
              >
                <img
                  src={shot.src}
                  alt={shot.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 rounded-xl" />
              </div>
            ))}
          </div>
        </div>

      </div>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={allSnapshots}
          currentIndex={lightboxIndex}
          onClose={onClose}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </section>
  );
};

export default CreativePodcast;

