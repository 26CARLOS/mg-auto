import React from 'react';
import { PenTool as Tool, Settings } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center mr-2">
        <Settings className="text-red-600" size={24} />
        <Tool className="text-navy-800 ml-1" size={24} />
      </div>
      <div>
        <h1 className="text-xl font-bold leading-none text-navy-900">
          <span className="text-red-600">MG</span> Auto Care
        </h1>
        <p className="text-xs text-gray-600 leading-none">German Vehicle Specialists</p>
      </div>
    </div>
  );
};

export default Logo;