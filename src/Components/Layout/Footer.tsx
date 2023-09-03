import {useState} from  'react'
import headerLogo from '../../images/logo.svg'
import fb from '../../images/icon-facebook.svg'
import pinterest from '../../images/icon-pinterest.svg'
import X from '../../images/icon-twitter.svg'
import youtube from '../../images/icon-youtube.svg'
import Ig from '../../images/icon-instagram.svg'
import {toast} from 'sonner'


const Footer = () => {

   const [formData, setFormData] = useState({
      formInput:''

   })

   const {formInput} = formData;

   const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setFormData((prevState)=>({
         ...prevState,
         [e.target.name]:e.target.value

      }))
   }

   const handleSubmit = ( e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if(formInput === ''){
         toast.error('please input something');        

      }else{
         toast.success('email submitted');
         
         
      }

      setFormData({
         formInput: ''
      })

      
   }






  return (
    <div className="bg-VeryDarkBlue text-white py-16">
      <div className="max-w-[1300px] mx-auto ">
         <div className="flex flex-col-reverse items-center justify-between space-y-6 md:flex-row md:items-start md:space-x-11 md:space-y-0">
            {/* box 1 */}
            <div className="flex flex-col space-y-7 pt-8 md:pt-0">
                <img src={headerLogo} alt=""  className=''/>

                <div className="flex flex-row space-x-3">
                  <img src={fb} alt="" />
                  <img src={youtube} alt="" />
                  <img src={X} alt="" />
                  <img src={pinterest} alt="" />
                  <img src={Ig} alt="" />
                </div>
            </div>

            {/* box 2 */}
            <div className="flex flex-row justify-between space-x-20  text-sm text-VeryLightGray">
               <div className="flex flex-col space-y-5">
                  <p>Home</p>
                  <p>Pricing</p>
                  <p>Products</p>
                  <p>About Us</p>
               </div>

               <div className='flex flex-col space-y-5'>
                  <p>Careers</p>
                  <p>Commmunity</p>
                  <p>Privacy Policy</p>

               </div>
            </div>

            {/* box 3 */}

            <div className='flex flex-col space-y-10 '>
               <form className="flex flex-row space-x-3 " onSubmit={handleSubmit}>
                  
                  <input
                   type="text"
                   value={formInput}
                   name='formInput'
                   className='text-black text-sm px-2 rounded-full outline-none placeholder:text-xs'
                    placeholder='updates in your inbox..'
                    onChange={handleChange}
                    />

                  <button className='bg-BrightRed text-white p-2 px-4 rounded-full'   >
                     Go
                  </button>

               </form>



            </div>
         </div>

      </div>

    </div>
  )
}
export default Footer
