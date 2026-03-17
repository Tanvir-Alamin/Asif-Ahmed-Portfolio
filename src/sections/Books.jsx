import { ArrowUpRight } from 'lucide-react';

const Books = () => {
  const featuredBook = {
    title: 'কমল (Komol)',
    description: 'Centered on the life of Shaheed President Ziaur Rahman, this novel has sparked new discussions among readers, exploring history and identity with depth.',
    status: 'Available Now',
  };

  const upcomingBooks = [
    { 
      title: 'Zia in International Media', 
      titleBengali: 'আন্তর্জাতিক গণমাধ্যমে জিয়া',
      status: 'Latest Work', 
      description: 'A serious analytical exploration of how Shaheed President Ziaur Rahman was portrayed in global media outlets, reflecting his international stature and impact.',
      tag: 'Analytical Work'
    },
    { 
      title: 'Upcoming Novel', 
      status: 'Coming 2026', 
      description: 'A new exploration of contemporary Bangladeshi society and the human condition.' 
    },
  ];

  return (
    <section id="books" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-4 font-medium">Books</p>
        <h2 className="section-heading mb-16">
          Words that linger.
        </h2>

        {/* Featured Book */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="aspect-[3/4] bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-32 mx-auto bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                  <span className="text-2xl text-gray-300">📖</span>
                </div>
                <p className="text-sm text-gray-400">Book Cover</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="inline-block text-xs text-gray-400 uppercase tracking-widest font-medium bg-gray-100 px-3 py-1 rounded-full">
              {featuredBook.status}
            </span>
            <h3 className="text-3xl md:text-4xl font-semibold text-black tracking-tight">
              {featuredBook.title}
            </h3>
            <p className="text-gray-600 font-light leading-relaxed text-base md:text-lg">
              {featuredBook.description}
            </p>
            <button className="apple-button group">
              Learn more
              <ArrowUpRight size={16} className="ml-2 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Upcoming Books */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-8 tracking-tight">Upcoming</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingBooks.map((book, i) => (
              <div
                key={i}
                className={`p-8 bg-white rounded-2xl border ${book.tag ? 'border-black' : 'border-gray-100'} hover:border-black transition-all duration-300 flex flex-col justify-between h-full`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                      {book.status}
                    </span>
                    {book.tag && (
                      <span className="text-[10px] bg-black text-white px-2 py-0.5 rounded-full uppercase tracking-tighter">
                        {book.tag}
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-black mb-1 tracking-tight">{book.title}</h4>
                  {book.titleBengali && <p className="text-sm text-gray-400 font-medium mb-3">{book.titleBengali}</p>}
                  <p className="text-sm text-gray-500 font-light leading-relaxed mb-6">{book.description}</p>
                </div>
                <div>
                  <button className="text-xs font-semibold text-black uppercase tracking-widest border-b border-black pb-1 hover:border-gray-300 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
