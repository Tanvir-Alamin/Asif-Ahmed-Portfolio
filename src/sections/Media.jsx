// Helper: detect platform from URL
const getPlatform = (url) => {
  if (url.includes('youtu.be') || url.includes('youtube.com')) return 'YouTube';
  if (url.includes('facebook.com')) return 'Facebook';
  return 'Other';
};

// Helper: extract YouTube video ID
const getYouTubeId = (url) => {
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];
  const longMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (longMatch) return longMatch[1];
  return null;
};

// Helper: get thumbnail URL
const getThumbnail = (url) => {
  const platform = getPlatform(url);
  if (platform === 'YouTube') {
    const id = getYouTubeId(url);
    if (id) return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }
  return null; // Facebook or unknown = use placeholder
};

const Media = () => {
  const mediaItems = [
    { title: "Interview Episode", link: "https://youtu.be/rru6JTETDNE" },
    { title: "Creative Discussion", link: "https://youtu.be/VazAj3mBsTs" },
    { title: "Podcast Conversation", link: "https://www.facebook.com/share/v/1GJNn6HBJj/" },
    { title: "Public Talk", link: "https://www.facebook.com/share/v/1CgZAaUJJR/" },
    { title: "Media Appearance", link: "https://www.facebook.com/share/v/18jKmBcn57/" },
    { title: "Interview Clip", link: "https://www.facebook.com/share/v/1RxgJP4eX4/" },
  ].map((item) => ({
    ...item,
    platform: getPlatform(item.link),
    thumbnail: getThumbnail(item.link),
  }));

  return (
    <section id="media" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-4 font-medium">Media & Appearances</p>
        <h2 className="section-heading mb-16">
          Selected interviews and videos.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100 flex-shrink-0">
                {item.thumbnail ? (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                )}
                {/* Play icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-black/60 group-hover:scale-110">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                {/* Platform badge */}
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${item.platform === 'YouTube' ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'}`}>
                    {item.platform}
                  </span>
                </div>
              </div>
              {/* Card body */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <h3 className="text-sm font-semibold text-black leading-snug mb-4">{item.title}</h3>
                <span className="text-xs font-medium text-black inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Watch <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
