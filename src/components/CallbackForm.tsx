import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Loader2, Lock, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const indianPhoneRegex = /^(\+91[-\s]?)?[0]?(91)?[6-9]\d{9}$/;

const formSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name (at least 2 characters)").max(100, "Name is too long"),
  phone: z.string().regex(indianPhoneRegex, "Please enter a valid 10-digit Indian mobile number starting with 6-9"),
  service: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const CallbackForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validFields, setValidFields] = useState<Record<string, boolean>>({});
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    setValue,
    trigger,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  });

  const formValues = watch();

  const handleFieldBlur = async (fieldName: keyof FormData) => {
    const isValid = await trigger(fieldName);
    setValidFields(prev => ({ ...prev, [fieldName]: isValid }));
  };

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    
    toast({
      title: "Request Received!",
      description: "We'll contact you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-lg p-8 shadow-lg border border-border animate-fade-in">
        <div className="text-center">
          <CheckCircle2 className="h-16 w-16 text-secondary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-4">We'll contact you within 24 hours</p>
          <p className="text-sm text-muted-foreground">
            Your information is HIPAA-protected and will only be used for medical consultation purposes.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg border border-border">
      {/* Security Reassurance Banner */}
      <div className="mb-6 flex items-center justify-center gap-2 p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
        <Lock className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
        <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
          Your information is HIPAA-protected and secure
        </p>
      </div>

      {/* Form Header */}
      <div className="mb-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Request Your Free Medical Consultation
        </h3>
        <p className="text-base text-muted-foreground">
          Expert doctors will contact you within 24 hours
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name Field */}
        <div className="relative">
          <Label htmlFor="fullName" className="text-base font-medium text-foreground mb-2 block">
            Full Name <span className="text-destructive" aria-label="required">*</span>
          </Label>
          <div className="relative">
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              className="h-12 text-base pr-12 focus-visible:ring-blue-500 focus-visible:border-blue-500"
              aria-required="true"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : "fullName-desc"}
              {...register("fullName", {
                onBlur: () => handleFieldBlur("fullName")
              })}
            />
            {validFields.fullName && !errors.fullName && (
              <Check 
                className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-600 dark:text-emerald-400" 
                aria-label="Valid"
              />
            )}
          </div>
          <span id="fullName-desc" className="sr-only">Enter your complete name as it appears on official documents</span>
          {errors.fullName && (
            <p id="fullName-error" className="text-sm text-red-600 dark:text-red-400 mt-2 flex items-start gap-1" role="alert">
              <span aria-hidden="true">⚠</span>
              <span>{errors.fullName.message}</span>
            </p>
          )}
        </div>

        {/* Phone Number Field */}
        <div className="relative">
          <Label htmlFor="phone" className="text-base font-medium text-foreground mb-2 block">
            Phone Number <span className="text-destructive" aria-label="required">*</span>
          </Label>
          <div className="relative">
            <Input
              id="phone"
              type="tel"
              placeholder="9876543210"
              className="h-12 text-base pr-12 focus-visible:ring-blue-500 focus-visible:border-blue-500"
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : "phone-desc"}
              {...register("phone", {
                onBlur: () => handleFieldBlur("phone")
              })}
            />
            {validFields.phone && !errors.phone && (
              <Check 
                className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-600 dark:text-emerald-400" 
                aria-label="Valid"
              />
            )}
          </div>
          <span id="phone-desc" className="sr-only">Enter your 10-digit Indian mobile number without country code</span>
          {errors.phone && (
            <p id="phone-error" className="text-sm text-red-600 dark:text-red-400 mt-2 flex items-start gap-1" role="alert">
              <span aria-hidden="true">⚠</span>
              <span>{errors.phone.message}</span>
            </p>
          )}
        </div>

        {/* Preferred Service Field */}
        <div>
          <Label htmlFor="service" className="text-base font-medium text-foreground mb-2 block">
            Preferred Service <span className="text-muted-foreground text-sm">(Optional)</span>
          </Label>
          <Select 
            onValueChange={(value) => {
              setValue("service", value);
              handleFieldBlur("service");
            }}
          >
            <SelectTrigger 
              id="service" 
              className="h-12 text-base focus:ring-blue-500 focus:border-blue-500"
              aria-describedby="service-desc"
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Consultation</SelectItem>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="orthopedics">Orthopedics</SelectItem>
              <SelectItem value="internal-medicine">Internal Medicine</SelectItem>
              <SelectItem value="emergency">Emergency Care</SelectItem>
              <SelectItem value="pediatrics">Pediatrics</SelectItem>
              <SelectItem value="womens-health">Women's Health</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <span id="service-desc" className="sr-only">Select the medical service you are interested in</span>
        </div>

        {/* Trust Indicators */}
        <div className="pt-2 pb-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <span>No spam calls</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <span>Private & confidential</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className="w-full h-12 text-base font-semibold bg-emerald-600 hover:bg-emerald-700 text-white focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
              Sending request...
            </>
          ) : (
            "Request My Free Consultation"
          )}
        </Button>

        {/* Emergency Notice */}
        <p className="text-sm text-center text-muted-foreground pt-2">
          For medical emergencies, call <span className="font-semibold">911</span> or our 24/7 helpline immediately
        </p>
      </form>
    </div>
  );
};

export default CallbackForm;
