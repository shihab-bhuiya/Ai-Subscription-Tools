
import { Suspense } from 'react';
import Data from './Data/Data' ;
import './App.css'

const dataFetch = async ()=>{
  const res = await fetch("/data.json");
  return res.json();
}

function App() {

  const promise = dataFetch();

  return (
    <>
   
   <Suspense fallback={ <span className='loading loading-spinner text-accent'></span>}> 
   <Data promise={promise}>
   </Data> </Suspense>
    
     
    </>
  )
}

export default App
