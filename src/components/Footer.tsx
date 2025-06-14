
import React from 'react';
import { Book, User, Calendar, Search } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Book className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">VTU Prep</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your comprehensive platform for VTU exam preparation. Access study materials, 
              previous year papers, and practice quizzes all in one place.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#subjects" className="text-gray-300 hover:text-white transition-colors">Subjects</a></li>
              <li><a href="#papers" className="text-gray-300 hover:text-white transition-colors">Question Papers</a></li>
              <li><a href="#quizzes" className="text-gray-300 hover:text-white transition-colors">Quizzes</a></li>
              <li><a href="#assignments" className="text-gray-300 hover:text-white transition-colors">Assignments</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: help@vtuprep.com</p>
              <p>Support: 24/7 Chat Support</p>
              <p>Follow us on social media</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 VTU Prep. All rights reserved. Made with ❤️ for VTU students.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
