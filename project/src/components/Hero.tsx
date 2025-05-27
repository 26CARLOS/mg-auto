import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-custom text-center text-white relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fade-in">
          German Vehicle <span className="text-red-600">Specialists</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
          Expert service and repair for Mercedes-Benz and all German luxury vehicles
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <a href="#services" className="btn btn-primary w-full sm:w-auto">
            Our Services
          </a>
          <a href="#booking" className="btn btn-outline border-white text-white hover:bg-white hover:text-navy-900 w-full sm:w-auto">
            Book Appointment
          </a>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 text-center">
          <a 
            href="#services" 
            className="inline-block text-white animate-bounce"
            aria-label="Scroll down"
          >
            <ChevronDown size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;