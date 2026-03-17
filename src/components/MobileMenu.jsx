import { X } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose, navLinks, activeSection, onNavigate }) => {
  const handleClick = (e, sectionId) => {
    e.preventDefault();
    onClose();
    onNavigate(sectionId);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100">
          <span className="text-sm font-semibold text-black tracking-tight">Menu</span>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-black transition-colors duration-300"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <nav className="px-6 py-8 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.sectionId}`}
              onClick={(e) => handleClick(e, link.sectionId)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeSection === link.sectionId
                  ? 'text-black bg-gray-50'
                  : 'text-gray-500 hover:text-black hover:bg-gray-50'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
