import React from 'react';
import { Wrench, Gauge, AlertTriangle, Cpu, File as Oil, RotateCw, Battery, AirVent, Car } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "Mercedes-Benz Repair",
      description: "Factory-trained technicians for all Mercedes-Benz models from classic to current.",
      icon: <Car className="text-red-600" size={36} />
    },
    {
      title: "German Car Specialists",
      description: "Expert service for BMW, Audi and Volkswagen vehicles.",
      icon: <Wrench className="text-red-600\" size={36} />
    },
    {
      title: "Diagnostic Services",
      description: "Advanced computer diagnostics to identify issues with German vehicle systems.",
      icon: <Cpu className="text-red-600" size={36} />
    },
    {
      title: "Engine Repair",
      description: "Complete engine repair and rebuilding services for German makes.",
      icon: <Gauge className="text-red-600\" size={36} />
    },
    {
      title: "Oil Service",
      description: "Premium oil changes using factory-approved lubricants for your German vehicle.",
      icon: <Oil className="text-red-600" size={36} />
    },
    {
      title: "Transmission Service",
      description: "Expert transmission repair and maintenance for optimal performance.",
      icon: <RotateCw className="text-red-600\" size={36} />
    },
    {
      title: "Electrical Systems",
      description: "Troubleshooting and repair of complex German vehicle electrical systems.",
      icon: <Battery className="text-red-600" size={36} />
    },
    {
      title: "Climate Control",
      description: "A/C and heating system repair for Mercedes and other German vehicles.",
      icon: <AirVent className="text-red-600\" size={36} />
    },
    {
      title: "Preventative Maintenance",
      description: "Factory-recommended maintenance to prevent costly repairs and extend vehicle life.",
      icon: <AlertTriangle className="text-red-600" size={36} />
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-red-600">Services</span></h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Specialized services for Mercedes-Benz and all German makes including BMW, Audi and Volkswagen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card p-6 hover:translate-y-[-5px]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn btn-primary">
            Schedule Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;