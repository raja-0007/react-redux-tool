import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from './TestSlice2'

function TestComp3() {
    const dispatch = useDispatch()

  return (
    <div>
        testComp1
        <button style={{backgroundColor:'red', padding:'10px'}} onClick={()=>{dispatch(increment('2'))}}>increment</button>
    </div>
  )
}

export default TestComp3