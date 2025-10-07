import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Heart, 
  Target, 
  Eye, 
  Handshake, 
  Building, 
  Shield, 
  Users, 
  Award, 
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const About = () => {
  const leadership = [
    {
      name: "Dr. Rajesh Sharma",
      position: "Chief Medical Officer & Founder",
      experience: "30+ Years",
      qualifications: ["MBBS", "MS Cardiothoracic Surgery", "Fellowship Harvard Medical School"],
      description: "Pioneered cardiac surgery in Bihar, established the hospital with vision to provide world-class heart care locally. Performed over 3000 successful cardiac surgeries."
    },
    {
      name: "Mrs. Sunita Devi",
      position: "Hospital Administrator",
      experience: "25+ Years",
      qualifications: ["MBA Healthcare Management", "Hospital Administration Diploma"],
      description: "Oversees hospital operations ensuring highest standards of patient care and service excellence. Expert in healthcare quality management and patient safety protocols."
    },
    {
      name: "Dr. Amit Kumar",
      position: "Head of Emergency Medicine",
      experience: "20+ Years",
      qualifications: ["MBBS", "MD Emergency Medicine", "Critical Care Certification"],
      description: "Leads the 24/7 emergency department with expertise in cardiac emergency care. Established rapid response protocols that have saved thousands of lives."
    },
    {
      name: "Dr. Priya Singh",
      position: "Director of Cardiology",
      experience: "18+ Years",
      qualifications: ["MBBS", "MD Medicine", "DM Cardiology"],
      description: "Leading cardiologist specializing in interventional procedures and preventive cardiology. Expert in complex cardiac interventions with excellent outcomes."
    }
  ];

  const milestones = [
    { 
      year: "1998", 
      event: "Hospital Founded", 
      description: "Established as Bihar's first super-specialty cardiac hospital by Dr. Rajesh Sharma" 
    },
    { 
      year: "2000", 
      event: "1000th Surgery", 
      description: "Completed milestone of 1000 successful cardiac procedures within 2 years" 
    },
    { 
      year: "2002", 
      event: "Emergency Services", 
      description: "Launched 24/7 emergency cardiac care services for the region" 
    },
    { 
      year: "2005", 
      event: "CGHS Recognition", 
      description: "Approved by Central Government Health Scheme for employee treatment" 
    },
    { 
      year: "2008", 
      event: "Advanced Equipment", 
      description: "Installed state-of-the-art cardiac catheterization laboratory" 
    },
    { 
      year: "2012", 
      event: "3000th Surgery", 
      description: "Achieved milestone of 3000 successful cardiac surgeries" 
    },
    { 
      year: "2015", 
      event: "5000th Surgery", 
      description: "Completed 5000 successful cardiac procedures with 98%+ success rate" 
    },
    { 
      year: "2018", 
      event: "20 Years Milestone", 
      description: "Celebrated 20 years of serving Bihar with world-class cardiac care" 
    },
    { 
      year: "2020", 
      event: "COVID Response", 
      description: "Maintained essential cardiac services during pandemic with strict safety protocols" 
    },
    { 
      year: "2022", 
      event: "Research Institute", 
      description: "Established cardiac research wing for medical advancement" 
    },
    { 
      year: "2024", 
      event: "10,000+ Lives Saved", 
      description: "Reached landmark milestone of saving over 10,000 lives through cardiac care" 
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* About Hero */}
        <section className="py-responsive bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container-responsive">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <Badge className="mb-4">Our Story</Badge>
                <h1 className="text-responsive-4xl font-bold mb-6">
                  26 Years of{" "}
                  <span className="text-primary">Transforming Lives</span>
                </h1>
                <p className="text-responsive-xl text-muted-foreground mb-8">
                  From a vision to provide world-class cardiac care in Bihar to becoming the region's most trusted heart hospital, our journey has been one of dedication, innovation, and compassion.
                </p>
                <div className="grid-responsive-2">
                  <div>
                    <div className="text-3xl font-bold text-primary">10,000+</div>
                    <div className="text-sm text-muted-foreground">Lives Saved</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">5,000+</div>
                    <div className="text-sm text-muted-foreground">Surgeries</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">98.5%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">26</div>
                    <div className="text-sm text-muted-foreground">Years Excellence</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-muted-foreground mb-4">
                      To provide world-class cardiac care with compassion, making advanced heart treatment accessible to everyone in Bihar and surrounding regions.
                    </p>
                    <div className="flex items-center space-x-2 text-primary">
                      <Heart className="h-5 w-5" />
                      <span className="font-semibold">Caring Hearts, Healing Lives</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hospital Journey Timeline */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground">
                Milestones that shaped Bihar's cardiac care landscape
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className={`flex items-center space-x-3 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                            <Badge variant="outline" className="text-primary border-primary">
                              {milestone.year}
                            </Badge>
                            <CardTitle className="text-lg">{milestone.event}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-overflow-fix break-words">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg relative z-10"></div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
              <p className="text-xl text-muted-foreground">
                Experienced leaders dedicated to excellence in healthcare
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                          {leader.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{leader.name}</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {leader.position}
                        </CardDescription>
                        <Badge variant="secondary" className="mt-2">
                          {leader.experience}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{leader.description}</p>
                      <div>
                        <p className="font-medium text-sm mb-2">Qualifications:</p>
                        <div className="flex flex-wrap gap-1">
                          {leader.qualifications.map((qual) => (
                            <Badge key={qual} variant="outline" className="text-xs">
                              {qual}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To provide world-class cardiac care with compassion, innovation, and 
                    excellence, making advanced heart treatment accessible to all in Bihar 
                    and surrounding regions.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To be the leading cardiac care center in Eastern India, recognized for 
                    clinical excellence, research innovation, and compassionate patient care 
                    that transforms lives.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Handshake className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Compassionate Care</li>
                    <li>• Clinical Excellence</li>
                    <li>• Patient Safety First</li>
                    <li>• Ethical Practice</li>
                    <li>• Continuous Innovation</li>
                    <li>• Community Service</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Hospital Facilities */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">World-Class Facilities</h2>
              <p className="text-xl text-muted-foreground">
                State-of-the-art infrastructure for comprehensive cardiac care
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Building className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">ICU & CCU</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    24-bed intensive care unit with advanced cardiac monitoring
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Heart className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Cath Lab</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Advanced cardiac catheterization laboratory for diagnostics and interventions
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
                    Lions Jeevan Blood Bank with 24/7 availability of all blood groups
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Operation Theaters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    4 fully equipped cardiac operation theaters with latest technology
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
              <p className="text-xl opacity-90">
                Recognition for excellence in cardiac care and patient service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">CGHS Approved</h3>
                <p className="text-sm opacity-80">Central Government Health Scheme Recognition for Quality Care</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">ISO Certified</h3>
                <p className="text-sm opacity-80">ISO 9001:2015 Quality Management System Certification</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">NABH Accredited</h3>
                <p className="text-sm opacity-80">National Accreditation Board for Hospitals & Healthcare</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Best Hospital</h3>
                <p className="text-sm opacity-80">Bihar State Healthcare Excellence Award 2023</p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Impact */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
              <p className="text-xl text-muted-foreground">
                Serving Bihar and beyond with dedication to community health
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <span>Free Cardiac Camps</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Regular free cardiac screening camps in rural areas of Bihar, 
                    providing early detection and treatment guidance.
                  </p>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Camps Conducted</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Medical Training</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Training programs for nurses, technicians, and medical students 
                    to build cardiac care capacity in the region.
                  </p>
                  <div className="text-2xl font-bold text-primary">2000+</div>
                  <div className="text-sm text-muted-foreground">Professionals Trained</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Handshake className="h-5 w-5 text-primary" />
                    <span>Charity Care</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Subsidized and free cardiac treatment for economically 
                    disadvantaged patients through our charity care program.
                  </p>
                  <div className="text-2xl font-bold text-primary">₹2 Cr+</div>
                  <div className="text-sm text-muted-foreground">Charity Care Provided</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of our journey to transform cardiac care in Bihar. 
              Whether as a patient, partner, or team member, together we can save more lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Career Opportunities
              </Button>
              <Button size="lg" variant="outline">
                Partnership Inquiries
              </Button>
              <Button size="lg" variant="outline">
                Volunteer Programs
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;