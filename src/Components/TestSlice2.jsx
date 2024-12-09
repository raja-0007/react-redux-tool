import { createSlice } from "@reduxjs/toolkit";
import Custom1 from "./Custom1";
import Custom2 from "./custom2";
import { CustomEdgeLabel } from "./CustomEdgeLabel";
import { CustomEdge } from "./CustomEdge";

const TestSlice2 = createSlice({
    name: 'test',
    initialState: {
        details: {
            countRedux: 0,
            name: 'test',
            nodeTypes: {
                custom1: Custom1,
                custom2: Custom2
            },
            edgeTypes:{CustomEdgeLabel:CustomEdgeLabel, CustomEdge:CustomEdge},

            initialNodes: [
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
                    id: '3',
                    position: { x: 100, y: 200 },
                    data: { label: 'three' },
                },
                {
                    id: '4',
                    type: 'custom1',
                    position: { x: 200, y: 0 },
                    data: { label: 'four', id: '4' },

                },
            ],
            initialEdges: [
                { id: 'e1', source: '1', target: '2', type: 'CustomEdgeLabel', animated:true, style:{stroke:'red'}, label: 'to 2', },
                { id: 'e2', source: '2', target: '3' },
                { id: 'e3', source: '1', target: '4' },
                { id: 'e4', source: '4', sourceHandle: 'custom_right', target: '2' },
                // {id:'e5', source:'4', sourceHandle: 'custom_bottom', target:'3'}
            ],
            selectedEdgeId: null
        }
    },
    reducers: {
        increment(state, action) {
            console.log(state, action, action.payload)
            state.details.countRedux += 1;
        },
        decrement(state, action) {
            console.log(state, action, action.payload)

            state.details.countRedux -= 1;
        },
        reset(state, action) {
            console.log(state, action, action.payload)

            state.details.countRedux = 0;
        },
        handleNameChange(state, action) {
            console.log(state, action, action.payload)

            state.details.name = action.payload;
        },
        customEdge(state, action) {
            console.log(state, action, action.payload)
            state.details.initialEdges.push(action.payload);
        },
        addCustomNode(state, action) {
            // state.details.nodeTypes = {...state.details.nodeTypes, [action.payload.name]: state}
            // state.details.customNode = action.payload;
            state.details.initialNodes.push(action.payload);
            console.log(state, action, action.payload)
        },
        deleteNode(state, action) {
            console.log(state, action, action.payload)
            state.details.initialNodes = state.details.initialNodes.filter(node => node.id !== action.payload);

        },
        handleNodesChange(state, action) {
            console.log(state, action, action.payload)
            state.details.initialNodes = action.payload;
            
            
        },
        handleEdgesChange(state, action) {
            console.log(state, action, action.payload)
            state.details.initialEdges = action.payload;
        },
        handleOnConnect(state,action){
            // console.log(state, action, action.payload)
            state.details.initialEdges = action.payload;

            // console.log('connectionsconnectionsconnectionsconnections',state, action.payload)

        },
        setSelectedEdgeId: (state, action) =>{
            state.details.selectedEdgeId = action.payload;
            console.log('setSelectedEdgeIdsetSelectedEdgeIdsetSelectedEdgeIdsetSelectedEdgeId', action.payload)

        },
        deleteEdge(state, action){
            if(state.details.selectedEdgeId){
                state.details.initialEdges = state.details.initialEdges.filter(edge => edge.id !== state.details.selectedEdgeId);
            }
        }
    }
})

export const {
    increment, decrement, reset,
    handleNameChange,
    customEdge, addCustomNode,
    handleNodesChange, handleEdgesChange, handleOnConnect,
    deleteNode, setSelectedEdgeId, deleteEdge
} = TestSlice2.actions;
export default TestSlice2.reducer;