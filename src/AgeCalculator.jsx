import React from 'react'
import { useState } from 'react'

function AgeCalculator ()
{
    let [ dob, Setdob ] = useState( '' )
    const [ age, setAge ] = useState( null );
    
    let update = (e) =>
    {     
        Setdob(e.target.value)
    } 
    const calculateAge = () => {
        const birthDate = new Date(dob);
        const today = new Date();
        const ageDiff = today - birthDate;
        const ageDate = new Date(ageDiff);
   
        setAge( Math.abs( ageDate.getUTCFullYear() - 1970 ) );
        
      };
  return (
      <div className='container'>
          <div className="row mx-auto justify-content-center align-items-center mt-5">
          
              <div className="col-12 col-md-4 bg-light px-5 py-5">
                  <h1 className='text-center'>AgeCalculator</h1>
                  <div className="card px-5 py-3">
               
                      <input type="date" name='todaydate'  className='form-control' />Today Date
                      <input type="date" name='birthdate' value={dob} onChange={update} className="form-control mt-3" />Birth Date
                      
                      <p className=' mt-3 mb-3'> Your Age is : { age}</p>
                      <button className='btn btn-primary mt-4' onClick={calculateAge}>Calculate Age</button>
                      </div>
              </div>

              </div>
          </div>
    
  )
}

export default AgeCalculator