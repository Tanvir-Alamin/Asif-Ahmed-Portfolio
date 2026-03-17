import Hero from '../sections/Hero';
import About from '../sections/About';
import CreativePodcast from '../sections/PodcastSnapshots';
import Books from '../sections/Books';
import Media from '../sections/Media';
import MediaSnapshots from '../sections/MediaSnapshots';
import InTheNews from '../sections/InTheNews';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <CreativePodcast />
      <About />
      <Books />
      <Media />
      <MediaSnapshots />
      <InTheNews />
      <Contact />
    </>
  );
};

export default Home;

