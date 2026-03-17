import ArticleCard from '../components/ArticleCard';

const articles = [
  {
    title: 'The Rise of Intellectual Discourse in Bangladesh',
    source: 'The Daily Star',
    excerpt: 'A deep dive into the evolving landscape of modern thought and media in contemporary Bangladesh.',
    date: 'Jan 2025',
    link: '#',
  },
  {
    title: 'Why Literature Still Matters in the Age of Social Media',
    source: 'Prothom Alo',
    excerpt: 'Exploring how fiction and storytelling continue to shape public consciousness amid the digital revolution.',
    date: 'Nov 2024',
    link: '#',
  },
  {
    title: 'Creative Podcast: Redefining Conversation Culture',
    source: 'Bangladesh Post',
    excerpt: 'How a new wave of long-form podcasts is creating space for nuanced dialogue in Bangladeshi media.',
    date: 'Sep 2024',
    link: '#',
  },
  {
    title: 'The Young Voices Shaping Political Thought',
    source: 'The Daily Star',
    excerpt: 'A look at how emerging writers and commentators are influencing political discourse among youth.',
    date: 'Jul 2024',
    link: '#',
  },
  {
    title: 'Komol: A Novel That Speaks to a Generation',
    source: 'Bangla Tribune',
    excerpt: 'Review of the debut novel that captures the existential anxieties and hopes of modern Bangladeshi youth.',
    date: 'May 2024',
    link: '#',
  },
  {
    title: 'Media, Identity, and the Bangladeshi Millennial',
    source: 'The Business Standard',
    excerpt: 'An essay on how media consumption patterns are reshaping cultural identity among young professionals.',
    date: 'Mar 2024',
    link: '#',
  },
];

const Articles = () => {
  return (
    <section id="articles" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-4 font-medium">
          Articles & Media
        </p>
        <h2 className="section-heading mb-4">
          Selected writings and media coverage.
        </h2>
        <p className="section-subheading mb-16">
          Published articles, opinion pieces, and media features across leading publications.
        </p>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <ArticleCard key={i} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
