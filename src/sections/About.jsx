const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-4 font-medium">About</p>
          <h2 className="section-heading mb-8">
            A voice at the intersection of literature and social thought.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed text-base md:text-lg font-light">
              Asif Ahmed is a writer who explores the untold stories hidden within the folds of history. He is the Founder and CEO of Creative Podcast, a platform focused on meaningful conversations and intellectual discourse.
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg font-light">
              His novel Komol, centered on the life of Shaheed President Ziaur Rahman, has sparked new discussions among readers. Alongside his creative work, he regularly contributes to national newspapers, where he reflects on politics, history, and identity from a unique and thoughtful perspective.
            </p>
          </div>

          <div className="space-y-8">
            {/* Focus Areas */}
            {[
              { title: 'Literature', desc: 'Exploring the human condition through fiction and narrative storytelling.' },
              { title: 'Social & Political Thought', desc: 'Engaging with ideas that shape society and governance in Bangladesh.' },
              { title: 'Youth Engagement', desc: 'Inspiring the next generation through dialogue, media, and mentorship.' },
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="flex items-start gap-4">
                  <div className="w-px h-12 bg-black mt-1 transition-all duration-300 group-hover:h-16"></div>
                  <div>
                    <h3 className="text-base font-semibold text-black mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
