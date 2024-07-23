import React from 'react'
import { Handle, Position } from '@xyflow/react'
import { useSelector } from 'react-redux'

const Custom2 = () => {
    const id = useSelector((state)=>state.test.details.customNode.handleId)
  return (
    <div style={{padding:'20px', backgroundColor:'red'}}>
        Custom2 <p>hii</p>
        <button>back</button>
        <Handle
        position={Position.Top}
        type='target'
        id={id}
        />
        </div>
  )
}

export default Custom2