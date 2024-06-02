import React from 'react'
import { useState } from 'react'

function Modal() {
  const mode='create'
  const editMode= mode === 'edit '? true : false

  const [data,setData]=useState({
    user_email:"",
    title:"",
    progress:"",
    date:editMode? "": new Date()
  })
  

  const handleChange=(e)=>{
    console.log("changing",e)
    const {name,value}=e.target

    setData(data=>({
      ...data, 
      [name]:value
    }))
  }

  return (
    <div className='overlay'>
      <div className='modal'>
        <div className='form-title-container'>
          <h3>Let's {mode} your task</h3>
          <button>X</button>
        </div>

        <form>
          <input
            required
            maxLength={30}
            placeholder=' your task goes here'
            name='title'
            value={data.title}
            onChange={handleChange}
          />
          <br/>
          <label htmlFor="range"> Drag to select your current progress</label>
          <input
          required
            type='range'
            min='0'
            id='range'
            max='100'
            name='progress'
            value={data.progress}
            onChange={handleChange}
          />

          <input className={mode} type='submit'/>
        </form>
      </div>
    </div>
  )
}

export default Modal
