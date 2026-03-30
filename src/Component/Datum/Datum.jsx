import React, { use } from 'react';
import Data from '../Data/Data'

const Datum = ({dataPromise}) => {
    const datum = use(dataPromise);
  console.log(datum);
    return (
    <div>
        <div className='grid grid-cols-3 gap-3'> 

        {

        datum.map(data => <Data data={data}></Data>)
        }

        </div>
        
    </div>
    )
};

export default Datum;