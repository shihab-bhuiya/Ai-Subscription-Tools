
import Data from '../Data/Data';

const Card = ({setSelectData,selectData}) => {
   const totalPrice = selectData.reduce((sum, item) => sum + item.price, 0);
    console.log(selectData ,"selecte");
       const deleteSelectedPlayer =(data)=>{
      const remaining = selectData.filter(
            (selected) => selected.id !== data.id
        );
        console.log(remaining);
       setSelectData(remaining);
    //    setCoin(coin+player.price);
    }
    return (
        <div className='mb-30'>
          
          {
            selectData.map(data => {
               return <div key={data.id} className='flex justify-between border-2 mb-3 p-4'>
                  <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow">
          <img src={data.image} alt="" />
        </div>

        <div>
          <p className="font-medium">{data.name}</p>
          <p className="text-gray-500 text-sm">${data.price}</p>
        </div>
      </div>

      {/* Right Side */}
      <button onClick={()=>deleteSelectedPlayer(data)} className="text-pink-500 font-medium hover:underline">
        Remove
      </button>
                </div>
            })
        }
            <div className='flex justify-between border-2'>
                <p>Total</p>
                <h3>${totalPrice}</h3>
            </div>

            <button className='btn btn-primary w-full rounded-3xl mt-5'>CheckOut Process</button>

        </div>
        );
};

export default Card;