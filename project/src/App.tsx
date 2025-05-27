import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title for SEO
    document.title = "MG Auto Care | German & Mercedes-Benz Specialists | Los Angeles";
    
    // Add meta description for SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Expert Mercedes-Benz and German vehicle repair in Los Angeles. Factory-trained specialists for BMW, Audi, Porsche, and VW. Schedule your service today!';
    document.head.appendChild(metaDescription);
    
    // Add other SEO meta tags
    const metaTags = [
      { name: 'keywords', content: 'Mercedes-Benz repair, German car specialists, BMW service, Audi repair, Porsche maintenance, Los Angeles mechanic, German auto care' },
      { property: 'og:title', content: 'MG Auto Care | German & Mercedes-Benz Specialists' },
      { property: 'og:description', content: 'Expert Mercedes-Benz and German vehicle repair in Los Angeles. Factory-trained specialists for BMW, Audi, Porsche, and VW.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.mgautocare.com' },
      { property: 'og:image', content: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'MG Auto Care | German & Mercedes-Benz Specialists' },
      { name: 'twitter:description', content: 'Expert Mercedes-Benz and German vehicle repair in Los Angeles. Factory-trained specialists for BMW, Audi, Porsche, and VW.' },
      { name: 'twitter:image', content: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg' },
    ];
    
    metaTags.forEach(tag => {
      const metaTag = document.createElement('meta');
      Object.keys(tag).forEach(key => {
        metaTag.setAttribute(key, tag[key]);
      });
      document.head.appendChild(metaTag);
    });
    
    // Add schema markup for local business
    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'AutoRepair',
      'name': 'MG Auto Care',
      'description': 'Specialized automotive service for Mercedes-Benz and German vehicles with factory-trained technicians.',
      'image': 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg',
      'telephone': '+15551234567',
      'email': 'service@mgautocare.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '1234 Auto Center Drive',
        'addressLocality': 'Los Angeles',
        'addressRegion': 'CA',
        'postalCode': '90001',
        'addressCountry': 'US'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 34.0522,
        'longitude': -118.2437
      },
      'openingHours': [
        'Mo-Fr 08:00-18:00',
        'Sa 09:00-15:00'
      ],
      'priceRange': '$$',
      'servesCuisine': 'German Vehicles, Mercedes-Benz, BMW, Audi, Porsche, Volkswagen'
    });
    document.head.appendChild(scriptTag);
    
    // Clean up
    return () => {
      document.head.removeChild(metaDescription);
      metaTags.forEach((_, index) => {
        const metaTag = document.head.querySelector(`meta:nth-of-type(${index + 2})`);
        if (metaTag) document.head.removeChild(metaTag);
      });
      document.head.removeChild(scriptTag);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;