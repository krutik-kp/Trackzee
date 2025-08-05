import { ArrowRight, MessageSquare, TrendingUp, Shield, HardHat, Zap, Truck, BarChart3, Cpu, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { applyTheme, WRLDS_THEME } from "@/lib/theme-guide";

const ThemeExample = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section Example - Following the same pattern as your hero */}
      <section className={applyTheme.hero()}>
        <div className="banner-container bg-black relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full">
          <div className="absolute inset-0 bg-black w-full">
            <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-black opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white/100"></div>
          </div>
          
          <div className="banner-overlay bg-transparent pt-20 sm:pt-24 md:pt-32 w-full">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
              <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
                <motion.h1 className="banner-title text-white" variants={itemVariants}>
                  Advanced <span className="text-gradient-primary">Fleet Management Solutions</span> for Modern Transportation
                </motion.h1>
                <motion.p className="banner-subtitle text-gray-300 mt-4 sm:mt-6" variants={itemVariants}>
                  Empower your fleet operations with comprehensive tire management systems and video telematics that transform vehicle monitoring, enhance safety, and optimize operational efficiency.
                </motion.p>
                <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center" variants={itemVariants}>
                  <button className={applyTheme.primaryButton()}>
                    Explore Projects
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button className={applyTheme.secondaryButton()}>
                    Contact Us
                    <MessageSquare className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Feature Cards Section - 2x2 Grid */}
      <section className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div 
          className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          {/* Card 1: Tire Operations Management */}
          <motion.div className={applyTheme.featureCard('emerald')} variants={itemVariants}>
            <div className={applyTheme.cardBackground('emerald')}></div>
            <div className={applyTheme.cardContent()}>
              <div className={applyTheme.iconContainer('emerald', 'animate-pulse')}>
                <TrendingUp className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h3 className={applyTheme.cardTitle()}>Tire Operations Management</h3>
              <p className={applyTheme.cardDescription()}>
                Comprehensive tire tracking system that monitors installation, rotation, punctures, and remolding operations. Track tire-related costs and maintenance schedules with RFID integration.
              </p>
            </div>
          </motion.div>
          
          {/* Card 2: Video Telematics & ADAS */}
          <motion.div className={applyTheme.featureCard('blue')} variants={itemVariants}>
            <div className={applyTheme.cardBackground('blue')}></div>
            <div className={applyTheme.cardContent()}>
              <div className={applyTheme.iconContainer('blue')}>
                <Shield className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h3 className={applyTheme.cardTitle()}>Video Telematics & ADAS</h3>
              <p className={applyTheme.cardDescription()}>
                Advanced driver monitoring with live streaming, incident recording, and ADAS/DMS alerts. Monitor driver behavior, fatigue detection, and collision warnings for enhanced safety.
              </p>
            </div>
          </motion.div>
          
          {/* Card 3: Fleet Safety Management */}
          <motion.div className={applyTheme.featureCard('orange')} variants={itemVariants}>
            <div className={applyTheme.cardBackground('orange')}></div>
            <div className={applyTheme.cardContent()}>
              <div className={applyTheme.iconContainer('orange')}>
                <HardHat className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h3 className={applyTheme.cardTitle()}>Fleet Safety Management</h3>
              <p className={applyTheme.cardDescription()}>
                Real-time monitoring of driver violations, harsh braking, over-speeding, and safety compliance. Generate comprehensive safety reports and driver performance analytics.
              </p>
            </div>
          </motion.div>
          
          {/* Card 4: Tire Stock Management */}
          <motion.div className={applyTheme.featureCard('purple')} variants={itemVariants}>
            <div className={applyTheme.cardBackground('purple')}></div>
            <div className={applyTheme.cardContent()}>
              <div className={applyTheme.iconContainer('purple')}>
                <Zap className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h3 className={applyTheme.cardTitle()}>Tire Stock Management</h3>
              <p className={applyTheme.cardDescription()}>
                Eliminate paperwork with digital tire inventory management. Track new and used tire stocks, upload data via Excel, and get precise stock location and inspection dates.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Additional Sections Example - Showing theme consistency */}
      <section className="section-container bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className={applyTheme.gradientText()}>WRLDS</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive fleet management solutions combine cutting-edge technology with industry expertise to deliver exceptional results.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Feature 1 */}
            <motion.div className={applyTheme.featureCard('emerald')} variants={itemVariants}>
              <div className={applyTheme.cardBackground('emerald')}></div>
              <div className={applyTheme.cardContent()}>
                <div className={applyTheme.iconContainer('emerald')}>
                  <Truck className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className={applyTheme.cardTitle()}>Fleet Optimization</h3>
                <p className={applyTheme.cardDescription()}>
                  Maximize efficiency with intelligent route planning and real-time vehicle tracking.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div className={applyTheme.featureCard('blue')} variants={itemVariants}>
              <div className={applyTheme.cardBackground('blue')}></div>
              <div className={applyTheme.cardContent()}>
                <div className={applyTheme.iconContainer('blue')}>
                  <Shield className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className={applyTheme.cardTitle()}>Safety First</h3>
                <p className={applyTheme.cardDescription()}>
                  Advanced safety monitoring with driver behavior analysis and collision prevention.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div className={applyTheme.featureCard('orange')} variants={itemVariants}>
              <div className={applyTheme.cardBackground('orange')}></div>
              <div className={applyTheme.cardContent()}>
                <div className={applyTheme.iconContainer('orange')}>
                  <BarChart3 className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className={applyTheme.cardTitle()}>Analytics Dashboard</h3>
                <p className={applyTheme.cardDescription()}>
                  Comprehensive reporting and insights to drive data-driven decisions.
                </p>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div className={applyTheme.featureCard('purple')} variants={itemVariants}>
              <div className={applyTheme.cardBackground('purple')}></div>
              <div className={applyTheme.cardContent()}>
                <div className={applyTheme.iconContainer('purple')}>
                  <Cpu className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className={applyTheme.cardTitle()}>Smart Integration</h3>
                <p className={applyTheme.cardDescription()}>
                  Seamless integration with existing systems and third-party applications.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Following the same button patterns */}
      <section className="section-container bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Fleet?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of companies already using WRLDS to optimize their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={applyTheme.primaryButton()}>
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className={applyTheme.secondaryButton()}>
                Schedule Demo
                <MessageSquare className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ThemeExample; 