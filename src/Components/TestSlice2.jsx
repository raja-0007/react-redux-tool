import { createSlice } from "@reduxjs/toolkit";
import Custom1 from "./Custom1";
import Custom2 from "./custom2";

const TestSlice2 = createSlice({
    name: 'test',
    initialState: {
        details: {
            count: 0,
            name: 'test',
            nodeTypes: {
                custom1: Custom1,
                custom2: Custom2
            },
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
                { id: 'e1', source: '1', target: '2', label: 'to 2', type: 'step' },
                { id: 'e2', source: '2', target: '3' },
                { id: 'e3', source: '1', target: '4' },
                { id: 'e4', source: '4', sourceHandle: 'custom_right', target: '2' },
                // {id:'e5', source:'4', sourceHandle: 'custom_bottom', target:'3'}
            ],
            customNode: {},
            customEdge: {},
        }
    },
    reducers: {
        increment(state, action) {
            console.log(state, action, action.payload)
            state.details.count += 1;
        },
        decrement(state, action) {
            console.log(state, action, action.payload)

            state.details.count -= 1;
        },
        reset(state, action) {
            console.log(state, action, action.payload)

            state.details.count = 0;
        },
        handleNameChange(state, action) {
            console.log(state, action, action.payload)

            state.details.name = action.payload;
        },
        customEdge(state, action) {
            console.log(state, action, action.payload)
            state.details.customEdge = action.payload;
        },
        addCustomNode(state, action) {
            // state.details.nodeTypes = {...state.details.nodeTypes, [action.payload.name]: state}
            state.details.customNode = action.payload;
            state.details.initialNodes.push(action.payload);
            console.log(state, action, action.payload)
        },
        deleteNode(state, action) {
            console.log(state, action, action.payload)
            state.details.initialNodes = state.details.initialNodes.filter(node => node.id !== action.payload);

        }
    }
})

export const {
    increment, decrement, reset,
    handleNameChange,
    customEdge, addCustomNode,
    deleteNode
} = TestSlice2.actions;
export default TestSlice2.reducer;