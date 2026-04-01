import React from 'react';

const Card = ({setSelectData,selectData}) => {

       const deleteSelectedPlayer =(player)=>{
      const remaining = selectData.filter(
            (selected) => selected.name !== player.name
        );
        console.log(remaining);
       setSelectData(remaining);
    //    setCoin(coin+player.price);
    }
    return (
        <div>
          
            {
            selectData.map(data => {

            return  <div>
            {data.image} {data.name}

            <button onClick={deleteSelectedPlayer}>Delete</button>



            </div>
            })
            }
            )

        </div>
    );
};

export default Card;