import ShowcaseImage from '../../../public/images/illustration-intro.svg'


const Showcase = () => {
  return (
    <div className="container mx-auto max-w-[1300px] px-4  pb-16">
      <div className="flex flex-col-reverse items-center justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-5">
         <div>
            <div className="flex flex-col max-w-md p-2 space-y-5">
            <h1 className="text-DarkBlue text-4xl font-bold md:text-5xl ">Bring everyone together to build better products.</h1>
            <p className="text-sm text-DarkGrayishBlue">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
             <button  className=' bg-BrightRed text-white text-sm p-3 rounded-full'>
            Get Started
         </button>
         </div>

         </div>
         

         <img src={ShowcaseImage} alt="" />

      </div>
      
    </div>
  )
}
export default Showcase