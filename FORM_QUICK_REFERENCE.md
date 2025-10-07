# Callback Form - Quick Reference

## 📁 File Location
`/workspace/src/components/CallbackForm.tsx`

## 🎯 Key Features

### Form Fields (3 Total)
1. **Full Name** - Required, 2-100 chars
2. **Phone Number** - Required, Indian format (6-9 start, 10 digits)
3. **Preferred Service** - Optional dropdown

### Validation Rules
```typescript
fullName: z.string()
  .min(2, "Please enter your full name (at least 2 characters)")
  .max(100, "Name is too long")

phone: z.string()
  .regex(/^(\+91[-\s]?)?[0]?(91)?[6-9]\d{9}$/, 
    "Please enter a valid 10-digit Indian mobile number starting with 6-9")

service: z.string().optional()
```

## 🔧 Common Modifications

### Change Phone Regex
```typescript
// Location: Line 12
const indianPhoneRegex = /^(\+91[-\s]?)?[0]?(91)?[6-9]\d{9}$/;

// For US format:
const usPhoneRegex = /^(\+1)?[-.\s]?(\d{3})[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
```

### Add New Field
```typescript
// 1. Update schema (Line 14)
const formSchema = z.object({
  fullName: z.string().min(2).max(100),
  phone: z.string().regex(indianPhoneRegex),
  service: z.string().optional(),
  newField: z.string().min(1, "Field is required"), // ADD THIS
});

// 2. Add to form JSX (after Line 192)
<div className="relative">
  <Label htmlFor="newField" className="text-base font-medium text-foreground mb-2 block">
    New Field <span className="text-destructive" aria-label="required">*</span>
  </Label>
  <div className="relative">
    <Input
      id="newField"
      type="text"
      placeholder="Enter value"
      className="h-12 text-base pr-12 focus-visible:ring-blue-500"
      aria-required="true"
      aria-invalid={!!errors.newField}
      aria-describedby={errors.newField ? "newField-error" : "newField-desc"}
      {...register("newField", {
        onBlur: () => handleFieldBlur("newField")
      })}
    />
    {validFields.newField && !errors.newField && (
      <Check className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-600" />
    )}
  </div>
  <span id="newField-desc" className="sr-only">Description for screen readers</span>
  {errors.newField && (
    <p id="newField-error" className="text-sm text-red-600 mt-2 flex items-start gap-1" role="alert">
      <span aria-hidden="true">⚠</span>
      <span>{errors.newField.message}</span>
    </p>
  )}
</div>
```

### Change Submit Button Text
```typescript
// Line 225
"Request My Free Consultation" // Change this

// Line 222 (Loading state)
"Sending request..." // Change this
```

### Modify Success Message
```typescript
// Lines 58-70
if (isSubmitted) {
  return (
    <div className="bg-card rounded-lg p-8 shadow-lg border border-border animate-fade-in">
      <div className="text-center">
        <CheckCircle2 className="h-16 w-16 text-secondary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Custom Success Title Here
        </h3>
        <p className="text-muted-foreground mb-4">
          Custom success message
        </p>
        {/* ... */}
      </div>
    </div>
  );
}
```

### Update Service Options
```typescript
// Lines 180-189
<SelectContent>
  <SelectItem value="general">General Consultation</SelectItem>
  <SelectItem value="cardiology">Cardiology</SelectItem>
  {/* Add/remove options here */}
  <SelectItem value="new-service">New Service Name</SelectItem>
</SelectContent>
```

### Change Validation Timing
```typescript
// Line 35 - Change validation mode
useForm<FormData>({
  resolver: zodResolver(formSchema),
  mode: "onBlur",     // Options: onChange, onBlur, onSubmit, onTouched, all
});
```

## 🎨 Styling Customization

### Colors
```typescript
// Security banner (Line 76)
bg-emerald-50 dark:bg-emerald-950/20
border-emerald-200 dark:border-emerald-800

// Submit button (Line 216)
bg-emerald-600 hover:bg-emerald-700

// Success checkmarks (Line 114, 148, 198)
text-emerald-600 dark:text-emerald-400

// Error messages (Line 121, 155)
text-red-600 dark:text-red-400

// Focus states (Line 104, 138, 175)
focus-visible:ring-blue-500 focus-visible:border-blue-500
```

### Sizes
```typescript
// Input height (Lines 104, 138, 175, 216)
h-12  // 48px - Change to h-10 (40px) or h-14 (56px)

// Font sizes
text-base  // 16px
text-sm    // 14px
text-2xl   // 24px (title)
```

### Spacing
```typescript
// Form spacing (Line 93)
space-y-6  // 24px between fields

// Container padding (Line 74)
p-6 md:p-8  // 24px mobile, 32px desktop

// Field label margin (Lines 96, 130, 164)
mb-2  // 8px
```

## 🔌 API Integration

### Current Implementation (Mock)
```typescript
// Lines 45-56
const onSubmit = async (data: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // MOCK
  console.log("Form submitted:", data);
  setIsSubmitted(true);
  toast({
    title: "Request Received!",
    description: "We'll contact you within 24 hours.",
  });
};
```

### Real API Integration
```typescript
const onSubmit = async (data: FormData) => {
  try {
    const response = await fetch('/api/callback-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Submission failed');
    }

    const result = await response.json();
    setIsSubmitted(true);
    
    toast({
      title: "Request Received!",
      description: "We'll contact you within 24 hours.",
    });
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to submit. Please try again.",
      variant: "destructive",
    });
  }
};
```

## 📱 Accessibility Quick Checks

### Required Attributes
- `aria-required="true"` on required fields
- `aria-invalid={!!errors.fieldName}` for error states
- `aria-describedby` linking errors to inputs
- `aria-label` on icons and decorative elements
- `role="alert"` on error messages

### Focus Management
```typescript
// Ensure all inputs have visible focus
focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
```

### Screen Reader Text
```typescript
<span className="sr-only">Hidden text for screen readers</span>
```

## 🐛 Troubleshooting

### Validation Not Triggering
**Check:**
1. `mode: "onBlur"` is set in useForm config
2. `onBlur` handler is passed to register
3. `trigger` function is being called

### Checkmarks Not Appearing
**Check:**
1. `validFields` state is updating
2. Error is not present: `!errors.fieldName`
3. Field has been validated: `validFields.fieldName`

### Form Not Submitting
**Check:**
1. All required fields are filled
2. Validation passes for all fields
3. No console errors
4. `isSubmitting` state is working

### Phone Validation Failing
**Check:**
1. Regex pattern is correct (no escape errors)
2. Input type is `"tel"`
3. Test with these valid formats:
   - `9876543210`
   - `+919876543210`
   - `919876543210`

## 📊 Dependencies

```json
{
  "react-hook-form": "^7.61.1",
  "@hookform/resolvers": "^3.10.0",
  "zod": "^3.25.76",
  "lucide-react": "^0.462.0"
}
```

## 🔄 State Management

```typescript
const [isSubmitted, setIsSubmitted] = useState(false);
const [validFields, setValidFields] = useState<Record<string, boolean>>({});

const {
  register,       // Register input fields
  handleSubmit,   // Form submit handler
  formState: { errors, isSubmitting }, // Form state
  setValue,       // Programmatically set values
  trigger,        // Trigger validation
  watch,          // Watch field values
} = useForm<FormData>({ ... });
```

## 🎯 Key Metrics to Track

When integrated with analytics:

```typescript
// Add to onSubmit
const onSubmit = async (data: FormData) => {
  // Track form start
  analytics.track('Form Started', { formName: 'callback' });
  
  try {
    // ... submission logic
    
    // Track success
    analytics.track('Form Submitted', {
      formName: 'callback',
      service: data.service || 'none',
    });
  } catch (error) {
    // Track errors
    analytics.track('Form Error', {
      formName: 'callback',
      error: error.message,
    });
  }
};
```

## 📝 Quick Commands

```bash
# Lint the form
npx eslint src/components/CallbackForm.tsx

# Type check
npx tsc --noEmit

# Build
npm run build

# Dev server
npm run dev

# Preview build
npm run preview
```

## 🔗 Related Files

- **Component:** `/src/components/CallbackForm.tsx`
- **Used In:** `/src/components/Hero.tsx`
- **UI Components:** `/src/components/ui/`
- **Toast Hook:** `/src/hooks/use-toast.ts`

## 💡 Tips

1. **Always test on blur validation** after changes
2. **Maintain 48px minimum touch targets** for mobile
3. **Keep error messages specific and helpful**
4. **Preserve ARIA attributes** for accessibility
5. **Test with screen readers** after modifications
6. **Use emerald color scheme** for consistency (#059669)
7. **Keep form simple** - avoid adding unnecessary fields

## 🚨 Don't Break These

- Indian phone regex pattern
- WCAG 2.1 AA compliance
- 48px touch target sizes
- ARIA attributes and roles
- Real-time validation on blur
- Success indicator checkmarks
- Loading state on submit
- Emergency notice at bottom

---

**Last Updated:** October 7, 2025
**Version:** 2.0 (Optimized)
