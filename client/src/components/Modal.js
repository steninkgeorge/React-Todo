import React from 'react'
import { useState } from 'react'

function Modal( {mode,setShowModal ,task,getData}) {
  
  const editMode= mode === 'edit'? true : false

  const [data,setData]=useState({
    
    user_email:editMode? task.user_email : "stenin@test.com",
    title: editMode? task.title : null,
    progress:editMode ? task.progress : 50,
    date:editMode? task.date: new Date()
  })

  const postData=async(e)=>{
    e.preventDefault();
    try{
      const response= await fetch(`${process.env.REACT_APP_SERVERURL}`,{method:"POST", headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})
      if(response.status===200){
        console.log('worked')
        setShowModal(false)
        getData()
      }
    }catch(err){
      console.error(err)
    }
  }

  const editData=async(e)=>{
    e.preventDefault()
    try{
      const response=await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`,{method:"PUT", headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})
      if (response.status===200){
        setShowModal(false)
        getData()
      }
    }catch(err){
      console.error(err)
    }
  } 

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
          <button onClick={()=>setShowModal(false)}>X</button>
        </div>

        <form>
          <input
            required
            maxLength={30}
            placeholder='your task goes here'
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

          <input className={mode} type='submit' onClick={editMode ? editData: postData}/>
        </form>
      </div>
    </div>
  )
}

export default Modal
