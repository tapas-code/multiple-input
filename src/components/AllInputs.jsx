import React, {useState} from 'react'
import InputForm from './InputForm'

const AllInputs = () => {

    
    const addInput = () => {
        setInputComps([...inputComps, <InputForm addInput={addInput}/> ])
    }
    
    const [inputComps, setInputComps] = useState([<InputForm addInput={addInput}/>])

  return (
    <div>
      {
        inputComps.map((item, index) => (
            <div key={index}>
                {React.cloneElement(item, { addInput })}
            </div>
        ))
      }
    </div>
  )
}

export default AllInputs
