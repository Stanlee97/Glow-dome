# Glow Dome - Premium Event Management Platform

A modern, luxury event management and booking platform built with React, TypeScript, and Tailwind CSS. Perfect for showcasing event venues, managing bookings, and providing a premium user experience.

## 🌟 Features

- **Responsive Design**: Fully responsive single-page application optimized for desktop, tablet, and mobile
- **Modern UI Components**: Built with shadcn/ui and Radix UI for consistent, accessible components
- **Event Gallery**: Showcase past events with a beautiful carousel gallery
- **Pricing Plans**: Display flexible pricing tiers for different event packages
- **Booking System**: Integrated booking functionality with form validation
- **Testimonials**: Display customer reviews and testimonials
- **WhatsApp Integration**: Floating WhatsApp button for quick customer support
- **Dark Luxury Theme**: Pre-configured dark mode for a premium aesthetic
- **Smooth Scrolling**: Enhanced UX with smooth scroll behavior
- **Form Handling**: Robust form management with react-hook-form and Zod validation
- **State Management**: React Query for efficient data fetching and caching
- **Charts & Analytics**: Recharts integration for data visualization

## 🚀 Quick Start

### Prerequisites
- Node.js >= 16.0.0
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd glow-dome
```

2. Install dependencies:
```bash
npm install
```

3. Create environment configuration:
```bash
cp .env.example .env
```

4. Start development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📋 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type checking
npm run type-check

# Lint code
npm run lint

# Format code
npm run format

# Check formatting without changes
npm run format:check
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/           # Header, footer, and layout components
│   ├── sections/         # Page sections (hero, about, gallery, etc.)
│   ├── ui/              # Reusable UI components from shadcn/ui
│   └── WhatsAppFloating.tsx
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── App.tsx              # Main app component with routing
├── main.tsx             # Entry point
└── index.css            # Global styles with Tailwind
```

## 🔧 Configuration

### Environment Variables

Edit `.env` to configure:

```env
# Server Configuration
PORT=5173
BASE_PATH=/

# Optional: API Configuration
# VITE_API_URL=https://api.example.com
# VITE_API_KEY=your_api_key_here

# Optional: Feature Flags
# VITE_ENABLE_ANALYTICS=true
# VITE_ENABLE_NOTIFICATIONS=true
```

### TypeScript

The project uses strict TypeScript configuration. See `tsconfig.json` for details.

### Tailwind CSS

Custom theme configuration is in the root Tailwind config. Components use Tailwind classes and CSS variables for theming.

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **CSS Variables**: Theme customization through CSS custom properties
- **Dark Mode**: Pre-configured dark luxury theme
- **Typography**: Using Tailwind Typography plugin for content styling

## 📦 Key Dependencies

- **React 18**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS
- **shadcn/ui**: Component library built on Radix UI
- **React Hook Form**: Form management
- **Zod**: Schema validation
- **Recharts**: Data visualization
- **Framer Motion**: Animation library
- **TanStack Query**: Server state management
- **Wouter**: Lightweight routing

## 🧪 Code Quality

- **ESLint**: Code linting with TypeScript support
- **Prettier**: Code formatting
- **Strict Mode**: TypeScript strict mode enabled

Run linting and formatting:

```bash
npm run lint       # Check for lint errors
npm run format     # Auto-format code
```

## 🚀 Production Deployment

### Build Optimization

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory with:
- Code splitting for faster initial load
- Tree-shaking for smaller bundle size
- Minification and compression
- Source maps for debugging (optional)

### Deployment Options

The application can be deployed to:
- **Vercel**: `vercel` command or Git integration
- **Netlify**: Drag & drop, Git integration, or CLI
- **AWS S3 + CloudFront**: Static hosting solution
- **Docker**: Containerized deployment
- **Traditional Hosting**: Copy `dist/` to any static hosting

### Pre-deployment Checklist

- [ ] Update `package.json` author and repository info
- [ ] Configure API endpoints in `.env` for production
- [ ] Run `npm run type-check` to ensure no TS errors
- [ ] Run `npm run lint` to fix linting issues
- [ ] Test production build locally: `npm run build && npm run preview`
- [ ] Update meta tags in `index.html` (title, description, favicon)
- [ ] Configure analytics if needed
- [ ] Add SEO meta tags
- [ ] Set up HTTPS
- [ ] Configure CORS if using external APIs
- [ ] Add proper error tracking (Sentry, etc.)

## 🔐 Security Considerations

- Enable HTTPS in production
- Keep dependencies updated: `npm audit`
- Use environment variables for sensitive data
- Validate all user input on client and server
- Implement CORS properly
- Add rate limiting for API endpoints
- Use security headers (CSP, X-Frame-Options, etc.)

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change port via environment variable
PORT=3000 npm run dev
```

### Clear Cache
```bash
rm -rf node_modules .vite
npm install
```

### Type Errors
```bash
npm run type-check
```

### Formatting Issues
```bash
npm run format
```

## 📝 License

MIT

## 📧 Support

For issues and questions:
1. Check existing issues in the repository
2. Create a new issue with detailed description
3. Include environment details and error messages

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes
3. Run `npm run type-check` and `npm run lint`
4. Submit a pull request

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TypeScript Documentation](https://www.typescriptlang.org)

---

Built with ❤️ for premium event experiences
