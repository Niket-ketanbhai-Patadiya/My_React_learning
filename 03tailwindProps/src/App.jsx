import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Niket",
    age:21
  }
  let newArr=[1,2,3]

  return (
    <>
      <h1 className='bg-slate-500 mb-4'>Tailwind CSS TEST</h1>
       <Card username='Nik soni' btnText="Click Me!!"/>  {/*someObj={newArr}  newArr or myObj */ }
      <Card username='Niket Patadiya' btnText="Visit Here"/>
    </>
  )
}

export default App
