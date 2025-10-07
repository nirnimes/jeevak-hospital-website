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
  phone: z.string().regex(indianPhoneRegex, "Please enter a valid Indian phone number (10 digits, starting with 6-9)"),
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
      description: "Our cardiac care specialist will contact you shortly.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-lg p-8 shadow-lg border border-border animate-fade-in">
        <div className="text-center">
          <CheckCircle2 className="h-16 w-16 text-secondary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-4">Our cardiac care specialist will contact you shortly</p>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle2 className="h-4 w-4 text-secondary" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle2 className="h-4 w-4 text-secondary" />
              <span>No waiting lists</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle2 className="h-4 w-4 text-secondary" />
              <span>HIPAA protected</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg border border-border">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Get Expert Cardiac Care - Free Consultation
        </h3>
        <div className="flex flex-wrap gap-4 mt-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-secondary" />
            <span>Free consultation</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-secondary" />
            <span>No waiting lists</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-secondary" />
            <span>HIPAA protected</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Label htmlFor="fullName" className="text-foreground">
            Name <span className="text-destructive">*</span>
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
            Phone <span className="text-destructive">*</span>
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
          <Label htmlFor="service" className="text-foreground">
            Preferred Service <span className="text-muted-foreground text-xs">(Optional)</span>
          </Label>
          <Select onValueChange={(value) => setValue("service", value)}>
            <SelectTrigger 
              id="service" 
              className="mt-1.5 h-12 text-base"
              aria-invalid={!!errors.service}
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cardiology">Cardiology - Heart Care</SelectItem>
              <SelectItem value="angioplasty">Angioplasty</SelectItem>
              <SelectItem value="bypass">Bypass Surgery</SelectItem>
              <SelectItem value="valve">Valve Replacement</SelectItem>
              <SelectItem value="general">General Consultation</SelectItem>
              <SelectItem value="emergency">Emergency Care</SelectItem>
              <SelectItem value="checkup">Heart Checkup</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.service && (
            <p className="text-sm text-destructive mt-1" role="alert">
              {errors.service.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full h-14 text-lg font-semibold bg-secondary hover:bg-secondary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Request My Consultation"}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          For cardiac emergencies, call our 24/7 helpline: +91-612-2670992
        </p>
      </form>
    </div>
  );
};

export default CallbackForm;
