
import { Suspense } from 'react';
import './App.css'
import Start from './Component/Datum//Start'

const dataFetch = async () =>{
  const res = await fetch("/data.json");
  return res.json();
}
// const fetchPlayer = async () =>{
//   const res = await fetch("/player.json");
//   return res.json();
// }

function App() {

  const dataPromise = dataFetch();

  return (
    <>
   
   <Suspense fallback={<span className='loading-spinner'></span>}>
    <Start dataPromise={dataPromise}> </Start>
   </Suspense>
    
     
    </>
  )
}

export default App
