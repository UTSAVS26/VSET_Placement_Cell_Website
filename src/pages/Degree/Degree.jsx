import React from 'react'
import './Degree.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'

const Degree = () => {
  return (
    <div className='degrees'>
        <div className='degree'>
            <img src={program_1} alt=''></img>
            
        </div>
        <div className='degree'>
            <img src={program_2} alt=''></img>
        </div>
        <div className='degree'>
            <img src={program_3} alt=''></img>
        </div>
      
    </div>
  )
}

export default Degree
