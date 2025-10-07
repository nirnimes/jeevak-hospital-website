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

const indianPhoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6-9]\d{9}$/;

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().regex(indianPhoneRegex, "Please enter a valid Indian phone number (10 digits, starting with 6-9)"),
  service: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const CallbackForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    setValue,
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const fullNameValue = watch("fullName");
  const phoneValue = watch("phone");
  const serviceValue = watch("service");

  const isFullNameValid = !!touchedFields.fullName && !errors.fullName && (fullNameValue?.trim().length ?? 0) >= 2;
  const isPhoneValid = !!touchedFields.phone && !errors.phone && indianPhoneRegex.test(phoneValue ?? "");

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    
    toast({
      title: "Request Received!",
      description: "We'll contact you within 24 hours.",
    });
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-lg p-8 shadow-lg border border-border animate-fade-in">
        <div className="text-center">
          <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
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
      <div className="mb-3">
        <p className="text-xs md:text-sm text-muted-foreground" aria-live="polite">🔒 Your information is HIPAA-protected and secure</p>
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">Request Your Free Medical Consultation</h3>
        <p className="text-sm text-muted-foreground">Expert doctors will contact you within 24 hours</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div>
          <Label htmlFor="fullName" className="text-foreground">Full Name <span className="text-destructive">*</span></Label>
          <div className="relative">
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              className="mt-1.5 h-12 text-base focus-visible:ring-blue-500 focus-visible:border-blue-500"
              aria-required="true"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              autoComplete="name"
              {...register("fullName")}
            />
            {isFullNameValid && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600" aria-hidden="true">
                <CheckCircle2 className="h-5 w-5" />
              </span>
            )}
          </div>
          {errors.fullName && (
            <p id="fullName-error" className="text-sm text-destructive mt-1" role="alert">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <div className="relative">
            <Input
              id="phone"
              type="tel"
              placeholder="10-digit mobile number"
              className="mt-1.5 h-12 text-base focus-visible:ring-blue-500 focus-visible:border-blue-500"
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              inputMode="tel"
              autoComplete="tel"
              {...register("phone")}
            />
            {isPhoneValid && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600" aria-hidden="true">
                <CheckCircle2 className="h-5 w-5" />
              </span>
            )}
          </div>
          {errors.phone && (
            <p id="phone-error" className="text-sm text-destructive mt-1" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="service" className="text-foreground">Preferred Service (optional)</Label>
          <Select onValueChange={(value) => setValue("service", value, { shouldDirty: true, shouldTouch: true })}>
            <SelectTrigger 
              id="service" 
              className="mt-1.5 h-12 text-base focus:ring-blue-500 focus:border-blue-500"
              aria-invalid={false}
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
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {serviceValue && (
            <p className="text-xs text-green-600 mt-1" aria-live="polite">Service selected</p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full h-12 text-base font-semibold bg-[#059669] hover:bg-[#047857] text-white focus-visible:ring-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending request...
            </span>
          ) : (
            "Request My Free Consultation"
          )}
        </Button>

        <p className="text-xs text-center text-muted-foreground" aria-live="polite">
          ✓ Free consultation ✓ No spam calls ✓ Private & confidential
        </p>
      </form>
    </div>
  );
};

export default CallbackForm;
