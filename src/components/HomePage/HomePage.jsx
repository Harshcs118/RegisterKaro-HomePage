import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2, Clock, Users, Shield } from 'lucide-react';
import './HomePage.css'; // For custom CSS beyond Tailwind

const HomePage = () => {
  const [selectedService, setSelectedService] = useState('registration');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFAQIndex, setActiveFAQIndex] = useState(null);

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      content: "RegisterKaro simplified our company formation process tremendously. Their expert team handled everything from documentation to filing, allowing us to focus on building our business.",
      name: "Rahul Sharma",
      position: "Founder, TechSphere Solutions",
      image: "https://i.pravatar.cc/60?img=1", // Random avatar from Pravatar
    },
    {
      id: 2,
      content: "The trademark registration service provided by RegisterKaro was exceptional. The process was smooth, transparent, and completed ahead of schedule. Highly recommended!",
      name: "Priya Patel",
      position: "CEO, StyleHouse Designs",
      image: "https://i.pravatar.cc/60?img=2", // Random avatar from Pravatar
    },
    {
      id: 3,
      content: "As a first-time entrepreneur, I was nervous about the legal aspects of starting a business. RegisterKaro guided me through every step with patience and professionalism.",
      name: "Vikram Singh",
      position: "Director, GreenEarth Organics",
      image: "https://i.pravatar.cc/60?img=3", // Random avatar from Pravatar
    },
  ];

  const faqs = [
    {
      question: 'How long does it take to register a company?',
      answer: 'The typical timeline for company registration is 10-15 working days, depending on the type of company and documentation readiness.'
    },
    {
      question: 'What documents are required for company registration?',
      answer: 'Required documents include PAN card, address proof, ID proof of directors, and proposed company name options.'
    },
    {
      question: 'What are the fees for company registration?',
      answer: 'Registration fees vary based on the type of company and share capital. Contact us for a detailed quote.'
    },
    {
      question: 'Do you provide post-registration support?',
      answer: 'Yes, we provide comprehensive post-registration support including compliance management and annual filing assistance.'
    }
  ];

   // Why Choose RegisterKaro features
   const features = [
    {
      icon: <CheckCircle2 className="w-8 h-8 text-white" />,
      title: 'Expert Guidance',
      description: 'Professional support throughout the process'
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: 'Quick Turnaround',
      description: 'Fast and efficient service delivery'
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: 'Dedicated Support',
      description: '24/7 customer support available'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Compliance Assured',
      description: '100% compliance with regulations'
    }
  ];

  // Toggle FAQ
  const toggleFAQ = (index) => {
    setActiveFAQIndex(activeFAQIndex === index ? null : index);
  };

  return (
    <div className="font-sans antialiased text-gray-800">
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'}`}>
  <div className="container mx-auto px-4 md:px-6">
    <div className="flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <div className="text-3xl font-bold gradient-text">RegisterKaro</div>
      </div>

      {/* Desktop Navigation (Hidden on Tablets) */}
      <div className="hidden lg:flex items-center space-x-8">
        <a href="#services" className="nav-link">Services</a>
        <a href="#about" className="nav-link">About Us</a>
        <a href="#testimonials" className="nav-link">Testimonials</a>
        <a href="#contact" className="nav-link">Contact</a>
        <button className="btn-outline mr-2">Login</button>
        <button className="btn-primary-gradient">Register Now</button>
      </div>

      {/* Mobile Menu Button (Visible on Tablets) */}
      <div className="lg:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu (Visible on Tablets) */}
  {isMenuOpen && (
    <div className="lg:hidden bg-white shadow-lg py-4 px-4 absolute w-full">
      <div className="flex flex-col space-y-4">
        <a href="#services" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Services</a>
        <a href="#about" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>About Us</a>
        <a href="#testimonials" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
        <a href="#contact" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Contact</a>
        <div className="flex space-x-2">
          <button className="btn-outline-mobile flex-1">Login</button>
          <button className="btn-primary-gradient-mobile flex-1">Register</button>
        </div>
      </div>
    </div>
  )}
</nav>

       {/* Hero Section */}
 {/* Hero Section */}
<section className="hero-section relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden">
  <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>
  <div className="container mx-auto px-4 md:px-6 relative z-10">
    <div className="flex flex-col md:flex-row items-center">
      {/* Left Column */}
      <div className="px-2 w-full md:w-1/2 mb-12 md:mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          <span className="block">Start Your Business</span>
          <span className="block gradient-text">The Right Way</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          RegisterKaro simplifies business registration and compliance in India. Expert guidance, transparent pricing, and hassle-free processes.
        </p>

        {/* Search Bar */}
        <div className="bg-white p-2 rounded-full shadow-xl flex items-center mb-8 max-w-lg">
          <input
            type="text"
            placeholder="Search for services..."
            className="px-4 py-3 w-full focus:outline-none text-gray-700"
          />
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-105">
            Search
          </button>
        </div>

        {/* Features List */}
        <div className="flex flex-wrap items-center">
          <div className="flex items-center mr-8 mb-4">
            <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            </span>
            <span className="text-sm md:text-base">100% Online Process</span>
          </div>
          <div className="flex items-center mr-8 mb-4">
            <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            </span>
            <span className="text-sm md:text-base">Expert Assistance</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            </span>
            <span className="text-sm md:text-base">Guaranteed Timelines</span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="font-bold text-2xl text-blue-600">10,000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="font-bold text-2xl text-blue-600">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="font-bold text-2xl text-blue-600">50+</div>
            <div className="text-gray-600">Expert Team</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="font-bold text-2xl text-blue-600">100%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="px-2 w-full md:w-1/2 relative">
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105">
          <img
            src="https://picsum.photos/600/500?business" // Random business-related image from Picsum
            alt="Business Registration"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-6">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
              <h3 className="text-white text-xl font-bold mt-2">Private Limited Company Registration</h3>
            </div>
          </div>
        </div>

        {/* Floating Counter */}
        <div className="floating-counter">
          <span className="font-bold text-xl">50K+</span>
          <span className="block text-sm">Companies Registered</span>
        </div>
      </div>
    </div>
  </div>
</section>

       {/* Trusted By Section */}
       <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-center text-gray-500 text-lg mb-8">Trusted by thousands of businesses across India</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <img src="https://pngimg.com/d/google_PNG19644.png" alt="Company 1" className="client-logo w-32 h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/1200px-Adobe_Corporate_Logo.png" alt="Company 2" className="client-logo w-32 h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Company 3" className="client-logo w-32 h-12" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwxWjbiOX8rYuq720FgrIefCPVC-y-gHSUYg&s" alt="Company 4" className="client-logo w-32 h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/640px-TikTok_logo.svg.png" alt="Company 5" className="client-logo w-32 h-12" />
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
        About Us
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Who We Are
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        At RegisterKaro, we are dedicated to simplifying business registration and compliance for entrepreneurs and businesses across India. Our mission is to provide expert guidance, transparent pricing, and hassle-free processes to help you focus on growing your business.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1: Our Mission */}
      <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-50 rounded-full">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-4 text-center">Our Mission</h3>
        <p className="text-gray-600 text-center">
          To empower businesses with seamless registration and compliance solutions, enabling them to thrive in a competitive market.
        </p>
      </div>

      {/* Card 2: Our Vision */}
      <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-50 rounded-full">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-4 text-center">Our Vision</h3>
        <p className="text-gray-600 text-center">
          To become the most trusted partner for business registration and compliance services in India.
        </p>
      </div>

      {/* Card 3: Our Values */}
      <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-50 rounded-full">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-4 text-center">Our Values</h3>
        <p className="text-gray-600 text-center">
          Integrity, transparency, and customer-centricity are at the core of everything we do.
        </p>
      </div>
    </div>

    {/* Team Section */}
    <div className="mt-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Team Member 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
          <img
            src="https://i.pravatar.cc/150?img=1"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Rahul Sharma</h3>
          <p className="text-gray-600 mb-4">CEO & Founder</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.56v14.91c0 .97-.79 1.76-1.76 1.76H1.76C.79 21.23 0 20.44 0 19.47V4.56C0 3.59.79 2.8 1.76 2.8h20.48c.97 0 1.76.79 1.76 1.76zM9.6 18.4V9.6h2.4l.36-2.8H9.6V5.2c0-.8.2-1.36 1.36-1.36h1.44V1.2H11.2c-2.24 0-3.6 1.36-3.6 3.6v2.4H5.6v2.8h2.4v8.8h1.6z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 5.924c-.807.358-1.67.6-2.577.708a4.515 4.515 0 001.98-2.49 9.02 9.02 0 01-2.86 1.09 4.51 4.51 0 00-7.69 4.11 12.81 12.81 0 01-9.3-4.71 4.51 4.51 0 001.39 6.02 4.49 4.49 0 01-2.04-.56v.06a4.51 4.51 0 003.62 4.42 4.52 4.52 0 01-2.03.08 4.51 4.51 0 004.21 3.13 9.05 9.05 0 01-5.6 1.93c-.36 0-.72-.02-1.08-.06a12.78 12.78 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.39-.01-.58a9.17 9.17 0 002.26-2.34z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
          <img
            src="https://i.pravatar.cc/150?img=2"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Priya Patel</h3>
          <p className="text-gray-600 mb-4">COO</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.56v14.91c0 .97-.79 1.76-1.76 1.76H1.76C.79 21.23 0 20.44 0 19.47V4.56C0 3.59.79 2.8 1.76 2.8h20.48c.97 0 1.76.79 1.76 1.76zM9.6 18.4V9.6h2.4l.36-2.8H9.6V5.2c0-.8.2-1.36 1.36-1.36h1.44V1.2H11.2c-2.24 0-3.6 1.36-3.6 3.6v2.4H5.6v2.8h2.4v8.8h1.6z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 5.924c-.807.358-1.67.6-2.577.708a4.515 4.515 0 001.98-2.49 9.02 9.02 0 01-2.86 1.09 4.51 4.51 0 00-7.69 4.11 12.81 12.81 0 01-9.3-4.71 4.51 4.51 0 001.39 6.02 4.49 4.49 0 01-2.04-.56v.06a4.51 4.51 0 003.62 4.42 4.52 4.52 0 01-2.03.08 4.51 4.51 0 004.21 3.13 9.05 9.05 0 01-5.6 1.93c-.36 0-.72-.02-1.08-.06a12.78 12.78 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.39-.01-.58a9.17 9.17 0 002.26-2.34z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Vikram Singh</h3>
          <p className="text-gray-600 mb-4">CTO</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.56v14.91c0 .97-.79 1.76-1.76 1.76H1.76C.79 21.23 0 20.44 0 19.47V4.56C0 3.59.79 2.8 1.76 2.8h20.48c.97 0 1.76.79 1.76 1.76zM9.6 18.4V9.6h2.4l.36-2.8H9.6V5.2c0-.8.2-1.36 1.36-1.36h1.44V1.2H11.2c-2.24 0-3.6 1.36-3.6 3.6v2.4H5.6v2.8h2.4v8.8h1.6z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 5.924c-.807.358-1.67.6-2.577.708a4.515 4.515 0 001.98-2.49 9.02 9.02 0 01-2.86 1.09 4.51 4.51 0 00-7.69 4.11 12.81 12.81 0 01-9.3-4.71 4.51 4.51 0 001.39 6.02 4.49 4.49 0 01-2.04-.56v.06a4.51 4.51 0 003.62 4.42 4.52 4.52 0 01-2.03.08 4.51 4.51 0 004.21 3.13 9.05 9.05 0 01-5.6 1.93c-.36 0-.72-.02-1.08-.06a12.78 12.78 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.39-.01-.58a9.17 9.17 0 002.26-2.34z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
          <img
            src="https://i.pravatar.cc/150?img=4"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Anjali Mehta</h3>
          <p className="text-gray-600 mb-4">Head of Operations</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.56v14.91c0 .97-.79 1.76-1.76 1.76H1.76C.79 21.23 0 20.44 0 19.47V4.56C0 3.59.79 2.8 1.76 2.8h20.48c.97 0 1.76.79 1.76 1.76zM9.6 18.4V9.6h2.4l.36-2.8H9.6V5.2c0-.8.2-1.36 1.36-1.36h1.44V1.2H11.2c-2.24 0-3.6 1.36-3.6 3.6v2.4H5.6v2.8h2.4v8.8h1.6z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 5.924c-.807.358-1.67.6-2.577.708a4.515 4.515 0 001.98-2.49 9.02 9.02 0 01-2.86 1.09 4.51 4.51 0 00-7.69 4.11 12.81 12.81 0 01-9.3-4.71 4.51 4.51 0 001.39 6.02 4.49 4.49 0 01-2.04-.56v.06a4.51 4.51 0 003.62 4.42 4.52 4.52 0 01-2.03.08 4.51 4.51 0 004.21 3.13 9.05 9.05 0 01-5.6 1.93c-.36 0-.72-.02-1.08-.06a12.78 12.78 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.39-.01-.58a9.17 9.17 0 002.26-2.34z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to start & grow</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We offer comprehensive business registration and compliance services tailored to your specific needs.</p>
          </div>

         {/* Service Tabs */}
<div className="flex flex-wrap justify-center mb-12">
  <div className="service-tabs-container bg-gray-50 p-1.5 rounded-xl flex flex-wrap justify-center gap-2">
    <button
      className={`service-tab px-6 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
        selectedService === 'registration'
          ? 'bg-white text-blue-600 shadow-sm'
          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
      }`}
      onClick={() => setSelectedService('registration')}
      aria-label="Business Registration"
    >
      Business Registration
    </button>
    <button
      className={`service-tab px-6 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
        selectedService === 'compliance'
          ? 'bg-white text-blue-600 shadow-sm'
          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
      }`}
      onClick={() => setSelectedService('compliance')}
      aria-label="Compliance"
    >
      Compliance
    </button>
    <button
      className={`service-tab px-6 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
        selectedService === 'trademark'
          ? 'bg-white text-blue-600 shadow-sm'
          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
      }`}
      onClick={() => setSelectedService('trademark')}
      aria-label="Trademark"
    >
      Trademark
    </button>
    <button
      className={`service-tab px-6 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
        selectedService === 'website'
          ? 'bg-white text-blue-600 shadow-sm'
          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
      }`}
      onClick={() => setSelectedService('website')}
      aria-label="Website Development"
    >
      Website Development
    </button>
  </div>
</div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedService === 'registration' && (
              <>
                <div className="service-card">
                  <div className="service-card-icon-container">
                    <div className="service-card-icon">🏢</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Private Limited Company</h3>
                  <p className="text-gray-600 mb-4">Ideal for startups and growing businesses seeking investment and limited liability protection.</p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Limited Liability</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Separate Legal Entity</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Easy Funding Options</span>
                    </li>
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">₹9,999</span>
                    <button className="service-card-button">Get Started</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-card-icon-container">
                    <div className="service-card-icon">🤝</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Limited Liability Partnership</h3>
                  <p className="text-gray-600 mb-4">Perfect blend of partnership flexibility with limited liability protection.</p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Lower Compliance Burden</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">No Minimum Capital Requirement</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Flexible Internal Structure</span>
                    </li>
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">₹7,999</span>
                    <button className="service-card-button">Get Started</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-card-icon-container">
                    <div className="service-card-icon">🏠</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">One Person Company</h3>
                  <p className="text-gray-600 mb-4">Combine the benefits of sole proprietorship with limited liability.</p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Single Shareholder Sufficient</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Complete Control</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Perpetual Succession</span>
                    </li>
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">₹8,499</span>
                    <button className="service-card-button">Get Started</button>
                  </div>
                </div>
              </>
            )}

            {selectedService === 'compliance' && (
              <>
                <div className="service-card">
                  <div className="service-card-icon-container">
                    <div className="service-card-icon ">📝</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">GST Registration</h3>
                  <p className="text-gray-600 mb-4">Simplify your GST registration process with expert assistance.</p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">End-to-end Processing</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Document Preparation</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Online Application</span>
                    </li>
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">₹1,499</span>
                    <button className="service-card-button">Get Started</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-card-icon-container">
                    <div className="service-card-icon">💼</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Annual Compliance</h3>
                  <p className="text-gray-600 mb-4">Stay compliant with all statutory requirements for your business.</p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Annual Returns Filing</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Financial Statement Preparation</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Compliance Calendar</span>
                    </li>
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">₹5,999</span>
                    <button className="service-card-button">Get Started</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-card-icon-container">
                    <div className="service-card-icon">📊</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Tax Filing</h3>
                  <p className="text-gray-600 mb-4">Professional assistance for all your tax filing requirements.</p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Income Tax Returns</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">GST Returns</span>
                    </li>
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">₹2,999</span>
                    <button className="service-card-button">Get Started</button>
                  </div>
                </div>
              </>
            )}

            {selectedService === 'trademark' && (
              <>
                <div className="service-card">
                  <div className="service-card-icon-container">
                    <div className="service-card-icon">🔖</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Trademark Registration</h3>
                  <p className="text-gray-600 mb-4">Protect your brand with our comprehensive trademark registration services.</p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Comprehensive Search</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Filing and Documentation</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Legal Support</span>
                    </li>
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">₹3,999</span>
                    <button className="service-card-button">Get Started</button>
                  </div>
                </div>
              </>
            )}

            {selectedService === 'website' && (
              <>
                <div className="service-card">
                  <div className="service-card-icon-container">
                    <div className="service-card-icon">🌐</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Website Development</h3>
                  <p className="text-gray-600 mb-4">Get a professional website tailored to your business needs.</p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Custom Design</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">SEO Optimization</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Responsive Design</span>
                    </li>
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">₹15,999</span>
                    <button className="service-card-button">Get Started</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose RegisterKaro Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose RegisterKaro</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-blue-500 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Testimonials Section */}
       <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-center text-3xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card p-6 bg-white rounded-lg shadow-md">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section id="contact" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">Get in Touch</h2>
    <form className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      {/* Name Field */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">Name</label>
        <div className="relative">
          <input
            type="text"
            id="name"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="Enter your name"
            required
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </div>

      {/* Email Field */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">Email</label>
        <div className="relative">
          <input
            type="email"
            id="email"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="Enter your email"
            required
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      {/* Message Field */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">Message</label>
        <div className="relative">
          <textarea
            id="message"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            rows="4"
            placeholder="Enter your message"
            required
          ></textarea>
          <svg
            className="absolute left-3 top-4 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn-primary-gradient w-full py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-all"
      >
        Send Message
      </button>
    </form>

    {/* Call-to-Action Section */}
    <div className="text-center mt-12">
      <p className="text-gray-600 mb-4">Prefer to call or email us directly?</p>
      <div className="flex justify-center gap-4">
        <a
          href="tel:+1234567890"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all"
        >
          Call Us
        </a>
        <a
          href="mailto:info@example.com"
          className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium border border-blue-600 hover:bg-blue-50 transition-all"
        >
          Email Us
        </a>
      </div>
    </div>
  </div>
</section>

{/* FAQ Section */}
<section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md mb-4 cursor-pointer transition-all"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  {activeFAQIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-600" />
                  )}
                </div>
                {activeFAQIndex === index && (
                  <p className="text-gray-600 mt-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 bg-gray-800 text-white">
  <div className="container mx-auto px-4">
    {/* Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* About Us */}
      <div>
        <h3 className="text-xl font-bold mb-4">About Us</h3>
        <p className="text-gray-300">
          RegisterKaro is your trusted partner for business registration and compliance services in India.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-xl font-bold mb-4">Services</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Company Registration</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Business License</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tax Registration</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Compliance Services</a></li>
        </ul>
      </div>

      {/* Contact Us */}
      <div>
        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="text-gray-300">+91 1234567890</span>
          </li>
          <li className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-gray-300">info@registerkaro.com</span>
          </li>
          <li className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-gray-300">Mumbai, India</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Social Media Links */}
    <div className="flex justify-center gap-6 mt-8">
      <a href="#" className="text-gray-300 hover:text-white transition-colors">
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 4.56v14.91c0 .97-.79 1.76-1.76 1.76H1.76C.79 21.23 0 20.44 0 19.47V4.56C0 3.59.79 2.8 1.76 2.8h20.48c.97 0 1.76.79 1.76 1.76zM9.6 18.4V9.6h2.4l.36-2.8H9.6V5.2c0-.8.2-1.36 1.36-1.36h1.44V1.2H11.2c-2.24 0-3.6 1.36-3.6 3.6v2.4H5.6v2.8h2.4v8.8h1.6z" />
        </svg>
      </a>
      <a href="#" className="text-gray-300 hover:text-white transition-colors">
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22.23 5.924c-.807.358-1.67.6-2.577.708a4.515 4.515 0 001.98-2.49 9.02 9.02 0 01-2.86 1.09 4.51 4.51 0 00-7.69 4.11 12.81 12.81 0 01-9.3-4.71 4.51 4.51 0 001.39 6.02 4.49 4.49 0 01-2.04-.56v.06a4.51 4.51 0 003.62 4.42 4.52 4.52 0 01-2.03.08 4.51 4.51 0 004.21 3.13 9.05 9.05 0 01-5.6 1.93c-.36 0-.72-.02-1.08-.06a12.78 12.78 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.39-.01-.58a9.17 9.17 0 002.26-2.34z" />
        </svg>
      </a>
      <a href="#" className="text-gray-300 hover:text-white transition-colors">
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.61 8.09 8.2 8.96v-6.34H7.62v-2.62h2.62V9.85c0-2.59 1.58-4 3.88-4 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.8-1.68 1.62v1.93h2.84l-.45 2.62h-2.39v6.34c4.59-.87 8.2-4.55 8.2-8.96 0-5.5-4.46-9.96-9.96-9.96z" />
        </svg>
      </a>
    </div>

    {/* Copyright Section */}
    <div className="border-t border-gray-700 mt-8 pt-8 text-center">
      <p className="text-gray-300">&copy; {new Date().getFullYear()} RegisterKaro. All rights reserved.</p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default HomePage;