# Jeevak Hospital Website - Component Guide

## Overview

This guide provides comprehensive documentation for all components in the Jeevak Hospital website, including usage examples, accessibility features, and best practices.

## Table of Contents

1. [Core Components](#core-components)
2. [Form Components](#form-components)
3. [UI Components](#ui-components)
4. [Utility Components](#utility-components)
5. [Accessibility Guidelines](#accessibility-guidelines)
6. [Performance Best Practices](#performance-best-practices)
7. [Testing Guidelines](#testing-guidelines)

## Core Components

### Header Component (`src/components/Header.tsx`)

**Purpose**: Main navigation component with mobile-responsive menu and accessibility features.

**Features**:
- Sticky navigation with scroll effects
- Mobile hamburger menu with focus trap
- Skip-to-content link for accessibility
- Keyboard navigation support
- ARIA labels and semantic HTML

**Usage**:
```tsx
import Header from '@/components/Header';

<Header />
```

**Accessibility Features**:
- `role="banner"` for semantic structure
- `aria-label` for screen readers
- Focus trap in mobile menu
- Skip navigation link
- Keyboard shortcuts (Tab, Enter, Escape)

**Props**: None (self-contained)

### Hero Component (`src/components/Hero.tsx`)

**Purpose**: Landing section with hospital branding, statistics, and call-to-action buttons.

**Features**:
- Responsive statistics display
- Emergency contact integration
- Patient testimonial placeholder
- Trust indicators and achievements

**Usage**:
```tsx
import Hero from '@/components/Hero';

<Hero />
```

**Accessibility Features**:
- `role="main"` with `id="main-content"`
- `aria-label` for section description
- `aria-hidden="true"` for decorative icons
- High contrast button states
- Descriptive button labels

### EnhancedAppointmentBooking Component (`src/components/EnhancedAppointmentBooking.tsx`)

**Purpose**: Multi-step appointment booking form with comprehensive validation and error handling.

**Features**:
- Multi-step form with progress indicator
- Real-time form validation
- Error handling and user feedback
- Accessibility compliance
- Mobile optimization

**Usage**:
```tsx
import EnhancedAppointmentBooking from '@/components/EnhancedAppointmentBooking';

<EnhancedAppointmentBooking />
```

**Form Steps**:
1. **Service Selection**: Choose consultation type
2. **Date & Time**: Select appointment slot
3. **Patient Information**: Personal details and emergency contact

**Validation Rules**:
- Name: 2-50 characters, letters only
- Email: Valid email format with domain validation
- Phone: Indian format (+91-XXXX-XXXXXX)
- Date: Future dates only, within 90 days
- Required fields: All marked with asterisk (*)

**Accessibility Features**:
- `role="dialog"` with `aria-describedby`
- Form field validation with `aria-invalid`
- Error messages with `aria-describedby`
- Keyboard navigation between steps
- Screen reader announcements

## Form Components

### Contact Form (`src/pages/Contact.tsx`)

**Purpose**: Contact form with department selection and feedback options.

**Features**:
- Department-specific routing
- Multiple contact methods
- Form validation with Zod schemas
- Error handling and success feedback

**Usage**:
```tsx
// Contact form is embedded in Contact page
import Contact from '@/pages/Contact';

<Contact />
```

**Form Fields**:
- Name (required, 2-100 characters)
- Email (required, valid format)
- Phone (required, Indian format)
- Subject (required, 5-200 characters)
- Message (required, 10-1000 characters)
- Department (optional)
- Urgency flag (boolean)

### Emergency Form

**Purpose**: Emergency case registration with severity assessment.

**Features**:
- Severity scale (1-10)
- Location services integration
- Immediate response handling
- WhatsApp integration

**Validation**:
- Patient info: Name, phone, age (optional)
- Emergency info: Symptoms, severity, consciousness status
- Location: Address, city, landmarks (optional)

## UI Components

### ErrorBoundary Component (`src/components/ErrorBoundary.tsx`)

**Purpose**: Graceful error handling with user-friendly error pages.

**Features**:
- Automatic error catching and reporting
- Retry functionality with attempt limits
- Development vs production error display
- Multiple recovery options

**Usage**:
```tsx
import ErrorBoundary from '@/components/ErrorBoundary';

<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

**Error Recovery Options**:
- Try Again (up to 3 attempts)
- Reload Page
- Go to Homepage
- Contact Support

### LazyImage Component (`src/components/LazyImage.tsx`)

**Purpose**: Performance-optimized image loading with intersection observer.

**Features**:
- Lazy loading with intersection observer
- Placeholder and fallback images
- Priority loading for above-the-fold images
- Responsive image support

**Usage**:
```tsx
import LazyImage from '@/components/LazyImage';

<LazyImage
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  className="w-full h-64 object-cover"
  priority={false} // true for above-the-fold images
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

**Props**:
- `src`: Image source URL
- `alt`: Alternative text (required)
- `className`: CSS classes
- `placeholder`: Base64 placeholder image
- `fallback`: Base64 fallback image
- `priority`: Skip lazy loading (boolean)
- `sizes`: Responsive image sizes
- `loading`: 'lazy' | 'eager'

## Utility Components

### API Service Layer (`src/lib/api.ts`)

**Purpose**: Centralized API communication with error handling and retry logic.

**Features**:
- HTTP client with timeout handling
- Retry logic with exponential backoff
- Error classification and handling
- Request/response interceptors
- Mock data for development

**Usage**:
```tsx
import { AppointmentService } from '@/lib/api';

// Book appointment
try {
  const result = await AppointmentService.bookAppointment(formData);
  console.log('Appointment booked:', result);
} catch (error) {
  if (error.code === 'DOCTOR_UNAVAILABLE') {
    // Handle specific error
  }
}
```

**Available Services**:
- `AppointmentService`: Booking and management
- `DoctorService`: Doctor information and availability
- `EmergencyService`: Emergency case registration
- `ContactService`: Contact form submission
- `ServiceService`: Hospital services
- `TestimonialService`: Patient testimonials

### Type Definitions (`src/types/index.ts`)

**Purpose**: Comprehensive TypeScript interfaces and Zod validation schemas.

**Key Interfaces**:
- `Patient`: Patient information structure
- `Doctor`: Doctor profile and availability
- `Appointment`: Appointment booking data
- `Service`: Hospital services
- `Testimonial`: Patient testimonials

**Validation Schemas**:
- `PatientSchema`: Patient data validation
- `AppointmentFormSchema`: Appointment form validation
- `ContactFormSchema`: Contact form validation
- `EmergencyFormSchema`: Emergency form validation

## Accessibility Guidelines

### WCAG 2.1 AA Compliance

**Color Contrast**:
- Normal text: 4.5:1 minimum ratio
- Large text: 3:1 minimum ratio
- Interactive elements: 3:1 minimum ratio

**Keyboard Navigation**:
- All interactive elements accessible via keyboard
- Visible focus indicators
- Logical tab order
- Escape key functionality for modals

**Screen Reader Support**:
- Semantic HTML structure
- ARIA labels and descriptions
- Live regions for dynamic content
- Alt text for all images

**Mobile Accessibility**:
- Minimum 44px touch targets
- High contrast mode support
- Text scaling support
- Voice control compatibility

### Implementation Checklist

- [ ] All images have descriptive alt text
- [ ] Form fields have labels and error messages
- [ ] Interactive elements have focus states
- [ ] Color is not the only means of conveying information
- [ ] Content is readable at 200% zoom
- [ ] Keyboard navigation works throughout
- [ ] Screen reader testing completed

## Performance Best Practices

### Image Optimization

**Lazy Loading**:
```tsx
// Use LazyImage component for below-the-fold images
<LazyImage src="/image.jpg" alt="Description" />

// Use priority for above-the-fold images
<LazyImage src="/hero.jpg" alt="Hero image" priority={true} />
```

**Image Formats**:
- Use WebP with JPEG fallback
- Provide multiple sizes for responsive images
- Compress images before deployment
- Use appropriate image dimensions

### Code Splitting

**Route-based Splitting**:
```tsx
// Pages are automatically lazy-loaded
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
```

**Component Splitting**:
```tsx
// Large components should be split
const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

### Bundle Optimization

**Tree Shaking**:
- Use ES6 imports/exports
- Avoid importing entire libraries
- Use specific component imports

**Caching Strategy**:
- Static assets cached for 1 year
- API responses cached for 5 minutes
- Service worker for offline functionality

## Testing Guidelines

### Unit Testing

**Component Testing**:
```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('should render appointment form', () => {
  render(<EnhancedAppointmentBooking />);
  expect(screen.getByRole('button', { name: /book appointment/i })).toBeInTheDocument();
});
```

**Form Validation Testing**:
```tsx
test('should validate email format', async () => {
  const user = userEvent.setup();
  render(<EnhancedAppointmentBooking />);
  
  await user.type(screen.getByLabelText(/email/i), 'invalid-email');
  expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
});
```

### Integration Testing

**API Integration**:
```tsx
test('should handle appointment booking', async () => {
  const mockResponse = { appointment: { id: '123' } };
  AppointmentService.bookAppointment.mockResolvedValue(mockResponse);
  
  // Test complete booking flow
});
```

### Accessibility Testing

**Automated Testing**:
```tsx
import { axe, toHaveNoViolations } from 'jest-axe';

test('should not have accessibility violations', async () => {
  const { container } = render(<EnhancedAppointmentBooking />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

**Manual Testing**:
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Test keyboard-only navigation
- Test with high contrast mode
- Test with zoom up to 200%

### Performance Testing

**Lighthouse CI**:
```bash
npm run test:lighthouse
```

**Bundle Analysis**:
```bash
npm run analyze
```

**Core Web Vitals**:
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

## Troubleshooting

### Common Issues

**Form Validation Errors**:
- Check Zod schema configuration
- Verify field names match schema
- Ensure proper error message mapping

**Accessibility Violations**:
- Use axe DevTools for automated testing
- Check ARIA label completeness
- Verify keyboard navigation flow

**Performance Issues**:
- Analyze bundle size with webpack-bundle-analyzer
- Check image optimization
- Review lazy loading implementation

**Mobile Issues**:
- Test on actual devices
- Check touch target sizes (44px minimum)
- Verify viewport configuration

### Debug Tools

**Development Tools**:
- React DevTools for component debugging
- Axe DevTools for accessibility testing
- Lighthouse for performance auditing
- Network tab for API debugging

**Production Monitoring**:
- Error tracking (Sentry integration ready)
- Performance monitoring
- User analytics
- Uptime monitoring

## Contributing

### Code Standards

**TypeScript**:
- Strict mode enabled
- No `any` types allowed
- Proper interface definitions
- JSDoc comments for public APIs

**React**:
- Functional components with hooks
- Proper dependency arrays
- Error boundaries for error handling
- Accessibility-first approach

**Styling**:
- Tailwind CSS utility classes
- Consistent spacing and colors
- Mobile-first responsive design
- Dark mode support

### Pull Request Checklist

- [ ] All tests pass
- [ ] Accessibility tests pass
- [ ] Performance tests pass
- [ ] Code is properly documented
- [ ] No console errors
- [ ] Mobile testing completed
- [ ] Cross-browser testing completed

### Review Process

1. **Automated Checks**: Tests, linting, type checking
2. **Accessibility Review**: axe-core validation
3. **Performance Review**: Lighthouse audit
4. **Code Review**: Manual review by team members
5. **QA Testing**: Manual testing on multiple devices

## Support

For questions or issues:
- Create an issue in the repository
- Contact the development team
- Check the troubleshooting section
- Review existing documentation

---

*Last updated: [Current Date]*
*Version: 1.0.0*
