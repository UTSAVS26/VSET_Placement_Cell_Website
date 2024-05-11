import React from 'react'
import './Contact.css'


const Contact = ({subtitle,title}) => {
  return (
    <div className='contact'>
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default Contact
