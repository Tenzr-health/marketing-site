# Tenzr Health Marketing Site

A modern marketing website for Tenzr Health, built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Integrated with **HubSpot** for patient engagement and **Cloudflare Web Analytics**.

Hosted at [tenzr-health.github.io](https://tenzr-health.github.io/marketing-site/).

## Features

- 🎨 **Tenzr Design System** - Built with Tailwind CSS v4 for consistent branding
- 📝 **HubSpot Integration** - Patient intake and newsletter forms synced with HubSpot CRM
- 📊 **Recovery Tracking** - Showcasing Tenzr's advanced wearable technology and analytics
- ⚡ **Performance Optimized** - Static export for fast loading and GitHub Pages compatibility
- 📱 **Responsive Design** - Seamless experience across mobile, tablet, and desktop devices

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:

```env
# HubSpot Configuration
HUBSPOT_ACCESS_TOKEN=your_hubspot_access_token_here
HUBSPOT_PORTAL_ID=your_portal_id_here

# HubSpot Form IDs (create forms in HubSpot and add their IDs here)
NEXT_PUBLIC_HUBSPOT_CONTACT_FORM_ID=your_contact_form_id_here
NEXT_PUBLIC_HUBSPOT_NEWSLETTER_FORM_ID=your_newsletter_form_id_here

# Cloudflare Analytics
NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN=your_cloudflare_analytics_token_here

# HubSpot Tracking Code
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id_here
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### 4. Build for Production

```bash
npm run build
npm run start
```

## HubSpot Setup

### Getting Your HubSpot API Keys

1. **Portal ID**:

   - Log in to HubSpot
   - Go to Settings > Account Setup > Account Defaults
   - Find your Hub ID (Portal ID)

2. **Access Token**:

   - Go to Settings > Integrations > Private Apps
   - Create a new private app
   - Grant necessary scopes: `crm.objects.contacts.write`, `forms`
   - Generate access token

3. **Form IDs**:
   - Go to Marketing > Lead Capture > Forms
   - Create forms for Contact and Newsletter
   - Click on a form and find the Form ID in the URL or form settings

### Setting Up Forms in HubSpot

1. Create a **Contact Form** with fields:

   - firstname
   - lastname
   - email
   - company (optional)
   - phone (optional)
   - message

2. Create a **Newsletter Form** with fields:
   - email

## Cloudflare Analytics Setup

1. Log in to Cloudflare Dashboard
2. Go to your domain > Analytics > Web Analytics
3. Click "Enable Web Analytics"
4. Copy the Site Token
5. Add it to your `.env.local` as `NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN`

## Project Structure

```
marketing-site/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with tracking scripts
│   ├── page.tsx             # Home page
│   └── contact/
│       └── page.tsx         # Contact page
├── components/
│   ├── forms/
│   │   ├── ContactForm.tsx   # Contact form with HubSpot integration
│   │   └── NewsletterForm.tsx # Newsletter signup form
│   ├── HubSpotTracking.tsx   # HubSpot tracking script component
│   └── CloudflareAnalytics.tsx # Cloudflare analytics component
├── lib/
│   ├── hubspot/
│   │   ├── client.ts         # Server-side HubSpot API client
│   │   └── forms.ts          # Client-side form submission utilities
│   └── analytics/
│       └── cloudflare.ts     # Cloudflare analytics utilities
├── types/
│   └── hubspot.ts            # TypeScript types for HubSpot
├── .env.example              # Example environment variables
└── README.md
```

## Key Components

### ContactForm

A full-featured contact form with validation:

- First name, last name, email (required)
- Company, phone (optional)
- Message field
- Form validation with Zod
- Success/error messages
- Automatic submission to HubSpot

### NewsletterForm

Simple email signup form:

- Email input with validation
- One-click subscribe
- HubSpot integration

### HubSpot Integration

Two methods of integration:

1. **Client-side Forms API** (used in forms):

   - Direct submission to HubSpot Forms API
   - No server required
   - Includes visitor tracking token

2. **Server-side API Client** (available for custom use):
   - Full HubSpot CRM API access
   - Create/update contacts programmatically
   - Server-side only (uses access token)

## Converting Figma Designs

This site uses Tailwind CSS, which makes it easy to convert Figma designs:

1. **Colors**: Add custom colors to `tailwind.config.ts`
2. **Typography**: Use Tailwind's font utilities or add custom fonts
3. **Spacing**: Tailwind's spacing scale matches common design systems
4. **Components**: Build reusable components in the `components/` directory
5. **Responsive Design**: Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, etc.)

### Example: Adding Custom Colors

This project uses Tailwind CSS v4, which uses CSS variables for customization. Add custom colors in `app/globals.css`:

```css
@theme {
  --color-brand-primary: #0066cc;
  --color-brand-secondary: #ff6b35;
}
```

Then use them in your components:

```tsx
<div className="bg-brand-primary text-white">Custom branded section</div>
```

## Deployment

### Docker (Recommended for Self-Hosting)

For complete Docker deployment instructions, see **[DEPLOYMENT.md](./DEPLOYMENT.md)**.

Quick start with Docker:

```bash
# Build and run with Docker Compose
docker-compose up -d

# Or build manually
docker build -t tenzr-marketing-site .
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_id \
  tenzr-marketing-site
```

The Docker deployment guide includes:

- Production deployment configurations
- Kubernetes and Docker Swarm examples
- NGINX reverse proxy setup
- SSL/TLS configuration with Let's Encrypt
- Monitoring and logging
- Security best practices
- Troubleshooting guide

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

Works with any platform that supports Next.js:

- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted with Node.js or Docker

## Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Environment Variables

All environment variables are documented in `.env.example`. The variables prefixed with `NEXT_PUBLIC_` are exposed to the browser and should not contain secrets.

- Server-side only: `HUBSPOT_ACCESS_TOKEN`
- Client-side: All `NEXT_PUBLIC_*` variables

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Support

For issues or questions, please open an issue in the GitHub repository.
