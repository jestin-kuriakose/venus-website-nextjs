# Venus International Website

A modern, professional website for Venus International - a leading oil and gas supplier in Kuwait.

## Features

- **Multi-page website** with Home, About, Products, Gallery, and Contact pages
- **Responsive design** optimized for mobile, tablet, and desktop
- **SEO optimized** with proper meta tags, structured data, and performance optimization
- **Contact form** with email integration using Resend
- **Product catalog** with comprehensive listings of Mechanical, Electrical, and Instrumentation products
- **Image gallery** with lightbox viewing and category filters
- **Modern UI** using Next.js 14+, TypeScript, Tailwind CSS, and Shadcn/ui components
- **Smooth animations** powered by Framer Motion

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend
- **Image Gallery**: Yet Another React Lightbox

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- A Resend account for email functionality (free tier available)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Get your Resend API key from https://resend.com/api-keys
   - Add your API key to `.env.local`:
   ```
   RESEND_API_KEY=your_actual_api_key_here
   ```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Email Configuration

The contact form uses Resend to send emails. To set this up:

1. Sign up for a free account at [Resend](https://resend.com)
2. Verify your domain (venusintlkwt.com) or use Resend's test domain for development
3. Get your API key from the Resend dashboard
4. Add the API key to your `.env.local` file
5. Update the `from` address in `/app/api/contact/route.ts` if needed

**Note**: In production, you'll need to verify your domain with Resend to send emails from your company email address.

## Adding Images

### Logo
Place your company logo (866 x 285 px) in the `public/` folder and update the Header component to use it instead of the text logo.

### Gallery Images
1. Create the folder structure: `public/images/gallery/`
2. Add your images to this folder with descriptive names
3. Update the `galleryImages` array in `/app/gallery/page.tsx` with your image paths

Example:
```typescript
{
  id: 1,
  src: "/images/gallery/oil-field-operations.jpg",
  alt: "Oil field operations in Kuwait",
  category: "oil-field",
  title: "Oil Field Operations",
}
```

### Background Images (Optional)
You can add background images to hero sections by placing them in `public/images/` and updating the respective page components.

## Customization

### Colors
The primary brand color (#D6262E - red) and secondary color (black) are configured in:
- `/app/globals.css` - CSS variables
- Tailwind configuration (via Shadcn/ui)

### Content
Update content in each page:
- **Home**: `/app/page.tsx`
- **About**: `/app/about/page.tsx`
- **Products**: `/app/products/page.tsx`
- **Gallery**: `/app/gallery/page.tsx`
- **Contact**: `/app/contact/page.tsx`

### SEO
Meta tags and SEO configuration are in:
- Root layout: `/app/layout.tsx` (global SEO)
- Individual pages have their own metadata exports

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This website is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add your environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
4. Deploy

Alternatively, you can deploy to any platform that supports Next.js.

## Project Structure

```
venus-website/
├── app/
│   ├── about/          # About page
│   ├── api/
│   │   └── contact/    # Contact form API route
│   ├── contact/        # Contact page
│   ├── gallery/        # Gallery page
│   ├── products/       # Products page
│   ├── layout.tsx      # Root layout with Header/Footer
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── ui/             # Shadcn/ui components
│   ├── Footer.tsx      # Footer component
│   └── Header.tsx      # Header/Navigation component
├── lib/
│   └── utils.ts        # Utility functions
└── public/
    └── images/         # Static images
```

## Support

For questions or issues, please contact:
- Sales: sales@venusintlkwt.com
- Engineering: engg@venusintlkwt.com

## License

Copyright © 2025 Venus International. All rights reserved.
