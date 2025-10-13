import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  Users,
  Heart,
  Shield,
  FileText,
  Car,
  Bus,
  Navigation,
  Send
} from "lucide-react";

const Contact = () => {
  const departments = [
    {
      name: "Cardiology",
      icon: Heart,
      phone: "+91-612-267-0991",
      email: "cardiology@anupamahospital.com",
      hours: "Mon-Sat: 8 AM - 8 PM, Sun: 9 AM - 1 PM",
      description: "Heart and vascular treatments, consultations, and procedures"
    },
    {
      name: "Emergency",
      icon: Shield,
      phone: "+91-612-267-0992",
      email: "emergency@anupamahospital.com",
      hours: "24/7 Available - Always Open",
      description: "Emergency cardiac care and critical interventions"
    },
    {
      name: "Appointments",
      icon: Calendar,
      phone: "+91-612-267-0993",
      email: "appointments@anupamahospital.com",
      hours: "Mon-Sat: 7 AM - 9 PM, Sun: 8 AM - 6 PM",
      description: "Schedule consultations and follow-up visits"
    },
    {
      name: "Administration",
      icon: Users,
      phone: "+91-612-267-0990",
      email: "admin@anupamahospital.com",
      hours: "Mon-Sat: 9 AM - 6 PM",
      description: "General inquiries, billing, and administrative support"
    },
    {
      name: "Insurance & Billing",
      icon: FileText,
      phone: "+91-612-267-0994",
      email: "billing@anupamahospital.com",
      hours: "Mon-Sat: 9 AM - 6 PM",
      description: "Insurance claims, billing inquiries, and payment assistance"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Contact Hero */}
        <section className="py-20 bg-gradient-to-br from-warm-sage/5 to-warm-teal/10">
          <div className="container text-center">
            <Badge className="mb-4 bg-warm-gold/10 text-warm-gold border-warm-gold/20">Continuing Dr. Prasad's Legacy</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              We're Here to Help You
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Multiple ways to reach us for appointments, emergencies, or any questions
              about your surgical care. Following Dr. Prasad's philosophy, our team is ready to assist you 24/7.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-sage">5</div>
                <div className="text-sm text-muted-foreground">Contact Methods</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-teal">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-gold">&lt; 2hr</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-burgundy">15min</div>
                <div className="text-sm text-muted-foreground">Average Wait</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="text-center hover:shadow-lg transition-shadow bg-warm-ivory border-warm-sage/10">
                <CardHeader>
                  <div className="w-16 h-16 bg-warm-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-warm-burgundy" />
                  </div>
                  <CardTitle className="text-warm-burgundy">Emergency</CardTitle>
                  <CardDescription>24/7 Emergency Line</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="tel:+916122670992" className="text-2xl font-bold text-warm-burgundy hover:underline block mb-2">
                    +91-612-267-0992
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Immediate surgical emergencies
                  </p>
                  <Badge className="mt-2 bg-warm-burgundy/10 text-warm-burgundy border-warm-burgundy/20">Always Available</Badge>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-warm-ivory border-warm-sage/10">
                <CardHeader>
                  <div className="w-16 h-16 bg-warm-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-warm-sage" />
                  </div>
                  <CardTitle className="text-warm-sage">Appointments</CardTitle>
                  <CardDescription>Schedule Consultation</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="tel:+916122670991" className="text-2xl font-bold text-warm-sage hover:underline block mb-2">
                    +91-612-267-0991
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Book your appointment
                  </p>
                  <Badge className="mt-2 bg-warm-gold/10 text-warm-gold border-warm-gold/20">Same Day Available</Badge>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-warm-ivory border-warm-sage/10">
                <CardHeader>
                  <div className="w-16 h-16 bg-warm-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-warm-teal" />
                  </div>
                  <CardTitle className="text-warm-teal">WhatsApp</CardTitle>
                  <CardDescription>Quick Messages</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="https://wa.me/919430012345" className="text-2xl font-bold text-warm-teal hover:underline block mb-2">
                    +91-9430-012345
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Chat with our team
                  </p>
                  <Badge variant="outline" className="mt-2 border-warm-teal/30 text-warm-teal">Quick Response</Badge>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-warm-ivory border-warm-sage/10">
                <CardHeader>
                  <div className="w-16 h-16 bg-warm-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-warm-gold" />
                  </div>
                  <CardTitle className="text-warm-gold">Email</CardTitle>
                  <CardDescription>General Inquiries</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="mailto:contact@anupamahospital.com" className="text-lg font-medium text-warm-gold hover:underline block mb-2">
                    contact@anupamahospital.com
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Email us anytime
                  </p>
                  <Badge variant="outline" className="mt-2 border-warm-gold/30 text-warm-gold">24hr Response</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Department Contacts & Forms */}
        <section className="py-16 bg-warm-ivory/30">
          <div className="container">
            <Tabs defaultValue="departments" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="departments">Departments</TabsTrigger>
                <TabsTrigger value="appointment">Book Appointment</TabsTrigger>
                <TabsTrigger value="feedback">Feedback & Support</TabsTrigger>
              </TabsList>

              {/* Departments Tab */}
              <TabsContent value="departments">
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  {departments.map((dept, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow bg-warm-ivory border-warm-sage/10">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-warm-sage/10 rounded-full flex items-center justify-center">
                            <dept.icon className="h-6 w-6 text-warm-sage" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-warm-gray">{dept.name}</CardTitle>
                            <CardDescription>{dept.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <a href={`tel:${dept.phone.replace(/\s/g, '')}`} className="font-medium hover:text-primary">
                            {dept.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <a href={`mailto:${dept.email}`} className="text-muted-foreground hover:text-primary text-sm">
                            {dept.email}
                          </a>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <span className="text-muted-foreground text-sm">{dept.hours}</span>
                        </div>
                        <Separator />
                        <Button className="w-full bg-warm-sage hover:bg-warm-sage/90 text-white" variant="outline">
                          Contact {dept.name}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Appointment Form Tab */}
              <TabsContent value="appointment">
                <Card className="mt-8 bg-warm-ivory border-warm-sage/10">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif text-warm-teal">Book Your Appointment</CardTitle>
                    <CardDescription>
                      Fill out this form and we'll contact you within 2 hours to confirm your appointment
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">First Name *</label>
                          <Input placeholder="John" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Last Name *</label>
                          <Input placeholder="Doe" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone Number *</label>
                          <Input placeholder="+91 98765 43210" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email Address</label>
                          <Input placeholder="john@example.com" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Department *</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select department" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cardiology">Cardiology</SelectItem>
                              <SelectItem value="emergency">Emergency Care</SelectItem>
                              <SelectItem value="general">General Consultation</SelectItem>
                              <SelectItem value="followup">Follow-up Visit</SelectItem>
                              <SelectItem value="second-opinion">Second Opinion</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Preferred Date</label>
                          <Input type="date" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <Textarea 
                          placeholder="Please describe your symptoms, reason for visit, or any specific requirements..."
                          rows={4}
                        />
                      </div>

                      <div className="bg-warm-sage/5 rounded-lg p-4">
                        <h4 className="font-medium mb-2 text-warm-teal">What happens next?</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>-  We'll call you within 2 hours to confirm your appointment</li>
                          <li>-  You'll receive SMS confirmation with appointment details</li>
                          <li>-  Please arrive 15 minutes early with valid ID and insurance documents</li>
                        </ul>
                      </div>

                      <Button className="w-full bg-warm-gold hover:bg-warm-gold/90 text-white" size="lg">
                        <Calendar className="mr-2 h-4 w-4" />
                        Submit Appointment Request
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        * Required fields. For emergency cases, please call +91-612-267-0992 immediately.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Feedback Tab */}
              <TabsContent value="feedback">
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <Card className="bg-warm-ivory border-warm-sage/10">
                    <CardHeader>
                      <CardTitle className="text-2xl font-serif text-warm-teal">Share Your Feedback</CardTitle>
                      <CardDescription>
                        Your feedback helps us improve our services and patient care
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <Input placeholder="Your name" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <Input placeholder="your.email@example.com" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Feedback Type</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select feedback type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="compliment">Compliment</SelectItem>
                              <SelectItem value="suggestion">Suggestion</SelectItem>
                              <SelectItem value="complaint">Complaint</SelectItem>
                              <SelectItem value="question">Question</SelectItem>
                              <SelectItem value="billing">Billing Issue</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Your Feedback</label>
                          <Textarea 
                            placeholder="Please share your feedback, suggestions, or concerns..."
                            rows={6}
                          />
                        </div>

                        <Button className="w-full bg-warm-sage hover:bg-warm-sage/90 text-white" size="lg">
                          <Send className="mr-2 h-4 w-4" />
                          Submit Feedback
                        </Button>
                      </form>
                    </CardContent>
                  </Card>

                  <Card className="bg-warm-ivory border-warm-sage/10">
                    <CardHeader>
                      <CardTitle className="text-warm-teal">Other Ways to Reach Us</CardTitle>
                      <CardDescription>Alternative contact methods for your convenience</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-3 text-warm-sage">Patient Relations</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-warm-sage" />
                            <span className="text-sm">+91-612-267-0995</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-warm-sage" />
                            <span className="text-sm">patient.relations@anupamahospital.com</span>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-medium mb-3 text-warm-sage">Media & Press Inquiries</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-warm-sage" />
                            <span className="text-sm">media@anupamahospital.com</span>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-medium mb-3 text-warm-sage">Career Opportunities</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-warm-sage" />
                            <span className="text-sm">careers@anupamahospital.com</span>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-medium mb-3 text-warm-sage">Social Media</h4>
                        <div className="flex space-x-4">
                          <Button variant="outline" size="sm" className="border-warm-sage/30 text-warm-sage hover:bg-warm-sage/10">Facebook</Button>
                          <Button variant="outline" size="sm" className="border-warm-sage/30 text-warm-sage hover:bg-warm-sage/10">Twitter</Button>
                          <Button variant="outline" size="sm" className="border-warm-sage/30 text-warm-sage hover:bg-warm-sage/10">LinkedIn</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Location & Directions */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-serif text-warm-teal">Visit Our Hospital</h2>
              <p className="text-xl text-muted-foreground">
                Conveniently located in the heart of Patna with easy access from all directions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Location Info */}
              <div className="space-y-8">
                <Card className="bg-warm-ivory border-warm-sage/10">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-warm-sage" />
                      <span className="text-warm-teal">Hospital Address</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Anupama Hospital Pvt Ltd<br />
                      Medical College Road, Near AIIMS Patna<br />
                      Patna, Bihar 800004<br />
                      India
                    </p>
                    <div className="flex space-x-3">
                      <Button variant="outline" className="border-warm-sage/30 text-warm-sage hover:bg-warm-sage/10">
                        <Navigation className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                      <Button variant="outline" className="border-warm-sage/30 text-warm-sage hover:bg-warm-sage/10">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Hospital
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-warm-ivory border-warm-sage/10">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-warm-sage" />
                      <span className="text-warm-teal">Hours of Operation</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span>OPD Hours:</span>
                      <span className="font-medium">Monday-Saturday: 8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday OPD:</span>
                      <span className="font-medium">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Emergency:</span>
                      <span className="font-medium text-warm-burgundy">24/7 Available</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Visiting Hours:</span>
                      <span className="font-medium">4:00 PM - 8:00 PM</span>
                    </div>
                    <Separator />
                    <p className="text-sm text-muted-foreground">
                      Emergency services are available 24/7 throughout the year. 
                      For non-emergency visits, please schedule an appointment in advance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-warm-ivory border-warm-sage/10">
                  <CardHeader>
                    <CardTitle className="text-warm-teal">Transportation & Parking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Car className="h-5 w-5 text-warm-sage" />
                        <div>
                          <p className="font-medium">By Car/Taxi</p>
                          <p className="text-sm text-muted-foreground">Free parking available for 200+ vehicles</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Bus className="h-5 w-5 text-warm-sage" />
                        <div>
                          <p className="font-medium">Public Transport</p>
                          <p className="text-sm text-muted-foreground">Bus routes: 12, 15, 23, 28 - Stop: Medical College</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-warm-sage" />
                        <div>
                          <p className="font-medium">Hospital Ambulance</p>
                          <p className="text-sm text-muted-foreground">24/7 ambulance service: +91-612-267-0992</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map Placeholder */}
              <div className="relative">
                <div className="bg-muted rounded-2xl aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">Interactive Map</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Anupama Hospital Location
                    </p>
                    <Badge className="bg-warm-sage/10 text-warm-sage border-warm-sage/20">Medical College Road, Patna</Badge>
                  </div>
                </div>
                <Button className="absolute bottom-4 right-4 bg-warm-sage hover:bg-warm-sage/90 text-white">
                  <Navigation className="mr-2 h-4 w-4" />
                  Open in Maps
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-warm-sage to-warm-teal text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6 font-serif">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us today to schedule your consultation or for any questions about our surgical care services. 
              Continuing Dr. Prasad's legacy, we're here to help you on your journey to better health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-warm-gold hover:bg-warm-gold/90 text-white">
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-warm-sage">
                <Phone className="mr-2 h-4 w-4" />
                Call +91-612-267-0991
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;