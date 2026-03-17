import { useState, useCallback } from 'react';
import img1 from '../assets/podcast 5.jpg';
import img2 from '../assets/podcast 8.jpg';
import img3 from '../assets/podcast.jpg';
import img4 from '../assets/media 7.jpeg';
import img5 from '../assets/media 8.jpeg';
import img6 from '../assets/media 9.jpeg';
import ImageLightbox from '../components/ImageLightbox';

const PodcastSnapshots = () => {
  const snapshots = [
    { src: img1, caption: 'Creative Podcast' },
    { src: img2, caption: 'Creative Podcast' },
    { src: img3, caption: 'Creative Podcast' },
    { src: img4, caption: 'Creative Podcast' },
    { src: img5, caption: 'Creative Podcast' },
    { src: img6, caption: 'Creative Podcast' },
  ];

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const total = snapshots.length;

  const onPrev = useCallback(() => setLightboxIndex((i) => (i - 1 + total) % total), [total]);
  const onNext = useCallback(() => setLightboxIndex((i) => (i + 1) % total), [total]);
  const onClose = useCallback(() => setLightboxIndex(null), []);

  return (
    <section id="podcast-snapshots" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-4 font-medium">Inside the Studio</p>
        <h2 className="section-heading mb-12">
          Creative Podcast Snapshots
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {snapshots.map((shot, i) => (
            <div
              key={i}
              className="relative group h-56 w-full rounded-xl overflow-hidden bg-gray-200 shadow-sm cursor-pointer transition-all duration-500 hover:shadow-xl"
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={shot.src}
                alt={shot.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-white text-xs font-semibold uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full">
                  {shot.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={snapshots}
          currentIndex={lightboxIndex}
          onClose={onClose}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </section>
  );
};

export default PodcastSnapshots;

