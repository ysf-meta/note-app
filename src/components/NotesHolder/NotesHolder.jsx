import React from 'react'
import chevronDownIcon from '../../assets/icons/chevronDown.svg'
import './NotesHolder.css'

const NotesHolder = ({ tasksArray }) => {
  {/* {tasksArray.map((task, index) => <p key={index}>{task}</p>)} */}

  return (
    <div className='notesHolderCom flex-grow p-3'>

      <div className="notesHolderComHeader 
        flex justify-between items-center pb-2 mx-2 mb-5 border-b-2"
      >

        <h3 className='ms-2'>Notes</h3>
        <img className='me-2' src={chevronDownIcon} alt="Chevron Down Icon" />

      </div>

      { 
        (tasksArray.length > 0) ?  
          <main className='sm:me-7'>
          <div className="todayTasksCard p-3 shadow-lg">
            <h4 className='font-bold text-2xl'>Today's Notes</h4>
            <div className="todayTasksCardGroup">
              {
                tasksArray.map((task, index) => (
                  <div className='task relative flex items-center ps-10 pe-5 py-2'>
                    <span className='flex-grow' key={index}>{task}</span>
                    <button class="py-1 px-4 bg-black text-white me-20">Add</button>
                    <button class="py-1 px-4 bg-black text-white">Delete</button>
                  </div>
                ))
              }
            </div>
          </div>
        </main> : null
      }

    </div>

  )
}

export default NotesHolder