# Landing Page Starter Kit

I hope this is a great starting point for you. Enjoy.

## 🚀 Quick Start

### Prerequisites

Before you begin, make sure you have **Node.js** installed on your computer:

1. Check if you have Node.js: Open your terminal (Command Prompt on Windows, Terminal on Mac/Linux) and type:

   ```bash
   node --version
   ```

   If you see a version number (like `v20.x.x`), you're good to go!

2. If you don't have Node.js, [download and install it here](https://nodejs.org/) (choose the LTS version)

### Installation & Running the App

1. **Install dependencies** - This downloads all the code libraries the project needs:

   ```bash
   npm install
   ```

   Wait for this to complete (it may take a minute or two).

2. **Start the development server** - This runs your website locally:

   ```bash
   npm run dev
   ```

3. **View your site** - Open your web browser and go to:

   ```
   http://localhost:3000
   ```

   You should see your landing page! 🎉

4. **Making changes** - The site will automatically update when you save changes to files. Try editing `app/page.tsx` to see the changes appear instantly in your browser.

### Other Useful Commands

```bash
npm run build   # Build your site for production (before deploying)
npm start       # Run the production version locally (after building)
npm run lint    # Check your code for potential issues
```

These commands are mini scripts that are set in the `package.json` file. You can find them at the top of the [package.json file here](./package.json).

## 📁 Project Structure

Understanding where things are will help you customize your landing page:

```
landing-page-starter-kit/
├── app/                    # Main application pages
│   ├── layout.tsx         # Global layout (navbar + footer wrap all pages)
│   ├── page.tsx           # Home page (/)
│   └── course/            # Example course page (/course)
│       └── page.tsx
│
├── components/            # Reusable UI pieces
│   ├── blocks/           # Full-width page sections (hero, pricing, etc.)
│   │   ├── hero.tsx      # Top section with main headline
│   │   ├── navbar.tsx    # Navigation bar at top
│   │   ├── footer.tsx    # Footer at bottom
│   │   ├── pricing.tsx   # Pricing cards section
│   │   ├── portfolio.tsx # Image gallery section
│   │   └── product-showcase.tsx  # Product feature section
│   │
│   ├── ui/               # Basic UI components (buttons, etc.)
│   │   └── button.tsx    # Button component (from shadcn/ui)
│   │
│   └── custom/           # Custom reusable components
│       ├── cta-section.tsx      # Call-to-action button pairs
│       ├── nav-cta-button.tsx   # Smart navbar button
│       └── audio-player.tsx     # Audio player component
│
├── lib/                   # Utility functions
│   └── utils.ts          # Helper functions (like cn() for styling)
│
├── public/               # Static files (images, audio, etc.)
│   └── audio/           # Audio files go here
│
├── DETAILS.json         # ⚙️ Important! Store URLs and config here
├── app/globals.css      # Global styles and theme colors
├── components.json      # shadcn/ui configuration
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

### Key Files to Customize

#### 🎯 `DETAILS.json` - Your Configuration File

This file stores important variables used throughout your app:

```json
{
  "stripeUrl": "https://buy.stripe.com/..."
}
```

**What to change:**

- Replace the `stripeUrl` with your actual Stripe payment link
- Add other configuration variables here (API keys go in `.env` files, not here!)

#### 🏠 `app/page.tsx` - Your Home Page

This is your main landing page. It composes different sections:

```tsx
<Hero />              {/* Top section with headline */}
<ProductShowcase />   {/* Feature showcase */}
<Portfolio />         {/* Gallery of work */}
<Pricing />           {/* Pricing cards */}
```

#### 🎨 `app/globals.css` - Design & Colors

Change your site's colors by modifying CSS variables:

```css
--background: ...     /* Background color */
--primary: ...        /* Main brand color */
--foreground: ...     /* Text color */
```

#### 🧩 Components in `components/blocks/`

Each "block" is a full-width section you can use on any page:

- **hero.tsx** - Large heading + call-to-action buttons
- **pricing.tsx** - Pricing cards with features
- **portfolio.tsx** - Image gallery with hover effects
- **footer.tsx** - Site footer with links and social media

Mix and match these blocks to create different pages!

## 🎨 Using shadcn/ui Components

This project uses [shadcn/ui](https://ui.shadcn.com/) for pre-styled components. It's the best component library EVER in my opinion. It offers any component you would need right out of the box, but it allows you style them however you'd like. Huge win.

To add more components:

```bash
npx shadcn@latest add [component-name]
```

Examples:

```bash
npx shadcn@latest add card       # Add card component
npx shadcn@latest add dialog     # Add modal dialog
npx shadcn@latest add input      # Add input field
```

Components are added to `components/ui/` and automatically configured.

## 🌐 Deploying to Vercel

[Vercel](https://vercel.com) is a hosting platform built by the creators of Next.js. It's the easiest way to deploy your landing page with zero configuration.

### Why Vercel?

- ✅ **Free hosting** for personal projects
- ✅ **Automatic deployments** when you push to GitHub
- ✅ **Instant HTTPS** (secure URLs)
- ✅ **Global CDN** (fast worldwide)
- ✅ **Zero configuration** for Next.js projects

### Deployment Steps

1. **Create a GitHub repository** (if you haven't already)

   - Go to [GitHub](https://github.com) and create a new repository
   - Push your code to GitHub:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
     git push -u origin main
     ```

2. **Deploy to Vercel**

   - Go to [vercel.com/new](https://vercel.com/new)
   - Sign in with your GitHub account
   - Click "Import Project" and select your repository
   - Vercel will automatically detect Next.js and configure everything
   - Click "Deploy"

3. **Your site is live!**
   - Vercel gives you a URL like `your-project.vercel.app`
   - Every time you push to GitHub, Vercel automatically redeploys
   - You can add a custom domain in Vercel's settings

### Environment Variables on Vercel

If you need environment variables (API keys, secrets):

1. Go to your project on Vercel
2. Click "Settings" → "Environment Variables"
3. Add your variables (e.g., `STRIPE_SECRET_KEY`)
4. Never put secrets in `DETAILS.json` - use `.env` files locally and Vercel's settings for production

## 🛠️ Customization Tips

### Adding a New Page

1. Create a new folder in `app/` (e.g., `app/about/`)
2. Add a `page.tsx` file inside it
3. Your page will be available at `/about`

Example:

```tsx
// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className='pt-20'>
      <h1>About Us</h1>
      {/* Your content */}
    </main>
  );
}
```

### Changing the Navigation

Edit `components/blocks/navbar.tsx` to modify the navigation bar:

- Change the logo text
- Add/remove navigation links
- Customize the CTA button

### Adding Images

1. Put images in the `public/` folder (e.g., `public/images/hero.jpg`)
2. Reference them in your code:
   ```tsx
   <img src='/images/hero.jpg' alt='Hero image' />
   ```
   Or use Next.js Image component:
   ```tsx
   import Image from 'next/image';
   <Image
     src='/images/hero.jpg'
     width={800}
     height={600}
     alt='Hero'
   />;
   ```

### Modifying Colors & Fonts

- **Colors**: Edit CSS variables in `app/globals.css`
- **Fonts**: This project uses Geist Sans and Geist Mono (configured in `app/layout.tsx`)
- To use different fonts, update the imports in `app/layout.tsx`

## 📚 Learn More

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features
- [Next.js Tutorial](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub](https://github.com/vercel/next.js) - Next.js source code

### Tech Stack Used

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful component library
- **[Lucide Icons](https://lucide.dev/)** - Icon library

## 📝 Common Issues

### Port 3000 is already in use

If you see this error, another app is using port 3000. Either:

- Stop the other app
- Or use a different port: `npm run dev -- -p 3001`

### Changes not appearing

- Make sure the dev server is running (`npm run dev`)
- Try hard-refreshing your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check the terminal for error messages

### Build errors

Run `npm run lint` to check for code issues before building.
