import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} InnovateSquad. All rights reserved.
        </div>
        
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <span>Made with</span>
          <Heart className="h-4 w-4 text-red-500 fill-red-500" />
          <span>by the Team</span>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors text-sm">Privacy</a>
          <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors text-sm">Terms</a>
          <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors text-sm">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;