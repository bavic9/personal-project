import React from 'react'
import { useState } from 'react';

const Tab = () => {
  const [toggle, setToggle] = useState(1)

  function updateToggle(id) {
    setToggle(id)
  }

  


  return (
    <div className='container col-6 tab p-5 '>
      <ul className='d-flx'>
        <li className='flex-fill active-tabs' onClick={()=> updateToggle(1)}>1</li>
        <li className='flex-fill' onClick={()=> updateToggle(2)}>2</li>
        <li className='flex-fill' onClick={()=> updateToggle(3)}>3</li>
      </ul>

      <div className='content-tabs'>
        <div className={toggle === 1 ? 'show-content' : 'content'}>
          <h2>Content 1</h2>
          <p>hveff febufijfoef ififugfei fefeifeofj</p>
        </div>
        <div className={toggle === 2 ? 'show-content' : 'content'}>
          <h2>content 2</h2>
          <p>hello how are you</p>
        </div>
        <div className={toggle === 3 ? 'show-content' : 'content'}>
          <h2>content 3</h2>
          <p>go homeeeee</p>
        </div>
      </div>
    </div>
  )
}

export default Tab