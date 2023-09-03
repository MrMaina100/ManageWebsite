import headerLogo from '../../images/logo.svg'

const Header = () => {  

   type btnFN = ()=> void

   const toggleClass:btnFN = ()=>{         
      
      document.getElementById('menu-btn')?.classList.toggle('open') 
      document.getElementById('menu')?.classList.toggle('flex')
      document.getElementById('menu')?.classList.toggle('hidden')
   }


  return (
    <div className="container max-w-[1300px] mx-auto py-8 px-4">
      <div className="relative flex flex-row justify-between items-center">
         <img src={headerLogo} alt="" />

         <div className=' hidden md:flex md:flex-row md:space-x-4'>
            <h5>Pricing</h5>
            <h5>Product</h5>
            <h5>About us</h5>
            <h5>Careers</h5>
            <h5>Community</h5>           

         </div>

         <button  className='hidden md:inline-block bg-BrightRed text-white text-sm p-3 rounded-full'>
            Get Started
         </button>

         {/* our mobile menu */}

         <div className="md:hidden">
            <button  className='z-40 block hamburger md:hidden focus:outline-none ' id='menu-btn' type='button' onClick={toggleClass}>
               <span className='hamburger-top'></span>
               <span className='hamburger-middle'></span>
               <span className='hamburger-bottom'></span>

            </button>
         </div>

         <div id="menu" className='absolute hidden p-8 rounded-lg bg-VeryLightGray left-6 right-6 top-10 z-100 shadow-2xl'>

            <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-VeryDarkBlue rounded-sm">
                <h5>Pricing</h5>
                <h5>Product</h5>
                <h5>About us</h5>
                <h5>Careers</h5>
                <h5>Community</h5> 

            </div>

         </div>

      </div>


    </div>
  )
}
export default Header