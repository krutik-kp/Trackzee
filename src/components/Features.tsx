import { useEffect, useRef, useState } from "react";
import {
  Activity,
  Shield,
  HardHat,
  Zap,
  ArrowRight,
  Box,
  Truck,
  Code,
  CheckCircle,
  Rocket,
  Factory,
  Microchip,
  Handshake,
  RefreshCcw,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { useScrollHijack } from "@/hooks/useScrollHijack";
import tireManagementFeature from "@/assets/tire-management-feature.jpg";
import videoTelematicsFeature from "@/assets/video-telematics-feature.jpg";
import fleetSafetyFeature from "@/assets/fleet-safety-feature.jpg";
import tireStockFeature from "@/assets/tire-stock-feature.jpg";

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const hijackSectionRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [progressValue, setProgressValue] = useState(0);
  const [currentSprint, setCurrentSprint] = useState(1);
  const totalSprints = 3;
  const isMobile = useIsMobile();

  const features = [
    {
      icon: <Activity className="w-10 h-10 text-emerald-400 drop-shadow-lg" />,
      title: "Tire Operations Management",
      description:
        "Comprehensive tire tracking system that monitors installation, rotation, punctures, and remolding operations. Track tire-related costs and maintenance schedules with RFID integration.",
      image: tireManagementFeature,
      gradient: "from-emerald-800/80 via-emerald-600/70 to-emerald-500/60",
    },
    {
      icon: <Shield className="w-10 h-10 text-cyan-400 drop-shadow-lg" />,
      title: "Video Telematics & ADAS",
      description:
        "Advanced driver monitoring with live streaming, incident recording, and ADAS/DMS alerts. Monitor driver behavior, fatigue detection, and collision warnings for enhanced safety.",
      image: videoTelematicsFeature,
      gradient: "from-cyan-800/80 via-cyan-600/70 to-cyan-500/60",
    },
    {
      icon: <HardHat className="w-10 h-10 text-orange-400 drop-shadow-lg" />,
      title: "Fleet Safety Management",
      description:
        "Real-time monitoring of driver violations, harsh braking, over-speeding, and safety compliance. Generate comprehensive safety reports and driver performance analytics.",
      image: fleetSafetyFeature,
      gradient: "from-orange-800/80 via-orange-600/70 to-orange-500/60",
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-400 drop-shadow-lg" />,
      title: "Tire Stock Management",
      description:
        "Eliminate paperwork with digital tire inventory management. Track new and used tire stocks, upload data via Excel, and get precise stock location and inspection dates.",
      image: tireStockFeature,
      gradient: "from-purple-800/80 via-purple-600/70 to-purple-500/60",
    },
  ];

  const { isHijacked, currentIndex } = useScrollHijack(
    hijackSectionRef,
    features.length
  );

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact-info");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
            (entry.target as HTMLElement).style.opacity = "1";
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll(".feature-item");
      elements.forEach((el) => {
        if (!el.classList.contains("animate-slide-in")) {
          (el as HTMLElement).style.opacity = "0";
          observer.observe(el);
        }
      });
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const animateProgress = () => {
      setProgressValue(0);
      interval = setInterval(() => {
        setProgressValue((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setCurrentSprint((prev) => (prev < totalSprints ? prev + 1 : 1));
              animateProgress();
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    };
    animateProgress();
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const sensorCaseStudies = [
    {
      image: fleetSafetyFeature,
      title: "Freight Transportation",
      description:
        "Advanced video telematics for freight monitoring with real-time driver behavior analysis, cargo security, and route optimization for long-haul operations.",
    },
    {
      image: tireManagementFeature,
      title: "Fleet Tire Management",
      description:
        "Comprehensive tire monitoring with inventory tracking, maintenance scheduling, and cost analysis to optimize tire utilization and reduce operational expenses.",
    },
    {
      image: videoTelematicsFeature,
      title: "Driver Safety Monitoring",
      description:
        "Advanced ADAS and DMS systems with fatigue detection, collision warnings, and driver performance tracking to enhance fleet safety and compliance.",
    },
  ];
  const stepFlowItems = [
    {
      icon: <Microchip className="h-10 w-10 text-gray-700" />,
      title: "WRLDS Proprietary Modules",
      description: "Our core technology components developed in-house",
    },
    {
      icon: <Factory className="h-10 w-10 text-gray-700" />,
      title: "Vetted Off-the-Shelf Hardware",
      description:
        "Carefully selected components that complement our technology",
    },
    {
      icon: <Handshake className="h-10 w-10 text-gray-700" />,
      title: "Vetted Production Partners",
      description: "Expert manufacturing partners for quality and reliability",
    },
  ];
  const sprintPhases = [
    {
      name: "Planning",
      icon: <CheckCircle className="h-4 w-4" />,
    },
    {
      name: "Development",
      icon: <Code className="h-4 w-4" />,
    },
    {
      name: "Testing",
      icon: <Box className="h-4 w-4" />,
    },
    {
      name: "Review",
      icon: <RefreshCcw className="h-4 w-4" />,
    },
  ];

  return (
    <>
      <section
        id="features"
        className="relative bg-white overflow-hidden py-10 md:py-[50px] w-full"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8" ref={featuresRef}>
          <div className="text-center mb-10 max-w-3xl mx-auto feature-item">
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Fleet Management Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Maximize fleet safety with comprehensive monitoring systems
            </h2>
            <p className="text-gray-600 mt-4">
              Invest and empower your fleet operations with advanced tire
              management and video telematics technology. Our comprehensive
              solutions transform traditional fleet monitoring into intelligent
              systems that enhance safety, optimize tire utilization, and
              deliver real-time operational insights.
            </p>
          </div>
        
          <div className="mt-16 mb-8 feature-item">
            <div className="text-center mb-8">
              <div className="inline-block mb-2 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-md">
                Fleet Technology Applications
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">
                Real-World Fleet Solutions
              </h3>
              <p className="text-gray-700 mt-3 max-w-2xl mx-auto leading-relaxed">
                Explore how our tire management and video telematics solutions
                are applied across different transportation sectors, from
                freight operations to fleet safety and driver monitoring.
                <span className="block text-sm mt-2 text-blue-600 font-medium hover:text-blue-700 transition-colors cursor-pointer">
                  Scroll horizontally to see more examples →
                </span>
              </p>
            </div>

           
          </div>
        </div>
        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            onClick={scrollToContact}
            className="inline-flex items-center px-6 sm:px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto font-medium"
          >
            Need Custom Solutions?
            <MessageSquare className="ml-2 w-5 h-5 group-hover:animate-pulse" />
          </Button>

          <Button
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center px-6 sm:px-8 py-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg transition-all duration-300 group w-full sm:w-auto font-medium"
          >
            Learn More About Our Technology
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <section id="technology" className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-3 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-md">
              Our Approach
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              How our technology works
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
              WRLDS builds hardware and software with proprietary and
              off-the-shelf modules, allowing us to develop completely unique
              solutions at high speed and lower risk.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-10 mb-12 transition-all duration-300 hover:shadow-3xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {stepFlowItems.map((item, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/30 h-full cursor-pointer hover:-translate-y-2">
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-5 mb-6 shadow-lg">
                          <div className="text-white">
                            {item.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 shadow-2xl border border-white/20 bg-white/95 backdrop-blur-sm">
                    <div className="space-y-3">
                      <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                      {index === 0 && (
                        <p className="text-xs text-gray-500">
                          Our proprietary technology provides the core
                          foundation of every solution we build.
                        </p>
                      )}
                      {index === 1 && (
                        <p className="text-xs text-gray-500">
                          We carefully select the best off-the-shelf components
                          to complement our proprietary technology.
                        </p>
                      )}
                      {index === 2 && (
                        <p className="text-xs text-gray-500">
                          Our network of production partners ensures quality
                          manufacturing at scale.
                        </p>
                      )}
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>

            <div className="relative h-16 mb-10">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
                <div className="bg-gray-400 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-white rotate-90" />
                </div>
              </div>

              <div className="md:hidden flex justify-center items-center h-full">
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
                <div className="bg-gray-400 rounded-full p-1 mx-2">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-xl border border-white/30">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
                  <div className="flex items-center">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">Adaptation Project</h3>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-blue-600 font-medium mr-2">
                      Iterative Development
                    </span>
                    <RefreshCcw className="h-5 w-5 text-blue-600 animate-rotate-slow" />
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Working iteratively with customers to tailor solutions to
                  their needs
                </p>

                <div className="relative mb-4">
                  <Progress value={progressValue} className="h-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full" />
                </div>

                <div
                  className={cn(
                    "grid gap-1 mt-4",
                    isMobile ? "grid-cols-2 gap-y-2" : "grid-cols-4"
                  )}
                >
                  {sprintPhases.map((phase, index) => (
                    <div
                      key={index}
                      className={cn(
                        "text-center p-3 rounded-xl transition-all duration-300",
                        progressValue >= (index / sprintPhases.length) * 100 &&
                          progressValue <
                            ((index + 1) / sprintPhases.length) * 100
                          ? "bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-md"
                          : "bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"
                      )}
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className={cn(
                            "rounded-full p-2 mb-2 transition-all duration-300",
                            progressValue >= (index / sprintPhases.length) * 100
                              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                              : "bg-gray-200 text-gray-500"
                          )}
                        >
                          {phase.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {phase.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-8 gap-4">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-2 mr-3 shrink-0 shadow-md">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                      Customer feedback integrated at every stage
                    </span>
                  </div>
                  <div className="text-sm text-blue-600 font-medium flex items-center mt-2 sm:mt-0">
                    <span className="mr-3">Continuous improvement</span>
                    <div className="flex space-x-2">
                      <span className="inline-block w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
                      <span className="inline-block w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-200"></span>
                      <span className="inline-block w-3 h-3 bg-blue-500 rounded-full animate-pulse animation-delay-400"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-16 mb-10">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
                <div className="bg-gray-400 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-white rotate-90" />
                </div>
              </div>

              <div className="md:hidden flex justify-center items-center h-full">
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
                <div className="bg-gray-400 rounded-full p-1 mx-2">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-lg p-8 max-w-xl mx-auto text-center shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-black/10 rounded-full animate-pulse-slow"></div>
                <div className="relative bg-white rounded-full p-4 border border-gray-200 shadow-md">
                  <Rocket className="h-10 w-10 text-gray-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Hitting the Market</h3>
              <p className="text-gray-700">
                Ready to scale, produce, and launch
              </p>
              <div className="flex justify-center mt-4 space-x-2">
                <span className="inline-block w-3 h-3 rounded-full bg-gray-300 animate-pulse"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-gray-500 animate-pulse animation-delay-200"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-gray-700 animate-pulse animation-delay-400"></span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/tech-details"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center px-4 sm:px-6 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all group py-3 w-full sm:w-auto justify-center"
              >
                Learn More About Our Technology
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Button
                onClick={scrollToContact}
                className="inline-flex items-center px-4 sm:px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto justify-center"
              >
                Contact Our Experts
                <MessageSquare className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Features;
