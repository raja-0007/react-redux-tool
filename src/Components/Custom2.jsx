import React, { useEffect } from 'react'
import { Handle, Position, NodeToolbar, useConnection, useEdges } from '@xyflow/react'
import { useSelector } from 'react-redux'
import { useNodeId } from '@xyflow/react';
import { useDispatch,  } from 'react-redux';
import { deleteNode } from './TestSlice2';

const Custom2 = ({ data }) => {
  // const id = useSelector((state) => state.test.details.customNode.handleId)
  const connection = useConnection();
  const dispatch = useDispatch()
  const edgesCount = useEdges()
  const nodeId = useNodeId()
  console.log('edgesCountedgesCountedgesCountedgesCount',edgesCount)
  useEffect(()=>{
    console.log(connection)
  },[connection])
  return (
    <div style={{ padding: '20px', backgroundColor: 'red' }}>
      <NodeToolbar style={{display:'flex', flexDirection:'column', gap:'10px'}} isVisible={data.isVisible} position='right'>
        <button>delete</button>
        <button>copy</button>
        <button>expand</button>
      </NodeToolbar>
      Custom2 <p>hii</p>
      <button onClick={()=>dispatch(deleteNode(nodeId))}>back</button>
      <Handle
        position={Position.Top}
        type='target'
        id={data.handleId}
      />
    </div>
  )
}

export default Custom2