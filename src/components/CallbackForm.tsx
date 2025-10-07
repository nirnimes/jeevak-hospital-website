import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const indianPhoneRegex = /^(\+91[\s-]?)?[0]?(91)?[6-9]\d{9}$/;

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z
    .string()
    .regex(indianPhoneRegex, "Please enter a valid Indian phone number (10 digits, starting with 6-9)"),
  service: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, "You must consent to be contacted"),
});

type FormData = z.infer<typeof formSchema>;

const CallbackForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue, watch } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const consent = watch("consent");

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
      <div className="mb-6" id="consultation">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Get Expert Cardiac Care - Free Consultation
        </h3>
        <p className="text-sm text-muted-foreground">
          ✓ Free consultation ✓ No waiting lists ✓ HIPAA protected
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Label htmlFor="fullName" className="text-foreground">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            className="mt-1.5 h-12 text-base"
            aria-required="true"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
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
          <Input
            id="phone"
            type="tel"
            placeholder="10-digit mobile number"
            className="mt-1.5 h-12 text-base"
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className="text-sm text-destructive mt-1" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Email removed per minimal fields requirement */}

        <div>
          <Label htmlFor="service" className="text-foreground">Preferred Service (Optional)</Label>
          <Select onValueChange={(value) => setValue("service", value)}>
            <SelectTrigger id="service" className="mt-1.5 h-12 text-base">
              <SelectValue placeholder="Select a service (optional)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Consultation</SelectItem>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="emergency">Emergency Care</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Minimal fields only; message removed intentionally */}

        <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-md">
          <Checkbox
            id="consent"
            checked={consent}
            onCheckedChange={(checked) => setValue("consent", checked as boolean)}
            aria-required="true"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <div className="flex-1">
            <label htmlFor="consent" className="text-sm text-foreground cursor-pointer leading-relaxed">
              I consent to be contacted about medical services and understand my information is protected under HIPAA regulations.
            </label>
            {errors.consent && (
              <p id="consent-error" className="text-sm text-destructive mt-1" role="alert">
                {errors.consent.message}
              </p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full h-12 text-base font-semibold bg-green-600 hover:bg-green-600/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Request My Consultation"}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          For emergencies, call our 24/7 helpline: +91-612-2670992
        </p>
      </form>
    </div>
  );
};

export default CallbackForm;
