# SkillVerse — Global Skill-Assessment Web App

**SkillVerse** is a production-quality, 100% client-side, static multilingual web application built with React, Vite, TypeScript, Tailwind CSS, and React Router.

## 🚀 Key Features

- **Multiverse Aesthetic**: Dark mode default (`#0A0A10`), neon glowing panel highlights (`#FF2E88`, `#00E5FF`, `#7B2FFF`), glass panels, and halftone texture overlay. Includes a clean lab light mode toggle.
- **100% Client-Side Engine**: Zero databases, zero backend calls, zero AI API calls at runtime. All quiz logic, scoring algorithms, roadmaps, and resources are hardcoded in typed TS data structures (`src/data/`).
- **Signature Visual Elements**:
  1. **Homepage Hero Threshold**: Glowing circular/hexagonal interactive portal with faint branching route lines.
  2. **Results Page Branching Map**: Branching lines diagram where the user's winning path lights up in full magenta-to-cyan gradient glow.
- **Multilingual & True RTL**: Supports 8 languages (English, Arabic, Spanish, French, German, Portuguese, Turkish, Hindi) with full native script switcher, browser language auto-detection toast, and true `dir="rtl"` layout for Arabic.
- **Client-Side PDF Export**: High-contrast light print layout rendered directly in browser using `html2canvas` + `jsPDF` with RTL Arabic text support.
- **AdSense Preparedness**: Bounded ad placeholders `{/* AD_SLOT: ... */}` in standard IAB sizes, thorough original privacy disclosures, and a full 7-article Resources hub.

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components & signature elements
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── AdPlaceholder.tsx
│   ├── SignatureHeroThreshold.tsx
│   ├── SignatureResultsBranching.tsx
│   ├── PdfExportButton.tsx
│   └── LanguageToast.tsx
├── constants/           # Single brand name constant (APP_NAME = "SkillVerse")
├── context/             # Theme & Assessment Contexts
├── data/                # Hardcoded quiz questions, scoring logic, 15 result nodes & 7 articles
├── i18n/                # i18next configuration & 8 language translation dictionaries
├── pages/               # All site pages (Home, Assessment, Results, About, Privacy, Terms, Contact, FAQ, Resources, ArticleDetail, 404)
├── App.tsx              # Router & lazy-loaded routes
└── main.tsx             # Entry point
```

## 🛠️ Local Development & Build

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build
```
