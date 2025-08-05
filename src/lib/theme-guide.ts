// WRLDS Fleet Management Theme Guide
// This file documents the design system and theme elements for consistent application across the website

export const WRLDS_THEME = {
  // Color Palette - Updated based on new design
  colors: {
    primary: {
      blue: 'hsl(210 100% 50%)', // #0066FF - Main brand blue
      blueLight: 'hsl(200 100% 60%)', // #3399FF - Secondary blue
      blueDark: 'hsl(215 100% 35%)', // #0033CC - Dark blue
    },
    accent: {
      emerald: 'hsl(142 76% 36%)', // #16A34A - Tire Operations (green)
      blue: 'hsl(200 90% 50%)', // #3B82F6 - Video Telematics (blue)
      orange: 'hsl(25 95% 53%)', // #F97316 - Fleet Safety (orange)
      purple: 'hsl(262 90% 65%)', // #8B5CF6 - Tire Stock (purple)
    },
    neutral: {
      white: 'hsl(0 0% 100%)',
      black: 'hsl(0 0% 0%)',
      grayLight: 'hsl(210 20% 95%)',
      grayMedium: 'hsl(215 16% 47%)',
      grayDark: 'hsl(222 84% 4.9%)',
      grayCard: 'hsl(215 25% 27%)', // Dark card background
    },
    background: {
      hero: 'rgba(0, 0, 0, 0.7)', // Dark overlay for hero
      card: 'rgba(31, 41, 55, 0.9)', // Dark card background
      glass: 'rgba(210, 235, 255, 0.1)', // Glass morphism
    }
  },

  // Typography
  typography: {
    fontFamily: 'Space Grotesk, sans-serif',
    headings: {
      hero: {
        fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
        fontWeight: '700',
        lineHeight: '1.2',
      },
      h1: {
        fontSize: 'clamp(2rem, 3vw, 3rem)',
        fontWeight: '700',
      },
      h2: {
        fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
        fontWeight: '600',
      },
      h3: {
        fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
        fontWeight: '600',
      },
      card: {
        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
        fontWeight: '700',
      }
    },
    body: {
      large: '1.125rem',
      medium: '1rem',
      small: '0.875rem',
      lineHeight: '1.5',
    }
  },

  // Spacing System
  spacing: {
    section: {
      padding: '3rem 1rem',
      margin: '2rem 0',
    },
    container: {
      maxWidth: '1200px',
      padding: '0 1rem',
    },
    cards: {
      gap: '1.5rem',
      padding: '1.5rem 2rem',
      borderRadius: '1rem',
    }
  },

  // Effects and Animations - Updated for new design
  effects: {
    shadows: {
      primary: '0 10px 30px -10px hsl(210 100% 50% / 0.3)',
      accent: '0 0 40px hsl(200 100% 60% / 0.2)',
      glow: '0 0 60px hsl(210 100% 50% / 0.15)',
      card: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      cardHover: '0 20px 40px -12px rgba(0, 0, 0, 0.4)',
    },
    gradients: {
      primary: 'linear-gradient(135deg, hsl(210 100% 50%), hsl(200 100% 60%))',
      hero: 'linear-gradient(135deg, hsl(210 100% 50%) 0%, hsl(200 100% 60%) 50%, hsl(210 100% 85%) 100%)',
      text: 'linear-gradient(135deg, hsl(210 100% 50%), hsl(200 100% 60%))',
      card: 'linear-gradient(135deg, rgba(31, 41, 55, 0.9), rgba(17, 24, 39, 0.9))',
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    animations: {
      hover: 'transform -translate-y-2 transition-all duration-300',
      glow: 'animate-glow-pulse',
      float: 'animate-float',
      pulse: 'animate-pulse',
    }
  },

  // Component Patterns - Updated for new design
  components: {
    buttons: {
      primary: {
        background: 'hsl(210 100% 50%)',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        hover: 'hover:bg-primary/90 hover:shadow-lg',
      },
      secondary: {
        background: 'hsl(200 100% 60%)',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        hover: 'hover:bg-accent/90 hover:shadow-lg',
      },
    },
    cards: {
      feature: {
        background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.9), rgba(17, 24, 39, 0.9))',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(75, 85, 99, 0.5)',
        borderRadius: '1rem',
        padding: '1.5rem 2rem',
        hover: 'hover:-translate-y-2 hover:shadow-2xl',
        shadow: 'shadow-xl',
      },
    },
    icons: {
      size: 'w-7 h-7',
      container: 'w-14 h-14 rounded-xl flex items-center justify-center',
      colors: {
        emerald: 'bg-emerald-500/20 text-emerald-400',
        blue: 'bg-blue-500/20 text-blue-400',
        orange: 'bg-orange-500/20 text-orange-400',
        purple: 'bg-purple-500/20 text-purple-400',
      }
    }
  },

  // Layout Patterns - Updated for 2x2 grid
  layout: {
    hero: {
      height: 'h-[50vh] sm:h-[60vh] md:h-[500px] lg:h-[550px] xl:h-[600px]',
      overlay: 'absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white/100',
      content: 'flex flex-col items-center justify-center text-center',
    },
    grid: {
      features: 'grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6',
      responsive: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4',
    },
    container: {
      maxWidth: 'max-w-6xl mx-auto',
      padding: 'px-4 sm:px-6 lg:px-8',
    }
  }
};

// Utility functions for consistent theme application - Updated
export const applyTheme = {
  // Apply hero section styling
  hero: (className: string = '') => `
    relative w-full bg-black overflow-hidden
    ${className}
  `,
  
  // Apply feature card styling - Updated for new design
  featureCard: (color: 'emerald' | 'blue' | 'orange' | 'purple' = 'emerald', className: string = '') => `
    relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 
    p-6 md:p-8 rounded-2xl shadow-xl border border-gray-700/50 
    transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl 
    hover:shadow-${color}-500/20 backdrop-blur-sm
    ${className}
  `,
  
  // Apply primary button styling
  primaryButton: (className: string = '') => `
    w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3
    bg-primary text-primary-foreground rounded-md
    hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl
    flex items-center justify-center group text-sm sm:text-base font-medium
    ${className}
  `,
  
  // Apply secondary button styling
  secondaryButton: (className: string = '') => `
    w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3
    bg-accent text-accent-foreground rounded-md
    hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl
    flex items-center justify-center group text-sm sm:text-base font-medium
    ${className}
  `,
  
  // Apply icon container styling - Updated for new design
  iconContainer: (color: 'emerald' | 'blue' | 'orange' | 'purple' = 'emerald', className: string = '') => `
    w-12 h-12 md:w-14 md:h-14 bg-${color}-500/20
    flex items-center justify-center rounded-xl text-${color}-400
    mb-4
    ${className}
  `,
  
  // Apply gradient text
  gradientText: (className: string = '') => `
    text-gradient-primary
    ${className}
  `,
  
  // Apply glass effect
  glass: (className: string = '') => `
    bg-card/10 backdrop-blur-md border border-border/20
    ${className}
  `,
  
  // Apply card background pattern
  cardBackground: (color: 'emerald' | 'blue' | 'orange' | 'purple' = 'emerald') => `
    absolute inset-0 bg-gradient-to-br from-${color}-500/10 to-transparent opacity-30
  `,
  
  // Apply card content styling
  cardContent: (className: string = '') => `
    relative z-10
    ${className}
  `,
  
  // Apply card title styling
  cardTitle: (className: string = '') => `
    text-xl md:text-2xl font-bold mb-3 text-white
    ${className}
  `,
  
  // Apply card description styling
  cardDescription: (className: string = '') => `
    text-gray-300 text-sm md:text-base leading-relaxed
    ${className}
  `
};

// Theme validation helpers
export const validateTheme = {
  // Check if colors are properly defined
  colors: () => {
    const requiredColors = ['primary', 'accent', 'neutral', 'background'];
    return requiredColors.every(color => WRLDS_THEME.colors[color]);
  },
  
  // Check if typography is properly defined
  typography: () => {
    return WRLDS_THEME.typography.fontFamily && WRLDS_THEME.typography.headings;
  }
};

export default WRLDS_THEME; 