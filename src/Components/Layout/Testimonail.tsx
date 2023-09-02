import data from '../../db.json'


const Testimonail = () => {
  return (

    <div className="flex flex-col text-center space-y-4 mt-10">
      <h1 className="font-bold text-3xl text-DarkBlue">What they've said</h1>

      <div className='flex flex-row space-x-6'>
     
          {data.users.map((user)=>{
         return(
            <div key={user.id} className='flex flex-col space-y-4 items-center justify-center'>
               <img src={user.img} alt="" className='w-16' />
               <p className='text-xs'>{user.name}</p>
               <p>{user.Testimonial}</p>


            </div>
         )
      })}
      


      </div>

     
    </div>
  )
}
export default Testimonail