import { Phone, ExternalLink, Mail, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-black transition-all duration-300 flex items-center justify-center"
      title="Copy to clipboard"
    >
      {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
    </button>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-4 font-medium">Contact</p>
          <h2 className="section-heading mb-4 mx-auto">
            Let's connect.
          </h2>
          <p className="section-subheading mx-auto mb-16">
            For collaborations, media appearances, or general inquiries.
          </p>

          <div className="space-y-4">
            
            {/* Email */}
            <div className="flex items-center justify-between p-4 sm:p-6 rounded-2xl border border-gray-100 hover:border-gray-300 transition-all duration-300 group">
              <a href="mailto:asifamasif2002@gmail.com" className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black transition-colors duration-300 flex-shrink-0">
                  <Mail size={18} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-black">Email</p>
                  <p className="text-xs sm:text-sm text-gray-500">asifamasif2002@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-2 pl-4">
                <CopyButton text="asifamasif2002@gmail.com" />
                <a href="mailto:asifamasif2002@gmail.com" className="p-2 rounded-full hover:bg-gray-100 text-gray-300 hover:text-black transition-colors duration-300 hidden sm:flex">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* WhatsApp / Phone */}
            <div className="flex items-center justify-between p-4 sm:p-6 rounded-2xl border border-gray-100 hover:border-gray-300 transition-all duration-300 group">
              <a href="https://wa.me/8801873038003" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300 flex-shrink-0">
                  <Phone size={18} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-black">WhatsApp / Phone</p>
                  <p className="text-xs sm:text-sm text-gray-500">+880 1873 038003</p>
                </div>
              </a>
              <div className="flex items-center gap-2 pl-4">
                <CopyButton text="+8801873038003" />
                <a href="https://wa.me/8801873038003" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 text-gray-300 hover:text-green-600 transition-colors duration-300 hidden sm:flex">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* Facebook */}
            <div className="flex items-center justify-between p-4 sm:p-6 rounded-2xl border border-gray-100 hover:border-gray-300 transition-all duration-300 group">
              <a href="https://www.facebook.com/asipha.ahamada.569281" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 flex-shrink-0">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-black">Facebook</p>
                  <p className="text-xs sm:text-sm text-gray-500">@asipha.ahamada</p>
                </div>
              </a>
              <div className="flex items-center gap-2 pl-4">
                <a href="https://www.facebook.com/asipha.ahamada.569281" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 text-gray-300 hover:text-blue-600 transition-colors duration-300 hidden sm:flex">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

