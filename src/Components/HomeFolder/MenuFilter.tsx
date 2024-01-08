import { FilteredProps, MenuButton } from '../../Data'

const MenuFilter = () => {
  return (
    <div>
      <div className='w-full max-w-full mt-5 lg:px-6 mx-auto lg:flex lg:justify-between xxs:grid xxs:grid-cols-3 xxs:justify-items-center   md:space-x-5'>
        {MenuButton.map((item: FilteredProps)=>{
         return(
            <div  className='w-10 hover:bg-gray-300 xxs:h-10 sm:w-32 sm:h-32 xxs:mb-3 flex flex-col  justify-center items-center xxs:border xxs:border-black sm:border-none hover:border-gray-300 '>
                <div className=' sm:text-5xl xxs:text-2xl'>{item.MenuIcon }</div>
                <div className='xxs:hidden sm:text-xl sm:flex sm:pt-5'>
                  {item.MenuButt}
                </div>
            </div>
         )
        })}
      </div>
        
    </div>
  )
}

export default MenuFilter