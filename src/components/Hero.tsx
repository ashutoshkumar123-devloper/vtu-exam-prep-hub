
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Book, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Master Your VTU Exams
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
            Complete study materials, previous year papers, and interactive quizzes 
            for all VTU branches and semesters
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              <Book className="mr-2 h-5 w-5" />
              Browse Subjects
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              <Calendar className="mr-2 h-5 w-5" />
              Previous Papers
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-400">50+</div>
              <div className="text-sm text-blue-200">Subjects Covered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-400">1000+</div>
              <div className="text-sm text-blue-200">Study Materials</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-400">500+</div>
              <div className="text-sm text-blue-200">Question Papers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-400">10K+</div>
              <div className="text-sm text-blue-200">Students Helped</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-blue-200" />
      </div>
    </section>
  );
};

export default Hero;
