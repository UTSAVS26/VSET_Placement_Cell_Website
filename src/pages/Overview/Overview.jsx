import React from 'react';
import Stories from '../Stories/Stories';
import Coordinators from '../../Components/Coordinators/Coordinators';
import CarouselCylinder from '../../Components/Carousel/CarouselCylindrical';

const Overview = () => {
  return (
    <div className="container mx-auto mt-20 pb-30">
      <div className="gap-10 mb-10">
        <div className="overview">
          <h1 className="text-3xl mt-10 font-semibold text-center mb-5">Overview</h1>
          <div className="flex justify-center items-center">
            <CarouselCylinder />
          </div>
        </div>
        <div className="coordinators">
          <h1 className="text-3xl font-semibold text-center mb-20">Coordinators</h1>
          <Coordinators />
        </div>
        {/* <div className="student-stories">
          <h1 className="text-3xl font-semibold text-center mb-10">Student Stories</h1>
          <Stories />
        </div> */}
      </div>
    </div>
  );
};

export default Overview;