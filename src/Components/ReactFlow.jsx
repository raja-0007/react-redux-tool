import React, { useEffect, useMemo } from 'react'
import { useState, useCallback } from 'react';

import { 
  ReactFlow, 
  addEdge, 
  Background, 
  Controls, 
  MiniMap, 
  applyEdgeChanges, 
  applyNodeChanges
 } from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import Custom1 from './Custom1';
import { useContextCount } from './CountContext';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from './TestSlice2';
import { CustomEdgeLabel } from './CustomEdgeLabel';



const ReactFlowCp = () => {
  const nodeTypes = useSelector(state=>state.test.details.nodeTypes)
  const { count, setCount} = useContextCount()
  const countRedux = useSelector((state)=>state.test.details.count)
  const name = useSelector((state)=>state.test.details.name)
  const customEdge = useSelector((state)=>state.test.details.customEdge)
  const customNode = useSelector((state)=>state.test.details.customNode)
  const dispatch = useDispatch()

  // const [count, setCount] = useState(0)

  // const stableSetCount = useCallback((newCount) => {
  //   setCount(newCount);
  // }, []);

  const initialNodes = [
    {
      id: '1',
      data: { label: 'one' },
      position: { x: 0, y: 0 },
      type: 'input',
    },
    {
      id: '2',
      data: { label: 'two' },
      position: { x: 100, y: 100 },
    },
    {
      id:'3',
      position:{x:100,y:200},
      data:{label:'three'},
    },
    {
      id:'4',
      type:'custom1',
      position:{x:200,y:0},
      data:{label:'four', id:'4'},
      
    },
  ];


  useEffect(()=>{
    console.log(count)
  },[count])

  const initialEdges =[
    {id:'e1', source:'1', target:'2', label:'to 2', type:'step'},
    {id:'e2', source:'2', target:'3'},
    {id:'e3', source:'1', target:'4'},
    {id:'e4', source:'4', sourceHandle: 'custom_right', target:'2'},
    // {id:'e5', source:'4', sourceHandle: 'custom_bottom', target:'3'}
  ]

  const [nodes, setNodes] = useState(initialNodes);
const [edges, setEdges] = useState(initialEdges);

useEffect(()=>{

  if(Object.keys(customEdge).length > 0){
    setEdges((eds) => addEdge(customEdge, eds))
  }

},[customEdge])



const onNodesChange = useCallback(
  (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
[],
)
const onEdgesChange = useCallback(
  (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  [],
);  

const onConnect = useCallback(
  (params) => setEdges((eds) => addEdge(params, eds)),
  [],
);

  return (
    <div style={{width:'700px', height:'500px', margin:'auto', padding:'50px', backgroundColor:'white', boxShadow:'10px 10px 5px gray'}}>
      <p style={{margin:0, padding:0}} >count : {countRedux}, name: {name}</p>
      <button style={{margin:0, padding:0}} onClick={()=>dispatch(reset())}>reset</button>
      <ReactFlow 
      nodes={nodes}
       edges={edges}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onEdgesChange={onEdgesChange}
         fitView>
        <Background />
        <CustomEdgeLabel/>
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  )
}

export default ReactFlowCp