
import { Suspense } from 'react';
import './App.css'
import Start from './Component/Datum//Start'
import Nav from './Component/Nav/Nav';
import Banner from './Component/Banner/Banner'
import Step from './Component/Step/Step'
import Pricing from './Component/Pricing/Pricing'

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
   <Nav></Nav>
   <Banner></Banner>
   <Suspense fallback={<span className='loading-spinner'></span>}>
    <Start dataPromise={dataPromise}> </Start>
   </Suspense>
   <Step></Step>
   <Pricing></Pricing>
    
     
    </>
  )
}

export default App
