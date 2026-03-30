import React, { use } from 'react';

const Data = ({promise}) => {
    const datum = use(promise);
    return (
        <div>
            {

            
            datum.map(data => <Datum key={datum.id} data={data}></Datum>)

}
        </div>
    );
};

export default Data;