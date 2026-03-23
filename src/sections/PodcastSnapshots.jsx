import { useState, useCallback, useRef } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from '../assets/podcast 5.jpg';
import img2 from '../assets/podcast 8.jpg';
import img3 from '../assets/podcast.jpg';
import img4 from '../assets/podcast 3.jpg';
import img5 from '../assets/podcast 2.jpg';
import img6 from '../assets/podcast 1.jpg';
import podcastLogo from '../assets/creativePodcast.png';
import video1 from '../assets/Video 1.mp4';
import ImageLightbox from '../components/ImageLightbox';
import ParticleBackground from '../components/ParticleBackground';

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
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const total = allSnapshots.length;
  const onPrev = useCallback(() => setLightboxIndex((i) => (i - 1 + total) % total), [total]);
  const onNext = useCallback(() => setLightboxIndex((i) => (i + 1) % total), [total]);
  const onClose = useCallback(() => setLightboxIndex(null), []);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="podcast-snapshots" className="relative overflow-hidden section-padding bg-black dark:bg-[#000000] text-white dark:text-[#ffffff]">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Label and Logo */}
        <div className="flex flex-col items-center mb-10">
          <p className="text-xs text-white/40 dark:text-[#ffffff]/40 uppercase tracking-widest mb-6 font-medium self-start">Podcast</p>
          <img
            src={podcastLogo}
            alt="Creative Podcast"
            className="w-56 md:w-72 lg:w-80 object-contain filter invert opacity-90"
          />
        </div>

        {/* Video Player */}
        <div className="mb-20">
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden group shadow-2xl">
            <video
              ref={videoRef}
              src={video1}
              className="w-full h-full object-cover"
              controls={isPlaying}
              playsInline
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
            />
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/40 dark:bg-[#000000]/40 hover:bg-black/50 dark:hover:bg-[#000000]/50 transition-colors duration-300 cursor-pointer"
                onClick={handlePlayClick}
              >
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-white/10 dark:bg-[#ffffff]/10 border border-white/30 dark:border-[#ffffff]/30 flex items-center justify-center group-hover:bg-white/20 dark:group-hover:bg-[#ffffff]/20 group-hover:scale-110 transition-all duration-300 shadow-lg backdrop-blur-sm">
                    <Play size={32} className="text-white dark:text-[#ffffff] ml-2" fill="currentColor" />
                  </div>
                  <h3 className="text-white dark:text-[#ffffff] text-xl md:text-2xl font-semibold tracking-wide drop-shadow-md">Creative Podcast</h3>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── FEATURED SPLIT LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Left — Large Featured Image */}
          <div
            className="relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
            onClick={() => setLightboxIndex(0)}
          >
            <img
              src={img4}
              alt="Creative Podcast"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Play overlay */}
            <div className="absolute inset-0 bg-black/30 dark:bg-[#000000]/30 flex items-center justify-center group-hover:bg-black/50 dark:group-hover:bg-[#000000]/50 transition-colors duration-300">
              <div className="w-20 h-20 rounded-full bg-white/10 dark:bg-[#ffffff]/10 border border-white/30 dark:border-[#ffffff]/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white dark:text-[#ffffff] ml-1" fill="currentColor" viewBox="0 0 24 24">
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
              <img src={podcastLogo} alt="Creative Podcast" className="w-56 md:w-64 lg:w-72 object-contain filter invert opacity-90" />
              <p className="text-white/50 text-base md:text-lg font-light leading-relaxed max-w-sm">
                Where stories, analysis, and perspectives come together.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-5 pt-2">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-4 group/item">
                  <div className="w-px h-10 bg-white/20 dark:bg-[#ffffff]/20 mt-0.5 flex-shrink-0 group-hover/item:bg-white/60 dark:group-hover/item:bg-[#ffffff]/60 transition-colors duration-300" />
                  <div>
                    <p className="text-sm font-semibold text-white dark:text-[#ffffff] mb-0.5">{h.label}</p>
                    <p className="text-xs text-white/40 dark:text-[#ffffff]/40 font-light leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-6">
              <a
                href="https://www.youtube.com/@creativepodcastofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white text-sm font-semibold rounded-full hover:bg-red-700 transition-colors duration-300"
              >
                Watch on YouTube
                <ExternalLink size={14} />
              </a>
              <a
                href="https://www.facebook.com/CreativePodcastofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Watch on Facebook
                <ExternalLink size={14} />
              </a>
              <Link
                to="/sponsorship"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ffffff] text-[#000000] text-sm font-semibold rounded-full hover:bg-[#e5e7eb] transition-colors duration-300"
              >
                Sponsor
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* ── SECONDARY GALLERY — Horizontal scroll ── */}
        <div>
          <p className="text-xs text-white/30 dark:text-[#ffffff]/30 uppercase tracking-widest mb-6 font-medium">From the studio</p>
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
                <div className="absolute inset-0 bg-black/0 dark:bg-[#000000]/0 group-hover:bg-black/30 dark:group-hover:bg-[#000000]/30 transition-colors duration-300 rounded-xl" />
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

