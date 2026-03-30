
import { Suspense } from 'react';
import './App.css'
import Datum from './Component/Datum//Datum'

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
    <Datum dataPromise={dataPromise}> </Datum>
   </Suspense>
    
     
    </>
  )
}

export default App
