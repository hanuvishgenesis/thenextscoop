# The Next Scoop - Ice Cream Shop Landing Page

A modern, responsive Angular landing page for an ice cream shop with a maroon and white theme.

## Features

✨ **Modern Design**
- Maroon and white color scheme
- Clean, professional layout
- Fully responsive design
- Smooth animations and transitions

📱 **Responsive Layout**
- Mobile-friendly navigation
- Adaptive grid layouts
- Touch-friendly buttons and links

🧩 **Components**
- **Header**: Sticky navigation with mobile menu
- **Hero**: Eye-catching landing section
- **Features**: Why choose us section
- **Menu**: Ice cream flavors showcase
- **About**: Store information and statistics
- **Contact**: Contact form and information
- **Footer**: Navigation and company details

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── features/
│   │   ├── menu/
│   │   ├── about/
│   │   ├── contact/
│   │   └── footer/
│   └── app.component.ts
├── styles.scss          (Global styles)
├── variables.scss       (Color variables)
└── main.ts             (Entry point)
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd thenextscoop
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

## Development

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm test
```

## Color Palette

- **Primary Maroon**: #800000
- **Light Maroon**: #a52a2a
- **Dark Maroon**: #5c0a0a
- **White**: #ffffff
- **Light Gray**: #f5f5f5

## Customization

### Change Shop Information

Update the following files with your information:
- `src/app/components/header/header.component.html` - Shop name and logo
- `src/app/components/contact/contact.component.html` - Contact details
- `src/app/components/about/about.component.html` - About section
- `src/app/components/menu/menu.component.ts` - Menu items

### Modify Colors

Edit `src/variables.scss` to change the color scheme:

```scss
$primary-maroon: #YOUR_COLOR;
$light-maroon: #YOUR_COLOR;
$dark-maroon: #YOUR_COLOR;
```

### Add Your Domain

Update `src/index.html` to add your domain:

```html
<meta property="og:url" content="https://yourdomain.com">
```

## Hosting

This Angular app can be deployed to:
- **Vercel**: Perfect for Angular apps with serverless functions
- **Netlify**: Easy deployment with CI/CD
- **GitHub Pages**: Free hosting option
- **Firebase Hosting**: Google's hosting solution
- **AWS S3 + CloudFront**: Production-grade solution

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **Angular 17+**: Modern web framework
- **TypeScript**: Type-safe JavaScript
- **SCSS**: Advanced styling
- **Standalone Components**: Latest Angular pattern

## License

This project is private and belongs to The Next Scoop.

## Contact

For questions or support, contact: hello@thenextscoop.com

---

Made with ❤️ for The Next Scoop
