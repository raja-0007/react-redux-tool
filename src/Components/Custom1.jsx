import React, { useState } from 'react'
import { Handle, Position } from '@xyflow/react'
import { useContextCount } from './CountContext'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomNode, customEdge, decrement, handleNameChange, increment } from './TestSlice2'

function Custom1({ data, isConnectable }) {
  const { count, setCount } = useContextCount()

  const countRedux = useSelector((state) => state.test.details.countRedux)
  const dispatch = useDispatch()
  const name = useSelector((state) => state.test.details.name)
  const nodeTypes = useSelector((state) => state.test.details.nodeTypes)
  console.log(count)

  return (
    <div style={{ padding: '20px', border: '2px solid black', backgroundColor: 'rosybrown' }}>
      <Handle
        type='target'
        position={Position.Top}
        isConnectable={isConnectable}
        id='custom_top'
      />
      <p><label htmlFor="input">enter text: {countRedux}</label></p>
      <input type="text" name="" id="input" value={name} onChange={(e) => { dispatch(handleNameChange(e.target.value)); console.log(e.target.value) }} className='nodrag' />
      <Handle
        type='source'
        position={Position.Bottom}
        isConnectable={isConnectable}
        id='custom_bottom'
      />
      <Handle
        type='source'
        position={Position.Right}
        isConnectable={isConnectable}
        id='custom_right'
      />

<br />
      <button type='button' className='nodrag' onClick={() => dispatch(increment())}>increment</button> <br />
      <button type='button' className='nodrag' onClick={() => dispatch(decrement('2'))}>decrement</button><br />
      <button type='button' className='nodrag' onClick={() => dispatch(customEdge({ id: 'e5', source: '4', sourceHandle: 'custom_bottom', target: '3' }))}>
        add edge to 3
      </button>
      <br />
      <button type='button' className='nodrag' onClick={() => {
        dispatch(addCustomNode({
          id: 'custom2', type: 'custom2', position: { x: 400, y: 200 }, 
          data: { label: 'five', isVisible:true, handleId:'custom2_top', }
        }));
      dispatch(customEdge({ id: 'e6', source: data.id, sourceHandle: 'custom_right', label:'to custom2', target: 'custom2' }))
      }}> go to custom2</button>
    </div>
  )
}

export default Custom1