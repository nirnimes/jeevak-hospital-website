import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const indianPhoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6-9]\d{9}$/;

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z
    .string()
    .regex(indianPhoneRegex, "Please enter a valid Indian phone number (10 digits, starting with 6-9)"),
  service: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const CallbackForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

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
    <div id="callback" className="bg-card rounded-lg p-6 md:p-8 shadow-lg border border-border">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">Get Expert Cardiac Care - Free Consultation</h3>
        <p className="text-sm text-muted-foreground">✓ Free consultation ✓ No waiting lists ✓ HIPAA protected</p>
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

        {/* Email removed for minimal fields */}

        <div>
          <Label htmlFor="service" className="text-foreground">Preferred Service (optional)</Label>
          <Select onValueChange={(value) => setValue("service", value)}>
            <SelectTrigger 
              id="service" 
              className="mt-1.5 h-12 text-base"
              aria-required={false}
              aria-invalid={false}
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
          {/* Optional field has no error */}
        </div>
        {/* Removed best time, message, consent for minimal friction */}

        <Button
          type="submit"
          size="lg"
          className="w-full h-12 text-base font-semibold bg-[hsl(var(--medical-green))] hover:bg-[hsl(var(--medical-green))]/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Request My Consultation"}
        </Button>

        <p className="text-xs text-center text-muted-foreground">✓ Free consultation ✓ No waiting lists ✓ HIPAA protected</p>
      </form>
    </div>
  );
};

export default CallbackForm;
