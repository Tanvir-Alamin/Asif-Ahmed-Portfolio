import img1 from '../assets/podcast 5.jpg';
import img2 from '../assets/podcast 8.jpg';
import img3 from '../assets/podcast.jpg';
import img4 from '../assets/media 7.jpeg';
import img5 from '../assets/media 8.jpeg';
import img6 from '../assets/media 9.jpeg';

const PodcastSnapshots = () => {
  const snapshots = [
    { id: 1, src: img1, label: 'Creative Podcast' },
    { id: 2, src: img2, label: 'Creative Podcast' },
    { id: 3, src: img3, label: 'Creative Podcast' },
    { id: 4, src: img4, label: 'Creative Podcast' },
    { id: 5, src: img5, label: 'Creative Podcast' },
    { id: 6, src: img6, label: 'Creative Podcast' },
  ];

  return (
    <section id="podcast-snapshots" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-4 font-medium">Inside the Studio</p>
        <h2 className="section-heading mb-12">
          Creative Podcast Snapshots
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {snapshots.map((shot) => (
            <div 
              key={shot.id} 
              className="relative group h-56 w-full rounded-xl overflow-hidden bg-gray-200 border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl"
            >
              <img 
                src={shot.src} 
                alt={shot.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay label */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-white text-xs font-semibold uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full">
                  {shot.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastSnapshots;
