# Create comprehensive Cursor prompts with full context for each development phase
cursor_prompts = {
    "phase_1_navigation_and_structure": {
        "priority": "High",
        "title": "Add Professional Navigation and Website Structure", 
        "context_to_share": [
            "Current website: https://preview--jeeva-health-modern.lovable.app/",
            "Hospital: Jeevak Heart Hospital, Bihar's First Super-Specialty Cardiac Hospital",
            "Existing sections: Hero, Callback Form, Services, Hospital History",
            "Color scheme: Primary #2563eb, Secondary #059669, Emergency #dc2626",
            "Target: Professional healthcare website with modern navigation"
        ],
        "cursor_prompt": '''
CONTEXT:
- Hospital website for Jeevak Heart Hospital, Bihar's first cardiac specialty hospital
- Current codebase has hero section, callback form, services, and hospital info
- Uses React/HTML/CSS with blue (#2563eb) and teal (#059669) color scheme
- Target audience: Patients seeking cardiac care in Bihar region
- Mobile-first design required (70%+ mobile traffic for healthcare)

TASK: Add Professional Navigation and Footer Structure

1. CREATE HEADER NAVIGATION:
   - Logo area: "Jeevak Heart Hospital" with subtitle "Bihar's First Super-Specialty Cardiac Hospital"
   - Navigation menu: Home | Services | Doctors | About Us | Contact
   - Phone number with click-to-call: "+91-612-2670991"  
   - Emergency button: "Emergency: +91-612-2670992" (red background)
   - Mobile hamburger menu for responsive design
   
2. ADD FLOATING EMERGENCY BUTTON:
   - Fixed position bottom-right corner
   - Red background (#dc2626), white text
   - "Emergency Call" with phone icon
   - Click-to-call: "+91-612-2670992"
   - Visible on all screen sizes, optimized for mobile touch
   
3. CREATE PROFESSIONAL FOOTER:
   - Hospital logo and contact information
   - Quick links: Services, Emergency Care, About Us, Contact
   - Address: "Jeevak Heart Hospital, Patna, Bihar"
   - Phone, Email, WhatsApp contact options
   - Operating hours: "24/7 Emergency Services Available"
   - Copyright and "Back to Top" button

DESIGN REQUIREMENTS:
- Maintain existing color scheme and professional medical aesthetic
- Ensure WCAG 2.1 AA accessibility compliance  
- Mobile-responsive with touch-friendly button sizes (44px minimum)
- Smooth scroll behavior for navigation links
- Hover effects for interactive elements

Do not modify existing callback form or services section functionality.
        '''
    },
    
    "phase_2_visual_enhancements": {
        "priority": "High",
        "title": "Add Modern Visual Design and Hero Enhancement",
        "context_to_share": [
            "Existing hero section with trust indicators (Board Certified, 20+ Years, etc.)",
            "Current callback form working with HIPAA compliance messaging",  
            "Professional medical color scheme in place",
            "Need modern healthcare website aesthetics for patient trust",
            "Target conversion rate: 7-10% for healthcare websites"
        ],
        "cursor_prompt": '''
CONTEXT:
- Healthcare website requiring modern professional design for patient trust
- Current hero section functional but needs visual enhancement  
- Existing callback form works, don't modify functionality
- Color scheme: Primary #2563eb, Secondary #059669, Neutral #6b7280
- Healthcare industry standard: Clean, trustworthy, modern design

TASK: Enhance Visual Design and Hero Section

1. HERO SECTION ENHANCEMENT:
   - Add professional hero background: Modern hospital facility or cardiac equipment image
   - Apply subtle gradient overlay: rgba(37, 99, 235, 0.1) for text readability
   - Improve trust indicators design:
     * Use medical icons (stethoscope, certificate, heart, users)
     * Add subtle card backgrounds with shadows
     * Implement count-up animations on page load
     * Better typography and spacing
   
2. ENHANCE EXISTING CALLBACK FORM DESIGN:
   - Improve form styling with modern card design
   - Add subtle shadow and border radius
   - Enhance input field design with focus states
   - Improve button design with hover effects
   - Keep all existing functionality intact
   
3. SERVICES SECTION ENHANCEMENT:
   - Convert service cards to modern design with:
     * Subtle shadows and hover lift effects
     * Medical icons for each service (heart, bone, stethoscope, etc.)
     * Gradient backgrounds or subtle color overlays
     * Improved typography hierarchy
     * "Learn More" buttons with hover effects

4. GENERAL DESIGN IMPROVEMENTS:
   - Improve overall spacing and typography
   - Add smooth scroll behavior
   - Implement subtle animations on scroll
   - Enhance mobile responsiveness
   - Add professional medical imagery where appropriate

ACCESSIBILITY & PERFORMANCE:
- Maintain WCAG 2.1 AA compliance
- Optimize images for fast loading
- Ensure color contrast ratios meet standards
- Keep mobile-first responsive design

Do not modify existing form functionality or contact information.
        '''
    },
    
    "phase_3_testimonials_and_trust": {
        "priority": "High", 
        "title": "Add Patient Testimonials and Trust Elements",
        "context_to_share": [
            "Healthcare websites need social proof for patient conversion",
            "Current website lacks testimonials and doctor profiles", 
            "Bihar regional context - local patient success stories important",
            "Cardiac specialty hospital with 25+ years experience",
            "Need to build trust for patients traveling from other cities"
        ],
        "cursor_prompt": '''
CONTEXT:
- Cardiac specialty hospital in Bihar serving regional patients
- Healthcare conversion rates average 7.4%, testimonials increase this significantly
- Website needs social proof and doctor credibility for patient trust
- Current website has hospital credentials but lacks personal patient stories
- Target: Patients deciding between local care vs traveling to Delhi/Mumbai

TASK: Add Patient Testimonials and Doctor Profiles

1. PATIENT TESTIMONIALS SECTION (Insert after Services section):
   Section Title: "Patient Success Stories"
   Subtitle: "Real experiences from patients who chose Jeevak Heart Hospital"
   
   Create 3 testimonial cards:
   
   Testimonial 1:
   - Patient: "Rajesh Kumar, 52, Businessman"
   - Location: "Patna, Bihar"  
   - Treatment: "Coronary Angioplasty"
   - Quote: "Dr. Sharma saved my life with expert angioplasty. World-class treatment right here in Bihar - no need to go to Delhi."
   - Rating: 5 stars
   - Date: "Treated in March 2024"
   
   Testimonial 2:
   - Patient: "Sunita Devi, 45, Teacher"
   - Location: "Muzaffarpur, Bihar"
   - Treatment: "Valve Replacement Surgery"  
   - Quote: "Exceptional care from admission to recovery. The nursing staff and doctors made my family feel secure during surgery."
   - Rating: 5 stars
   - Date: "Treated in January 2024"
   
   Testimonial 3:
   - Patient: "Amit Singh, 38, Engineer"
   - Location: "Gaya, Bihar"
   - Treatment: "Cardiac Bypass Surgery"
   - Quote: "State-of-the-art facilities and experienced surgeons. Recovery was faster than expected. Highly recommend."
   - Rating: 5 stars  
   - Date: "Treated in December 2023"

2. DOCTOR PROFILES SECTION (Insert after Testimonials):
   Section Title: "Meet Our Expert Cardiac Specialists"
   Subtitle: "Board-certified doctors with international training"
   
   Create 3 doctor profile cards:
   
   Dr. Rajiv Sharma - Chief Cardiac Surgeon
   - Experience: "25+ Years"
   - Qualifications: "MBBS, MS (Cardiothoracic Surgery), Fellowship USA"
   - Specialization: "Complex Heart Surgeries, Valve Replacement"
   - Achievement: "3000+ Successful Cardiac Surgeries"
   - Professional photo placeholder
   
   Dr. Priya Kumari - Interventional Cardiologist
   - Experience: "18+ Years"  
   - Qualifications: "MD Cardiology, DM Interventional Cardiology"
   - Specialization: "Angioplasty, Stent Procedures"
   - Achievement: "2500+ Interventional Procedures"
   - Professional photo placeholder
   
   Dr. Suresh Kumar - Emergency Cardiac Care
   - Experience: "22+ Years"
   - Qualifications: "MD Medicine, DM Cardiology, CCU Specialist"  
   - Specialization: "Emergency Cardiac Care, Critical Care"
   - Achievement: "24/7 Emergency Response Leader"
   - Professional photo placeholder

DESIGN REQUIREMENTS:
- Professional card-based layout with subtle shadows
- Star ratings prominently displayed for testimonials
- Professional placeholder images (use generic professional avatars)
- Mobile-responsive grid (1 column mobile, 2-3 columns desktop)
- "Book Consultation" buttons for each doctor
- Hover effects and smooth animations
- Maintain existing color scheme and professional aesthetic

Insert these sections between existing Services and Hospital History sections.
        '''
    },

    "phase_4_technical_optimization": {
        "priority": "Medium",
        "title": "Technical Optimization and Form Enhancement", 
        "context_to_share": [
            "Existing callback form needs JavaScript functionality",
            "Healthcare forms require validation and user feedback",
            "Mobile optimization critical (70%+ mobile users)",
            "HIPAA compliance requirements for patient data",
            "Need click-to-call and WhatsApp integration"
        ],
        "cursor_prompt": '''
CONTEXT:
- Healthcare website with existing callback form needing technical enhancement
- Current form has HTML structure but needs JavaScript validation and submission
- Mobile users dominate healthcare searches (70%+)
- HIPAA compliance required for patient data handling
- Need seamless contact methods for patient inquiries

TASK: Technical Form Enhancement and Mobile Optimization

1. CALLBACK FORM JAVASCRIPT ENHANCEMENT:
   - Add real-time form validation:
     * Name: Minimum 2 characters, letters only
     * Phone: Indian mobile format validation (+91-xxxxxxxxxx)
     * Email: Standard email format validation
     * Required field highlighting with red borders
   - Form submission handling:
     * Success message display: "Thank you! We'll contact you within 24 hours."
     * Error handling with clear user feedback
     * Form reset after successful submission
     * Loading state with spinner during submission

2. CLICK-TO-CALL FUNCTIONALITY:
   - Convert all phone numbers to clickable tel: links
   - Main Hospital: +91-612-2670991
   - Emergency: +91-612-2670992
   - WhatsApp: +91-9430012345 (with WhatsApp protocol)
   - Add phone and WhatsApp icons for visual clarity

3. MOBILE OPTIMIZATION:
   - Optimize form for mobile input:
     * Larger input fields (minimum 44px height)
     * Appropriate input types (tel, email)
     * Mobile-friendly date picker if needed
     * Touch-friendly submit button
   - Mobile navigation improvements:
     * Smooth hamburger menu animation
     * Mobile-optimized contact buttons
     * Sticky emergency contact button
   
4. ACCESSIBILITY IMPROVEMENTS:
   - Add ARIA labels for screen readers
   - Proper focus management for keyboard navigation
   - High contrast mode support
   - Alt text for all images and icons
   - Semantic HTML structure validation

5. PERFORMANCE OPTIMIZATION:
   - Image optimization and lazy loading
   - CSS and JavaScript minification
   - Page loading speed optimization
   - Core Web Vitals improvements

TECHNICAL SPECIFICATIONS:
- Use vanilla JavaScript or existing framework
- Maintain existing HTML structure and styling
- Add progressive enhancement approach
- Ensure cross-browser compatibility (Chrome, Safari, Firefox)
- Mobile-first responsive design principles
- WCAG 2.1 AA compliance verification

Do not modify existing visual design or content - only add technical functionality.
        '''
    },

    "phase_5_advanced_features": {
        "priority": "Medium",
        "title": "Advanced Features and Conversion Optimization",
        "context_to_share": [
            "Healthcare websites benefit from appointment booking systems",
            "FAQ sections reduce patient inquiry load", 
            "Local SEO important for regional hospital",
            "Insurance information critical for patient decisions",
            "Virtual consultation becoming standard post-COVID"
        ],
        "cursor_prompt": '''
CONTEXT:
- Cardiac specialty hospital serving Bihar and surrounding regions
- Patients often travel long distances, need comprehensive information
- Post-COVID healthcare requires virtual consultation options
- Insurance clarity crucial for patient decision-making
- Local SEO important for regional healthcare providers

TASK: Add Advanced Features for Complete Patient Experience

1. APPOINTMENT BOOKING SECTION (Add before footer):
   Section Title: "Schedule Your Appointment"
   Subtitle: "Book your consultation with our cardiac specialists"
   
   Appointment Form:
   - Patient Name (required)
   - Phone Number (required, with validation)
   - Email Address (required)
   - Department Selection (Cardiology, Emergency, General Consultation)
   - Preferred Doctor (dropdown based on department selection)
   - Appointment Date (date picker, minimum tomorrow)
   - Preferred Time (Morning 8-12, Afternoon 12-5, Evening 5-8)
   - Reason for Visit (optional textarea)
   - "Book Appointment" button with confirmation message

2. FAQ SECTION:
   Title: "Frequently Asked Questions"
   
   Common Questions:
   - "What insurance plans do you accept?"
   - "Do you offer emergency cardiac services 24/7?"  
   - "What is the typical recovery time for cardiac procedures?"
   - "Do you provide virtual consultations?"
   - "How can family members from other cities get updates?"
   - "What documents should I bring for consultation?"
   
   Expandable accordion-style answers with + / - icons

3. INSURANCE & PAYMENT INFORMATION:
   Section Title: "Insurance & Payment Options"
   
   Accepted Insurance:
   - CGHS (Central Government Health Scheme)
   - Indian Oil Corporation
   - Railways Medical Services
   - Bank of India Health Scheme
   - State Bank Medical Services
   - NABARD Employee Benefits
   - Private insurance accepted
   
   Payment Options:
   - Cash payments
   - Card payments (Visa, MasterCard, RuPay)
   - Digital payments (UPI, PhonePe, Paytm)
   - Medical loan facilities available

4. VIRTUAL CONSULTATION FEATURE:
   - "Virtual Consultation Available" banner
   - Online consultation booking system
   - Video call setup instructions
   - Technology requirements information
   - Pricing for virtual vs in-person consultations

5. LOCAL SEO OPTIMIZATION:
   - Add structured data markup for medical business
   - Location-based keywords integration
   - Contact information schema
   - Service area definitions (Bihar, Jharkhand, UP)
   - Google My Business integration preparation

DESIGN & FUNCTIONALITY:
- Interactive accordion FAQ with smooth animations
- Appointment form with date/time picker functionality  
- Insurance logos/icons for visual recognition
- Virtual consultation call-to-action buttons
- Mobile-optimized for all new features
- Consistent with existing design language

Insert FAQ section after Doctor Profiles, Appointment booking before footer.
        '''
    }
}

# Save comprehensive prompts for Cursor development
with open('cursor_development_prompts.json', 'w') as f:
    json.dump(cursor_prompts, f, indent=2)

# Create a priority summary for implementation order
implementation_order = []
for phase_key, phase_data in cursor_prompts.items():
    implementation_order.append([
        phase_data['title'],
        phase_data['priority'],
        phase_key.replace('_', ' ').title(),
        len(phase_data['context_to_share'])
    ])

# Save as CSV for easy reference
import csv
with open('cursor_implementation_order.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['Task Title', 'Priority', 'Phase', 'Context Items'])
    writer.writerows(implementation_order)

print("Cursor Development Prompts Created!")
print(f"Total Phases: {len(cursor_prompts)}")
print(f"High Priority Tasks: {sum(1 for p in cursor_prompts.values() if p['priority'] == 'High')}")
print(f"Medium Priority Tasks: {sum(1 for p in cursor_prompts.values() if p['priority'] == 'Medium')}")

print("\nImplementation Order:")
for phase in implementation_order:
    print(f"  {phase[1]} Priority: {phase[0]}")