import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const expertise = [
    "Factory-trained Mercedes-Benz specialists",
    "Over 20 years of German vehicle repair experience",
    "Dealer-level diagnostic equipment",
    "Original and OEM parts",
    "Specialized in German automotive engineering",
    "Continuous training on the latest models and technology"
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="text-red-600">MG Auto Care</span></h2>
            <p className="text-gray-700 mb-6">
              At MG Auto Care, we specialize exclusively in German automobiles, with particular expertise in all Mercedes-Benz models. Our passion for German engineering excellence drives our commitment to providing the highest quality service and repairs.
            </p>
            <p className="text-gray-700 mb-6">
              Founded by Master Technician Michael Gauss, our shop combines dealer-level expertise with personalized service at competitive rates. We understand the precision engineering that makes German vehicles exceptional, and we match that precision in our work.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Our Expertise:</h3>
            <ul className="space-y-3 mb-8">
              {expertise.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
          </div>
          
          <div className="order-1 lg:order-2 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.pexels.com/photos/3807455/pexels-photo-3807455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Mechanic working on a German luxury car" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;