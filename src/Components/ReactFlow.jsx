import React, { useEffect, useMemo } from 'react'
import { useState, useCallback } from 'react';

import { 
  ReactFlow, 
  addEdge, 
  Background, 
  Controls, 
  MiniMap, 
  applyEdgeChanges, 
  applyNodeChanges,

  
 } from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import Custom1 from './Custom1';
import { useContextCount } from './CountContext';
import { useDispatch, useSelector } from 'react-redux';
import { customEdge, reset } from './TestSlice2';
import { CustomEdgeLabel } from './CustomEdgeLabel';
import { CustomEdge } from './CustomEdge';



const ReactFlowCp = () => {
  const edgeTypes={CustomEdgeLabel:CustomEdgeLabel, CustomEdge:CustomEdge}
  // const nodeTypes = useSelector(state=>state.test.details.nodeTypes)
  const { count, setCount} = useContextCount()
  
  // const countRedux = useSelector((state)=>state.test.details.count)
  // const name = useSelector((state)=>state.test.details.name)
  // const customEdge = useSelector((state)=>state.test.details.customEdge)
  // const customNode = useSelector((state)=>state.test.details.customNode)
  const {nodeTypes, countRedux, name, initialEdges, initialNodes, handleOnConnect, handleNodesChange, handleEdgesChange,} = useSelector(state=>state.test.details)
  const dispatch = useDispatch()
  
 console.log('initialNodesinitialNodesinitialNodesinitialNodesinitialNodesinitialNodes',initialNodes, initialEdges)
  // const [count, setCount] = useState(0)

  

 

  const [nodes, setNodes] = useState([]);
const [edges, setEdges] = useState([]);

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  // Convert each object to a JSON string and sort them
  const sortedArr1 = arr1.map(obj => JSON.stringify(obj)).sort();
  const sortedArr2 = arr2.map(obj => JSON.stringify(obj)).sort();

  // Compare the sorted arrays
  return sortedArr1.every((value, index) => value === sortedArr2[index]);
}

useEffect(()=>{
  if(!areArraysEqual(initialNodes, nodes)){
    setNodes(initialNodes)
  }
  if(!areArraysEqual(initialEdges, edges)){
    setEdges(initialEdges)
  }
},[initialNodes, initialEdges])
// useEffect(()=>{

//   if(Object.keys(customEdge).length > 0){
//     setEdges((eds) => addEdge(customEdge, eds))
//   }

// },[customEdge])

// useEffect(()=>{
//   if(Object.keys(customNode).length > 0){
//     setNodes([...nodes, customNode])
//     console.log([...nodes, customNode])
//   }
// },[customNode])

const onNodesChange = useCallback(
  (changes) =>{
    let nodes = []
     setNodes((nds) => {
      nodes = applyNodeChanges(changes, nds)
      return nodes
    })

    dispatch(handleNodesChange(nodes))
   },
[],
)
// const onNodesChange =useCallback(
//     (changes) =>
//       dispatch(handleNodesChange(changes)),
//   [],
//   )
// const onEdgesChange = useCallback(
//   (changes) => 
//     dispatch(handleEdgesChange(changes)),
//   [],
// );  
const onEdgesChange = useCallback(
  (changes) => {
    let edges = []
    setEdges((eds) => {
      
      edges = applyEdgeChanges(changes, eds)
      return edges
    })

    dispatch(handleEdgesChange(edges))
  },
  [],
);  

// const handleDispatchConnects=(connects)=>{
//   console.log('handleDispatchConnectshandleDispatchConnectshandleDispatchConnectshandleDispatchConnects', connects)
//   dispatch(handleOnConnect(connects))
// }
const onConnect = useCallback(
  (params) => {
    let newConnects = addEdge(params, edges)
      // return newConnects
    // })
    
    console.log('handleOnConnecthandleOnConnecthandleOnConnecthandleOnConnect', newConnects)
    dispatch(customEdge(newConnects[newConnects.length-1]))
  },
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
        edgeTypes={edgeTypes}
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