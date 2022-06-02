
import { useState } from 'react';
import './App.css';
import Timer from './Timer';

function App() {

  const [show,setShow]=useState(true)
  return (
    <div className="App"  >
   
    <Timer/> 
   
    
    </div>
  );
}

export default App;
