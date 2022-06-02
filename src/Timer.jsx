  import React, { useEffect, useState } from 'react'
  
  function Timer() {


  const [min ,setMin]=useState(0);
  const [sec, setSec]=useState(0);
    
      var id;
  useEffect(()=>{


     id =setInterval(()=>{
         setSec((pre)=>pre+1);

         if(sec===59){
           setSec(0);
           setMin((pre)=>pre+1);
         }
       },500)

       return(()=>{
         clearInterval(id);
       })
  })

  
      const pause=()=>{
      clearInterval(id);
   }
   const reset=()=>{
     setMin(0);
     setSec(0);
  }


    return (
    <>
    
    <h1>Timer </h1>
    <h1> {min<10 ?"0"+min:min} :{sec<10?"0"+sec:sec} </h1>
    <button onClick={reset} >Restart</button>
    <button onClick={pause}>Pause</button>

    
    </>
    )
  }
  
  export default Timer
