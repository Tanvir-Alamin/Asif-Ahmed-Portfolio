import { ExternalLink, Play } from 'lucide-react';

const Podcast = () => {
  const episodes = [
    {
      title: 'Episode 12: রাজনীতি ও তরুণ প্রজন্ম',
      description: "A candid conversation about political awareness and the role of youth in shaping Bangladesh's future.",
      duration: '42 min',
    },
    {
      title: 'Episode 11: সাহিত্য কি সমাজ বদলাতে পারে?',
      description: 'Exploring the power of literature as a tool for social change and cultural transformation.',
      duration: '38 min',
    },
  ];

  return (
    <section id="podcast" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-4 font-medium">Podcast</p>
        <h2 className="section-heading mb-4">
          Creative Podcast
        </h2>
        <p className="section-subheading mb-16">
          Intellectually driven conversations that challenge perspectives and inspire action. Exploring ideas at the intersection of culture, politics, and human experience.
        </p>

        {/* Main Podcast Visual */}
        <div className="mb-16">
          <a
            href="https://www.facebook.com/CreativePodcastofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="aspect-video bg-black rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <Play size={28} className="text-white ml-1" fill="white" />
                  </div>
                  <p className="text-white/60 text-sm font-light">Watch on Facebook</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Sample Episodes */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-black tracking-tight mb-6">Recent Episodes</h3>
          {episodes.map((ep, i) => (
            <div
              key={i}
              className="flex items-start gap-6 p-6 rounded-2xl border border-gray-100 hover:border-gray-300 transition-all duration-300 group"
            >
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                <Play size={16} className="text-gray-400 ml-0.5 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-base font-semibold text-black tracking-tight mb-1">{ep.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{ep.description}</p>
              </div>
              <span className="text-xs text-gray-400 font-medium flex-shrink-0 mt-1">{ep.duration}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.facebook.com/CreativePodcastofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-button group"
          >
            Follow on Facebook
            <ExternalLink size={14} className="ml-2 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
