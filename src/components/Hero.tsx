import { ArrowRight, Code, Cpu, Layers, MessageSquare, Play, Shield, TrendingUp, Zap, Pause } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import fleetManagementHero from "@/assets/fleet-management-hero.jpg";
import fleetTrucksPoster from "@/assets/fleet-trucks-poster.jpg";

const Hero = () => {
  const isMobile = useIsMobile();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  const toggleHeroVideo = () => {
    if (heroVideoRef.current) {
      if (isVideoPlaying) {
        heroVideoRef.current.pause();
      } else {
        heroVideoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <motion.div className="relative w-full" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full">
        <div className="absolute inset-0 w-full">
          <img 
            src={fleetTrucksPoster} 
            alt="Advanced Fleet Management Solutions Dashboard" 
            className={`w-full h-full object-cover opacity-40 ${isMobile ? 'object-center' : 'object-center'}`} 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-blue-900/40 to-purple-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-white/90"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-20 sm:pt-24 md:pt-32 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            {/* Floating Video Preview */}
            <motion.div 
              className="absolute top-20 right-8 hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20">
                <div className="w-64 h-40 rounded-xl overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <video
                    ref={heroVideoRef}
                    className="w-full h-full object-cover"
                    poster="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
                    muted
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                  >
                    <source src="/lovable-uploads/video_1751292840840_1751292842546_2.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-purple-600/20 flex items-center justify-center">
                    <button
                      onClick={toggleHeroVideo}
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 hover:bg-white/30"
                    >
                      {isVideoPlaying ? (
                        <Pause className="w-6 h-6 text-white" />
                      ) : (
                        <Play className="w-6 h-6 text-white ml-1" />
                      )}
                    </button>
                  </div>
                  
                  {/* Video Info */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg p-2">
                      <h4 className="text-white font-semibold text-xs">Tire Monitoring Demo</h4>
                      <p className="text-white/80 text-xs">2:34 min</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
              <motion.h1 className="banner-title text-white" variants={itemVariants}>
                Advanced <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">Fleet Management Solutions</span> for Modern Transportation
              </motion.h1>
              <motion.p className="banner-subtitle text-blue-100 mt-4 sm:mt-6 leading-relaxed" variants={itemVariants}>
                Empower your fleet operations with comprehensive tire management systems and video telematics that transform vehicle monitoring, enhance safety, and optimize operational efficiency.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center" variants={itemVariants}>
                {/* Styled as a button but using an anchor tag for project navigation */}
                <button 
                  className="w-full sm:w-auto min-h-[48px] px-8 sm:px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group text-sm sm:text-base font-semibold"
                  onClick={e => {
                    e.preventDefault();
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Explore Projects
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  className="w-full sm:w-auto min-h-[48px] px-8 sm:px-10 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group text-sm sm:text-base font-semibold"
                  onClick={scrollToContact}
                >
                  Contact Us
                  <MessageSquare className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
          <motion.div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border border-white/20 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20" variants={itemVariants}>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center rounded-xl text-white mb-2 md:mb-2 shadow-lg">
              <Cpu className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3 text-white">Tire Management System</h3>
            <p className="text-blue-800 text-sm md:text-base leading-relaxed">Comprehensive tire monitoring including operations tracking, stock management, inspection reports, and maintenance scheduling for optimal fleet performance.</p>
          </motion.div>
          
          <motion.div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border border-white/20 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20" variants={itemVariants}>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center rounded-xl text-white mb-2 md:mb-2 shadow-lg">
              <Code className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3 text-white">Video Telematics</h3>
            <p className="text-blue-800 text-sm md:text-base leading-relaxed">Advanced video monitoring with live streaming, history playback, ADAS/DMS alerts, and driver behavior analysis for enhanced fleet safety and efficiency.</p>
          </motion.div>
          
          <motion.div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border border-white/20 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20" variants={itemVariants}>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center rounded-xl text-white mb-2 md:mb-2 shadow-lg">
              <Layers className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3 text-white">Fleet Analytics</h3>
            <p className="text-blue-800 text-sm md:text-base leading-relaxed">Real-time fleet monitoring with comprehensive reporting, driver performance tracking, and operational insights for transportation and logistics companies.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>;
};

export default Hero;
