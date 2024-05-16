import React from 'react';
import Stories from '../Stories/Stories';
import Coordinators from '../../Components/Coordinators/Coordinators';
import CarouselCylinder from '../../Components/Carousel/CarouselCylindrical';

const Overview = () => {
  return (
    <div className='container mx-auto mt-20' style={{ marginTop: '95px' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-10">
        <div className="md:col-span-3">
          <div className='overview'>
            <h1 className='text-3xl font-semibold text-center mb-5'>Overview</h1>
            <div className="flex justify-center items-center">
              <CarouselCylinder />
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className='coordinators'>
            <h1 className='text-3xl font-semibold text-center mb-5'>Coordinators</h1>
            <Coordinators />
          </div>
        </div>
        <div className="md:col-span-3">
          <div className='student-stories'>
            <h1 className='text-3xl font-semibold text-center mb-5'>Student Stories</h1>
            <Stories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
