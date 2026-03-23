const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-black tracking-tight">Asif Ahmed</p>
            <p className="text-xs text-gray-400 mt-1">Novelist · Founder, Creative Podcast</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Asif Ahmed. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 mt-2 flex items-center justify-center md:justify-end">
              Developed by 
              <a href="https://tanviralamin.netlify.app/" target="_blank" rel="noopener noreferrer" className="ml-1.5 px-2.5 py-1 bg-white text-black font-semibold rounded-md border border-gray-200 hover:border-gray-300 hover:shadow-sm hover:bg-gray-50 transition-all">
                Tanvir
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
