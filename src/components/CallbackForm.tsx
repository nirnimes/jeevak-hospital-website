import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const indianPhoneRegex = /^(\+91[-\s]?)?[0]?(91)?[6-9]\d{9}$/;

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z
    .string()
    .regex(
      indianPhoneRegex,
      "Enter a valid 10-digit Indian mobile number starting with 6-9",
    ),
  service: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const CallbackForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState,
    setValue,
    watch,
    getFieldState,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const { errors, isSubmitting } = formState;
  const fullNameValue = watch("fullName");
  const phoneValue = watch("phone");
  const serviceValue = watch("service");

  const isFieldValid = (name: keyof FormData) => {
    const state = getFieldState(name, formState);
    const value = name === "fullName" ? fullNameValue : name === "phone" ? phoneValue : serviceValue;
    return state.isTouched && !state.invalid && !!value;
  };

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    
    toast({
      title: "Request Received!",
      description: "We'll contact you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-lg p-8 shadow-lg border border-border animate-fade-in" aria-live="polite">
        <div className="text-center">
          <CheckCircle2 className="h-16 w-16 text-[#059669] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">Thank you!</h3>
          <p className="text-muted-foreground mb-4">We'll contact you within 24 hours.</p>
          <p className="text-sm text-muted-foreground">
            Your information is HIPAA-protected and will only be used for your medical consultation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg border border-border">
      <div className="mb-6">
        <p className="text-xs sm:text-sm text-muted-foreground mb-2">🔒 Your information is HIPAA-protected and secure</p>
        <h3 className="text-2xl font-bold text-foreground mb-1">Request Your Free Medical Consultation</h3>
        <p className="text-sm text-muted-foreground">Expert doctors will contact you within 24 hours</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" aria-busy={isSubmitting} noValidate>
        <div className="relative">
          <Label htmlFor="fullName" className="text-foreground">Full Name <span className="text-destructive">*</span></Label>
          <Input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            className="mt-1.5 h-12 text-base pr-10"
            aria-required="true"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            autoComplete="name"
            {...register("fullName")}
          />
          {isFieldValid("fullName") && (
            <CheckCircle2 aria-hidden className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#059669]" />
          )}
          {errors.fullName && (
            <p id="fullName-error" className="text-sm text-destructive mt-1" role="alert" aria-live="polite">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="relative">
          <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="10-digit mobile number"
            className="mt-1.5 h-12 text-base pr-10"
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : "phone-helper"}
            inputMode="tel"
            autoComplete="tel"
            {...register("phone")}
          />
          {isFieldValid("phone") && (
            <CheckCircle2 aria-hidden className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#059669]" />
          )}
          {!errors.phone && (
            <p id="phone-helper" className="sr-only">Enter a valid Indian mobile number (10 digits, starts with 6-9). Country code optional.</p>
          )}
          {errors.phone && (
            <p id="phone-error" className="text-sm text-destructive mt-1" role="alert" aria-live="polite">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="relative">
          <Label htmlFor="service" className="text-foreground">Preferred Service <span className="text-muted-foreground text-xs ml-1">(optional)</span></Label>
          <Select onValueChange={(value) => setValue("service", value, { shouldTouch: true, shouldValidate: true })}>
            <SelectTrigger id="service" className="mt-1.5 h-12 text-base pr-10">
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
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {serviceValue && (
            <CheckCircle2 aria-hidden className="absolute right-3 top-[52px] h-5 w-5 text-[#059669]" />
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full h-12 text-base font-semibold bg-[#059669] hover:bg-[#047857]"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending request...
            </span>
          ) : (
            "Request My Free Consultation"
          )}
        </Button>

        <p className="text-xs text-center text-muted-foreground">✓ Free consultation ✓ No spam calls ✓ Private & confidential</p>
      </form>
    </div>
  );
};

export default CallbackForm;
