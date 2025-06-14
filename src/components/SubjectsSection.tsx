
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Book, Download, File, Loader2, GraduationCap, Users } from 'lucide-react';
import { useSubjects } from '@/hooks/useSubjects';

interface SubjectsSectionProps {
  searchQuery?: string;
}

const SubjectsSection = ({ searchQuery = '' }: SubjectsSectionProps) => {
  const [selectedBranch, setSelectedBranch] = useState('CSE');
  const [selectedSemester, setSelectedSemester] = useState(1);

  // Only the specified branches
  const branches = ['CSE', 'AIML', 'ISE', 'AI&DS', 'CSD'];
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  // For semesters 1 and 2, use 'COMMON' as branch since all branches have same subjects
  // For semester 3 onwards, use the selected branch
  const effectiveBranch = selectedSemester <= 2 ? 'COMMON' : selectedBranch;

  const { subjects, loading, error } = useSubjects(effectiveBranch, selectedSemester, searchQuery);

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

  // Auto-select semester 3 when switching from semester 1 or 2 to branch-specific semesters
  const handleSemesterChange = (sem: number) => {
    setSelectedSemester(sem);
    // If switching from semester 1 or 2 to 3+, ensure we have a valid branch selected
    if (sem > 2 && (selectedSemester <= 2)) {
      // Keep the current branch selection
    }
  };

  const isFirstYear = selectedSemester <= 2;

  return (
    <section id="subjects" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Subject-wise Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access comprehensive study materials organized by year and semester
          </p>
        </div>

        {/* Year indicator */}
        <div className="flex justify-center mb-6">
          <div className={`inline-flex items-center px-6 py-3 rounded-full ${
            isFirstYear 
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
              : 'bg-gradient-to-r from-green-500 to-green-600 text-white'
          } shadow-lg`}>
            {isFirstYear ? (
              <>
                <GraduationCap className="h-5 w-5 mr-2" />
                <span className="font-semibold">1st Year - Foundation Courses</span>
                <Users className="h-4 w-4 ml-2" />
              </>
            ) : (
              <>
                <Book className="h-5 w-5 mr-2" />
                <span className="font-semibold">Professional Courses - Branch Specific</span>
              </>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-8 justify-center">
          {/* Semester Selection - Always visible */}
          <div className="bg-white rounded-xl p-4 shadow-md">
            <span className="text-sm font-medium text-gray-700 block mb-3 text-center">Select Semester:</span>
            <div className="flex flex-wrap gap-2 justify-center">
              {semesters.map((sem) => (
                <Button
                  key={sem}
                  variant={selectedSemester === sem ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleSemesterChange(sem)}
                  className={`min-w-[45px] h-10 ${
                    selectedSemester === sem 
                      ? (sem <= 2 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700')
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {sem}
                </Button>
              ))}
            </div>
          </div>

          {/* Branch Selection - Only show for semester 3 and above */}
          {selectedSemester > 2 && (
            <div className="bg-white rounded-xl p-4 shadow-md">
              <span className="text-sm font-medium text-gray-700 block mb-3 text-center">Select Branch:</span>
              <div className="flex flex-wrap gap-2 justify-center">
                {branches.map((branch) => (
                  <Button
                    key={branch}
                    variant={selectedBranch === branch ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedBranch(branch)}
                    className={`min-w-[65px] h-10 ${
                      selectedBranch === branch 
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {branch}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Info banner for first year */}
        {isFirstYear && (
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-blue-400 mr-3" />
              <div>
                <p className="text-blue-800 font-medium">
                  1st Year Foundation Program
                </p>
                <p className="text-blue-600 text-sm">
                  Common subjects for all engineering branches - Building strong fundamentals
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Branch info for higher semesters */}
        {!isFirstYear && (
          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8 rounded-r-lg">
            <div className="flex items-center">
              <Book className="h-5 w-5 text-green-400 mr-3" />
              <div>
                <p className="text-green-800 font-medium">
                  {selectedBranch} - Semester {selectedSemester}
                </p>
                <p className="text-green-600 text-sm">
                  Specialized courses for your chosen branch
                </p>
              </div>
            </div>
          </div>
        )}

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
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-red-600">Error loading subjects: {error}</p>
            </div>
          </div>
        )}

        {/* No Results */}
        {!loading && !error && subjects.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-md mx-auto">
              <Book className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                {searchQuery 
                  ? `No subjects found matching "${searchQuery}" for ${isFirstYear ? '1st Year' : `${selectedBranch} Semester ${selectedSemester}`}`
                  : `No subjects found for ${isFirstYear ? '1st Year' : `${selectedBranch} Semester ${selectedSemester}`}`
                }
              </p>
            </div>
          </div>
        )}

        {/* Subjects Grid */}
        {!loading && !error && subjects.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Card key={subject.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 ${getSubjectColor(index)} rounded-lg flex items-center justify-center shadow-md`}>
                      <Book className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className={`${
                      isFirstYear ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    } font-medium`}>
                      {subject.credits} Credits
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight text-gray-800">
                    {subject.course_name}
                  </CardTitle>
                  <p className="text-sm text-gray-600 font-mono bg-gray-50 px-2 py-1 rounded">
                    {subject.course_code}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center bg-gray-50 px-2 py-1 rounded">
                      <File className="h-4 w-4 mr-1" />
                      {subject.materials_count} Materials
                    </span>
                    <span className="flex items-center bg-gray-50 px-2 py-1 rounded">
                      <Download className="h-4 w-4 mr-1" />
                      {subject.downloads_count.toLocaleString()}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <Button className={`w-full ${
                      isFirstYear ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
                    }`} size="sm">
                      View Notes
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 hover:bg-gray-50">
                        Lab Programs
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 hover:bg-gray-50">
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
