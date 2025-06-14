
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, List } from 'lucide-react';

const QuizSection = () => {
  const quizzes = [
    {
      title: 'Data Structures - Unit 1',
      subject: 'CS301',
      questions: 20,
      duration: '30 min',
      difficulty: 'Medium',
      attempts: 1250,
      color: 'bg-blue-500'
    },
    {
      title: 'Algorithms - Sorting & Searching',
      subject: 'CS302',
      questions: 15,
      duration: '25 min',
      difficulty: 'Hard',
      attempts: 890,
      color: 'bg-red-500'
    },
    {
      title: 'Computer Organization - Memory',
      subject: 'CS303',
      questions: 18,
      duration: '20 min',
      difficulty: 'Easy',
      attempts: 1450,
      color: 'bg-green-500'
    },
    {
      title: 'Unix Commands Practice',
      subject: 'CS304',
      questions: 25,
      duration: '35 min',
      difficulty: 'Medium',
      attempts: 670,
      color: 'bg-purple-500'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="quizzes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interactive Quizzes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Test your knowledge with our comprehensive quizzes and mock tests
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {quizzes.map((quiz, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-10 h-10 ${quiz.color} rounded-lg flex items-center justify-center`}>
                    <List className="h-5 w-5 text-white" />
                  </div>
                  <Badge className={getDifficultyColor(quiz.difficulty)}>
                    {quiz.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{quiz.title}</CardTitle>
                <p className="text-sm text-gray-600">{quiz.subject}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center text-gray-600">
                      <List className="h-4 w-4 mr-1" />
                      {quiz.questions} Questions
                    </span>
                    <span className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      {quiz.duration}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="h-4 w-4 mr-1" />
                    {quiz.attempts.toLocaleString()} attempts
                  </div>
                  
                  <div className="pt-2">
                    <Button className="w-full">
                      Start Quiz
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Quizzes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
