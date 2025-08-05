
import { useState, useRef, useEffect, TouchEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from "@/hooks/use-mobile";

const projects = [
  {
    id: 1,
    title: "Fleet Management Platform",
    brand: "TransLogistics Corp",
    description: "Comprehensive fleet management solution with tire monitoring, video telematics, and driver safety systems for commercial transportation operations.",
    tags: ["Fleet Management", "Tire Monitoring", "Video Telematics", "Safety"],
    imageUrl: "/src/assets/fleet-operations.jpg",
    isFeatured: true,
    link: "/projects/firecat",
    details: `
      TransLogistics Corp needed to modernize their fleet operations. WRLDS Technologies provided an integrated solution with real-time tire monitoring, video telematics with ADAS/DMS alerts, comprehensive driver safety tracking, and centralized fleet management dashboard. Features include tire pressure monitoring, wear analysis, video streaming, driver behavior analytics, and maintenance scheduling. Benefits: reduced tire costs by 40%, improved driver safety scores by 60%, automated maintenance alerts, and real-time fleet visibility with 24/7 monitoring capabilities.
    `
  },
  {
    id: 2,
    title: "Video Telematics System",
    brand: "Highway Transport Solutions",
    description: "Advanced video monitoring system with ADAS alerts, driver fatigue detection, and incident recording for long-haul trucking operations.",
    tags: ["Video Telematics", "ADAS", "Driver Monitoring", "Safety"],
    imageUrl: "/src/assets/video-telematics-feature.jpg",
    link: "/projects/sport-retail"
  },
  {
    id: 3,
    title: "Tire Management System",
    brand: "Fleet Pro Services",
    description: "Digital tire inventory and maintenance system eliminating paperwork and optimizing tire utilization across multiple depot locations.",
    tags: ["Tire Management", "Inventory", "Maintenance", "Cost Optimization"],
    imageUrl: "/src/assets/tire-management-feature.jpg",
    link: "/projects/workwear"
  },
  {
    id: 4,
    title: "Driver Safety Analytics",
    brand: "SafeFleet Logistics",
    description: "Comprehensive driver behavior monitoring with real-time alerts for harsh braking, speeding, and safety compliance reporting.",
    tags: ["Driver Safety", "Behavior Analytics", "Compliance", "Reporting"],
    imageUrl: "/src/assets/fleet-safety-feature.jpg",
    link: "/projects/hockey"
  },
  {
    id: 5,
    title: "Fleet Optimization Platform",
    brand: "Commercial Transport Inc",
    description: "Integrated platform combining tire management, video telematics, and operational analytics for maximum fleet efficiency and cost reduction.",
    tags: ["Fleet Optimization", "Analytics", "Cost Reduction", "Efficiency"],
    imageUrl: "/src/assets/tire-stock-feature.jpg",
    link: "/projects/pet-tracker"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const minSwipeDistance = 50;

  useEffect(() => {
    if (isInView && !isHovering) {
      const interval = setInterval(() => {
        setActiveProject(prev => (prev + 1) % projects.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }, {
      threshold: 0.2
    });
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      setActiveProject(prev => (prev + 1) % projects.length);
    } else if (isRightSwipe) {
      setActiveProject(prev => (prev - 1 + projects.length) % projects.length);
    }
  };

  const getCardAnimationClass = (index: number) => {
    if (index === activeProject) return "scale-100 opacity-100 z-20";
    if (index === (activeProject + 1) % projects.length) return "translate-x-[40%] scale-95 opacity-60 z-10";
    if (index === (activeProject - 1 + projects.length) % projects.length) return "translate-x-[-40%] scale-95 opacity-60 z-10";
    return "scale-90 opacity-0";
  };
  
  return <section id="projects" ref={projectsRef} className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-20 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className={`text-center mb-16 max-w-3xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-md">
            Customer Cases
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Fleet Management Solutions
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Explore how our tire management and video telematics solutions are transforming fleet operations with intelligent monitoring systems tailored to transportation needs.
          </p>
          {isMobile && (
            <div className="flex items-center justify-center mt-4 animate-pulse-slow">
              <div className="flex items-center text-blue-500">
                <ChevronLeft size={16} />
                <p className="text-sm mx-1">Swipe to navigate</p>
                <ChevronRight size={16} />
              </div>
            </div>
          )}
        </div>
        
        <div 
          className="relative h-[550px] overflow-hidden" 
          onMouseEnter={() => setIsHovering(true)} 
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={carouselRef}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`absolute top-0 w-full max-w-md transform transition-all duration-500 ${getCardAnimationClass(index)}`} 
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Card className="overflow-hidden h-[550px] bg-white/95 backdrop-blur-sm border border-white/30 shadow-2xl hover:shadow-3xl flex flex-col rounded-2xl group hover:-translate-y-2 transition-all duration-500">
                  <div 
                    className="relative bg-black p-8 flex items-center justify-center h-56 overflow-hidden"
                    style={{
                      backgroundImage: `url(${project.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mb-4 rounded-full shadow-lg"></div>
                      <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">{project.brand.toUpperCase()}</h3>
                      <p className="text-white/90 text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">{project.title}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-8 flex flex-col flex-grow">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-blue-600 text-sm font-semibold">{project.brand}</p>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 animate-pulse-slow" 
                            style={{ animationDelay: `${idx * 200}ms` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        to={project.link} 
                        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                        onClick={() => {
                          if (project.link.startsWith('/')) {
                            window.scrollTo(0, 0);
                          }
                        }}
                      >
                        <span className="relative z-10">Learn more</span>
                        <ArrowRight className="ml-2 w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {!isMobile && (
            <>
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:bg-white z-30 shadow-md transition-all duration-300 hover:scale-110" 
                onClick={() => setActiveProject(prev => (prev - 1 + projects.length) % projects.length)}
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:bg-white z-30 shadow-md transition-all duration-300 hover:scale-110" 
                onClick={() => setActiveProject(prev => (prev + 1) % projects.length)}
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
          
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
            {projects.map((_, idx) => (
              <button 
                key={idx} 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeProject === idx ? 'bg-gray-500 w-5' : 'bg-gray-200 hover:bg-gray-300'}`} 
                onClick={() => setActiveProject(idx)}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>;
};

export default Projects;
