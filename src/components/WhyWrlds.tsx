import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, BarChart, AlertTriangle, Clock4, Rocket, Zap, Sparkles, ArrowRight, Award, Target, Shield, ChartBar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import fleetOperations from "@/assets/fleet-operations.jpg";
import fleetManager from "@/assets/fleet-manager.jpg";

const AnimatedCounter = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inView = useInView(countRef, {
    once: true,
    margin: "-100px"
  });
  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    let animationFrame: number;
    const startAnimation = (timestamp: number) => {
      startTime = timestamp;
      animate(timestamp);
    };
    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(startAnimation);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]);
  return <span ref={countRef} className="font-bold tabular-nums">
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>;
};

const WhyWrlds = () => {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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
  return <section id="why-wrlds" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-3">
            Fleet Management Excellence
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Transform your fleet operations with comprehensive tire management and video telematics solutions. Our integrated platform delivers measurable results across safety, efficiency, and cost optimization.
          </motion.p>
        </motion.div>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={containerVariants}>
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 text-center hover:from-blue-100 hover:to-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-md">
              <BarChart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-blue-900 text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={3.8} decimals={1} suffix=" Billion" /> USD
            </h3>
            <p className="text-blue-800">Global fleet management market value projected by 2030, with tire costs being the second-largest expense after fuel for fleet operations</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 text-center hover:from-orange-100 hover:to-orange-200 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-md">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-orange-900 text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={60} suffix="%" /> 
            </h3>
            <p className="text-orange-800">
              Reduction in tire-related costs achievable through comprehensive tire management systems and proactive maintenance scheduling
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 text-center hover:from-green-100 hover:to-green-200 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4 shadow-md">
              <Clock4 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-green-900 text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={80} suffix="%" />
            </h3>
            <p className="text-green-800">
              Improvement in driver safety and accident prevention through video telematics and real-time monitoring systems
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div className="mb-12" initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent mb-3">
              Comprehensive Fleet Solutions
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Optimize fleet operations, enhance driver safety, and reduce operational costs with our integrated tire management and video telematics platform designed for enterprise-grade performance.
            </p>
          </motion.div>
          
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-3 mr-4 shadow-md">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Tire Management Systems</h4>
                  <p className="text-blue-800">Comprehensive tire tracking, inventory management, and maintenance scheduling that eliminates paperwork and optimizes tire utilization.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full p-3 mr-4 shadow-md">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-purple-900 mb-2">Video Telematics & Driver Safety</h4>
                  <p className="text-purple-800">Advanced driver monitoring with ADAS/DMS alerts, live streaming, and behavior analysis to enhance fleet safety and reduce accidents.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-full p-3 mr-4 shadow-md">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-orange-900 mb-2">Fleet Analytics & Reporting</h4>
                  <p className="text-orange-800">Real-time fleet monitoring with comprehensive reporting, cost analysis, and performance insights for data-driven decision making.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full p-3 mr-4 shadow-md">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-green-900 mb-2">24/7 Fleet Monitoring</h4>
                  <p className="text-green-800">Continuous surveillance with mobile app support, multi-channel access, and real-time alerts for proactive fleet management.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center mt-10">
            <Link 
              to="/development-process" 
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              Learn more about our structured development process
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};

export default WhyWrlds;
