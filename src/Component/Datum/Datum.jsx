import React from 'react';
import Data from '../Data/Data'

const Datum = ({dataPromise,setSelectedData,selectedData}) => {
    // const datum = use(dataPromise);
   
  console.log(dataPromise);
    return (
    <div>
        <div className='max-w-300 mx-auto grid grid-cols-3 gap-3'> 

        {

        dataPromise.map(data => 
        

        <Data data={data} setSelectedData={setSelectedData} selectedData={selectedData}></Data>)

        }

        </div>
        
    </div>
    )
};

export default Datum;