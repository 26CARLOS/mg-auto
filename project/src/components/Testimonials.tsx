import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  vehicle: string;
  content: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "James Wilson",
      vehicle: "Mercedes-Benz E350",
      content: "MG Auto Care is the only place I trust with my Mercedes. They diagnosed an issue that the dealership missed and fixed it for half the price. Exceptional service and expertise!",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      vehicle: "BMW 540i",
      content: "As a BMW owner, finding mechanics who truly understand these vehicles is challenging. Michael and his team are outstanding. They're knowledgeable, transparent about costs, and deliver quality work every time.",
      rating: 5
    },
    {
      id: 3,
      name: "Robert Chen",
      vehicle: "Audi Q7",
      content: "I've been taking my Audi to MG Auto Care for 3 years now. Their attention to detail and expertise with German vehicles is impressive. Highly recommend for any Audi owner.",
      rating: 5
    },
    {
      id: 4,
      name: "Emily Davis",
      vehicle: "Mercedes-Benz GLC300",
      content: "After being disappointed with dealership service, I found MG Auto Care. What a difference! They took the time to explain everything and fixed my Mercedes right the first time. Customer for life!",
      rating: 5
    },
    {
      id: 5,
      name: "Michael Thompson",
      vehicle: "Porsche Cayenne",
      content: "Finding someone who knows Porsche vehicles is difficult, but MG Auto Care exceeded my expectations. Professional service, fair pricing, and genuine expertise. Won't take my Cayenne anywhere else.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Create star rating display
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={20} 
        className={`${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="section bg-navy-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Customer <span className="text-red-600">Testimonials</span></h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Don't just take our word for it - hear what our customers have to say about our German vehicle services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-navy-800 rounded-lg p-8 shadow-lg">
                    <div className="flex mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <blockquote className="text-lg mb-6 italic">"{testimonial.content}"</blockquote>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.vehicle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -ml-4 bg-red-600 rounded-full p-2 text-white hover:bg-red-700 transition-colors focus:outline-none"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 -mr-4 bg-red-600 rounded-full p-2 text-white hover:bg-red-700 transition-colors focus:outline-none"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-red-600' : 'bg-gray-500'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;