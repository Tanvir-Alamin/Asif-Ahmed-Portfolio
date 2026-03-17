import { Phone, ExternalLink } from 'lucide-react';

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
            {/* Facebook */}
            <a
              href="https://www.facebook.com/asipha.ahamada.569281"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 rounded-2xl border border-gray-100 hover:border-gray-300 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-black">Facebook</p>
                  <p className="text-xs text-gray-400">@asipha.ahamada</p>
                </div>
              </div>
              <ExternalLink size={16} className="text-gray-300 group-hover:text-black transition-colors duration-300" />
            </a>

            {/* Phone */}
            <a
              href="tel:+8801873038003"
              className="flex items-center justify-between p-6 rounded-2xl border border-gray-100 hover:border-gray-300 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                  <Phone size={18} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-black">Phone</p>
                  <p className="text-xs text-gray-400">+880 1873 038003</p>
                </div>
              </div>
              <ExternalLink size={16} className="text-gray-300 group-hover:text-black transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
