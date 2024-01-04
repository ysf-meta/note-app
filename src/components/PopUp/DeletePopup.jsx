import axios from 'axios';
import React from 'react'


const DeletePopup = ({selectedNote,setSelect,setTasksArray}) => {
  const deleteBtn=()=>{
    setTasksArray(items=>items.filter((e, index) => index !== selectedNote.index));
    setSelect({});
    axios.delete("https://udkq7e4e74.execute-api.us-east-1.amazonaws.com/v1/Note",{ 
    data: {"Title":selectedNote.title}
    })

  }

  return (
    <div className='absolute z-50 w-full h-full bg-[#81818150] flex justify-center items-center'>
        <div className='bg-white p-10 min-w-[50%] rounded-lg text-center'>
        <h2 className='text-2xl mb-8 font-medium'>Delete Note</h2>
        <div>
           <button className='bg-green-600 px-[30px] py-[10px] text-white font-semibold rounded-lg mr-8'
           onClick={deleteBtn}>
            Yes
            </button> 
           <button className='bg-red-500 px-[30px] py-[10px] text-white font-semibold rounded-lg' onClick={()=> setSelect({})}>No</button> 
        </div>
        </div>
    </div>
  )
}

export default DeletePopup