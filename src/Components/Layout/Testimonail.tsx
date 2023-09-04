import data from '../../db.json';
import { Carousel } from '@mantine/carousel';
import { useState, useEffect } from 'react';

const Testimonial = () => {
  
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 
 

  return (
    <div className="flex flex-col text-center space-y-4 mt-10">
      <h1 className="font-bold text-3xl text-DarkBlue">What they've said</h1>

      <Carousel
        withIndicators
        height={400}        
        slideSize={isSmallScreen ? '100%' : '33.333333%'}
        slideGap="md"
        loop
        align="start"
       
       
      >
        {data.users.map((user) => {
          return (
            <Carousel.Slide key={user.id} className="flex flex-col space-y-4 items-center justify-center ">
              <img src={user.img} alt="" className="w-24" />
              <p className="text-xs">{user.name}</p>
              <p className="text-DarkGrayishBlue text-sm max-w-md">{user.Testimonial}</p>
            </Carousel.Slide>
          );
        })}
      </Carousel>

      <div>
        <button className="bg-BrightRed text-white text-sm p-3 rounded-full">Get Started</button>
      </div>
    </div>
  );
};

export default Testimonial;
