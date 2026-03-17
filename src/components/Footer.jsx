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
            <p className="text-xs text-gray-300 mt-1">
              Developed by <span className="text-gray-500 font-medium">Tanvir</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
