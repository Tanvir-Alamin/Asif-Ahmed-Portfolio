import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

const Sponsorship = () => {
  return (
    <section id="sponsorship" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-4 font-medium">Partnership</p>
        <h2 className="section-heading mb-4">Sponsor Creative Podcast</h2>
        <p className="section-subheading mb-16">
          Join us in producing intellectually driven conversations. Get your brand in front of an engaged, thoughtful audience.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-black tracking-tight mb-8">Contact Information</h3>
            
            <div className="flex items-start gap-6 p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:border-gray-300 hover:bg-white transition-all duration-300">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                <Mail size={20} className="text-black" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-black tracking-tight mb-1">Email</h4>
                <a href="mailto:creativepodcast70@gmail.com" className="text-gray-500 hover:text-black transition-colors">
                  creativepodcast70@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:border-gray-300 hover:bg-white transition-all duration-300">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                <Phone size={20} className="text-black" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-black tracking-tight mb-1">Phone</h4>
                <a href="tel:01635665921" className="text-gray-500 hover:text-black transition-colors">
                  01635665921
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:border-gray-300 hover:bg-white transition-all duration-300">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                <MessageCircle size={20} className="text-black" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-black tracking-tight mb-1">WhatsApp</h4>
                <a href="https://wa.me/8801635665921" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors">
                  Message on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:border-gray-300 hover:bg-white transition-all duration-300">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                <MapPin size={20} className="text-black" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-black tracking-tight mb-1">Location</h4>
                <p className="text-gray-500">
                  Lattice45, Chattogram
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-2xl font-semibold text-black tracking-tight mb-8">Find Us</h3>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm aspect-square lg:aspect-auto lg:h-[calc(100%-4rem)] relative min-h-[400px]">
              <iframe 
                src="https://maps.google.com/maps?q=22.3641792,91.8321318&t=&z=18&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
