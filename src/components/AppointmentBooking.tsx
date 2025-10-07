import { useState } from "react";
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
import { Calendar as CalendarIcon, Clock, User, Phone, Heart, Shield, CheckCircle, AlertCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const services = [
  { value: "cardiology", label: "Cardiology Consultation", icon: Heart, duration: "45 min" },
  { value: "emergency", label: "Emergency Care", icon: Shield, duration: "Immediate" },
  { value: "checkup", label: "General Health Checkup", icon: User, duration: "30 min" },
  { value: "followup", label: "Follow-up Visit", icon: Clock, duration: "20 min" },
];

const timeSlots = ["9:00 AM", "10:30 AM", "12:00 PM", "2:00 PM", "3:30 PM", "5:00 PM"];

export default function AppointmentBooking() {
  const [date, setDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [step, setStep] = useState(1);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="text-lg px-8 py-6">
          <CalendarIcon className="mr-2 h-5 w-5" />
          Book Appointment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book Your Appointment</DialogTitle>
          <DialogDescription>Schedule your consultation with our expert medical team</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Select Service</h3>
              <div className="grid grid-cols-1 gap-3">
                {services.map((service) => (
                  <Card
                    key={service.value}
                    className={cn(
                      "cursor-pointer transition-all hover:shadow-md",
                      selectedService === service.value && "ring-2 ring-primary bg-primary/5",
                    )}
                    onClick={() => setSelectedService(service.value)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <service.icon className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">{service.label}</p>
                            <p className="text-sm text-muted-foreground">Duration: {service.duration}</p>
                          </div>
                        </div>
                        {service.value === "emergency" && <Badge variant="destructive">Urgent</Badge>}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button onClick={() => setStep(2)} disabled={!selectedService} className="w-full" size="lg">
                Continue
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Select Date & Time</h3>
                <Button variant="ghost" onClick={() => setStep(1)} size="sm">
                  Back
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-3 block">Choose Date</label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date()}
                    className="rounded-md border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-3 block">Available Times</label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(time)}
                        className="justify-center"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <Button onClick={() => setStep(3)} disabled={!date || !selectedTime} className="w-full" size="lg">
                Continue
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Patient Information</h3>
                <Button variant="ghost" onClick={() => setStep(2)} size="sm">
                  Back
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Phone Number" />

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
                    <span className="font-medium">{date ? format(date, "PPP") : "Not selected"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full" size="lg">Confirm Appointment</Button>
              <p className="text-xs text-muted-foreground text-center">You'll receive confirmation within 15 minutes via SMS and email</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}


