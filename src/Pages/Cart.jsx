import React, { useEffect, useState } from 'react'

import Cartitem from '../Component/Cartitem'
import { ToastContainer,toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'

const Cart = () => {
 const productData =useSelector((state) => state.bazar.productData)
 const userInfo = useSelector((state) => state.bazar.userInfo)
 const [total,setTotal]=useState('')
 const [payNow,setPayNow] = useState(false)

  useEffect(()=>{
    let price= 0;
    productData.map((item)=>{
      price+= item.price*item.quantity;
      return price
    })
    setTotal(price.toFixed(2))
  },[productData])

  const handleCheckout =()=>{
    if(userInfo){
      setPayNow(true)
    }else{
      toast.error("please sign in to checkout")
    }
  }

  return (
    <div>
      <img className='w-full h-60  ' src="https://jpeg.org/images/jpeg-home.jpg" alt="" />
     <div className='max-w-screen-xl mx-auto py-20 flex md:flex-row flex-col'>
        <Cartitem/>
        <div className='md:w-1/3 bg-[#fafafa] py-6  px-4'>
            <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
                <h2 className='text-2xl font-medium'>Cart Totals</h2>
                <p className='flex items-center justify-between text-base'>subtotal
                <span className='font-bold text-lg'>₹{total}</span>
                </p>
              <p className='flex items-start  justify-between gap-4 text-base'>shipping
              <span >sec3 kurukshetra haryana</span>
              </p>
            </div>
           <p className='flex font-semibold justify-between mt-6'>
            total <span className='text-xl font-bold'>₹{total}</span>
           </p>
           <button onClick={handleCheckout} className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-600 duration-300 active:text-red-500'>checkout</button>
           {
            payNow && <div className='w-full mt-6 flex items-center justify-center'>
          <StripeCheckout
            
            stripeKey="pk_test_51OxBvrSFF3gcBnZsJJhXjF15nRiYOemw1H1yB1o8H54JREfz5yqAcbYJbjHQvfsUoxPUrweKtyjDQ2oUa3x158Uj00jOf1afJv"
            name='Bazar Online Shopping'
            amount={total}
            label='Pay to bazar'
            description={`Your Payment amount is ${total}`}
            email={userInfo.email}
          />
            </div>
           }
        </div>
     </div>
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

export default Cart
