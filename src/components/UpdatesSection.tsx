
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Book, User } from 'lucide-react';

const UpdatesSection = () => {
  const updates = [
    {
      type: 'Exam Alert',
      title: 'VTU Exam Timetable Released for Dec 2024',
      date: '2 hours ago',
      category: 'Important',
      icon: Calendar,
      color: 'bg-red-100 text-red-800'
    },
    {
      type: 'New Notes',
      title: 'Data Structures Unit 4 - Advanced Trees',
      date: '1 day ago',
      category: 'CSE 3rd Sem',
      icon: Book,
      color: 'bg-green-100 text-green-800'
    },
    {
      type: 'Assignment',
      title: 'Machine Learning Lab Programs Updated',
      date: '2 days ago',
      category: 'AIML 5th Sem',
      icon: User,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      type: 'Circular',
      title: 'VTU Academic Calendar 2024-25 Released',
      date: '3 days ago',
      category: 'General',
      icon: Calendar,
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest VTU notifications, new study materials, and important announcements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {updates.map((update, index) => {
            const IconComponent = update.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <IconComponent className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={update.color}>
                          {update.type}
                        </Badge>
                        <span className="text-sm text-gray-500">{update.date}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {update.title}
                      </h3>
                      <p className="text-sm text-gray-600">{update.category}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
