import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addData, removeData } from '../store/slices/DataSlice'

const InputForm = (props) => {

  const [data, setData] = useState('')
  const dispatch = useDispatch()

  const handleClear = () => {
    setData('')
    dispatch(removeData(data))
  }

  return (
      <div className='input'>
        <input 
          type="text" 
          className='input--form' 
          placeholder='Enter Something...'
          value={data}
          onChange={(e)=>setData(e.target.value)}
        />
        <div className="input--btn">
          <button type='submit' onClick={()=>dispatch(addData(data))}>Save</button>
          <button onClick={props.addInput}>+</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>
  )
}

export default InputForm
