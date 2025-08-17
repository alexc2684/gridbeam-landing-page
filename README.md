# GridBeam - Utility Data & AI Consulting Website

A modern, professional single-page website for GridBeam utility consulting services, built with React and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Professional aesthetic inspired by leading SaaS companies
- **Smooth Animations**: Powered by Framer Motion with scroll-triggered effects
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with optimized images and code
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic counters
- **Professional Forms**: Contact form with validation and success states

## 🛠 Tech Stack

- **React 18** - Modern functional components with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation and gesture library
- **Lucide React** - Beautiful icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    # Sticky nav with blur effect
│   ├── Hero.jsx         # Hero section with gradient background
│   ├── Problem.jsx      # Pain points section
│   ├── Services.jsx     # Three-column services layout
│   ├── Credentials.jsx  # Experience and credentials
│   ├── Impact.jsx       # Metrics with counter animations
│   └── Contact.jsx      # Contact form and direct info
├── App.jsx              # Main app component
├── main.jsx            # React app entry point
└── index.css           # Global styles and utilities
```

## 🎨 Design Features

### Visual Elements
- **Glassmorphism**: Cards with backdrop blur and gradient borders
- **Grid Patterns**: Subtle background patterns suggesting electrical infrastructure
- **Gradient Accents**: Blue-to-cyan gradients throughout
- **Floating Animations**: Subtle movement on key elements
- **Hover States**: Interactive feedback on all clickable elements

### Typography
- **Primary Font**: Inter (clean, professional)
- **Responsive Sizing**: Scales appropriately across devices
- **Hierarchy**: Clear visual hierarchy with proper contrast

### Color Palette
- **Navy Blues**: `#0a192f`, `#112240`, `#1e3a5f` (backgrounds)
- **Electric Blue**: `#0084ff` (primary actions)
- **Electric Cyan**: `#64ffda` (accents and highlights)
- **Success Green**: `#28a745` (metrics and achievements)

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone and navigate to the project**:
   ```bash
   cd /Users/alexchan/Documents/projects/gridbeam/landing3
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

All components are designed mobile-first and scale up beautifully.

## 🎯 Key Sections

### 1. Hero Section
- Full-viewport height with animated gradient background
- Clear value proposition and DOE credentials
- Floating CTA button with hover effects

### 2. Problem Section
- Three pain points in floating cards
- Hover effects with gradient borders
- Staggered animations on scroll

### 3. Services Section
- Three-column layout for service offerings
- Feature lists with check icons
- Highlight metric for ROI demonstration

### 4. Credentials Section
- Experience cards with organization details
- Gradient backgrounds and glow effects
- Key achievements with star icons

### 5. Impact Section
- Animated counter metrics (93% reduction, 425% faster, etc.)
- Achievement details in grid layout
- ROI callout with pulsing background

### 6. Contact Section
- Professional contact form with validation
- Direct contact information panel
- Success states and loading animations

## 🎨 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  navy: {
    900: '#0a192f',
    // ... other shades
  },
  electric: {
    400: '#64ffda',
    500: '#0084ff',
    // ... other shades
  }
}
```

### Animations
Modify animations in `tailwind.config.js` or create custom ones in component files using Framer Motion.

### Content
Update copy and credentials in each component file. All text content is easily customizable.

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub repository
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist/` folder

### Other Platforms
The built assets in `dist/` can be deployed to any static hosting service.

## 📧 Contact Integration

The contact form is ready for integration with:
- **Netlify Forms** (add `netlify` attribute to form)
- **Formspree** (update form action)
- **Custom API endpoint** (modify submit handler)

## 🔧 Development Notes

- All animations use `useInView` hook for performance
- Components are optimized for reusability
- Tailwind utilities are used consistently
- No external dependencies for animations (pure Framer Motion)
- TypeScript-ready structure (can add types easily)

## 📈 Performance

- Optimized bundle size with tree shaking
- Lazy loading of animations
- Efficient re-renders with React hooks
- Fast development server with Vite HMR

---

**Built for GridBeam by Alex Chan - Energy Innovator Fellow, U.S. Department of Energy**
