
### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── components/
│   ├── Navbar.tsx        # Sticky responsive navigation
│   ├── Hero.tsx          # Animated hero with typewriter effect
│   ├── About.tsx         # Bio, stats, soft skills
│   ├── Skills.tsx        # Filterable skill bars
│   ├── Projects.tsx      # Project showcase cards
│   ├── Education.tsx     # Timeline-style education
│   ├── Certificates.tsx  # Certs + activities + references
│   ├── Contact.tsx       # Contact form + social links
│   └── Footer.tsx
├── data/
│   └── portfolio.ts      # ← Edit YOUR info here
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── styles/
│   └── globals.css
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## ✏️ Customization

All your personal data lives in **`data/portfolio.ts`**. Edit:
- `personalInfo` — name, email, phone, bio, social links
- `education` — your academic history
- `projects` — your projects with tech stacks
- `skills` — skill categories and proficiency levels
- `certificates` — your certifications
- `activities` — extracurricular activities

## 🎨 Tech Stack

- **Next.js 14** — React framework
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **CSS Animations** — Custom keyframe animations
- **Google Fonts** — Inter + Fira Code

## 🌐 Deployment

Deploy easily on **Vercel** (recommended):
1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Click Deploy — done!
