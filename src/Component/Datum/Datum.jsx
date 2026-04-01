import React from 'react';
import Data from '../Data/Data'

const Datum = ({dataPromise,setSelectData,selectData}) => {
    // const datum = use(dataPromise);
   
  console.log(dataPromise);
    return (
    <div>
        <div className='max-w-300 mx-auto grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'> 

        {

        dataPromise.map(data => 
        

        <Data key={data.id} data={data} setSelectData={setSelectData} selectData={selectData}></Data>)

        }

        </div>
        
    </div>
    )
};

export default Datum;