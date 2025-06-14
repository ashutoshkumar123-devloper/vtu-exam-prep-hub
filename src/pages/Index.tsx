
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import UpdatesSection from '@/components/UpdatesSection';
import SubjectsSection from '@/components/SubjectsSection';
import QuizSection from '@/components/QuizSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <UpdatesSection />
      <SubjectsSection />
      <QuizSection />
      <Footer />
    </div>
  );
};

export default Index;
