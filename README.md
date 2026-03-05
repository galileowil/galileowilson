# Galileo Wilson Portfolio

A premium personal portfolio website for Galileo Wilson, CEO of Wilson Growth.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React

## ✨ Features

- **Premium Dark Theme:** Million-dollar aesthetic with subtle gradients and animations
- **Responsive Design:** Optimized for all devices
- **Smooth Animations:** Framer Motion powered scroll animations
- **SEO Optimized:** Meta tags, Open Graph, and semantic HTML
- **Fast Performance:** Static export for optimal loading speeds

## 📁 Project Structure

```
galileowilson/
├── app/                    # Next.js app router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # shadcn/ui components
│   └── sections/          # Page sections
│       ├── Hero.tsx
│       ├── Stats.tsx
│       ├── About.tsx
│       ├── Journey.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       └── Contact.tsx
├── lib/
│   └── utils.ts           # Utility functions
├── public/                # Static assets
├── next.config.mjs
├── tailwind.config.ts
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/galimolt/galileowilson.git
cd galileowilson
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This will generate a static export in the `dist/` directory.

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with default settings

### Custom Domain (Cloudflare)

1. Add domain in Vercel dashboard
2. Configure DNS in Cloudflare:
   - CNAME: `galileowilson.com` → `cname.vercel-dns.com`
   - CNAME: `www` → `cname.vercel-dns.com`

## 📝 Customization

### Content

Edit the component files in `components/sections/` to update:
- Personal information
- Stats and metrics
- Project details
- Skills and expertise
- Contact information

### Styling

- Colors: Edit CSS variables in `app/globals.css`
- Typography: Modify Tailwind config or component classes
- Spacing: Adjust padding/margin in component files

## 📄 License

MIT License - feel free to use this template for your own portfolio.

---

Built with ❤️ by Galileo Wilson
