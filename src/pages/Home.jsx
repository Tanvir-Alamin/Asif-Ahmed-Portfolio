import Hero from '../sections/Hero';
import About from '../sections/About';
import CreativePodcast from '../sections/PodcastSnapshots';
import Books from '../sections/Books';
import MediaSnapshots from '../sections/MediaSnapshots';
import Articles from '../sections/Articles';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <CreativePodcast />
      <About />
      <Books />
      <MediaSnapshots />
      <Articles />
      <Contact />
    </>
  );
};

export default Home;
