
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Book, Download, File } from 'lucide-react';

const SubjectsSection = () => {
  const [selectedBranch, setSelectedBranch] = useState('CSE');
  const [selectedSemester, setSelectedSemester] = useState(3);

  const branches = ['CSE', 'ISE', 'AIML', 'AI&DS', 'CSD', 'ECE', 'EEE', 'ME', 'CV'];
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  const subjects = [
    {
      code: 'CS301',
      name: 'Data Structures and Applications',
      credits: 4,
      materials: 12,
      downloads: 2340,
      color: 'bg-blue-500'
    },
    {
      code: 'CS302',
      name: 'Analysis and Design of Algorithms',
      credits: 4,
      materials: 15,
      downloads: 1890,
      color: 'bg-green-500'
    },
    {
      code: 'CS303',
      name: 'Computer Organization',
      credits: 4,
      materials: 10,
      downloads: 1650,
      color: 'bg-purple-500'
    },
    {
      code: 'CS304',
      name: 'Unix Programming',
      credits: 3,
      materials: 8,
      downloads: 1420,
      color: 'bg-orange-500'
    },
    {
      code: 'CS305',
      name: 'Discrete Mathematical Structures',
      credits: 4,
      materials: 11,
      downloads: 1780,
      color: 'bg-red-500'
    },
    {
      code: 'CS306',
      name: 'Data Structures Laboratory',
      credits: 2,
      materials: 6,
      downloads: 980,
      color: 'bg-teal-500'
    }
  ];

  return (
    <section id="subjects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Subject-wise Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access comprehensive study materials organized by branch and semester
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-sm font-medium text-gray-700 self-center mr-2">Branch:</span>
            {branches.map((branch) => (
              <Button
                key={branch}
                variant={selectedBranch === branch ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedBranch(branch)}
                className="min-w-[60px]"
              >
                {branch}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-sm font-medium text-gray-700 self-center mr-2">Semester:</span>
            {semesters.map((sem) => (
              <Button
                key={sem}
                variant={selectedSemester === sem ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSemester(sem)}
                className="min-w-[40px]"
              >
                {sem}
              </Button>
            ))}
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 ${subject.color} rounded-lg flex items-center justify-center`}>
                    <Book className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary">{subject.credits} Credits</Badge>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {subject.name}
                </CardTitle>
                <p className="text-sm text-gray-600">{subject.code}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <File className="h-4 w-4 mr-1" />
                    {subject.materials} Materials
                  </span>
                  <span className="flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    {subject.downloads.toLocaleString()}
                  </span>
                </div>
                <div className="space-y-2">
                  <Button className="w-full" size="sm">
                    View Notes
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Lab Programs
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Assignments
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;
