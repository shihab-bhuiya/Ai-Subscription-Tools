import React, { use, useState } from 'react';
import Datum from './Datum'
import Card from '../Card/Card'

const Start = ({dataPromise}) => {
    const promise = use(dataPromise)
    const [selectButton,setSelectButton] = useState('product');
    const [selectData,setSelectData] = useState([]);
    const clickHandler = (handeler) => {
        setSelectButton(handeler);
    
    }
    return (
        <div className='flex-col max-w-300 mx-auto m-5 space-y-3'>
            <div className=' max-w-100 mx-auto items-center justify-center text-center space-y-3'> 
            <h2 className='mx-auto justify-center font-bold text-4xl'>Premium Digital Tools</h2> 
            

            <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>
            
            <div className='mx-auto flex  font-bold justify-center'> 
            <button onClick={()=> clickHandler('product')} className={` ${ selectButton === 'product' ? "btn btn-primary rounded-2xl" : "btn"}`}>Product</button>
             <button onClick={()=> clickHandler('card')} className={`btn ${ selectButton === 'card' ? " btn-primary rounded-2xl" : "btn"}`}>Card ({selectData.length})</button>
            {/* <button  className='btn btn-primary rounded-2xl'>Card</button>  */}
            </div>
{
    selectButton === 'product' ? <Datum dataPromise={promise} setSelectData={setSelectData} selectData={selectData}></Datum> : <Card setSelectData={setSelectData} selectData={selectData}></Card>
}
            
           
            
        </div>
    );
};

export default Start;