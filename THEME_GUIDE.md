# WRLDS Fleet Management Theme Guide

## 🎨 **Theme Overview**

Your website features a **modern industrial theme** with a focus on fleet management and transportation. The design emphasizes professionalism, technology, and efficiency through a carefully crafted color palette and design elements.

## 🎯 **Core Design Elements**

### **Color Palette**
- **Primary Blue**: `#0066FF` (hsl(210 100% 50%)) - Main brand color for CTAs and highlights
- **Secondary Blue**: `#3399FF` (hsl(200 100% 60%)) - Secondary actions and accents
- **Dark Background**: Black/dark grays for industrial feel
- **White Text**: High contrast for readability
- **Accent Colors**: 
  - Violet (`#8B5CF6`) for Tire Management
  - Pink (`#EC4899`) for Video Telematics  
  - Orange (`#F97316`) for Fleet Analytics
  - Cyan (`#06B6D4`) for additional features

### **Typography**
- **Font Family**: Space Grotesk (modern, clean sans-serif)
- **Headings**: Bold, large, with gradient text effects
- **Body Text**: Clean, readable, with proper line height

### **Visual Effects**
- **Glass Morphism**: Semi-transparent cards with blur effects
- **Gradients**: Blue gradients for emphasis and depth
- **Shadows**: Subtle shadows with blue tints
- **Animations**: Smooth hover effects and transitions

## 📋 **Component Patterns**

### **1. Hero Sections**
```tsx
// Use this pattern for all hero sections
<section className="relative w-full bg-black overflow-hidden">
  <div className="banner-container h-[50vh] sm:h-[60vh] md:h-[500px]">
    {/* Background with overlay */}
    <div className="absolute inset-0 bg-black">
      <img src={backgroundImage} className="w-full h-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white/100"></div>
    </div>
    
    {/* Content */}
    <div className="banner-overlay flex items-center justify-center">
      <div className="text-center max-w-4xl">
        <h1 className="banner-title text-white">
          Main <span className="text-gradient-primary">Highlighted</span> Text
        </h1>
        <p className="banner-subtitle text-gray-300">
          Supporting description text
        </p>
        <div className="flex gap-4 justify-center">
          <button className={applyTheme.primaryButton()}>
            Primary Action
          </button>
          <button className={applyTheme.secondaryButton()}>
            Secondary Action
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
```

### **2. Feature Cards**
```tsx
// Use this pattern for all feature/service cards
<div className={applyTheme.featureCard()}>
  <div className={applyTheme.iconContainer('violet')}>
    <Icon className="w-6 h-6" />
  </div>
  <h3 className="text-lg font-semibold mb-2 text-card-foreground">
    Feature Title
  </h3>
  <p className="text-muted-foreground text-sm">
    Feature description
  </p>
</div>
```

### **3. Buttons**
```tsx
// Primary buttons (main CTAs)
<button className={applyTheme.primaryButton()}>
  Primary Action
  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1" />
</button>

// Secondary buttons (alternative actions)
<button className={applyTheme.secondaryButton()}>
  Secondary Action
  <MessageSquare className="ml-2 w-4 h-4 group-hover:scale-110" />
</button>
```

### **4. Section Headers**
```tsx
// Use this pattern for section titles
<div className="text-center mb-12">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">
    Section <span className={applyTheme.gradientText()}>Title</span>
  </h2>
  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
    Section description
  </p>
</div>
```

## 🎨 **Color Usage Guidelines**

### **Primary Blue (#0066FF)**
- Main call-to-action buttons
- Important links and navigation
- Primary highlights and emphasis
- Brand elements and logos

### **Secondary Blue (#3399FF)**
- Secondary buttons and actions
- Supporting elements
- Hover states
- Secondary highlights

### **Accent Colors**
- **Violet**: Tire management, hardware, systems
- **Pink**: Video telematics, software, technology
- **Orange**: Analytics, data, insights
- **Cyan**: Integration, connectivity, smart features

### **Neutral Colors**
- **White**: Primary text on dark backgrounds
- **Black**: Primary text on light backgrounds
- **Gray**: Secondary text, muted content
- **Transparent**: Overlays and glass effects

## 📱 **Responsive Design Patterns**

### **Typography Scaling**
```css
/* Use clamp() for responsive typography */
.banner-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
}

.section-title {
  font-size: clamp(2rem, 3vw, 3rem);
}
```

### **Layout Grids**
```tsx
// Responsive grid patterns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Content */}
</div>

// Hero content
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  {/* Buttons */}
</div>
```

### **Spacing System**
```tsx
// Consistent spacing
<section className="section-container">
  <div className="max-w-6xl mx-auto">
    {/* Content */}
  </div>
</section>
```

## 🎭 **Animation Guidelines**

### **Hover Effects**
- Cards: `hover:-translate-y-1 hover:shadow-md`
- Buttons: `hover:bg-primary/90 hover:shadow-xl`
- Icons: `group-hover:translate-x-1` or `group-hover:scale-110`

### **Page Animations**
- Use Framer Motion for smooth transitions
- Stagger children animations for lists
- Fade-in effects for content sections

### **Loading States**
- Skeleton loaders with blue tints
- Pulse animations for loading indicators
- Smooth transitions between states

## 🧩 **Component Library**

### **Navigation**
```tsx
// Use consistent navigation styling
<nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
  <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
    <div className="text-white font-bold text-xl">wrlds</div>
    <div className="flex gap-6">
      <a href="#" className="text-white hover:text-blue-300 transition-colors">Home</a>
      <a href="#" className="text-white hover:text-blue-300 transition-colors">About</a>
      <button className={applyTheme.primaryButton()}>Contact</button>
    </div>
  </div>
</nav>
```

### **Forms**
```tsx
// Use consistent form styling
<form className="space-y-4">
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Label
    </label>
    <input 
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      type="text"
    />
  </div>
  <button className={applyTheme.primaryButton()}>
    Submit
  </button>
</form>
```

### **Modals/Dialogs**
```tsx
// Use glass morphism for modals
<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
  <div className={applyTheme.glass() + " p-6 rounded-xl max-w-md w-full mx-4"}>
    {/* Modal content */}
  </div>
</div>
```

## 🚀 **Implementation Best Practices**

### **1. Use Theme Utilities**
```tsx
// Import and use theme utilities
import { applyTheme } from '@/lib/theme-guide';

// Apply consistent styling
<button className={applyTheme.primaryButton()}>
  Action
</button>
```

### **2. Maintain Color Consistency**
- Always use the defined color palette
- Use CSS variables for colors
- Test contrast ratios for accessibility

### **3. Follow Layout Patterns**
- Use consistent spacing and padding
- Maintain responsive breakpoints
- Follow the established grid system

### **4. Implement Animations Consistently**
- Use the same animation durations
- Apply hover effects uniformly
- Maintain smooth transitions

### **5. Ensure Accessibility**
- Maintain proper contrast ratios
- Use semantic HTML elements
- Provide alternative text for images
- Ensure keyboard navigation

## 📝 **Content Guidelines**

### **Tone and Voice**
- Professional yet approachable
- Focus on technology and efficiency
- Emphasize safety and reliability
- Use clear, concise language

### **Visual Hierarchy**
- Use gradient text for main highlights
- Maintain clear heading structure
- Use icons consistently
- Balance text and visual elements

### **Call-to-Actions**
- Use primary blue for main actions
- Use secondary blue for alternative actions
- Include icons for visual appeal
- Make buttons large enough for mobile

## 🔧 **Development Workflow**

### **1. Component Creation**
1. Start with the theme guide
2. Use existing patterns as templates
3. Apply consistent styling
4. Test responsiveness
5. Validate accessibility

### **2. Page Development**
1. Follow the established layout patterns
2. Use the hero section as a template
3. Apply consistent spacing
4. Implement smooth animations
5. Test across devices

### **3. Quality Assurance**
1. Check color consistency
2. Verify responsive behavior
3. Test animations and interactions
4. Validate accessibility
5. Ensure performance optimization

## 📚 **Resources**

- **Theme Guide**: `src/lib/theme-guide.ts`
- **Example Component**: `src/components/ThemeExample.tsx`
- **CSS Variables**: `src/index.css`
- **Tailwind Config**: `tailwind.config.ts`

---

**Remember**: Consistency is key! Always refer to this guide when creating new components or pages to maintain the professional, modern industrial theme that makes your fleet management website stand out. 