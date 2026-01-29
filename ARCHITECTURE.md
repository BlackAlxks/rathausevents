# Rathaus Events - Repository Architecture

## Overview

This is a Next.js 13+ application for Rathaus Events, a venue and event management website for Rathaus Friedrichshagen in Berlin. The project uses the App Router, TypeScript, Tailwind CSS, and shadcn/ui components.

---

## Top-Level Folders & Their Purpose

### `/app`
**Purpose**: Next.js 13+ App Router directory containing all routes and pages
**Key Features**:
- File-based routing system
- Server and Client Components
- Layout and page files
- Route-specific styles and metadata

### `/components`
**Purpose**: Reusable React components
**Structure**:
- Custom application components (navigation, hero sections, etc.)
- `/components/ui/` - shadcn/ui components library

### `/hooks`
**Purpose**: Custom React hooks
**Contents**:
- `use-toast.ts` - Toast notification hook

### `/lib`
**Purpose**: Utility functions and shared code
**Contents**:
- `utils.ts` - Helper functions (className utilities, etc.)

### `/public`
**Purpose**: Static assets served directly
**Structure**:
- `/images/` - Organized photo galleries by category
- `/logo/` - Company logos and branding assets
- `/pdf/` - Downloadable documents (menus, offers)

### `/.bolt`
**Purpose**: Bolt.new configuration files
**Contents**:
- `config.json` - Bolt settings
- `ignore` - Files to ignore in Bolt
- `prompt` - Custom instructions for Bolt

---

## Detailed Directory Structure

### `/app` - Application Routes

```
app/
├── globals.css          # Global styles and CSS variables
├── layout.tsx           # Root layout with metadata, fonts, navigation
├── page.tsx             # Homepage (/)
├── agb/
│   └── page.tsx        # Terms & Conditions page (/agb)
├── datenschutz/
│   └── page.tsx        # Privacy Policy page (/datenschutz)
├── galerie/
│   └── page.tsx        # Gallery page (/galerie)
├── impressum/
│   └── page.tsx        # Imprint/Legal page (/impressum)
└── kontakt/
    └── page.tsx        # Contact page (/kontakt)
```

**Key Files**:
- `layout.tsx`: Defines the root layout with navigation and footer, includes custom color theme variables
- `page.tsx`: Homepage with hero, venue sections, event types, location info
- Each subdirectory creates a route (e.g., `/agb`, `/galerie`)

### `/components` - React Components

```
components/
├── event-process-section.tsx    # Event planning process display
├── food-beverage-slideshow.tsx  # F&B image carousel
├── footer.tsx                   # Site footer
├── hero-floating-tiles.tsx      # Animated floating tile hero section
├── hero-slideshow.tsx           # Hero image slideshow
├── lightbox.tsx                 # Image lightbox modal
├── navigation.tsx               # Main navigation bar
├── smart-image.tsx              # Optimized image component
└── ui/                          # shadcn/ui components (40+ files)
    ├── accordion.tsx
    ├── alert-dialog.tsx
    ├── button.tsx
    ├── card.tsx
    ├── dialog.tsx
    ├── form.tsx
    ├── input.tsx
    ├── select.tsx
    ├── toast.tsx
    └── ... (and many more)
```

**Custom Components**:
- **navigation.tsx**: Responsive navigation with mobile menu, logo, and route links
- **hero-slideshow.tsx**: Auto-playing image carousel for homepage hero
- **hero-floating-tiles.tsx**: Animated venue showcase with floating cards
- **event-process-section.tsx**: Step-by-step event planning process
- **food-beverage-slideshow.tsx**: F&B offerings with PDF download links
- **lightbox.tsx**: Full-screen image viewer with navigation
- **smart-image.tsx**: Next.js Image wrapper with lazy loading and error handling
- **footer.tsx**: Site footer with contact info and legal links

**UI Components**:
- Complete shadcn/ui library installed
- Radix UI primitives with custom styling
- Tailwind CSS integration
- Dark mode support (via next-themes)

### `/public` - Static Assets

```
public/
├── images/
│   ├── Allgemein/           # General venue photos
│   ├── Außenansicht/        # Exterior views
│   ├── Bürgermeisterzimmer/ # Mayor's office room
│   ├── F&B/                 # Food & beverage photos
│   ├── Hochzeiten/          # Wedding photos
│   ├── Hoftheke/            # Court bar area (10+ images)
│   ├── Lounge/              # Lounge area
│   ├── map/                 # Location maps (makrolage, mikrolage)
│   ├── Party/               # Party/event photos
│   ├── Ratskeller/          # Historic cellar (10+ images)
│   ├── Ratssaal/            # Council hall
│   └── Weihnachtsfeier/     # Christmas party photos
├── logo/
│   ├── Rathaus Events Logo neu.png  # Current logo
│   └── archiv/                      # Archived logo versions
└── pdf/
    ├── 0-Angebote-Bankett-Brau-und-Genusswerkstatt_2026.pdf
    └── 1-Büfett Brau- & Genusswerkstatt 2026.pdf
```

**Image Organization**:
- All images in WebP format for optimal performance
- Organized by venue area/event type
- Descriptive filenames with prefixes
- Maps for location information

### `/hooks` - Custom Hooks

```
hooks/
└── use-toast.ts    # Toast notification management
```

### `/lib` - Utilities

```
lib/
└── utils.ts        # Utility functions (cn for className merging, etc.)
```

---

## Important Configuration Files

### Root Configuration Files

#### `package.json`
**Purpose**: Dependencies and scripts
**Key Dependencies**:
- Next.js 13.5.1 (App Router)
- React 18.2.0
- TypeScript 5.2.2
- Tailwind CSS 3.3.3
- shadcn/ui components (@radix-ui/*)
- Lucide React (icons)
- React Hook Form + Zod (forms/validation)
- Supabase client

**Scripts**:
```bash
npm run dev       # Development server
npm run build     # Production build
npm run start     # Production server
npm run lint      # ESLint
npm run typecheck # TypeScript validation
```

#### `next.config.js`
**Purpose**: Next.js configuration
**Settings**:
- React strict mode enabled
- Image optimization settings
- Build configurations

#### `tailwind.config.ts`
**Purpose**: Tailwind CSS configuration
**Customization**:
- Custom color system
- Typography settings
- Animation utilities
- shadcn/ui theme integration

#### `tsconfig.json`
**Purpose**: TypeScript configuration
**Key Settings**:
- Path aliases (`@/*` maps to root)
- Strict type checking
- Next.js optimizations

#### `.env`
**Purpose**: Environment variables
**Variables** (based on Supabase setup):
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Service role key (server-side only)

#### `components.json`
**Purpose**: shadcn/ui configuration
**Settings**:
- Component installation path
- Style variant (default)
- Tailwind configuration
- TypeScript enabled

#### `.eslintrc.json`
**Purpose**: ESLint configuration for code quality

#### `postcss.config.js`
**Purpose**: PostCSS configuration for Tailwind CSS

#### `.gitignore`
**Purpose**: Git ignore patterns for node_modules, build files, etc.

#### `netlify.toml`
**Purpose**: Netlify deployment configuration
**Settings**:
- Build command and directory
- Plugin configuration (@netlify/plugin-nextjs)

---

## Styling Architecture

### Global Styles (`app/globals.css`)

**CSS Custom Properties**:
```css
:root {
  --color-primary: #8B4513;      /* Brown/copper primary color */
  --color-secondary: #D4AF37;    /* Gold accent */
  --color-accent: #2C1810;       /* Dark brown */
  /* + Tailwind defaults */
}
```

**Design System**:
- Custom color palette matching venue branding
- Tailwind utility classes
- Component-level styles via shadcn/ui
- Responsive breakpoints (sm, md, lg, xl, 2xl)

### Component Styling Approach

1. **Tailwind Utility Classes**: Primary styling method
2. **CSS Variables**: Brand colors and theme values
3. **Inline Styles**: Dynamic color applications (`style={{ backgroundColor: 'var(--color-primary)' }}`)
4. **Class Variance Authority**: Component variant management (shadcn/ui)

---

## Key Application Features

### Pages Overview

#### **Homepage (`/`)**
- Hero slideshow with venue images
- Floating venue tiles (Ratskeller, Hoftheke, etc.)
- Event types showcase (Conferences, Weddings, Christmas parties)
- Food & beverage slideshow
- Event planning process
- Venue amenities and features
- Contact information
- Location & directions with map

#### **Gallery (`/galerie`)**
- Organized photo galleries by venue area
- Categories: General, Exterior, Mayor's Office, F&B, Weddings, Court Bar, Lounge, Party, Ratskeller, Council Hall, Christmas
- Lightbox functionality for full-screen viewing
- Responsive grid layout

#### **Contact (`/kontakt`)**
- Contact form (likely with validation)
- Direct contact information
- Location details

#### **Legal Pages**
- `/impressum` - Imprint/Legal information
- `/datenschutz` - Privacy Policy
- `/agb` - Terms & Conditions

### Component Architecture

#### **Navigation Pattern**
- Responsive design (mobile hamburger menu)
- Client-side routing with Next.js Link
- Active route highlighting
- Sticky/fixed positioning

#### **Image Handling**
- `SmartImage` component wraps Next.js Image
- Lazy loading by default
- Error state handling
- Optimized sizes and formats
- WebP format for all photos

#### **Layout Pattern**
- Root layout with navigation and footer
- Consistent spacing and typography
- Mobile-first responsive design
- Semantic HTML structure

---

## Technology Stack Summary

### Core Framework
- **Next.js 13.5.1**: React framework with App Router
- **React 18.2.0**: UI library
- **TypeScript 5.2.2**: Type safety

### Styling
- **Tailwind CSS 3.3.3**: Utility-first CSS
- **shadcn/ui**: Component library
- **Radix UI**: Primitive components
- **Lucide React**: Icon library

### Forms & Validation
- **React Hook Form**: Form management
- **Zod**: Schema validation

### Backend (Available but not actively used)
- **Supabase**: Database and authentication ready

### Deployment
- **Netlify**: Hosting platform
- Static site generation
- Serverless functions support

---

## Development Workflow

### Getting Started
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Access at http://localhost:3000
```

### Build Process
```bash
# Type check
npm run typecheck

# Lint
npm run lint

# Production build
npm run build

# Start production server
npm run start
```

### Code Organization Principles
1. **File-based routing**: Pages in `/app` directory
2. **Component reusability**: Shared components in `/components`
3. **Type safety**: TypeScript throughout
4. **Responsive design**: Mobile-first approach
5. **Performance**: Image optimization, lazy loading, static generation

---

## Future Considerations

### Database Setup (Supabase Available)
- User authentication ready to implement
- Event booking system potential
- Contact form submissions
- Gallery management
- CMS capabilities

### Potential Enhancements
- Blog/News section
- Online booking system
- User reviews/testimonials
- Multi-language support (German/English)
- Admin dashboard
- Event calendar
- Real-time availability

---

## File Naming Conventions

- **Components**: `kebab-case.tsx` (e.g., `hero-slideshow.tsx`)
- **Pages**: `page.tsx` (Next.js App Router convention)
- **Hooks**: `use-*.ts` (e.g., `use-toast.ts`)
- **Utilities**: `kebab-case.ts` (e.g., `utils.ts`)
- **Images**: `Category_description.webp` (e.g., `Ratskeller__55A1262.webp`)
- **Types**: PascalCase for interfaces/types

---

## Image Asset Guidelines

### Format
- **All images**: WebP format for optimal compression
- Organized by venue area/category
- Descriptive filenames with category prefix

### Optimization
- Next.js Image component with automatic optimization
- Lazy loading enabled
- Responsive srcset generation
- Priority loading for above-fold images

### Directory Structure Logic
```
/public/images/
  /{Category}/        # Venue area or event type
    {Category}_{description}.webp
```

Example: `/public/images/Ratskeller/Ratskeller__55A1262.webp`

---

## Dependencies Deep Dive

### UI Framework Dependencies
- `@radix-ui/*` - 25+ primitive components
- `class-variance-authority` - Component variant management
- `clsx` & `tailwind-merge` - Conditional className handling
- `lucide-react` - 1000+ icons
- `next-themes` - Dark mode support

### Form Dependencies
- `react-hook-form` - Form state management
- `@hookform/resolvers` - Validation resolver
- `zod` - Schema validation
- `input-otp` - OTP input component

### Additional Features
- `date-fns` - Date utilities
- `embla-carousel-react` - Carousel functionality
- `recharts` - Chart library
- `sonner` - Toast notifications
- `vaul` - Drawer component

---

## Build Output Structure

```
.next/
├── cache/           # Build cache
├── server/          # Server-side code
├── static/          # Static assets
└── ...
```

---

## Environment Setup

### Required Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Development vs Production
- Development: Hot reload, detailed errors
- Production: Optimized bundles, static generation

---

## Performance Optimizations

1. **Static Generation**: Most pages pre-rendered at build time
2. **Image Optimization**: Automatic WebP, responsive images
3. **Code Splitting**: Automatic route-based splitting
4. **Lazy Loading**: Images and components load on demand
5. **Font Optimization**: Next.js font optimization
6. **CSS Optimization**: Tailwind purges unused CSS

---

## Testing & Quality

### Type Safety
- TypeScript strict mode enabled
- Type checking via `npm run typecheck`

### Code Quality
- ESLint configured
- Consistent formatting
- Component-driven architecture

### Browser Support
- Modern browsers
- Responsive design (mobile, tablet, desktop)
- Progressive enhancement

---

## Maintenance Notes

### Regular Updates
- Keep dependencies updated
- Monitor Next.js releases
- Update images as needed
- Review and update content

### Content Management
- Images in `/public/images/`
- PDFs in `/public/pdf/`
- Text content in page components
- Contact info in footer/contact page

### Deployment
- Netlify auto-deploys from main branch
- Environment variables configured in Netlify dashboard
- Build time: ~2-3 minutes
