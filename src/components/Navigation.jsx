import React from 'react'
import addNote from '../assets/icons/Add.svg'
import deleteNote from '../assets/icons/delete.svg'
import editNote from '../assets/icons/edit.svg'
import ViewNotes from '../assets/icons/listNotes.svg'
import dashboardIcon from '../assets/icons/user.svg'
import Nav from './Nav'


const Navigation = ({ setIsPopUpShow }) => {
  return (
    <div className='flex flex-col justify-between w-[20%] h-screen shadow-xl border-r-2 py-[25px]'>
        <div className='flex flex-col pt-[100px]'>
            <Nav icon={dashboardIcon} title="Dashboard"/>
            <Nav icon={ViewNotes} title="View Notes"/>
            <Nav icon={addNote} title="Add Note" onClick={() => setIsPopUpShow(true)}/>
            <Nav icon={editNote} title="Edit Note"/>
        </div>
        <Nav icon={deleteNote} title="Delete Note"/>
    </div>
  )
}

export default Navigation