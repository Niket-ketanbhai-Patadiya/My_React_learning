import { useState } from "react"

function App() {
  const [color,setColor]=useState("olive")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button className="outline-none px-4 py-1 rounded-full text-white" onClick={()=>{setColor("red")}} style={{backgroundColor:"red"}}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white"  onClick={()=>{setColor("blue")}} style={{backgroundColor:"blue"}}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white"  onClick={()=>{setColor("green")}} style={{backgroundColor:"green"}}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white"  onClick={()=>{setColor("grey")}} style={{backgroundColor:"grey"}}>Grey</button>
          <button className="outline-none px-4 py-1 rounded-full text-white"  onClick={()=>{setColor("magenta")}} style={{backgroundColor:"magenta"}}>Magenta</button>
          <button className="outline-none px-4 py-1 rounded-full text-white"  onClick={()=>{setColor("purple")}} style={{backgroundColor:"purple"}}>Purple</button>
          <button className="outline-none px-4 py-1 rounded-full text-white"  onClick={()=>{setColor("orange")}} style={{backgroundColor:"orange"}}>Saffron</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
