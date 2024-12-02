
import { useState } from 'react'
import './App.css'


function App() {

  const [height,setHeight]=useState("")
  const [weight,setWeight]=useState("")
  const [bmi,setBmi]=useState(null)
  const [category,setCategory]=useState("")


const calculateBMI=()=>{
  if(height && weight){
    const heightInMeters=height/100;
    const bmi=(weight/(heightInMeters*heightInMeters)).toFixed(2)
    setBmi(bmi)

    if(bmi<18.5){
      setCategory("Underweight")
    }
    else if(bmi>=18.5 && bmi<=24.9){
      setCategory("Normal weight")

    }
    else if(bmi>=25 && bmi<=29.9){
      setCategory("Over weight")

    }
    else{
      setCategory("obese")
    }
  }
}
  

  return (
    <>
      
      <div className='bmi-card'>
        <h2>BMI Calculator</h2>
        <div className='input-group'>
          <label >Weight (kg)
            <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} placeholder='Enter your weight...' />
          </label>
        </div>
        <div className='input-group'>
          <label >Height (cm)
            <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)} placeholder='Enter your height...' />
          </label>
        </div>
        <button className='btn-calculator' onClick={calculateBMI}>Calculate</button>
        {
          bmi && (
            <div className="result">
              <h3>Your BMI : {bmi}</h3>
              <h4>Category :{category}</h4>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App
