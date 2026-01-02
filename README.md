# Bnoon Landing Page

Bnoon Healthcare landing page built with Next.js 14 and React 18.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Bootstrap 5, CSS Modules
- **Animation**: Framer Motion, Animate.css
- **Database**: MongoDB (Mongoose)
- **Deployment**: Azure App Service

## Project Structure

```
src/
├── app/           # Next.js App Router pages
├── components/    # Reusable UI components
├── features/      # Feature-specific modules
├── lib/           # Utility functions and helpers
├── models/        # MongoDB/Mongoose models
└── styles/        # Global styles and CSS modules
```

## Prerequisites

- Node.js 20.x
- npm or yarn

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file with the required environment variables:

```env
MONGODB_URI=your_mongodb_connection_string
RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |

## Deployment

This project is configured for Azure App Service deployment with:

- `web.config` - IIS configuration for Next.js
- `server.js` - Custom Node.js server for production

## Related Projects

- [bnoon-telehealth](https://dev.azure.com/ovasave-production/ovasave/_git/bnoon-telehealth) - Telehealth application
