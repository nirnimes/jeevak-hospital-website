import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Shield, 
  Clock, 
  Heart, 
  Zap,
  MapPin,
  Users,
  CheckCircle,
  AlertTriangle,
  Activity,
  Ambulance
} from "lucide-react";

const Emergency = () => {
  const emergencySymptoms = [
    {
      category: "Heart Attack",
      symptoms: [
        "Chest pain or pressure",
        "Shortness of breath",
        "Nausea or vomiting",
        "Sweating",
        "Pain in arm, jaw, or back"
      ],
      action: "Call immediately - every minute counts"
    },
    {
      category: "Stroke",
      symptoms: [
        "Sudden numbness or weakness",
        "Confusion or trouble speaking",
        "Trouble seeing",
        "Severe headache",
        "Loss of balance"
      ],
      action: "Call immediately - time is critical"
    },
    {
      category: "Cardiac Arrest",
      symptoms: [
        "Sudden loss of consciousness",
        "No breathing",
        "No pulse",
        "Chest pain before collapse",
        "Dizziness or fainting"
      ],
      action: "Call immediately and start CPR if trained"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Emergency Hero */}
        <section className="py-12 bg-destructive text-destructive-foreground">
          <div className="container">
            <div className="text-center space-y-6">
              <Badge variant="secondary" className="bg-destructive-foreground/20 text-destructive-foreground">
                24/7 Emergency
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold">
                Cardiac Emergency?
                <br />
                <span className="text-destructive-foreground/90">We're Here 24/7</span>
              </h1>

              <p className="text-xl max-w-2xl mx-auto opacity-90">
                When every second matters, our expert emergency team is ready to provide 
                life-saving cardiac care around the clock.
              </p>

              {/* Emergency Contact - Prominent */}
              <div className="bg-destructive-foreground/10 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <Phone className="h-8 w-8" />
                  <span className="text-3xl font-bold">Emergency Hotline</span>
                </div>
                <a href="tel:+916122670992" className="text-5xl md:text-6xl font-bold block mb-4 hover:underline">
                  +91-612-267-0992
                </a>
                <p className="text-lg opacity-90">
                  Available 24/7 - Average Response Time: &lt; 5 minutes
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                  <Ambulance className="mr-2 h-5 w-5" />
                  Request Ambulance
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-destructive-foreground text-destructive-foreground hover:bg-destructive-foreground hover:text-destructive">
                  <MapPin className="mr-2 h-5 w-5" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* When to Call Emergency */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">When to Call Emergency</h2>
              <p className="text-xl text-muted-foreground">
                Recognize these warning signs and call immediately
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {emergencySymptoms.map((emergency, index) => (
                <Card key={index} className="border-destructive/20">
                  <CardHeader>
                    <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mb-3">
                      <AlertTriangle className="h-6 w-6 text-destructive" />
                    </div>
                    <CardTitle className="text-destructive">{emergency.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {emergency.symptoms.map((symptom, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-destructive mt-1">• </span>
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>Action Required</AlertTitle>
                      <AlertDescription>{emergency.action}</AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Process */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What to Expect</h2>
              <p className="text-xl text-muted-foreground">Our emergency response process</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Call Emergency</h3>
                <p className="text-sm text-muted-foreground">
                  Call +91-612-267-0992 and describe the emergency
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Rapid Response</h3>
                <p className="text-sm text-muted-foreground">
                  Our team activates emergency protocols immediately
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Expert Treatment</h3>
                <p className="text-sm text-muted-foreground">
                  Specialized cardiac emergency team provides care
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Follow-up Care</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous monitoring and recovery support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Team */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Emergency Medical Team</h2>
              <p className="text-xl text-muted-foreground">Expert specialists available 24/7</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>Emergency Physicians</CardTitle>
                  <CardDescription>Board-certified emergency medicine specialists</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• 24/7 availability</li>
                    <li>• Cardiac emergency experts</li>
                    <li>• Advanced life support certified</li>
                    <li>• 15+ years average experience</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>Cardiac Surgeons</CardTitle>
                  <CardDescription>On-call cardiac surgery specialists</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• On-call 24/7</li>
                    <li>• Emergency surgery ready</li>
                    <li>• 3000+ surgeries performed</li>
                    <li>• International training</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>Critical Care Team</CardTitle>
                  <CardDescription>ICU and CCU specialists</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• 24/7 intensive care</li>
                    <li>• Advanced monitoring</li>
                    <li>• Ventilator support</li>
                    <li>• Rapid response team</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Emergency Facilities */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Emergency Facilities</h2>
              <p className="text-xl text-muted-foreground">State-of-the-art emergency infrastructure</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Activity className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">ICU & CCU</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Advanced cardiac monitoring and life support systems
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Zap className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Cath Lab</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    24/7 cardiac catheterization laboratory for emergency procedures
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Ambulance className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Ambulance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Fully equipped cardiac ambulance with paramedic support
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Blood Bank</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    On-site blood bank with all blood types available 24/7
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Emergency Location</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 mt-1" />
                    <div>
                      <div className="font-semibold">Anupama Hospital Pvt Ltd</div>
                      <div className="opacity-90">
                        Emergency Entrance: Main Gate<br />
                        Medical College Road, Patna<br />
                        Bihar 800004, India
                      </div>
                    </div>
                  </div>
                  <Separator className="bg-primary-foreground/20" />
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6" />
                    <div>
                      <div className="font-semibold">Emergency Hotline</div>
                      <div className="text-2xl font-bold">+91-612-267-0992</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6" />
                    <div>
                      <div className="font-semibold">Availability</div>
                      <div className="opacity-90">24 hours, 7 days a week, 365 days a year</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-6 w-6" />
                    <div>
                      <div className="font-semibold">Response Time</div>
                      <div className="opacity-90">Average: &lt; 5 minutes</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary-foreground/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Emergency Checklist</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                      <span className="text-sm">✓</span>
                    </div>
                    <span>Call +91-612-267-0992 immediately</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                      <span className="text-sm">✓</span>
                    </div>
                    <span>Stay calm and follow operator instructions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                      <span className="text-sm">✓</span>
                    </div>
                    <span>Have patient's medical history ready</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                      <span className="text-sm">✓</span>
                    </div>
                    <span>Bring ID and insurance documents</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                      <span className="text-sm">✓</span>
                    </div>
                    <span>Note the time symptoms started</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Emergency;