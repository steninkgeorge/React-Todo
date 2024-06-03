import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import TickIcon from './TickIcon'
import Modal from './Modal'

function ListItems({task, getData}) {
  const [showModal, setShowModal]=useState(false)
  
  const deleteTodo=async(e)=>{
    e.preventDefault()
    try{
      
      const response=await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`,{method : "DELETE"}
      )
      if (response.status===200){
        getData()
      }
    }catch(err){
      console.error(err)
    }
  }

  return (
    <li className='list-items'>
      <div className='info-container'>
        <TickIcon/>
        <p className='task-title'>{task.title}</p>
        <ProgressBar/>
      </div>

      <div className='button-container'>
        <button className='edit'  onClick={()=> setShowModal(true)}>edit</button>
        <button className='delete' onClick={deleteTodo}>delete</button>

      </div>
      {showModal && <Modal mode={'edit'} setShowModal={setShowModal} task={task} getData={getData}/>}
    
    </li>
  )
}

export default ListItems
