import { useState, useCallback } from 'react';
import img1 from '../assets/media 1.jpg';
import img2 from '../assets/media 2.jpg';
import img3 from '../assets/media 3.jpg';
import img4 from '../assets/media 4.jpg';
import img5 from '../assets/media 5.jpg';
import img6 from '../assets/media 6.jpeg';
import img7 from '../assets/media 7.jpeg';
import img8 from '../assets/media 8.jpeg';
import img9 from '../assets/media 9.jpeg';
import img10 from '../assets/media 10.jpg';
import img11 from '../assets/media 11.jpeg';
import img12 from '../assets/media 12.jpg';
import img13 from '../assets/media 13.jpg';
import img14 from '../assets/media 14.jpeg';
import img15 from '../assets/media 15.jpg';
import img16 from '../assets/media 16.jpg';
import img17 from '../assets/media 17.jpg';
import ImageLightbox from '../components/ImageLightbox';

// Intentionally varied heights to create organic masonry rhythm
const heightClasses = ['h-48', 'h-64', 'h-80', 'h-56', 'h-72', 'h-64', 'h-80', 'h-48', 'h-64', 'h-72', 'h-56', 'h-80', 'h-64', 'h-48', 'h-72'];

const mediaImages = [
  { src: img1, caption: 'Gayeshwar Chandra Roy' },
  { src: img2, caption: 'Shahid Uddin Chowdhury Anee' },
  { src: img3, caption: 'Israfil Khosru' },
  { src: img4, caption: 'Shahadat Hossain Mayor of Chittagong City Corporation' },
  { src: img5, caption: 'Signing a copy for a reader' },
  { src: img6, caption: 'Sharing Thoughts' },
  { src: img7, caption: 'Dhaka University' },
  { src: img8, caption: 'Dhaka University' },
  { src: img9, caption: 'Story of Komol' },
  { src: img10, caption: 'NEWS Today' },
  { src: img11, caption: 'Television Interview' },
  { src: img12, caption: 'Kingkor Ahsan' },
  { src: img13, caption: 'At the book fair' },
  { src: img14, caption: 'Komol Book Trailer at Star Cineplex' },
  { src: img16, caption: 'Sayeed Al Noman' },
  { src: img15, caption: 'Dhaka FM 90.4' },
  { src: img17, caption: 'Bangladhara' },
];

const MediaSnapshots = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const total = mediaImages.length;

  const onPrev = useCallback(() => setLightboxIndex((i) => (i - 1 + total) % total), [total]);
  const onNext = useCallback(() => setLightboxIndex((i) => (i + 1) % total), [total]);
  const onClose = useCallback(() => setLightboxIndex(null), []);

  return (
    <section id="media-snapshots" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-4 font-medium">Public Sphere</p>
        <h2 className="section-heading mb-12">
          Media & Public Appearances
        </h2>

        {/* CSS Columns masonry layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 [column-fill:_balance]">
          {mediaImages.map((item, i) => (
            <div
              key={i}
              className={`break-inside-avoid mb-5 group relative overflow-hidden rounded-xl cursor-pointer ${heightClasses[i % heightClasses.length]}`}
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Hover caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-xs font-medium uppercase tracking-widest">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={mediaImages}
          currentIndex={lightboxIndex}
          onClose={onClose}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </section>
  );
};

export default MediaSnapshots;
