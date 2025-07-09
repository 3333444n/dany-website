# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Daniel Ortiz's personal portfolio website built with Astro and Tailwind CSS. It showcases his work as a communication and journalism student with a focus on graphic design, featuring projects like posters, commemorative designs, and photography.

## Development Commands

- `npm run dev` - Start local development server at `localhost:4321`
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview build locally before deploying
- `npm run astro ...` - Run Astro CLI commands

## Architecture & Structure

### Core Framework
- **Astro**: Static site generator with component-based architecture
- **Tailwind CSS v4**: Utility-first CSS framework with custom configuration
- **Lenis**: Smooth scrolling library integrated globally

### Page Structure
The site follows a two-column layout pattern:
- **Left column**: Info component (sticky) with personal details and contact
- **Right column**: Main content area with project details or biography

### Key Components
- `Layout.astro` - Main layout wrapper with SEO, fonts, and smooth scrolling
- `Info.astro` - Left sidebar with personal information (reusable across pages)
- `Content.astro` - Right content area with fade-in animation
- `Navigation.astro` - Fixed glass-morphism navigation with SVG icons
- `Slider.astro` - Horizontal image gallery for project showcases

### Styling System
- **Custom PPMori font family** with multiple weights (200, 400, 600)
- **CSS custom properties** for consistent color theming
- **Liquid glass effects** for navigation using backdrop-filter and SVG distortion
- **Tailwind v4 configuration** with custom color palette and animations

### Content Management
- Project data is hardcoded in page frontmatter as JavaScript objects
- Images are imported as Astro assets from `src/assets/images/`
- Content uses `set:html` for flexible HTML rendering

### Key Features
- Smooth scrolling with Lenis library
- Responsive grid layout (1 column mobile, 5 column desktop)
- Glass-morphism navigation effects
- Lazy loading for images
- SEO-optimized with Open Graph and Twitter meta tags

## Important Configuration Files

- `astro.config.mjs` - Astro configuration with Tailwind integration
- `tailwind.config.ts` - Custom Tailwind configuration with color system
- `tsconfig.json` - TypeScript configuration
- `.cursor/rules/rule1.mdc` - Cursor IDE rules (analyze config files before modifying)

## Font Assets

The project uses PPMori font family stored in `src/assets/fonts/` with preloading in Layout.astro for performance.