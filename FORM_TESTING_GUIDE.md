# Callback Form Testing Guide

## 🧪 Manual Testing Checklist

### Visual Inspection

#### **Security Banner**
- [ ] Lock icon (🔒) is visible
- [ ] Text reads "Your information is HIPAA-protected and secure"
- [ ] Banner has emerald/green background
- [ ] Displays correctly in both light and dark mode

#### **Form Header**
- [ ] Title: "Request Your Free Medical Consultation"
- [ ] Subtitle: "Expert doctors will contact you within 24 hours"
- [ ] Text is centered and legible

---

### Field Testing

#### **1. Full Name Field**

**Valid Input Tests:**
- [ ] Enter "John Doe" → Green checkmark appears on blur
- [ ] Enter "A B" (2 chars) → Accepts and shows checkmark
- [ ] Enter 100 character name → Accepts without error

**Invalid Input Tests:**
- [ ] Enter "A" (1 char) → Shows error: "Please enter your full name (at least 2 characters)"
- [ ] Enter 101+ characters → Shows error: "Name is too long"
- [ ] Leave blank and blur → Shows validation error

**Accessibility:**
- [ ] Label has visible asterisk (*)
- [ ] Field is keyboard accessible (Tab navigation)
- [ ] Focus shows blue border highlight
- [ ] Error message is announced to screen readers

---

#### **2. Phone Number Field**

**Valid Input Tests:**
- [ ] Enter "9876543210" → Green checkmark appears
- [ ] Enter "8123456789" → Accepts (starts with 8)
- [ ] Enter "7999888777" → Accepts (starts with 7)
- [ ] Enter "6555444333" → Accepts (starts with 6)
- [ ] Enter "+919876543210" → Accepts with country code
- [ ] Enter "919876543210" → Accepts with 91 prefix

**Invalid Input Tests:**
- [ ] Enter "1234567890" → Error: starts with invalid digit
- [ ] Enter "5987654321" → Error: starts with 5 (invalid)
- [ ] Enter "987654321" → Error: only 9 digits
- [ ] Enter "98765432109" → Error: 11 digits
- [ ] Enter "abcd123456" → Error: contains letters

**Accessibility:**
- [ ] Input type is "tel" (triggers number keyboard on mobile)
- [ ] Placeholder shows example: "9876543210"
- [ ] Field is keyboard accessible
- [ ] Focus shows blue border highlight

---

#### **3. Preferred Service Field**

**Functionality:**
- [ ] Dropdown opens on click
- [ ] Shows all service options:
  - General Consultation
  - Cardiology
  - Orthopedics
  - Internal Medicine
  - Emergency Care
  - Pediatrics
  - Women's Health
  - Other
- [ ] Selected value displays correctly
- [ ] Field is marked as "(Optional)"
- [ ] No validation errors if left empty

**Accessibility:**
- [ ] Keyboard accessible (Space/Enter to open)
- [ ] Arrow keys navigate options
- [ ] Escape closes dropdown
- [ ] Focus states visible

---

### Trust Indicators

**Below Service Field:**
- [ ] Shows three checkmarks with text:
  - ✓ Free consultation
  - ✓ No spam calls
  - ✓ Private & confidential
- [ ] Checkmarks are green/emerald color
- [ ] Text is readable and aligned

---

### Submit Button

#### **Default State:**
- [ ] Text: "Request My Free Consultation"
- [ ] Background: Emerald green (#059669)
- [ ] Full width
- [ ] Height: 48px (touch-friendly)
- [ ] Hover: Darker green (#047857)

#### **Loading State:**
- [ ] Click submit → Button becomes disabled
- [ ] Shows spinner icon (animated)
- [ ] Text changes to "Sending request..."
- [ ] Cannot click again during loading

#### **Accessibility:**
- [ ] Keyboard accessible (Enter/Space)
- [ ] Focus ring visible (emerald)
- [ ] Disabled state communicated to screen readers

---

### Form Validation Flow

#### **Real-Time Validation (On Blur):**
1. **Name Field:**
   - [ ] Type "John", blur → Checkmark appears
   - [ ] Type "A", blur → Error appears
   - [ ] Fix to "Adam", blur → Error clears, checkmark appears

2. **Phone Field:**
   - [ ] Type "1234567890", blur → Error appears
   - [ ] Fix to "9876543210", blur → Error clears, checkmark appears

3. **Visual Feedback:**
   - [ ] Valid fields show green checkmark on right
   - [ ] Invalid fields show red error message below
   - [ ] Error messages include warning icon (⚠)
   - [ ] Checkmarks only appear after blur validation

---

### Form Submission

#### **With Valid Data:**
1. Fill all required fields correctly
2. Click "Request My Free Consultation"
3. **Expected:**
   - [ ] Button shows loading state
   - [ ] After 1.5s, success page appears
   - [ ] Shows large checkmark icon
   - [ ] Title: "Thank You!"
   - [ ] Message: "We'll contact you within 24 hours"
   - [ ] HIPAA message displayed

#### **With Invalid Data:**
1. Leave name blank
2. Enter invalid phone
3. Click submit
4. **Expected:**
   - [ ] Form does NOT submit
   - [ ] Error messages appear for invalid fields
   - [ ] Focus moves to first error field
   - [ ] No success page shown

---

### Accessibility Testing

#### **Keyboard Navigation:**
- [ ] Tab moves through: Name → Phone → Service → Submit
- [ ] Shift+Tab moves backward
- [ ] Enter/Space activates buttons and dropdowns
- [ ] Escape closes dropdown

#### **Screen Reader Testing:**
Use NVDA, JAWS, or VoiceOver:
- [ ] Form announces as "form"
- [ ] Labels are announced for each field
- [ ] Required fields announce "required"
- [ ] Error messages are announced when they appear
- [ ] Checkmarks announce "Valid"
- [ ] Loading state announces

#### **Focus Indicators:**
- [ ] All interactive elements have visible focus ring
- [ ] Focus ring is blue (high contrast)
- [ ] Ring has 2px offset for clarity
- [ ] Never hidden or removed

#### **Color Contrast:**
Test with contrast checker:
- [ ] Error text (red) meets 4.5:1 ratio
- [ ] Labels meet 4.5:1 ratio
- [ ] Placeholder text meets 3:1 ratio
- [ ] Success indicators meet 3:1 ratio

---

### Mobile Testing

#### **Touch Targets:**
- [ ] All inputs are at least 48px tall
- [ ] Submit button is at least 48px tall
- [ ] Dropdown trigger is at least 48px tall
- [ ] Adequate spacing between fields (24px)

#### **Mobile Behavior:**
- [ ] Phone field triggers numeric keyboard
- [ ] No zoom on focus (16px base font)
- [ ] Form scrolls smoothly
- [ ] Dropdown works on touch devices
- [ ] Validation works on mobile

#### **Responsive Layout:**
- [ ] Form adapts to small screens
- [ ] Padding adjusts (6 on mobile, 8 on desktop)
- [ ] Title size responsive (2xl → 3xl)
- [ ] Trust indicators stack properly

---

### Cross-Browser Testing

Test in:
- [ ] **Chrome:** All features work
- [ ] **Firefox:** All features work
- [ ] **Safari:** All features work
- [ ] **Edge:** All features work
- [ ] **Mobile Safari:** All features work
- [ ] **Mobile Chrome:** All features work

---

### Dark Mode Testing

- [ ] Security banner shows emerald-950 background
- [ ] Text remains readable
- [ ] Checkmarks visible in dark mode
- [ ] Error messages readable (red-400)
- [ ] Focus states visible
- [ ] Form card has proper contrast

---

## 🔍 Automated Testing Commands

### Lint Check
```bash
npx eslint src/components/CallbackForm.tsx
```
**Expected:** No errors

### Build Check
```bash
npm run build
```
**Expected:** Successful build

### Type Check
```bash
npx tsc --noEmit
```
**Expected:** No type errors

---

## 📊 Performance Testing

### Load Time
- [ ] Form renders within 500ms
- [ ] No layout shift during load
- [ ] Images lazy-load properly

### Interaction Performance
- [ ] Blur validation responds < 100ms
- [ ] Submit button responds immediately
- [ ] Dropdown opens < 50ms
- [ ] No lag on input typing

---

## ✅ WCAG 2.1 AA Compliance Checklist

### Level A (Must Pass)
- [ ] 1.1.1 Non-text Content (alt text)
- [ ] 1.3.1 Info and Relationships (proper labels)
- [ ] 2.1.1 Keyboard (all functionality)
- [ ] 2.4.1 Bypass Blocks
- [ ] 3.3.1 Error Identification
- [ ] 3.3.2 Labels or Instructions
- [ ] 4.1.2 Name, Role, Value

### Level AA (Must Pass)
- [ ] 1.4.3 Contrast (Minimum) - 4.5:1
- [ ] 2.4.6 Headings and Labels
- [ ] 2.4.7 Focus Visible
- [ ] 2.5.5 Target Size - 48px minimum
- [ ] 3.3.3 Error Suggestion
- [ ] 3.3.4 Error Prevention

---

## 🐛 Known Issues / Edge Cases

### Edge Cases to Test:
1. **Very Long Names:**
   - [ ] 99 character name → Should accept
   - [ ] 100 character name → Should accept
   - [ ] 101 character name → Should reject

2. **Phone Number Variations:**
   - [ ] Space in number: "98765 43210" → Should validate
   - [ ] Dash in number: "9876-543210" → Should validate
   - [ ] Brackets: "(987) 654-3210" → May fail (expected)

3. **Form State:**
   - [ ] Fill form, refresh page → Form clears (expected)
   - [ ] Submit, go back → Shows blank form (expected)

4. **Network Errors:**
   - [ ] Simulate slow network → Loading state persists
   - [ ] Simulate failure → Error handling works

---

## 📝 Test Scenarios

### Scenario 1: Happy Path
1. Open page
2. Enter "Rajesh Kumar" in name
3. Enter "9876543210" in phone
4. Select "Cardiology" service
5. Click submit
6. **Result:** Success page shows

### Scenario 2: Validation Errors
1. Enter "A" in name
2. Enter "1234567890" in phone
3. Click submit
4. **Result:** Both errors show, form doesn't submit

### Scenario 3: Fix Errors
1. Start with invalid data
2. See error messages
3. Correct the errors
4. See checkmarks appear
5. Submit successfully
6. **Result:** Smooth UX, clear feedback

### Scenario 4: Keyboard Only
1. Tab to name field
2. Type name, tab out (blur)
3. Tab to phone, enter number, tab out
4. Tab to service, space to open, arrow to select
5. Tab to submit, enter to submit
6. **Result:** All interactions work

### Scenario 5: Screen Reader
1. Navigate with screen reader
2. Hear all labels announced
3. Hear errors when they appear
4. Hear success message
5. **Result:** Complete experience accessible

---

## 📋 Pre-Deployment Checklist

- [ ] All tests pass
- [ ] No console errors
- [ ] No console warnings (except known)
- [ ] Build succeeds
- [ ] Lighthouse score > 90 (Accessibility)
- [ ] WCAG AA compliance verified
- [ ] Mobile tested on real devices
- [ ] Cross-browser tested
- [ ] Dark mode tested
- [ ] Performance acceptable

---

## 🚀 Go-Live Verification

After deployment:
1. [ ] Form loads correctly on production
2. [ ] Validation works as expected
3. [ ] Submission succeeds (test with real data)
4. [ ] Success message displays
5. [ ] Analytics tracking fires (if configured)
6. [ ] Mobile version works
7. [ ] No 404s or errors in console

---

**Testing Status:** ⏳ Pending Manual Verification
**Last Updated:** October 7, 2025
**Tested By:** _____________
**Date:** _____________
