import './App.css';
import{useState} from "react";




function App() {
  const[calculator,setCalculator]=useState("")
 const result=()=>{
  setCalculator(eval(calculator))
 }

  const cancel=(a)=>{
    setCalculator("")
  }
  
  const onefunction=(c)=>{
    setCalculator(calculator+c)
  }
 
 
  return (
    <div className="App">
     
        <div>
          <header className='header'>CALCULATOR</header>
          <p className='display'>{calculator}</p>
        </div>
        <div>
          <button className="buttons" onClick={(a)=>cancel()} >AC</button >
          <button className="buttons" onClick={(b)=>onefunction("+/-")} >+/-</button >
          <button className="buttons" onClick={(c)=>onefunction("%")} >%</button >
          <button className="buttons" onClick={(d)=> onefunction("/")} >/</button >
        </div>
        <div>
        <button className="buttons" onClick={(e)=>onefunction("7")} >7</button >
          <button className="buttons" onClick={(f)=>onefunction("8")} >8</button >
          <button className="buttons" onClick={(g)=>onefunction("9")} >9</button >
          <button className="buttons" onClick={(h)=>onefunction("*")} >*</button >
        <div>
        <button className="buttons" onClick={(i)=>onefunction("4")} >4</button >
          <button className="buttons" onClick={(j)=>onefunction("5")} >5</button >
          <button className="buttons" onClick={(k)=>onefunction("6")} >6</button >
          <button className="buttons" onClick={(l)=>onefunction("-")} >-</button >
        </div>
        <div>
        <button className="buttons" onClick={(m)=>onefunction("1")} >1</button >
          <button className="buttons" onClick={(n)=>onefunction("2")} >2</button >
          <button className="buttons" onClick={(o)=>onefunction("3")} >3</button >
          <button className="buttons" onClick={(p)=>onefunction("+")} >+</button >
        </div>
        <div>
        <button className="buttons" onClick={(q)=>onefunction("0")} >0</button >
          <button className="buttons" onClick={(r)=>onefunction(".")} >.</button >
          <button className="buttons" onClick={result} >=</button >
         
        </div>
      </div>

    </div>
    
  );
}

export default App;
