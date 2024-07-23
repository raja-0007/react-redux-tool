import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from './TestSlice2'

function TestComp4() {
    const dispatch = useDispatch()
    return (
      <div>testComp2
          <button style={{backgroundColor:'blue', padding:'10px'}} onClick={()=>dispatch(decrement('2'))}>decrement</button>
      </div>
    )
}

export default TestComp4