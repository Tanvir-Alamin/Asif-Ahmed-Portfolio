import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import BooksPage from './pages/BooksPage';
import PodcastPage from './pages/PodcastPage';
import MediaPage from './pages/MediaPage';
import ArticlesPage from './pages/ArticlesPage';
import ContactPage from './pages/ContactPage';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/podcast" element={<PodcastPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
