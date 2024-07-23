// App.js
import React from 'react';
import ProductList from './Components/ProductList';
import './App.css'
import TestComp3 from './Components/TestComp3';
import TestComp4 from './Components/TestComp4';
import ReactFlowCp from './Components/ReactFlow';
// import contextProvider from './Components/context';
import ContextProvider from './Components/CountContext';
const App = () => {
  return (

    <div>
      {/* <ProductList />
      
      <TestComp3/>
      <TestComp4/> */}
      <ContextProvider>

      <ReactFlowCp/>
      </ContextProvider>
    </div>

  );
};

export default App;
