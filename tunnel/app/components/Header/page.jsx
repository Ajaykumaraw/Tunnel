import {CiMenuFries} from 'react-icons/ci';


function Header() {
  return (
    <div className="app__header flex flex-row h-16 items-center justify-between p-8 text-amber-500 bg-slate-50">
        <div className="app__header-code rounded-xl border-amber-500 text-slate-400">
            <input type="text" placeholder='Enter code...' 
            className='w-36 h-8 pl-8 pr-8 border rounded-xl border-amber-500 outline-0 text-current text-xs' />
        </div>
        <div className="app__header-logo w-1/4"> 
          <h1 className='text-amber-500 text-3xl font-medium mr-8 font-light'>Tunn<span className='text-3xl font-medium text-black'>el</span> </h1>
        </div>
        <div className="app__header-menu text-2xl font-medium cursor-pointer">
            <CiMenuFries className='text-2xl font-bold'/>
        </div>
    </div>
  )
}

export default Header