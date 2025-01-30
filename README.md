A simple web app that helps users choose the perfect watch strap color based on their skin tone.

## Features

- **Image Upload**: Users can upload an image to analyze their skin tone.
- **Skin Tone Input**: Users can also manually select their skin tone from predefined options (light, medium, dark, warm, cool).
- **Watch Strap Recommendations**: Based on the detected or selected skin tone, the app will recommend suitable watch strap colors.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Folder Structure

'''bash

my-app/
│
├── public/                  # Static files (images, icons, fonts)
│
├── src/
│   ├── app/                 # New app directory for pages & components in Next.js 13+
│   │   ├── layout.tsx       # Layout file (global wrapper, navbar, etc.)
│   │   ├── page.tsx         # Home page with skin tone input options
│   │   ├── results.tsx      # Results page showing recommendations
│   │   └── error.tsx        # Error handling page (optional)
│   │
│   ├── components/          # Reusable UI components
│   │   ├── SkinToneInput.tsx  # Component for image upload or text input
│   │   ├── ColorCard.tsx    # Display watch strap recommendations (color or image)
│   │   ├── UploadButton.tsx # File input button for image upload
│   │   └── ResultCard.tsx  # Component for displaying results
│   │
│   ├── lib/                 # Backend API logic, external modules, etc.
│   │   ├── skinToneDetection.ts # Logic for detecting skin tone (image processing)
│   │   ├── colorMatching.ts    # Rule-based logic for color recommendations
│   │   └── recommendation.ts  # Handling logic for skin tone-color pairing
│   │
│   ├── utils/               # Helper functions for the app
│   │   └── getRecommendations.ts # Helper to match skin tone to color
│   │
│   ├── hooks/               # Custom React hooks (if any needed)
│   ├── styles/              # Global styles (Tailwind CSS or CSS Modules)
│   ├── context/             # Context for global state management (if needed)
│   └── types/               # TypeScript types
│
├── .env.local               # Environment variables (e.g., API keys, etc.)
├── next.config.js           # Next.js config
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation

'''