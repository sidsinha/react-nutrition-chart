import React from 'react';
import Home from './client/components/home';
import './App.css';

const App: React.FC = () => {
  return (  
      <div className={"App"} >
        <div className={"App-header bg-blue"}> 
          CXO Web Glass Learning Demo!!! 
        </div>
        <div className={"courier vh-100 flex items-center justify-center"} >
          <Home />
        </div>
    </div>
   );
};

export default App;
