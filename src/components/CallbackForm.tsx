import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, CheckCircle2, Shield, Check, Loader2, AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Indian phone number validation - accepts 10 digits starting with 6-9
const indianPhoneRegex = /^[6-9]\d{9}$/;

// Streamlined form schema with only essential fields
const formSchema = z.object({
  fullName: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name should only contain letters"),
  phone: z.string()
    .regex(indianPhoneRegex, "Enter 10-digit mobile number starting with 6-9")
    .transform(val => val.replace(/\D/g, '')), // Remove non-digits
  service: z.string().optional(), // Made optional as per requirements
});

type FormData = z.infer<typeof formSchema>;

const CallbackForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());
  const [validFields, setValidFields] = useState<Set<string>>(new Set());

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setValue,
    watch,
    trigger,
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur", // Validate on blur for better UX
    reValidateMode: "onChange", // Re-validate as user types after initial validation
  });

  // Watch all fields for real-time updates
  const watchedFields = watch();

  // Format phone number as user types (XXX XXX XXXX)
  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const limited = cleaned.slice(0, 10);
    
    if (limited.length <= 3) return limited;
    if (limited.length <= 6) return `${limited.slice(0, 3)} ${limited.slice(3)}`;
    return `${limited.slice(0, 3)} ${limited.slice(3, 6)} ${limited.slice(6, 10)}`;
  };

  // Handle phone number input with formatting
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    e.target.value = formatted;
    setValue("phone", formatted.replace(/\s/g, ''), { shouldValidate: touchedFields.has("phone") });
  };

  // Mark field as touched and validate
  const handleFieldBlur = async (fieldName: keyof FormData) => {
    setTouchedFields(prev => new Set([...prev, fieldName]));
    const isFieldValid = await trigger(fieldName);
    
    setValidFields(prev => {
      const newSet = new Set(prev);
      if (isFieldValid && getValues(fieldName)) {
        newSet.add(fieldName);
      } else {
        newSet.delete(fieldName);
      }
      return newSet;
    });
  };

  // Check field validity in real-time
  useEffect(() => {
    const checkFields = async () => {
      for (const field of touchedFields) {
        const isFieldValid = await trigger(field as keyof FormData);
        setValidFields(prev => {
          const newSet = new Set(prev);
          if (isFieldValid && getValues(field as keyof FormData)) {
            newSet.add(field);
          } else {
            newSet.delete(field);
          }
          return newSet;
        });
      }
    };
    
    if (touchedFields.size > 0) {
      checkFields();
    }
  }, [watchedFields, touchedFields, trigger, getValues]);

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Form submitted:", data);
      setIsSubmitted(true);
      
      toast({
        title: "✅ Request Received!",
        description: "Our medical experts will contact you within 24 hours.",
        className: "bg-green-50 border-green-200",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Success state after submission
  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl p-8 shadow-lg border border-green-200 dark:border-green-800 animate-fade-in">
        <div className="text-center">
          <CheckCircle2 className="h-20 w-20 text-green-600 dark:text-green-500 mx-auto mb-4 animate-bounce-slow" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Thank You for Your Request!
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Our medical experts will contact you within 24 hours
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mt-6 text-sm text-gray-600 dark:text-gray-400">
            <Shield className="h-4 w-4 inline mr-2 text-blue-600 dark:text-blue-400" />
            Your information is HIPAA-protected and will only be used for medical consultation purposes
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header with trust indicator */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 p-6 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Request Your Free Medical Consultation
        </h2>
        <p className="text-blue-100 text-lg">
          Expert doctors will contact you within 24 hours
        </p>
      </div>

      {/* Security message */}
      <div className="bg-blue-50 dark:bg-blue-950/30 border-b border-blue-200 dark:border-blue-800 px-6 py-3">
        <div className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
          <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium">
            🔒 Your information is HIPAA-protected and secure
          </span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8 space-y-6">
        {/* Full Name Field */}
        <div className="relative">
          <Label 
            htmlFor="fullName" 
            className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 block"
          >
            Full Name <span className="text-red-500" aria-label="required">*</span>
          </Label>
          <div className="relative">
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              className={cn(
                "h-12 text-base pr-10 transition-all duration-200",
                "focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                errors.fullName && touchedFields.has("fullName") && "border-red-500 focus:ring-red-500",
                validFields.has("fullName") && "border-green-500 focus:ring-green-500"
              )}
              aria-required="true"
              aria-invalid={!!(errors.fullName && touchedFields.has("fullName"))}
              aria-describedby={errors.fullName && touchedFields.has("fullName") ? "fullName-error" : "fullName-hint"}
              {...register("fullName", {
                onBlur: () => handleFieldBlur("fullName")
              })}
            />
            {/* Success checkmark */}
            {validFields.has("fullName") && (
              <Check 
                className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-600 animate-fade-in" 
                aria-label="Valid"
              />
            )}
            {/* Error icon */}
            {errors.fullName && touchedFields.has("fullName") && (
              <AlertCircle 
                className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500 animate-fade-in" 
                aria-label="Error"
              />
            )}
          </div>
          {/* Error message */}
          {errors.fullName && touchedFields.has("fullName") && (
            <p id="fullName-error" className="text-sm text-red-600 mt-1 animate-fade-in" role="alert">
              <span className="font-medium">Error:</span> {errors.fullName.message}
            </p>
          )}
          {/* Helper text */}
          {!errors.fullName && !validFields.has("fullName") && (
            <p id="fullName-hint" className="text-sm text-gray-500 mt-1">
              Please provide your full legal name
            </p>
          )}
        </div>

        {/* Phone Number Field */}
        <div className="relative">
          <Label 
            htmlFor="phone" 
            className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            Phone Number <span className="text-red-500" aria-label="required">*</span>
          </Label>
          <div className="relative">
            <Input
              id="phone"
              type="tel"
              inputMode="numeric"
              placeholder="999 999 9999"
              className={cn(
                "h-12 text-base pr-10 transition-all duration-200",
                "focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                errors.phone && touchedFields.has("phone") && "border-red-500 focus:ring-red-500",
                validFields.has("phone") && "border-green-500 focus:ring-green-500"
              )}
              aria-required="true"
              aria-invalid={!!(errors.phone && touchedFields.has("phone"))}
              aria-describedby={errors.phone && touchedFields.has("phone") ? "phone-error" : "phone-hint"}
              onChange={handlePhoneChange}
              onBlur={() => handleFieldBlur("phone")}
              maxLength={12} // Account for spaces in formatting
            />
            {/* Success checkmark */}
            {validFields.has("phone") && (
              <Check 
                className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-600 animate-fade-in" 
                aria-label="Valid"
              />
            )}
            {/* Error icon */}
            {errors.phone && touchedFields.has("phone") && (
              <AlertCircle 
                className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500 animate-fade-in" 
                aria-label="Error"
              />
            )}
          </div>
          {/* Error message */}
          {errors.phone && touchedFields.has("phone") && (
            <p id="phone-error" className="text-sm text-red-600 mt-1 animate-fade-in" role="alert">
              <span className="font-medium">Error:</span> {errors.phone.message}
            </p>
          )}
          {/* Helper text */}
          {!errors.phone && !validFields.has("phone") && (
            <p id="phone-hint" className="text-sm text-gray-500 mt-1">
              10-digit Indian mobile number (no country code needed)
            </p>
          )}
        </div>

        {/* Preferred Service Field (Optional) */}
        <div className="relative">
          <Label 
            htmlFor="service" 
            className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 block"
          >
            Preferred Service <span className="text-gray-400 text-sm font-normal">(Optional)</span>
          </Label>
          <Select 
            onValueChange={(value) => {
              setValue("service", value);
              setValidFields(prev => new Set([...prev, "service"]));
            }}
          >
            <SelectTrigger 
              id="service" 
              className={cn(
                "h-12 text-base transition-all duration-200",
                "focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                validFields.has("service") && "border-green-500"
              )}
              aria-label="Select preferred medical service"
              aria-describedby="service-hint"
            >
              <SelectValue placeholder="Select a service (optional)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Consultation</SelectItem>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="orthopedics">Orthopedics</SelectItem>
              <SelectItem value="internal-medicine">Internal Medicine</SelectItem>
              <SelectItem value="emergency">Emergency Care</SelectItem>
              <SelectItem value="pediatrics">Pediatrics</SelectItem>
              <SelectItem value="womens-health">Women's Health</SelectItem>
              <SelectItem value="diagnostics">Diagnostics & Lab Tests</SelectItem>
              <SelectItem value="other">Other Services</SelectItem>
            </SelectContent>
          </Select>
          <p id="service-hint" className="text-sm text-gray-500 mt-1">
            Help us connect you with the right specialist
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className={cn(
            "w-full h-14 text-lg font-semibold transition-all duration-200",
            "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800",
            "focus:ring-4 focus:ring-green-500/30 focus:outline-none",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          )}
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Sending request...
            </>
          ) : (
            "Request My Free Consultation"
          )}
        </Button>

        {/* Trust indicators */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-600" />
              Free consultation
            </span>
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-600" />
              No spam calls
            </span>
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-600" />
              Private & confidential
            </span>
          </div>
        </div>

        {/* Emergency notice */}
        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
          For medical emergencies, please call 911 or visit your nearest emergency room immediately
        </p>
      </form>
    </div>
  );
};

export default CallbackForm;