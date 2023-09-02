const AboutUs = () => {
  return (
    <div className="container mx-auto max-w-[1300px] px-4 md:pt-10">
      <div className="flex flex-col items-start justify-between space-y-12 md:flex-row md:space-y-0 md:space-x-6">

         <div className="flex flex-col space-y-4 max-w-sm ">
            <h1 className="font-bold text-3xl  text-DarkBlue">
               What’s different about Manage?
           </h1>
           <p className="text-sm text-DarkGrayishBlue ">
             Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.

           </p>

         </div>


          <div className="flex flex-col space-y-4 ">
         {/* box 1 */}
         <div className="flex flex-col space-y-6">
            <div className="flex flex-row space-x-2 items-center h-10 bg-VeryPaleRed md:bg-white">
               <button className=" w-16 rounded-full p-2 bg-BrightRed text-white">
               01
               </button>
               <h3 className="text-DarkBlue font-bold">Track company-wide progress</h3>
            </div>

            <p className="text-sm text-DarkGrayishBlue pb-2 max-w-md">
                See how your day-to-day tasks fit into the wider vision.Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again. 

            </p>

         </div>

         {/* box 2 */}

         <div className="flex flex-col space-y-6">
            <div className="flex flex-row space-x-2 items-center h-10 bg-VeryPaleRed md:bg-white">
               <button className=" w-16 rounded-full p-2 bg-BrightRed text-white">
               02
               </button>
               <h3 className="text-DarkBlue font-bold">Advanced built-in reports</h3>
            </div>

            <p className="text-sm text-DarkGrayishBlue pb-2 max-w-md">
                 Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.

            </p>

         </div>

         {/* box 3 */}
          <div className="flex flex-col space-y-6">
            <div className="flex flex-row space-x-2 items-center h-10 bg-VeryPaleRed md:bg-white">
               <button className=" w-16 rounded-full p-2 bg-BrightRed text-white">
               03
               </button>
               <h3 className="text-DarkBlue font-bold">Everything you need in one place</h3>
            </div>

            <p className="text-sm text-DarkGrayishBlue pb-2 max-w-md">
                 Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution. 

            </p>

         </div>




      </div>
      </div>

     


      
    </div>
  )
}
export default AboutUs