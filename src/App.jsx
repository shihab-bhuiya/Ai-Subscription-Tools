
import { Suspense} from 'react';
import './App.css'
import Start from './Component/Datum//Start'
import Nav from './Component/Nav/Nav';
import Banner from './Component/Banner/Banner'
import Step from './Component/Step/Step'
import Pricing from './Component/Pricing/Pricing'
import Footer from './Component/footer/Footer'
  import { ToastContainer } from 'react-toastify';
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
    // const [select,setSelect] = useState([]);

  return (
    <>
   <Nav  ></Nav>
   <Banner></Banner>
   <Suspense fallback={<span className='loading-spinner'></span>}>
    <Start dataPromise={dataPromise}  > </Start>
   </Suspense>
   <Step></Step>
   <Pricing></Pricing>
   <Footer></Footer>
      <ToastContainer />
     
    </>
  )
}

export default App
