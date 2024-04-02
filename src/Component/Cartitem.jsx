import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdClose } from "react-icons/io";
import { decreamentQuantity, deleteItem, increamentQuantity, resetCart } from '../redux/bazarSlice';
import { ToastContainer,toast } from 'react-toastify';
const Cartitem = () => {
    const dispatch =useDispatch()
  const productData = useSelector((state)=>state.bazar.productData)

  return (
    <div className='w-2/3 pr-10'>
      <div className='w-full'>
        <h2 className='text-2xl'>shopping cart</h2>
      </div>
      <div>
        {
          productData.map((item)=>(
            <div key={item._id}
            className='flex items-center justify-between gap-6 mt-6'>
              
              <div className='flex items-center gap-2  '>
              <IoMdClose onClick={()=>dispatch(deleteItem(item._id)) & toast.error(`${item.title} is removed`)} className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300' />
              <img src={item.image} alt="" className='w-32 h-32 object-cover' />
              </div>
              <h2 className='w-52'>{item.title}</h2>
              <p className='w-10'>{item.price}</p>
              <p className='text-sm'></p>
              <div className="w-52 md:flex hidden items-center justify-between text-gray-500 gap-4 border p-3">
                <p className='text-sm'>Quantity</p>
                <div className='md:flex hidden items-center gap-4 text-sm font-semibold'>
                  <span
                  onClick={()=>dispatch(
                    decreamentQuantity({
                      _id: item._id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      quantity:1,
                      description: item.description,
                    })
                  )} 
                  className='border h-5 w-5 font-normal text-lg flex items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black active:text-red-500'
                  >
                    -
                  </span>
                  {item.quantity}
                  <span
                  onClick={()=>dispatch(
                    increamentQuantity({
                      _id: item._id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      quantity:1,
                      description: item.description,
                    })
                  )} 
                  className='border h-5 w-5 font-normal text-lg flex items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black active:text-red-500'
                  >
                    +
                  </span>
                </div>
             
          </div>
          <p className='w-14'>₹{item.quantity * item.price}</p>
            </div>
          ))
        }
      </div>
     <button onClick={()=>dispatch(resetCart()) & toast.error('Your cart is empty')} className='bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-900 duration-300 active:bg-black active:text-white'>Reset cart</button>

     <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
        />
    
    </div>
  )
}

export default Cartitem
