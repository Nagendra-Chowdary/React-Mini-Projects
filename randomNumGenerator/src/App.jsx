import { useState } from 'react';
import './App.css'
function App() {
  
  function handleClk(){
    return new Promise((res,rej)=>{
      let randomNum=Math.floor(Math.random()*10);
      if(randomNum>3){
      
        res(`${randomNum}  You won .`);
      }
      else{
        let err=`${randomNum} Nah bro . Try again`;
        
        rej(err);
      }
  
    }).then((res)=>{
     console.log(res);
     setResult(res);
     
    }).catch(err=>{
    console.log(err);
    setResult(err)
    
    })
  }
  const [result,setResult]=useState("Generate a random number (>3 to win)");

  return (
    <>
    <div className='container'>
      {/* <p className="num">{result[0]}</p> */}
      <p className="res">{result} </p>
<p><button onClick={handleClk}>GO</button></p>
    </div>
    </>
  )
}

export default App
