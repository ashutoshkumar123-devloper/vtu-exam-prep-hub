
import React, { useState } from 'react';
import { Book, Search, User, Menu, X, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

const Header = ({ searchQuery = '', onSearchChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearchChange) {
      onSearchChange(e.target.value);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <Book className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">VTU Prep</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#subjects" className="text-gray-700 hover:text-blue-600 transition-colors">Subjects</a>
            <a href="#papers" className="text-gray-700 hover:text-blue-600 transition-colors">Question Papers</a>
            <a href="#quizzes" className="text-gray-700 hover:text-blue-600 transition-colors">Quizzes</a>
            <a href="#assignments" className="text-gray-700 hover:text-blue-600 transition-colors">Assignments</a>
          </nav>

          {/* Search and User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Search subjects, notes..." 
                className="pl-10 w-64"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  {user?.email}
                </span>
                <Button variant="outline" size="sm" onClick={signOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button variant="outline" size="sm" onClick={() => navigate('/auth')}>
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="py-4 space-y-2">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
              <a href="#subjects" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Subjects</a>
              <a href="#papers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Question Papers</a>
              <a href="#quizzes" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Quizzes</a>
              <a href="#assignments" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Assignments</a>
              <div className="px-4 py-2">
                <Input 
                  placeholder="Search..." 
                  className="mb-2" 
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">{user?.email}</p>
                    <Button size="sm" className="w-full" onClick={signOut}>Logout</Button>
                  </div>
                ) : (
                  <Button size="sm" className="w-full" onClick={() => navigate('/auth')}>Login</Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
