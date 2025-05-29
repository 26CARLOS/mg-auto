import React from 'react';
import { PenTool as Tool, Wrench } from 'lucide-react';
import logoImg from '../assets/logo.png';

interface LogoProps {
  isWhiteText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isWhiteText = false }) => (
  <div className="flex items-center">
    <div className="flex items-center mr-2">
      <img 
        src={logoImg} 
        alt="MG Auto Care Logo" 
        className="w-20 h-20 rounded-full border border-gray-300 shadow-sm"
        loading="lazy"
        style={{ objectFit: 'cover' }}
      />
    </div>
    <div>
      <h1 className={`text-xl font-bold leading-none ${isWhiteText ? 'text-white' : 'text-navy-900'}`}>
        <span className="text-red-600">MG</span> Auto Care
      </h1>
      <p className={`text-xs leading-none ${isWhiteText ? 'text-gray-200' : 'text-gray-600'}`}>German Vehicle Specialists</p>
    </div>
  </div>
);

export default Logo;