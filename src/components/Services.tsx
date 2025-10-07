import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Bone, 
  Stethoscope, 
  Siren, 
  Baby, 
  Users,
  Brain,
  Eye,
  Activity,
  Pill,
  Microscope,
  Shield,
  Phone,
  Calendar,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive cardiac care with cutting-edge technology and experienced cardiologists.",
      specialties: [
        "Angioplasty & Stenting",
        "Bypass Surgery",
        "Valve Replacement",
        "Cardiac Rehabilitation"
      ],
      color: "text-red-500",
      bgColor: "bg-red-50",
      hoverColor: "hover:bg-red-100",
      borderColor: "border-red-200"
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Expert treatment for musculoskeletal conditions with advanced surgical techniques.",
      specialties: [
        "Joint Replacement",
        "Sports Medicine",
        "Spine Surgery",
        "Trauma Care"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
      borderColor: "border-blue-200"
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Specialized care for neurological disorders with state-of-the-art diagnostic tools.",
      specialties: [
        "Stroke Treatment",
        "Epilepsy Management",
        "Parkinson's Care",
        "Migraine Treatment"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
      borderColor: "border-purple-200"
    },
    {
      icon: Siren,
      title: "Emergency Care",
      description: "24/7 emergency services with rapid response and critical care expertise.",
      specialties: [
        "Trauma Center",
        "Cardiac Emergency",
        "Stroke Unit",
        "Pediatric Emergency"
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      hoverColor: "hover:bg-orange-100",
      borderColor: "border-orange-200"
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Compassionate care for children from newborns to adolescents.",
      specialties: [
        "Neonatal Care",
        "Vaccination Programs",
        "Growth Monitoring",
        "Pediatric Surgery"
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      hoverColor: "hover:bg-pink-100",
      borderColor: "border-pink-200"
    },
    {
      icon: Users,
      title: "Women's Health",
      description: "Comprehensive healthcare services tailored for women at every life stage.",
      specialties: [
        "Obstetrics",
        "Gynecology",
        "Maternal Care",
        "Fertility Treatment"
      ],
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      hoverColor: "hover:bg-teal-100",
      borderColor: "border-teal-200"
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Activity className="h-4 w-4" />
            <span className="text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            World-Class Medical Care
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Experience comprehensive healthcare with cutting-edge technology and compassionate professionals dedicated to your well-being
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`
                group relative overflow-hidden border-2 transition-all duration-300 ease-in-out
                hover:shadow-2xl hover:-translate-y-1 cursor-pointer
                ${service.borderColor} ${service.hoverColor}
                animate-fade-in h-full
              `}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                background: 'linear-gradient(to bottom, white, rgba(249, 250, 251, 0.5))'
              }}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
              
              <CardHeader className="relative pb-4">
                <div className={`
                  h-16 w-16 rounded-2xl flex items-center justify-center mb-6
                  transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
                  ${service.bgColor}
                `}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative space-y-6">
                {/* Specialties List */}
                <div className="space-y-3">
                  {service.specialties.map((specialty, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 text-sm text-gray-700 transition-all duration-200 group-hover:translate-x-1"
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <CheckCircle2 className={`h-5 w-5 mt-0.5 flex-shrink-0 ${service.color}`} />
                      <span className="font-medium">{specialty}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4 space-y-3">
                  <Button 
                    className="w-full group/btn bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-base transition-all duration-300 hover:shadow-lg"
                    size="lg"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                  
                  <button className="w-full flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors duration-200">
                    <Phone className="h-4 w-4" />
                    <span>Or call: 1800-123-4567</span>
                  </button>
                </div>
              </CardContent>

              {/* Hover effect border glow */}
              <div className="absolute inset-0 border-2 border-primary/0 rounded-lg transition-all duration-300 group-hover:border-primary/20" />
            </Card>
          ))}
        </div>

        {/* Additional Services Section */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              More Specialized Services
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { icon: Eye, name: "Ophthalmology" },
                { icon: Microscope, name: "Laboratory" },
                { icon: Pill, name: "Pharmacy" },
                { icon: Shield, name: "Preventive Care" }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{item.name}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our multidisciplinary approach ensures comprehensive care for all your healthcare needs. 
              From routine check-ups to complex procedures, we're here to support your health journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
