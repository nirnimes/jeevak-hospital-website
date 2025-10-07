import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const indianPhoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6-9]\d{9}$/;

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().regex(indianPhoneRegex, "Please enter a valid Indian phone number (10 digits, starting with 6-9)"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  bestTime: z.string().min(1, "Please select your preferred time"),
  message: z.string().max(200, "Message must be less than 200 characters").optional(),
  consent: z.boolean().refine((val) => val === true, "You must consent to be contacted"),
});

type FormData = z.infer<typeof formSchema>;

const CallbackForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<FormData>({
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
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Request a Callback - We'll Contact You Within 24 Hours
        </h3>
        <p className="text-sm text-muted-foreground">
          Your information is HIPAA-protected
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

        <div>
          <Label htmlFor="email" className="text-foreground flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            className="mt-1.5 h-12 text-base"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-destructive mt-1" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="service" className="text-foreground">
            Preferred Service <span className="text-destructive">*</span>
          </Label>
          <Select onValueChange={(value) => setValue("service", value)}>
            <SelectTrigger 
              id="service" 
              className="mt-1.5 h-12 text-base"
              aria-required="true"
              aria-invalid={!!errors.service}
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
          {errors.service && (
            <p className="text-sm text-destructive mt-1" role="alert">
              {errors.service.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="bestTime" className="text-foreground flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Best Time to Call <span className="text-destructive">*</span>
          </Label>
          <Select onValueChange={(value) => setValue("bestTime", value)}>
            <SelectTrigger 
              id="bestTime" 
              className="mt-1.5 h-12 text-base"
              aria-required="true"
              aria-invalid={!!errors.bestTime}
            >
              <SelectValue placeholder="Select preferred time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
              <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
            </SelectContent>
          </Select>
          {errors.bestTime && (
            <p className="text-sm text-destructive mt-1" role="alert">
              {errors.bestTime.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="message" className="text-foreground">
            Brief Message (Optional)
          </Label>
          <Textarea
            id="message"
            placeholder="Any specific concerns or questions? (max 200 characters)"
            className="mt-1.5 min-h-20 text-base"
            maxLength={200}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-destructive mt-1" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

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
          className="w-full h-12 text-base font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Request My Callback"}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          For emergencies, call 911 or our 24/7 helpline
        </p>
      </form>
    </div>
  );
};

export default CallbackForm;
