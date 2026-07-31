# KGS Construction & Transport Portfolio Website

A modern, responsive portfolio website for KGS Construction & Transport, showcasing their construction projects, services, and expertise in road concreting, building construction, land development, and excavation work.

## Overview

This website serves as a professional portfolio to showcase completed projects across multiple service categories:

- **Road Concreting** - Highway and road infrastructure projects
- **Building Construction** - Residential and commercial construction projects
- **Land Development** - Embankment filling and land preparation work
- **Excavation Services** - Tank digging, land clearing, and earthmoving projects

## Features

### 🎨 Design & UX
- **Responsive Design** - Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern Aesthetics** - Clean, professional dark theme design with smooth animations and transitions
- **Scroll Reveal Animations** - Elements animate into view as users scroll using IntersectionObserver
- **Typography** - Contemporary look using 'Inter' and 'Outfit' Google Fonts
- **Ambient Orbs** - Animated background orbs for enhanced visual appeal

### 📸 Project Gallery
- **Project Cards** - Elegant card layout displaying project information and photos
- **Photo Gallery** - Interactive lightbox for browsing project photos
- **Keyboard Navigation** - Use arrow keys to navigate through photos, Escape to close
- **Lazy Loading** - Optimized image loading for better performance
- **Status Badges** - Visual indicators for project completion status

### 🧭 Navigation
- **Fixed Navigation Bar** - Persistent navbar with smooth scroll effects
- **Responsive Hamburger Menu** - Mobile-friendly navigation that collapses on smaller screens
- **Active Link Highlighting** - Navigation links highlight based on current section
- **Smooth Scrolling** - Smooth scroll behavior when navigating between sections
- **Quick Filter Links** - Service category links that scroll to relevant project sections

### 📬 Contact
- **Contact Form** - Functional contact form with visual feedback
- **Success Confirmation** - User-friendly success message after form submission

## Project Structure

```
kgs-website/
├── index.html          # Main HTML file with page structure
├── css/                # CSS styling files (style, hero, navbar, etc.)
├── js/                 # JavaScript modules (app, animations, gallery, etc.)
├── assets/             # Project photos and images
│   ├── road-concreting/
│   │   ├── senanayakapura/
│   │   └── saddhathissapura/
│   ├── excavator-projects/
│   │   ├── nawagampura-tank/
│   │   └── clearing-batticaloa/
│   ├── building-projects/
│   ├── civil-projects/
│   ├── owner/
│   ├── vehicles/
│   ├── logo.png
│   └── logo1.png
└── README.md           # This file
```

## File Descriptions

### `index.html`
Main HTML file containing:
- Navigation bar with responsive hamburger menu
- Hero section with staggered animations
- Service sections highlighting offered services
- Project gallery sections organized by category
- Contact form
- Footer with company information

### `js/` Directory
Core JavaScript functionality split into modules:
- **`app.js`** - Main entry point and project data arrays
- **`navigation.js`** - Navbar scroll effects, active link tracking, and mobile menu toggle
- **`animations.js`** - Scroll reveal, ambient orbs, and hero section animations
- **`gallery.js`** - Interactive lightbox and dynamic project card generation

### `css/` Directory
Comprehensive modular styling including:
- **`style.css`** - Core CSS Custom Properties (variables), typography, and base styles
- **`hero.css`, `navbar.css`, `footer.css`** - Component-specific styles
- **`services.css`, `projects.css`** - Section-specific grid layouts and component styling
- **`responsive.css`** - Mobile-first media queries and accessibility adjustments

## Browser Compatibility

- **Modern Browsers** - Chrome, Firefox, Safari, Edge (latest versions)
- **Features Used** - CSS Grid, Flexbox, CSS Custom Properties, Intersection Observer API, ES6 JavaScript
- **Progressive Enhancement** - Graceful fallbacks for missing images and unsupported features

## Getting Started

### No Installation Required
This is a static website. Simply open `index.html` in a web browser to view it locally.

### Local Development
For a better development experience, use a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if http-server is installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Customization

### Adding New Projects

Edit the project arrays in `js/app.js`:

```javascript
const concreteProjects = [
  {
    id: "unique-id",
    name: "Project Name",
    location: "Location",
    status: "completed", // or "ongoing"
    photos: ["path/to/photo1.jpg", "path/to/photo2.jpg"],
    totalPhotos: 2,
  },
];
```

The page will automatically render new project cards with the correct structure.

### Modifying Colors & Styling

Edit CSS custom properties in `css/style.css`:

```css
:root {
  --gold: #D4AF37;           /* Primary accent color */
  --dark: #0a0a0a;           /* Background color */
  --light: #f0f0f0;          /* Light text */
  --border-gold: #3a3a3a;    /* Border color */
  /* ... other variables */
}
```

### Updating Company Information

Edit the company name and contact details in `index.html`:
- Company name/logo in the navbar
- Contact information in the footer
- Company description in the hero section

## Performance Optimization

- **Lazy Image Loading** - Images use `loading="lazy"` attribute
- **Error Handling** - Missing images display placeholder instead of breaking the layout
- **CSS Animations** - Hardware-accelerated transforms and opacity changes
- **IntersectionObserver** - Efficient scroll-triggered animations without scroll event listener
- **Responsive Images** - Consider adding srcset for different screen sizes (future enhancement)

## Accessibility

- **Semantic HTML** - Proper use of semantic HTML elements
- **ARIA Labels** - Descriptive labels for icon buttons
- **Keyboard Navigation** - Lightbox fully keyboard accessible
- **Alt Text** - Images have descriptive alt text
- **Focus Management** - Proper focus states for interactive elements

## Future Enhancements

- [ ] Add image optimization (WebP format, responsive images with srcset)
- [ ] Implement service booking system
- [ ] Add testimonials section
- [ ] Create blog/news section
- [ ] Add Google Maps integration for project locations
- [ ] Implement email backend for contact form
- [ ] Add project filtering by category/location
- [ ] Create project detail pages with more information
- [ ] Add team member showcase
- [ ] Implement analytics tracking

## Dependencies

**Zero External Dependencies** - This website uses only vanilla HTML, CSS, and JavaScript.

Font Icons: [Font Awesome](https://fontawesome.com/) - Free CDN version included in HTML

## License

© KGS Construction & Transport. All rights reserved.

## Support

For questions or issues regarding this website, contact the development team or submit an issue in the repository.

---

**Last Updated:** July 2026  
**Version:** 1.2
