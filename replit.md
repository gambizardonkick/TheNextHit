# TheNextHit - Provably Fair Casino Prediction Tool

## Overview

TheNextHit is a client-side prediction tool for finding favorable rounds in provably fair casino games on Stake and Shuffle platforms. The application uses cryptographic algorithms (HMAC-SHA256) to predict upcoming game outcomes for Keno and Limbo games based on seed values and nonce counters.

The tool implements the exact provably fair algorithms used by these casinos, allowing users to search through future rounds to find patterns matching their criteria (e.g., minimum hits in Keno, target multipliers in Limbo).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, bundled via Vite

**UI System**: shadcn/ui components built on Radix UI primitives
- Implements Material Design foundation with casino-themed customization
- Uses Tailwind CSS with custom design tokens for theming
- Typography: Inter (body/data) and Space Grotesk (headings/accents)

**State Management**:
- React Query (@tanstack/react-query) for server state and API caching
- Local React state for UI interactions
- No global state management needed due to simple data flow

**Routing**: Wouter for lightweight client-side routing
- Single-page application with minimal routes
- Primary route: Home page with game selection and prediction forms

**Design System**:
- Custom Tailwind configuration with CSS variables for theming
- Light/dark mode support via CSS custom properties
- Elevation system using hover/active states for depth perception
- Spacing primitives based on multiples of 2 (8px base unit)

### Backend Architecture

**Runtime**: Node.js with Express server

**API Design**:
- RESTful endpoints for Keno and Limbo predictions
- POST `/api/keno/search` - Searches for matching Keno rounds
- POST `/api/limbo/search` - Searches for target Limbo multipliers

**Cryptographic Implementation**:
- Server-side HMAC-SHA256 computation using Node.js crypto module
- Implements exact casino algorithms for provably fair verification
- Keno: Generates 10 random numbers from pool of 40 using HMAC stream
- Limbo: Calculates multiplier from HMAC hash with 1% house edge

**Validation**:
- Zod schema validation for all API inputs
- Type-safe data contracts shared between client and server
- Input constraints (e.g., nonce ranges, number limits, multiplier bounds)

**Build System**:
- Development: tsx for TypeScript execution with hot reload
- Production: esbuild for server bundling, Vite for client bundling
- Separate client and server build outputs

### Data Storage Solutions

**Current Implementation**: No persistent storage
- All computations are ephemeral and request-based
- No user accounts or session management
- No database required (Drizzle ORM configured but unused)

**Database Configuration** (prepared but not utilized):
- Drizzle ORM configured for PostgreSQL via Neon serverless
- Schema definition exists but no tables implemented
- Storage interface stubbed for future backend expansion

### Authentication and Authorization

**Current Implementation**: No authentication required
- Public tool with no user-specific data
- No session management or user accounts
- API endpoints are open and stateless

**Security Considerations**:
- Input validation prevents malicious parameter injection
- No sensitive data storage or transmission
- Search limits prevent resource exhaustion (max 100-200k rounds)

### External Dependencies

**UI Component Libraries**:
- Radix UI primitives for accessible, unstyled components
- shadcn/ui pattern for customizable component system
- Lucide React for consistent iconography

**Styling Framework**:
- Tailwind CSS 3.x for utility-first styling
- PostCSS for CSS processing
- Autoprefixer for browser compatibility

**Development Tools**:
- TypeScript 5.x for type safety
- Vite 5.x for fast development and optimized builds
- ESBuild for server-side bundling

**Fonts**:
- Google Fonts: Inter and Space Grotesk
- Loaded via CDN in HTML head

**Casino Integrations**:
- No direct API integration with Stake or Shuffle
- Implements their public provably fair algorithms locally
- Users must manually input seeds from casino platforms

**Deployment Considerations**:
- Replit-specific plugins for development experience
- Environment variable support for database URL (if enabled)
- Static asset serving for generated casino logos