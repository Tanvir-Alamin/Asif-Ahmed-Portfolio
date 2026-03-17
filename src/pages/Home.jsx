import Hero from '../sections/Hero';
import About from '../sections/About';
import Books from '../sections/Books';
import PodcastSnapshots from '../sections/PodcastSnapshots';
import MediaSnapshots from '../sections/MediaSnapshots';
import Articles from '../sections/Articles';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Books />
      <PodcastSnapshots />
      <MediaSnapshots />
      <Articles />
      <Contact />
    </>
  );
};

export default Home;
