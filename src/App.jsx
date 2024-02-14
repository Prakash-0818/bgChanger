import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>
          <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg px-4 py-3 rounded-2xl bg-white'>
              
              <button className='shadow-xl rounded py-2 w-12' 
                style={{backgroundColor:'green'}} onClick={()=> setColor("green")}>
              </button>
              <button className='shadow-xl rounded px-4 py-2 w-12' 
                style={{backgroundColor:'red'}} onClick={()=> setColor("red")}>
              </button>
              <button className='shadow-xl rounded px-4 py-2 w-12' 
                style={{backgroundColor:'yellow'}} onClick={()=> setColor("yellow")}>
              </button>
              <button className='shadow-xl rounded px-4 py-2 w-12' 
                style={{backgroundColor:'Tomato'}} onClick={()=> setColor("Tomato")}>
              </button>
              <button className='shadow-xl rounded px-4 py-2 w-12' 
                style={{backgroundColor:'MediumSeaGreen'}} onClick={()=> setColor("MediumSeaGreen")}>
              </button>
              <button className='shadow-xl rounded px-4 py-2 w-12' 
                style={{backgroundColor:'gray'}} onClick={()=> setColor("gray")}>
              </button>
              <button className='shadow-xl rounded px-4 py-2 w-12' 
                style={{backgroundColor:'LightGray'}} onClick={()=> setColor("LightGray")}>
              </button>
              <button className='shadow-xl rounded px-4 py-2 w-12' 
                style={{backgroundColor:'brown'}} onClick={()=> setColor("brown")}>
              </button>
              <button className='shadow-xl rounded px-4 py-2 w-12' 
                style={{backgroundColor:'indigo'}} onClick={()=> setColor("indigo")}>
              </button>
              <button className='shadow-xl rounded px-4 py-2 w-12' 
                style={{backgroundColor:'violet'}} onClick={()=> setColor("violet")}>
              </button>
              <button className='shadow-xl rounded px-4 py-2 w-12' 
                style={{backgroundColor:'teal'}} onClick={()=> setColor("teal")}>
              </button>
              <button className='shadow-xl rounded px-4 py-2 w-12' 
                style={{backgroundColor:'rosybrown'}} onClick={()=> setColor("rosybrown")}>
              </button>
              <button className='shadow-xl rounded px-4 py-2 w-12' 
                style={{backgroundColor:'RebeccaPurple'}} onClick={()=> setColor("RebeccaPurple")}>
              </button>
              <button className='shadow-xl rounded px-4 py-2 w-12' 
                style={{backgroundColor:'purple'}} onClick={()=> setColor("purple")}>
              </button>
              <button className='shadow-xl rounded px-4 py-2 w-12' 
                style={{backgroundColor:'OliveDrab'}} onClick={()=> setColor("OliveDrab")}>
              </button>
              <button className='shadow-xl rounded px-4 py-2 w-12' 
                style={{backgroundColor:'Maroon'}} onClick={()=> setColor("Maroon")}>
              </button>
              <button className='shadow-xl rounded px-4 py-2 w-12' 
                style={{backgroundColor:'LimeGreen'}} onClick={()=> setColor("LimeGreen")}>
              </button>
              <button className='shadow-xl rounded px-4 py-2 w-12' 
                style={{backgroundColor:'LightGreen'}} onClick={()=> setColor("LightGreen")}>
              </button>
              <button className='shadow-xl rounded px-4 py-2 w-12' 
                style={{backgroundColor:'IndianRed'}} onClick={()=> setColor("IndianRed")}>
              </button>
              <button className='shadow-xl rounded px-4 py-2 w-12' 
                style={{backgroundColor:'DarkSlateGrey'}} onClick={()=> setColor("DarkSlateGrey")}>
              </button>
              

            </div>
          </div>
      </div>
    </>
  )
}

export default App
