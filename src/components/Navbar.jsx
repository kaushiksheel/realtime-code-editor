import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { BlueGradient, BlueGradientOutlined } from '../helpers/TailwindClasses'
import { Container } from './Container'

export const Navbar = ({setOpenSideDrawer}) => {
  const navigate=useNavigate();
  const location=useLocation()

const handleLogout=()=>{
navigate('/');
};



  return (
    <nav className='py-3 shadow-nav-shadow'>
        <Container>
        

        <div className="wrapper flex items-center justify-between">
            <p className='font-bold text-3xl'>XEditor</p>
            <div className=" space-x-3">

            <button
            onClick={()=>setOpenSideDrawer(true)}
            type="button" data-drawer-target="drawer-left-example" data-drawer-show="drawer-left-example" data-drawer-placement="left" aria-controls="drawer-left-example"
            
            className={BlueGradientOutlined()}>
  <span className="relative px-9 py-4  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
      Add Users
  </span>
</button>
{location.state?
            <button onClick={handleLogout} type="button" className={BlueGradient()}>Logout</button>:
            <button onClick={()=>navigate('/')} type="button" className={BlueGradient()}>Login</button>
}
            

            </div>
        </div>
        </Container>
        
    </nav>
  )
}
