import React, { useState } from 'react';
import { Calendar, Clock, Car } from 'lucide-react';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    make: '',
    model: '',
    year: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    alert('Thank you for booking an appointment! We will contact you shortly to confirm.');
    // Reset the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      make: '',
      model: '',
      year: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <section id="booking" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book an <span className="text-red-600">Appointment</span></h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Schedule your German vehicle service with our specialist technicians.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 bg-navy-900 p-8 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-6">Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">✓</span>
                  <span>German vehicle specialists with factory training</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">✓</span>
                  <span>State-of-the-art diagnostic equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">✓</span>
                  <span>Genuine and OEM parts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">✓</span>
                  <span>Comprehensive warranty on all services</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">✓</span>
                  <span>Transparent pricing with no hidden fees</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <p className="font-medium">Need immediate assistance?</p>
                <a href="tel:+15551234567" className="text-xl font-bold text-red-500 hover:text-red-400">
                  (555) 123-4567
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-3 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Type*</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select Service</option>
                      <option value="maintenance">Regular Maintenance</option>
                      <option value="repair">Repair Service</option>
                      <option value="diagnostic">Diagnostic Check</option>
                      <option value="electrical">Electrical Systems</option>
                      <option value="engine">Engine Service</option>
                      <option value="transmission">Transmission Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Make*</label>
                    <input
                      type="text"
                      id="make"
                      name="make"
                      value={formData.make}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="e.g. Mercedes-Benz"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Model*</label>
                    <input
                      type="text"
                      id="model"
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="e.g. E350"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Year*</label>
                    <input
                      type="text"
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="e.g. 2020"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date*</label>
                    <div className="relative">
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time*</label>
                    <div className="relative">
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Please describe the issue or service needed"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Book Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;