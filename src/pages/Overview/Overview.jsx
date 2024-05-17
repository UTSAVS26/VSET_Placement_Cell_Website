import React from 'react';
import Stories from '../Stories/Stories';
import Coordinators from '../../Components/Coordinators/Coordinators';
import CarouselCylinder from '../../Components/Carousel/CarouselCylindrical';

const Overview = () => {
  return (
    <div className='container mx-auto mt-20 pb-30'>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-10 mb-10">
        <div className="md:col-span-3">
          <div className='overview'>
            <h1 className='text-3xl mt-10 font-semibold text-center mb-5'>Overview</h1>
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
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:3266500377. */}
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:1294635037. */}
        <div className="md:col-span-3 mt-[-13rem]">
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