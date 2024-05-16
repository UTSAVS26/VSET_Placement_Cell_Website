import React from 'react';
import { facultyCoordinators, studentCoordinators } from './coordinatorsData';

const Coordinators = () => {
  return (
    <div className="container mx-auto mt-10">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Faculty Coordinators</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {facultyCoordinators.map((coordinator) => (
            <div key={coordinator.id} className="bg-blue-200 text-black p-4 rounded-lg mb-4 flex flex-col items-center shadow-md">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-black flex items-center justify-center">
                <img src={coordinator.image} alt={coordinator.name} className="max-w-full max-h-full" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{coordinator.name}</h3>
                <div className="border-t border-black w-full my-2"></div>
                <p className="text-black mb-1"><strong>Department:</strong> {coordinator.department}</p>
                <p className="text-black mb-1"><strong>Email:</strong> {coordinator.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Student Coordinators</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {studentCoordinators.map((coordinator) => (
            <div key={coordinator.id} className="bg-blue-200 text-black p-4 rounded-lg mb-4 flex flex-col items-center shadow-md">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-black flex items-center justify-center">
                <img src={coordinator.image} alt={coordinator.name} className="max-w-full max-h-full" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{coordinator.name}</h3>
                <div className="border-t border-black w-full my-2"></div>
                <p className="text-black mb-1"><strong>Batch:</strong> {coordinator.batch}</p>
                <p className="text-black mb-1"><strong>Branch:</strong> {coordinator.branch}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coordinators;
