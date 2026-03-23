import { ExternalLink } from 'lucide-react';

// ─── Article data ────────────────────────────────────────────────────────────
// Since browser-side og:image extraction is blocked by CORS,
// titles/excerpts are hand-curated from the URLs.

const featuredArticles = [
  {
    source: 'Banglanews24',
    title: 'কমল: জিয়াউর রহমানকে নিয়ে দেশের প্রথম উপন্যাস',
    excerpt:
      'বাংলাদেশের বহুল আলোচিত রাষ্ট্রনায়ক জিয়াউর রহমানের জীবন ও দর্শন নিয়ে রচিত প্রথম উপন্যাস "কমল" এখন পাঠকদের হাতে।',
    url: 'https://share.google/b3fX6FHWw0BxBJJvq',
    tag: 'Featured',
  },
  {
    source: 'Daily Times of Bangladesh',
    title: "Asif Ahmed's Debut Novel 'Komol' Draws National Attention",
    excerpt:
      "The novel 'Komol', centred on the life of Shaheed President Ziaur Rahman, has sparked vibrant discourse in literary and political circles across Bangladesh.",
    url: 'https://share.google/DlMSPQc24Y97A9Fjv',
    tag: 'International',
  },
  {
    source: 'Daily Purbokon',
    title: 'সাড়া ফেলেছে আসিফ আহমেদের উপন্যাস "কমল"',
    excerpt:
      'তরুণ লেখক আসিফ আহমেদের প্রথম উপন্যাস "কমল" প্রকাশিত হওয়ার পর থেকেই পাঠকমহলে ব্যাপক সাড়া ফেলেছে।',
    url: 'https://share.google/KHx0hYhVJpITFHwPX',
    tag: 'Featured',
  },
];

const regularArticles = [
  {
    source: 'Bangladesh er Khabor',
    title: 'জিয়াকে নিয়ে উপন্যাস লিখলেন তরুণ লেখক আসিফ আহমেদ',
    excerpt: 'শিল্প ও সংস্কৃতি অঙ্গনে আলোচনার ঝড় তুলেছে তরুণ লেখকের প্রথম উপন্যাস।',
    url: 'https://www.bangladesherkhabor.net/art-culture/7064',
  },
  {
    source: 'NewsNow24',
    title: '"কমল" উপন্যাসে জীবন্ত হয়ে উঠেছেন জিয়াউর রহমান',
    excerpt: 'পাঠকদের কাছে ব্যাপক সমাদৃত এই উপন্যাসটি বাংলাদেশের রাজনৈতিক ইতিহাস নিয়ে নতুন আলোকপাত করে।',
    url: 'https://newsnow24.com/novel/OpGf1InhxS',
  },
  {
    source: 'Shadaka Gagoj',
    title: 'আসছে জিয়াউর রহমানের জীবন নিয়ে প্রথম উপন্যাস "কমল"',
    excerpt: 'দেশে এই প্রথমবারের মতো মহান রাষ্ট্রনায়ক জিয়াউর রহমানের জীবনকেন্দ্রিক উপন্যাস প্রকাশিত হচ্ছে।',
    url: 'https://shadakagoj.com/news-view/10225?n=%E0%A6%86%E0%A6%B8%E0%A6%9B%E0%A7%87%20%E0%A6%9C%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%89%E0%A6%B0%20%E0%A6%B0%E0%A6%B9%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%B0%20%E0%A6%9C%E0%A7%80%E0%A6%AC%E0%A6%A8%20%E0%A6%A8%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A7%87%20%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A5%E0%A6%AE%20%E0%A6%89%E0%A6%AA%E0%A6%A8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B8%20%E2%80%98%E0%A6%95%E0%A6%AE%E0%A6%B2%E2%80%99',
  },
  {
    source: 'Mohanagar News',
    title: 'তরুণ প্রজন্মের কলমে জিয়াউর রহমানের জীবনগাথা',
    excerpt: 'মোহনগর নিউজে প্রকাশিত বিশেষ প্রতিবেদনে উঠে এসেছে আসিফ আহমেদের সাহিত্যিক যাত্রার কথা।',
    url: 'https://mohanagarnews.com/19003',
  },
  {
    source: 'CTG Pratidin',
    title: 'জিয়াউর রহমানের জীবন নিয়ে উপন্যাস "কমল"',
    excerpt: 'চট্টগ্রাম প্রতিদিনে প্রকাশিত বিশেষ প্রতিবেদনে উপন্যাসটির প্রেক্ষাপট ও লেখকের অনুপ্রেরণার কথা উঠে এসেছে।',
    url: 'https://ctgpratidin.com/%e0%a6%9c%e0%a6%bf%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%89%e0%a6%b0-%e0%a6%b0%e0%a6%b9%e0%a6%ae%e0%a6%be%e0%a6%a8%e0%a7%87%e0%a6%b0-%e0%a6%9c%e0%a7%80%e0%a6%ac%e0%a6%a8-%e0%a6%a8%e0%a6%bf%e0%a6%af/',
  },
  {
    source: 'Khaborer Kagoj',
    title: '"কমল" — সাহিত্যের নতুন দিগন্তে জিয়াউর রহমান',
    excerpt: 'খবরের কাগজে প্রকাশিত নিবন্ধে উপন্যাসটির সাহিত্যমান ও পাঠকমহলে এর প্রভাব নিয়ে আলোচনা করা হয়েছে।',
    url: 'https://www.khaborerkagoj.com/art-culture/839284',
  },
  {
    source: 'Saradin er Sangbad',
    title: 'প্রকাশিত হলো জিয়াউর রহমানকে নিয়ে প্রথম উপন্যাস',
    excerpt: 'সারাদিনের সংবাদে জানানো হয় যে, দেশে প্রথমবারের মতো জিয়াউর রহমানকে কেন্দ্র করে রচিত উপন্যাস বাজারে এসেছে।',
    url: 'https://saradinersangbad.com/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%95%e0%a6%be%e0%a6%b6%e0%a6%bf%e0%a6%a4-%e0%a6%b9%e0%a6%b2%e0%a7%8b-%e0%a6%9c%e0%a6%bf%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%89%e0%a6%b0-%e0%a6%b0%e0%a6%b9%e0%a6%ae/',
  },
  {
    source: 'Facebook',
    title: 'পাঠকদের প্রতিক্রিয়ায় মুখর "কমল" এর প্রকাশনা উৎসব',
    excerpt: 'সামাজিক মাধ্যমে ব্যাপক আলোচনার কেন্দ্রে উঠে এসেছে আসিফ আহমেদের উপন্যাস "কমল"।',
    url: 'https://www.facebook.com/share/15iYzWyDxh/?mibextid=xfxF2i',
  },
  {
    source: 'Facebook',
    title: '"কমল" নিয়ে সামাজিক মাধ্যমে পাঠকদের উচ্ছ্বাস',
    excerpt: 'ফেসবুকে উপন্যাসটির পাঠকরা তাঁদের অনুভূতি শেয়ার করেছেন এবং লেখককে অভিনন্দন জানিয়েছেন।',
    url: 'https://share.google/6AGVCvwujLPceEXl1',
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const FeaturedCard = ({ source, title, excerpt, url, tag }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
  >
    <div>
      <div className="flex items-center justify-between mb-5">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {source}
        </span>
        {tag && (
          <span className="text-[10px] bg-black text-white px-2.5 py-1 rounded-full uppercase tracking-wider font-medium">
            {tag}
          </span>
        )}
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-black leading-snug tracking-tight mb-3 group-hover:text-gray-700 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-500 font-light leading-relaxed">{excerpt}</p>
    </div>
    <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-black">
      Read Full Article
      <ExternalLink size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </div>
  </a>
);

const RegularCard = ({ source, title, excerpt, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col justify-between bg-white border border-gray-100 rounded-xl p-6 hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full"
  >
    <div>
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-3">
        {source}
      </span>
      <h4 className="text-base font-semibold text-black leading-snug tracking-tight mb-2 group-hover:text-gray-700 transition-colors">
        {title}
      </h4>
      <p className="text-xs text-gray-400 font-light leading-relaxed">{excerpt}</p>
    </div>
    <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-black">
      Read Article
      <ExternalLink size={10} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </div>
  </a>
);

import { useState } from 'react';

// ─── Main section ─────────────────────────────────────────────────────────────
const InTheNews = () => {
  const [showAll, setShowAll] = useState(false);
  const initialRegularCount = 3; // 3 featured + 3 regular = 6 total initially

  return (
    <section id="articles" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-4 font-medium">Press</p>
        <h2 className="section-heading mb-3">In the News</h2>
        <p className="section-subheading mb-16">
          Featured across national media and publications.
        </p>

        {/* Featured row — larger cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredArticles.map((article, i) => (
            <FeaturedCard key={i} {...article} />
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-10">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">More Coverage</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Regular grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {regularArticles.slice(0, showAll ? undefined : initialRegularCount).map((article, i) => (
            <RegularCard key={i} {...article} />
          ))}
        </div>

        {regularArticles.length > initialRegularCount && (
          <div className="mt-12 text-center flex flex-col items-center gap-4">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="apple-button group"
              >
                See More News
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="apple-button group"
              >
                See Less News
              </button>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default InTheNews;
