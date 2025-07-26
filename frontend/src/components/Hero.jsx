import React from 'react';
import { Button } from './ui/button';
import { Download, Mail, FolderOpen } from 'lucide-react';
import { mockData, mockActions } from './mock';

const Hero = () => {
  const { personalInfo } = mockData;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-100"></div>
      
      {/* Hero Image */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 md:opacity-20">
        <img 
          src={personalInfo.heroImage}
          alt="AI Technology Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="font-semibold text-teal-600">
                  {personalInfo.name}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl font-light text-gray-700">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                {personalInfo.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={mockActions.downloadResume}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 text-lg"
                size="lg"
              >
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 text-lg"
                size="lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              <Button 
                onClick={() => scrollToSection('projects')}
                variant="outline"
                className="border-gray-400 text-gray-700 hover:bg-gray-50 px-6 py-3 text-lg"
                size="lg"
              >
                <FolderOpen className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-teal-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={personalInfo.heroImage}
                  alt="AI Technology"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-400 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;