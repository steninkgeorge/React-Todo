import React from 'react'
import ProgressBar from './ProgressBar'
import TickIcon from './TickIcon'

function ListItems({task}) {
  return (
    <li className='list-items'>
      <div className='info-container'>
        <TickIcon/>
        <p className='task-title'>{task.title}</p>
        <ProgressBar/>
      </div>

      <div className='button-container'>
        <button className='edit'>edit</button>
        <button className='delete'>delete</button>

      </div>
    
    </li>
  )
}

export default ListItems
