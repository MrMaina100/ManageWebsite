
import { Carousel } from '@mantine/carousel';
import { useState, useEffect } from 'react';
import avatarAli from '../../images/avatar-ali.png'
import avartarAnisha from '../../images/avatar-anisha.png'
import avatarRichard from '../../images/avatar-richard.png'
import avatarShanai from '../../images/avatar-shanai.png'
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
        
        
            <Carousel.Slide className="flex flex-col space-y-4 items-center justify-center ">
              <img src={avartarAnisha} alt="" className="w-24" />
              <p className="text-xs">Anisha Li</p>
              <p className="text-DarkGrayishBlue text-sm max-w-md">Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.</p>
            </Carousel.Slide>
            <Carousel.Slide className="flex flex-col space-y-4 items-center justify-center ">
              <img src={avatarAli} alt="" className="w-24" />
              <p className="text-xs">Trisha Takanawa</p>
              <p className="text-DarkGrayishBlue text-sm max-w-md">We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.</p>
            </Carousel.Slide>
             <Carousel.Slide className="flex flex-col space-y-4 items-center justify-center ">
              <img src={avatarRichard} alt="" className="w-24" />
              <p className="text-xs">Richard </p>
              <p className="text-DarkGrayishBlue text-sm max-w-md">Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!</p>
            </Carousel.Slide>
             <Carousel.Slide className="flex flex-col space-y-4 items-center justify-center ">
              <img src={avatarShanai} alt="" className="w-24" />
              <p className="text-xs">Shania chan </p>
              <p className="text-DarkGrayishBlue text-sm max-w-md">Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.</p>
            </Carousel.Slide>
          
       
      </Carousel>

      <div>
        <button className="bg-BrightRed text-white text-sm p-3 rounded-full">Get Started</button>
      </div>
    </div>
  );
};

export default Testimonial;
