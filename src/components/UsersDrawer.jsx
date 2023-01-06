import React, { useContext } from 'react'
import { PostContext } from '../context/PostContext'
import { Avatar } from './Avatar'
import {ClipboardIcon, XMarkIcon} from '@heroicons/react/24/outline';
import { toast, Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';


export const UsersDrawer = ({setOpenSideDrawer}) => {
   const{joinedUsers}=useContext(PostContext)

const params=useParams()
const {id:uid}=params



const handleCopyToClipboard=async()=>{
   navigator.clipboard.writeText(uid).then(function() {
      toast.success('Copied to clipboard')
    }, function(err) {
      toast.error(err)
    });
}



  return (
    <>
    <div className='w-screen h-[100vh] fixed bg-drawer-overlay top-0'>
      <div className="box h-screen w-[350px] bg-white p-3 relative">
         <XMarkIcon onClick={()=>setOpenSideDrawer(false)} className='w-11 h-11 absolute right-7 cursor-pointer'/>
         <h3 className='font-semibold text-3xl'>Connected Users</h3>
         <div className="box mt-7 flex flex-wrap gap-7 ">
         {joinedUsers?.map(user=>
               <div key={user.id} className="box grid place-items-center w-fit">
               <Avatar name={user.name}/>
               <p className='font-semibold text-xl mt-2'>{user.name}</p>
               </div>
            )}
            
         </div>
      <div className="absolute  bottom-10">
         <p className='font-bold text-2xl'>Invite users by sharing this 👇 </p>
      <div onClick={handleCopyToClipboard} className=" bg-[#F5F4F6] flex items-center gap-x-4 p-3 py-5 cursor-pointer">
            <p className='text-xl     whitespace-nowrap'>ff1efde0-2eba-4320-bdf2-5b0cd03c1114</p>
            <ClipboardIcon  className='w-8 h-8 '/>
         </div>
      </div>
      </div>
    </div>
    <Toaster
    position='top-right'
    toastOptions={{
      duration:2000,
      style:{
         fontSize:15,
         padding:'15px 12px'
      }
    }}
    />
    </>
  )
}
