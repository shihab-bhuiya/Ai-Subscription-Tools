import React, { use, useState } from 'react';
import Datum from './Datum'
import Card from '../Card/Card'

const Start = ({dataPromise}) => {
    const promise = use(dataPromise)
    const [selectButton,setSelectButton] = useState('product');
    const [selectData,setselectData] = useState([]);
    const clickHandler = (handeler) => {
        setSelectButton(handeler);
    }
    return (
        <div className='max-w-300 mx-auto m-5'>
            
            <div className='mx-auto flex  font-bold justify-center'> 
            <button onClick={()=> clickHandler('product')} className={` ${ selectButton === 'product' ? "btn btn-primary rounded-2xl" : "btn"}`}>Product</button>
             <button onClick={()=> clickHandler('card')} className={`btn ${ selectButton === 'card' ? " btn-primary rounded-2xl" : "btn"}`}>Card ({setselectData.length})</button>
            {/* <button  className='btn btn-primary rounded-2xl'>Card</button>  */}
            </div>
{
    selectButton === 'product' ? <Datum dataPromise={promise} setselectData={selectData} selectData={selectData}></Datum> : <Card setselectData={setselectData} selectData={selectData}></Card>
}
            
           
            
        </div>
    );
};

export default Start;