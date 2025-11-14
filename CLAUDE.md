# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official website for "Les Ondées" festival in Caen, France. The site is a Vue 3 single-page application built with Vite and TypeScript, showcasing festival information, artist lineup, partners, and event details.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (includes TypeScript check)
npm run build

# Preview production build
npm run preview
```

## Architecture

### Tech Stack
- **Framework**: Vue 3 with Composition API and Options API
- **Build Tool**: Vite 6.0
- **Language**: TypeScript 5.6
- **Router**: Vue Router 4 (history mode)
- **Styling**: Scoped CSS with custom BlocHeavy font

### Project Structure

```
src/
├── assets/          # Static assets (images, videos, fonts, logos)
├── components/      # Reusable Vue components
│   ├── artistes/   # Artist-related components
│   ├── partners/   # Partner-specific components
│   └── shared/     # Shared UI components (ButtonCTA, etc.)
├── views/          # Page-level components (route targets)
├── router.ts       # Vue Router configuration
├── main.ts         # Application entry point
└── style.css       # Global styles and font definitions

public/             # Public assets served directly
├── artistes/       # Artist images
├── partners/       # Partner logos and documents
├── photos-selection/ # Gallery photos
└── presse/         # Press releases (PDFs)
```

### Key Design Patterns

**Component Organization:**
- Views are route-level components that compose smaller components
- Reusable components are organized by domain (artistes, partners, shared)
- Most components use Vue Options API (not Composition API)

**Navigation:**
- Main routes: `/` (home), `/programmation`, `/village`, `/partenaires`
- Commented routes exist for `/a-propos` and `/contacts` (future additions)
- Two navigation modes: hamburger menu (mobile) and horizontal menu line (desktop ≥770px)

**Responsive Design:**
- Mobile-first approach with breakpoints at 770px, 1200px, and 1360px
- Typography and layout adapt across breakpoints
- Custom font scaling defined in [style.css](src/style.css)

**Styling Approach:**
- Scoped styles within components
- Custom `BlocHeavy` font for headings
- Primary brand color: `#E86B2A` (orange)
- Secondary color: `#e74a81` (pink for dates)
- SVG wave elements for visual transitions between sections

**Asset Management:**
- Static assets in `src/assets/` imported via ES modules
- Public assets served from `public/` referenced with absolute paths (e.g., `/partners/file.pdf`)
- Images organized by category (lesondees, logos, village, etc.)

### Component Patterns

**Artist Display ([Artiste.vue](src/components/artistes/Artiste.vue)):**
- Props-driven component with artist info, images, and embedded videos
- Supports reverse layout with `isReverse` prop
- Responsive: single column (mobile) → two-column layout (desktop)
- Integrates Spotify/Deezer links

**Menu Component ([Menu.vue](src/components/Menu.vue)):**
- Toggleable hamburger menu (mobile)
- Fixed horizontal navigation (desktop)
- Social media links embedded in mobile menu overlay

**Home View ([HomeView.vue](src/views/HomeView.vue)):**
- Video background with autoplay
- Multiple content sections with SVG wave transitions
- PDF document links opened in new tabs via methods

## Development Notes

**TypeScript Configuration:**
- Composite project with separate configs for app and node
- Type checking runs before production builds via `vue-tsc -b`

**Router Configuration:**
- Uses HTML5 history mode (requires server configuration for SPA routing)
- See [router.ts](src/router.ts) for route definitions

**Adding New Artists:**
1. Add artist images to `public/artistes/` and `public/artistes-border/`
2. Update artist data in relevant component props
3. Include Spotify/Deezer links and embedded video URLs

**PDF Documents:**
- Partnership documents: `public/partners/`
- Press releases: `public/presse/`
- Opened via `window.open(url, "_blank")` in component methods

**Font Usage:**
- Custom `BlocHeavy` font for all headings (h1-h4)
- `Montserrat` for body text
- Font files located in [src/assets/fonts/](src/assets/fonts/)
