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
      description: "Continuing Dr. Prasad's legacy, established the hospital with vision to provide world-class surgical care locally. Performed over 3000 successful cardiac surgeries following Dr. Prasad's compassionate approach."
    },
    {
      name: "Mrs. Sunita Devi",
      position: "Hospital Administrator",
      experience: "25+ Years",
      qualifications: ["MBA Healthcare Management", "Hospital Administration Diploma"],
      description: "Oversees hospital operations ensuring highest standards of patient care following Dr. Prasad's philosophy. Expert in healthcare quality management and patient safety protocols."
    },
    {
      name: "Dr. Amit Kumar",
      position: "Head of Emergency Medicine",
      experience: "20+ Years",
      qualifications: ["MBBS", "MD Emergency Medicine", "Critical Care Certification"],
      description: "Leads the 24/7 emergency department with expertise in surgical emergency care. Established rapid response protocols that have saved thousands of lives."
    },
    {
      name: "Dr. Priya Singh",
      position: "Director of Surgery",
      experience: "18+ Years",
      qualifications: ["MBBS", "MS Surgery", "Fellowship Surgical Oncology"],
      description: "Leading surgeon specializing in complex procedures and surgical oncology. Expert in advanced surgical techniques with excellent outcomes, continuing Dr. Prasad's surgical excellence."
    }
  ];

  const drPrasadTimeline = [
    { 
      year: "1934", 
      event: "Birth", 
      description: "Born in Tiuri village, Nalanda district, Bihar - humble beginnings that shaped his compassionate approach to medicine" 
    },
    { 
      year: "1956", 
      event: "MBBS Achievement", 
      description: "Graduated with MBBS from Patna Medical College, beginning his medical journey" 
    },
    { 
      year: "1959", 
      event: "MS Surgery", 
      description: "Completed MS in Surgery, specializing in surgical excellence" 
    },
    { 
      year: "1962", 
      event: "FRCS London", 
      description: "Achieved FRCS (Fellowship of Royal College of Surgeons) from London - international recognition of surgical expertise" 
    },
    { 
      year: "1957", 
      event: "Bihar Health Service", 
      description: "Joined Bihar State Health Service, dedicated to serving the people of Bihar" 
    },
    { 
      year: "1958", 
      event: "First Posting", 
      description: "First posting in Saharsa's Thumha - beginning his rural healthcare service" 
    },
    { 
      year: "1962", 
      event: "PMCH Appointment", 
      description: "Appointed Resident Surgical Officer at Patna Medical College and Hospital" 
    },
    { 
      year: "1989", 
      event: "Head of Surgery", 
      description: "Became Head of Surgery Department at Patna Medical College and Hospital, leading surgical excellence" 
    },
    { 
      year: "1992", 
      event: "PMCH Retirement", 
      description: "Retired from PMCH after decades of dedicated service, but continued his medical practice" 
    },
    { 
      year: "2015", 
      event: "Padma Shri Award", 
      description: "Received Padma Shri from President Pranab Mukherjee for exceptional contributions to medicine" 
    },
    { 
      year: "2024", 
      event: "Memorial", 
      description: "Passed away, leaving behind a legacy of 100,000+ lives touched and compassionate healthcare philosophy" 
    }
  ];

  const hospitalMilestones = [
    { 
      year: "Foundation", 
      event: "Hospital Established", 
      description: "Founded on Dr. Prasad's legacy of compassionate surgical care and excellence" 
    },
    { 
      year: "Growth", 
      event: "Service Expansion", 
      description: "Expanded surgical services following Dr. Prasad's comprehensive care philosophy" 
    },
    { 
      year: "Present", 
      event: "Continuing Legacy", 
      description: "Today we continue Dr. Prasad's mission: 'Patients are our Gods' - compassionate care for all" 
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* About Hero */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-warm-sage/5 to-warm-teal/10">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-warm-gold/10 text-warm-gold border-warm-gold/20">Dr. Narendra Prasad's Legacy</Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
                  Our Legacy of{" "}
                  <span className="text-warm-teal">Excellence</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  The journey of Padma Shri Dr. Narendra Prasad (1934-2024) and Anupama Hospital - from humble beginnings in Tiuri village to touching over 100,000 lives through compassionate surgical care.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-warm-sage">100,000+</div>
                    <div className="text-sm text-muted-foreground">Lives Touched</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-warm-teal">60+</div>
                    <div className="text-sm text-muted-foreground">Years of Service</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-warm-gold">Padma Shri</div>
                    <div className="text-sm text-muted-foreground">2015 Award</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-warm-burgundy">FRCS</div>
                    <div className="text-sm text-muted-foreground">1962 London</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-warm-sage/10 to-warm-teal/5 rounded-2xl p-8">
                  <div className="bg-warm-ivory rounded-xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 font-serif">Dr. Prasad's Philosophy</h3>
                    <p className="text-muted-foreground mb-4 italic">
                      "Patients are our Gods. The more they come, the more we learn and serve humanity."
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Continuing this legacy of compassionate care where world-class surgical expertise meets genuine human compassion.
                    </p>
                    <div className="flex items-center space-x-2 text-warm-sage">
                      <Heart className="h-5 w-5" />
                      <span className="font-semibold">Caring Hearts, Healing Lives</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dr. Prasad's Legacy Timeline */}
        <section className="py-16 bg-warm-ivory/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-serif">Dr. Narendra Prasad's Journey</h2>
              <p className="text-xl text-muted-foreground">
                From humble beginnings to national recognition - a life dedicated to compassionate surgical care
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {drPrasadTimeline.map((milestone, index) => (
                  <div key={milestone.year} className="flex items-center space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-warm-sage rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <Card className="hover:shadow-lg transition-shadow bg-warm-ivory border-warm-sage/10">
                        <CardHeader>
                          <CardTitle className="text-xl text-warm-teal">{milestone.event}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 bg-warm-sage/5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-serif">Continuing the Legacy</h2>
              <p className="text-xl text-muted-foreground">
                Our leadership team dedicated to carrying forward Dr. Prasad's compassionate care philosophy
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-warm-ivory border-warm-sage/10">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarFallback className="text-lg font-semibold bg-warm-sage/10 text-warm-sage">
                          {leader.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-warm-gray">{leader.name}</CardTitle>
                        <CardDescription className="text-warm-teal font-medium">
                          {leader.position}
                        </CardDescription>
                        <Badge variant="secondary" className="mt-2 bg-warm-gold/10 text-warm-gold border-warm-gold/20">
                          {leader.experience}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{leader.description}</p>
                      <div>
                        <p className="font-medium text-sm mb-2 text-warm-gray">Qualifications:</p>
                        <div className="flex flex-wrap gap-1">
                          {leader.qualifications.map((qual) => (
                            <Badge key={qual} variant="outline" className="text-xs border-warm-sage/30 text-warm-sage">
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

        {/* Dr. Prasad's Legacy Values */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow bg-warm-ivory border-warm-sage/10">
                <CardHeader>
                  <div className="w-16 h-16 bg-warm-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-warm-sage" />
                  </div>
                  <CardTitle className="text-2xl font-serif text-warm-teal">Dr. Prasad's Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Patients are our Gods" - To provide world-class surgical care with compassion, 
                    making advanced treatment accessible to all, especially the economically disadvantaged.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-warm-ivory border-warm-sage/10">
                <CardHeader>
                  <div className="w-16 h-16 bg-warm-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-warm-teal" />
                  </div>
                  <CardTitle className="text-2xl font-serif text-warm-teal">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To be the leading surgical care center in Eastern India, continuing Dr. Prasad's 
                    legacy of compassionate care that transforms lives through excellence and humanity.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-warm-ivory border-warm-sage/10">
                <CardHeader>
                  <div className="w-16 h-16 bg-warm-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Handshake className="h-8 w-8 text-warm-gold" />
                  </div>
                  <CardTitle className="text-2xl font-serif text-warm-teal">Dr. Prasad's Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• "Patients are our Gods"</li>
                    <li>• Compassionate Care</li>
                    <li>• Surgical Excellence</li>
                    <li>• Free Care for the Needy</li>
                    <li>• Human Connection</li>
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

        {/* Dr. Prasad's Awards & Recognition */}
        <section className="py-16 bg-warm-sage text-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-serif">Dr. Prasad's Awards & Recognition</h2>
              <p className="text-xl opacity-90">
                National recognition for exceptional contributions to medicine and compassionate care
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-warm-gold" />
                </div>
                <h3 className="font-semibold mb-2">Padma Shri Award</h3>
                <p className="text-sm opacity-80">2015 - India's fourth highest civilian honor for contributions to medicine</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-warm-gold" />
                </div>
                <h3 className="font-semibold mb-2">FRCS London</h3>
                <p className="text-sm opacity-80">1962 - Fellowship of Royal College of Surgeons, London</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-warm-gold" />
                </div>
                <h3 className="font-semibold mb-2">IMA Leadership</h3>
                <p className="text-sm opacity-80">President, Association of Surgeons of India (Bihar chapter)</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-warm-gold" />
                </div>
                <h3 className="font-semibold mb-2">100,000+ Lives</h3>
                <p className="text-sm opacity-80">Lives touched through compassionate surgical care throughout his career</p>
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