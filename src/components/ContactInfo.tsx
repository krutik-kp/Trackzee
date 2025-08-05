
import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-white relative py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-md">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Contact Us Today
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about our AI-powered sensor solutions? Reach out to our team and let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Felix's Contact Info */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-10 border border-white/30 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <img 
                  src="/lovable-uploads/aa5291bd-2417-4c1e-9a02-0bcc71a92507.png"
                  alt="Felix von Heland"
                  className="w-36 h-36 rounded-2xl object-cover shadow-lg hover:shadow-xl transition-all duration-300"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Felix von Heland</h3>
              <p className="text-blue-600 font-medium mb-6">CEO and Founder</p>
              <div className="flex flex-col space-y-4 w-full">
                <a href="mailto:felix@wrlds.com" className="flex items-center justify-center text-gray-700 hover:text-blue-600 p-3 rounded-xl hover:bg-blue-50 transition-all duration-300">
                  <Mail className="w-5 h-5 mr-3" />
                  felix@wrlds.com
                </a>
                <a 
                  href="https://www.linkedin.com/in/felixvonheland/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-700 hover:text-blue-600 p-3 rounded-xl hover:bg-blue-50 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Love's Contact Info */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-10 border border-white/30 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <img 
                  src="/lovable-uploads/a9bb9110-964a-43b0-a5ab-7162140cd133.png"
                  alt="Love Anderberg"
                  className="w-36 h-36 rounded-2xl object-cover shadow-lg hover:shadow-xl transition-all duration-300"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Love Anderberg</h3>
              <p className="text-purple-600 font-medium mb-6">COO</p>
              <div className="flex flex-col space-y-4 w-full">
                <a href="mailto:love@wrlds.com" className="flex items-center justify-center text-gray-700 hover:text-purple-600 p-3 rounded-xl hover:bg-purple-50 transition-all duration-300">
                  <Mail className="w-5 h-5 mr-3" />
                  love@wrlds.com
                </a>
                <a 
                  href="https://www.linkedin.com/in/love-anderberg-67549a174/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-700 hover:text-purple-600 p-3 rounded-xl hover:bg-purple-50 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  LinkedIn Profile
                </a>
                <a href="tel:+46760149508" className="flex items-center justify-center text-gray-700 hover:text-purple-600 p-3 rounded-xl hover:bg-purple-50 transition-all duration-300">
                  <Phone className="w-5 h-5 mr-3" />
                  076-014 95 08
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
