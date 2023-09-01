import headerLogo from '../../images/logo.svg'

const Header = () => {
  return (
    <div className="container max-w-[1300px] mx-auto py-8">
      <div className="flex flex-row justify-between items-center">
         <img src={headerLogo} alt="" />

         <div className=' hidden md:flex md:flex-row md:space-x-4'>
            <h5>Pricing</h5>
            <h5>Product</h5>
            <h5>About us</h5>
            <h5>Careers</h5>
            <h5>Community</h5>           

         </div>

         <button className='hidden md:inline-block bg-BrightRed text-white text-sm p-3 rounded-full'>
            Get Started
         </button>

      </div>


    </div>
  )
}
export default Header