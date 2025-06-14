
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Book, Download, File, Loader2 } from 'lucide-react';
import { useSubjects } from '@/hooks/useSubjects';

interface SubjectsSectionProps {
  searchQuery?: string;
}

const SubjectsSection = ({ searchQuery = '' }: SubjectsSectionProps) => {
  const [selectedBranch, setSelectedBranch] = useState('CSE');
  const [selectedSemester, setSelectedSemester] = useState(3);

  // Only the specified branches
  const branches = ['CSE', 'AIML', 'ISE', 'AI&DS', 'CSD'];
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  const { subjects, loading, error } = useSubjects(selectedBranch, selectedSemester, searchQuery);

  const getSubjectColor = (index: number) => {
    const colors = [
      'bg-blue-500',
      'bg-green-500', 
      'bg-purple-500',
      'bg-orange-500',
      'bg-red-500',
      'bg-teal-500'
    ];
    return colors[index % colors.length];
  };

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

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <span className="ml-2 text-gray-600">Loading subjects...</span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <p className="text-red-600">Error loading subjects: {error}</p>
          </div>
        )}

        {/* No Results */}
        {!loading && !error && subjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              {searchQuery 
                ? `No subjects found matching "${searchQuery}" for ${selectedBranch} Semester ${selectedSemester}`
                : `No subjects found for ${selectedBranch} Semester ${selectedSemester}`
              }
            </p>
          </div>
        )}

        {/* Subjects Grid */}
        {!loading && !error && subjects.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Card key={subject.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 ${getSubjectColor(index)} rounded-lg flex items-center justify-center`}>
                      <Book className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary">{subject.credits} Credits</Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {subject.course_name}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{subject.course_code}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <File className="h-4 w-4 mr-1" />
                      {subject.materials_count} Materials
                    </span>
                    <span className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      {subject.downloads_count.toLocaleString()}
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
        )}
      </div>
    </section>
  );
};

export default SubjectsSection;
