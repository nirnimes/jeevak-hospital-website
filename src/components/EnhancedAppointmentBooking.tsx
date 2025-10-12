/**
 * Enhanced Appointment Booking Component
 * Implements comprehensive form validation, error handling, and accessibility features
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Calendar as CalendarIcon, Clock, User, Phone, Heart, Shield, CheckCircle, AlertCircle, ArrowLeft, ArrowRight, Star, Loader2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppointmentFormSchema, AppointmentFormData } from "@/types";
import { AppointmentService, ApiException, ErrorCodes } from "@/lib/api";
import { toast } from "sonner";

// Mock services data - in production this would come from API
const services = [
  { 
    value: "cardiology", 
    label: "Cardiology Consultation", 
    icon: Heart, 
    duration: "45 min",
    description: "Comprehensive heart health assessment and consultation"
  },
  { 
    value: "emergency", 
    label: "Emergency Care", 
    icon: Shield, 
    duration: "Immediate",
    description: "24/7 emergency cardiac care and critical interventions"
  },
  { 
    value: "checkup", 
    label: "General Health Checkup", 
    icon: User, 
    duration: "30 min",
    description: "Complete health screening and preventive care"
  },
  { 
    value: "followup", 
    label: "Follow-up Visit", 
    icon: Clock, 
    duration: "20 min",
    description: "Post-treatment monitoring and care continuation"
  },
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", 
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
];

export default function EnhancedAppointmentBooking() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState("");
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<string[]>(timeSlots);

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(AppointmentFormSchema),
    mode: "onChange", // Real-time validation
    defaultValues: {
      patientInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        gender: "male"
      },
      appointmentInfo: {
        doctorId: "",
        preferredDate: "",
        preferredTime: "",
        isEmergency: false,
        symptoms: "",
        notes: ""
      },
      emergencyContact: {
        name: "",
        relationship: "",
        phone: ""
      }
    }
  });

  const { formState: { errors, isValid, isDirty }, watch, setValue, trigger } = form;
  const watchedFields = watch();

  // Real-time validation for phone number formatting
  useEffect(() => {
    const phone = watchedFields.patientInfo?.phone;
    if (phone && phone.length > 0) {
      // Auto-format Indian phone number
      const cleaned = phone.replace(/\D/g, '');
      if (cleaned.length <= 10) {
        const formatted = cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
        if (formatted !== phone) {
          setValue('patientInfo.phone', formatted);
        }
      }
    }
  }, [watchedFields.patientInfo?.phone, setValue]);

  // Check availability when date changes
  useEffect(() => {
    if (selectedDate) {
      // Mock availability check - in production this would be an API call
      const dayOfWeek = selectedDate.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      
      if (isWeekend) {
        setAvailableSlots(["9:00 AM", "10:00 AM", "11:00 AM"]); // Limited weekend slots
      } else {
        setAvailableSlots(timeSlots);
      }
      
      setValue('appointmentInfo.preferredDate', format(selectedDate, 'yyyy-MM-dd'));
      trigger('appointmentInfo.preferredDate');
    }
  }, [selectedDate, setValue, trigger]);

  const getProgress = () => {
    return (step / 3) * 100;
  };

  const handleServiceSelect = (serviceValue: string) => {
    setSelectedService(serviceValue);
    setValue('appointmentInfo.serviceId', serviceValue);
    setValue('appointmentInfo.isEmergency', serviceValue === 'emergency');
    trigger('appointmentInfo.serviceId');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setValue('appointmentInfo.preferredTime', time);
    trigger('appointmentInfo.preferredTime');
  };

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    
    try {
      // Add selected values to form data
      const appointmentData = {
        ...data,
        appointmentInfo: {
          ...data.appointmentInfo,
          serviceId: selectedService,
          preferredDate: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '',
          preferredTime: selectedTime
        }
      };

      const result = await AppointmentService.bookAppointment(appointmentData);
      
      setSubmitted(true);
      toast.success("Appointment booked successfully!", {
        description: `Confirmation number: ${result.confirmationNumber}`
      });
      
      // Reset form after successful submission
      setTimeout(() => {
        setSubmitted(false);
        setIsOpen(false);
        setStep(1);
        setSelectedService("");
        setSelectedDate(undefined);
        setSelectedTime("");
        form.reset();
      }, 3000);

    } catch (error) {
      console.error('Appointment booking error:', error);
      
      if (error instanceof ApiException) {
        switch (error.code) {
          case ErrorCodes.DOCTOR_UNAVAILABLE:
            toast.error("Doctor Unavailable", {
              description: error.message
            });
            break;
          case ErrorCodes.APPOINTMENT_CONFLICT:
            toast.error("Time Slot Taken", {
              description: error.message
            });
            break;
          case ErrorCodes.VALIDATION_ERROR:
            toast.error("Validation Error", {
              description: "Please check your information and try again"
            });
            break;
          default:
            toast.error("Booking Failed", {
              description: error.message || "Please try again later"
            });
        }
      } else {
        toast.error("Booking Failed", {
          description: "An unexpected error occurred. Please try again."
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    setSelectedService("");
    setSelectedDate(undefined);
    setSelectedTime("");
    form.reset();
  };

  const renderServiceStep = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Select Service</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Choose the type of consultation you need. Emergency cases will be prioritized.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {services.map((service) => (
          <Card
            key={service.value}
            className={cn(
              "cursor-pointer transition-all hover:shadow-md focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2",
              selectedService === service.value && "ring-2 ring-primary bg-primary/5"
            )}
            onClick={() => handleServiceSelect(service.value)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleServiceSelect(service.value);
              }
            }}
            aria-pressed={selectedService === service.value}
            aria-label={`Select ${service.label} service`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={cn(
                    "p-3 rounded-lg transition-colors",
                    selectedService === service.value ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  )}>
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">{service.label}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{service.description}</p>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">Duration: {service.duration}</span>
                    </div>
                  </div>
                </div>
                {service.value === "emergency" && (
                  <Badge variant="destructive" className="ml-2">
                    Urgent
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {errors.appointmentInfo?.serviceId && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {errors.appointmentInfo.serviceId.message}
          </AlertDescription>
        </Alert>
      )}

      <Button 
        onClick={() => setStep(2)} 
        disabled={!selectedService} 
        className="w-full" 
        size="lg"
        aria-label="Continue to date and time selection"
      >
        Continue
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );

  const renderDateTimeStep = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Select Date & Time</h3>
        <Button 
          variant="ghost" 
          onClick={() => setStep(1)} 
          size="sm"
          aria-label="Go back to service selection"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="date-picker" className="text-sm font-medium mb-3 block">
            Choose Date *
          </Label>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            disabled={(date) => {
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              return date < today || date > new Date(today.getTime() + 90 * 24 * 60 * 60 * 1000);
            }}
            className="rounded-md border"
            id="date-picker"
            aria-label="Select appointment date"
          />
          {errors.appointmentInfo?.preferredDate && (
            <p className="text-sm text-destructive mt-2">
              {errors.appointmentInfo.preferredDate.message}
            </p>
          )}
        </div>
        
        <div>
          <Label htmlFor="time-slots" className="text-sm font-medium mb-3 block">
            Available Times *
          </Label>
          <div 
            id="time-slots"
            className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto"
            role="group"
            aria-label="Available time slots"
          >
            {availableSlots.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                size="sm"
                onClick={() => handleTimeSelect(time)}
                className="justify-center"
                aria-pressed={selectedTime === time}
                aria-label={`Select ${time} time slot`}
              >
                {time}
              </Button>
            ))}
          </div>
          {errors.appointmentInfo?.preferredTime && (
            <p className="text-sm text-destructive mt-2">
              {errors.appointmentInfo.preferredTime.message}
            </p>
          )}
        </div>
      </div>

      <Button 
        onClick={() => setStep(3)} 
        disabled={!selectedDate || !selectedTime} 
        className="w-full" 
        size="lg"
        aria-label="Continue to patient information"
      >
        Continue
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );

  const renderPatientInfoStep = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Patient Information</h3>
        <Button 
          variant="ghost" 
          onClick={() => setStep(2)} 
          size="sm"
          aria-label="Go back to date and time selection"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Patient Information */}
        <div className="space-y-4">
          <h4 className="font-medium">Personal Details</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                {...form.register('patientInfo.firstName')}
                placeholder="Enter your first name"
                aria-invalid={errors.patientInfo?.firstName ? 'true' : 'false'}
                aria-describedby={errors.patientInfo?.firstName ? 'firstName-error' : undefined}
              />
              {errors.patientInfo?.firstName && (
                <p id="firstName-error" className="text-sm text-destructive mt-1">
                  {errors.patientInfo.firstName.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                {...form.register('patientInfo.lastName')}
                placeholder="Enter your last name"
                aria-invalid={errors.patientInfo?.lastName ? 'true' : 'false'}
                aria-describedby={errors.patientInfo?.lastName ? 'lastName-error' : undefined}
              />
              {errors.patientInfo?.lastName && (
                <p id="lastName-error" className="text-sm text-destructive mt-1">
                  {errors.patientInfo.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                {...form.register('patientInfo.email')}
                placeholder="your.email@example.com"
                aria-invalid={errors.patientInfo?.email ? 'true' : 'false'}
                aria-describedby={errors.patientInfo?.email ? 'email-error' : undefined}
              />
              {errors.patientInfo?.email && (
                <p id="email-error" className="text-sm text-destructive mt-1">
                  {errors.patientInfo.email.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                {...form.register('patientInfo.phone')}
                placeholder="+91-XXXX-XXXXXX"
                aria-invalid={errors.patientInfo?.phone ? 'true' : 'false'}
                aria-describedby={errors.patientInfo?.phone ? 'phone-error' : undefined}
              />
              {errors.patientInfo?.phone && (
                <p id="phone-error" className="text-sm text-destructive mt-1">
                  {errors.patientInfo.phone.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth *</Label>
              <Input
                id="dateOfBirth"
                type="date"
                {...form.register('patientInfo.dateOfBirth')}
                aria-invalid={errors.patientInfo?.dateOfBirth ? 'true' : 'false'}
                aria-describedby={errors.patientInfo?.dateOfBirth ? 'dateOfBirth-error' : undefined}
              />
              {errors.patientInfo?.dateOfBirth && (
                <p id="dateOfBirth-error" className="text-sm text-destructive mt-1">
                  {errors.patientInfo.dateOfBirth.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="gender">Gender *</Label>
              <Controller
                name="patientInfo.gender"
                control={form.control}
                render={({ field }) => (
                  <select
                    {...field}
                    id="gender"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    aria-invalid={errors.patientInfo?.gender ? 'true' : 'false'}
                    aria-describedby={errors.patientInfo?.gender ? 'gender-error' : undefined}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                )}
              />
              {errors.patientInfo?.gender && (
                <p id="gender-error" className="text-sm text-destructive mt-1">
                  {errors.patientInfo.gender.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="space-y-4">
          <h4 className="font-medium">Emergency Contact</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="emergencyName">Contact Name *</Label>
              <Input
                id="emergencyName"
                {...form.register('emergencyContact.name')}
                placeholder="Emergency contact name"
                aria-invalid={errors.emergencyContact?.name ? 'true' : 'false'}
                aria-describedby={errors.emergencyContact?.name ? 'emergencyName-error' : undefined}
              />
              {errors.emergencyContact?.name && (
                <p id="emergencyName-error" className="text-sm text-destructive mt-1">
                  {errors.emergencyContact.name.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="emergencyRelationship">Relationship *</Label>
              <Input
                id="emergencyRelationship"
                {...form.register('emergencyContact.relationship')}
                placeholder="e.g., Spouse, Parent, Sibling"
                aria-invalid={errors.emergencyContact?.relationship ? 'true' : 'false'}
                aria-describedby={errors.emergencyContact?.relationship ? 'emergencyRelationship-error' : undefined}
              />
              {errors.emergencyContact?.relationship && (
                <p id="emergencyRelationship-error" className="text-sm text-destructive mt-1">
                  {errors.emergencyContact.relationship.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
            <Input
              id="emergencyPhone"
              type="tel"
              {...form.register('emergencyContact.phone')}
              placeholder="+91-XXXX-XXXXXX"
              aria-invalid={errors.emergencyContact?.phone ? 'true' : 'false'}
              aria-describedby={errors.emergencyContact?.phone ? 'emergencyPhone-error' : undefined}
            />
            {errors.emergencyContact?.phone && (
              <p id="emergencyPhone-error" className="text-sm text-destructive mt-1">
                {errors.emergencyContact.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Symptoms/Notes */}
        <div className="space-y-4">
          <h4 className="font-medium">Additional Information</h4>
          <div>
            <Label htmlFor="symptoms">Symptoms or Reason for Visit</Label>
            <Textarea
              id="symptoms"
              {...form.register('appointmentInfo.symptoms')}
              placeholder="Please describe your symptoms or reason for the appointment..."
              rows={3}
              aria-invalid={errors.appointmentInfo?.symptoms ? 'true' : 'false'}
              aria-describedby={errors.appointmentInfo?.symptoms ? 'symptoms-error' : undefined}
            />
            {errors.appointmentInfo?.symptoms && (
              <p id="symptoms-error" className="text-sm text-destructive mt-1">
                {errors.appointmentInfo.symptoms.message}
              </p>
            )}
          </div>
        </div>

        {/* Appointment Summary */}
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-lg">Appointment Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Service:</span>
              <span className="font-medium">{services.find((s) => s.value === selectedService)?.label}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date:</span>
              <span className="font-medium">{selectedDate ? format(selectedDate, "PPP") : "Not selected"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Time:</span>
              <span className="font-medium">{selectedTime}</span>
            </div>
          </CardContent>
        </Card>

        {/* Terms and Conditions */}
        <div className="flex items-start space-x-2">
          <Controller
            name="appointmentInfo.agreeToTerms"
            control={form.control}
            render={({ field }) => (
              <Checkbox
                id="agreeToTerms"
                checked={field.value}
                onCheckedChange={field.onChange}
                aria-invalid={errors.appointmentInfo?.agreeToTerms ? 'true' : 'false'}
                aria-describedby={errors.appointmentInfo?.agreeToTerms ? 'agreeToTerms-error' : undefined}
              />
            )}
          />
          <div className="grid gap-1.5 leading-none">
            <Label
              htmlFor="agreeToTerms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the terms and conditions and privacy policy *
            </Label>
            <p className="text-xs text-muted-foreground">
              By booking an appointment, you consent to our terms of service and privacy policy.
            </p>
            {errors.appointmentInfo?.agreeToTerms && (
              <p id="agreeToTerms-error" className="text-sm text-destructive">
                {errors.appointmentInfo.agreeToTerms.message}
              </p>
            )}
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          size="lg" 
          disabled={isSubmitting || !isValid}
          aria-label="Confirm and book appointment"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Booking Appointment...
            </>
          ) : (
            <>
              <CalendarIcon className="mr-2 h-4 w-4" />
              Confirm Appointment
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          You'll receive confirmation within 15 minutes via SMS and email
        </p>
      </form>
    </div>
  );

  const renderSuccessStep = () => (
    <div className="text-center space-y-6">
      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
        <CheckCircle className="w-8 h-8 text-green-600" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-green-600 mb-2">Appointment Booked Successfully!</h3>
        <p className="text-muted-foreground">
          You will receive a confirmation SMS and email shortly with all the details.
        </p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <p className="text-sm text-green-800">
          <strong>Important:</strong> Please arrive 15 minutes before your appointment time with a valid ID.
        </p>
      </div>
      <Button onClick={resetForm} variant="outline">
        Book Another Appointment
      </Button>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          size="lg" 
          className="text-lg px-8 py-6"
          aria-label="Open appointment booking dialog"
        >
          <CalendarIcon className="mr-2 h-5 w-5" />
          Book Appointment
        </Button>
      </DialogTrigger>
      <DialogContent 
        className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto"
        aria-describedby="appointment-booking-description"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl">Book Your Appointment</DialogTitle>
          <DialogDescription id="appointment-booking-description">
            Schedule your consultation with our expert medical team. All fields marked with * are required.
          </DialogDescription>
        </DialogHeader>

        {/* Progress Bar */}
        {!submitted && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Step {step} of 3</span>
              <span>{Math.round(getProgress())}% Complete</span>
            </div>
            <Progress value={getProgress()} className="w-full" />
          </div>
        )}

        {/* Step Content */}
        <div className="space-y-6">
          {submitted ? renderSuccessStep() : (
            <>
              {step === 1 && renderServiceStep()}
              {step === 2 && renderDateTimeStep()}
              {step === 3 && renderPatientInfoStep()}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
