import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/bazarSlice";
import { ToastContainer,toast } from "react-toastify";
const SingleProduct = () => {
  const dispatch = useDispatch()
  let [baseQty,setBaseQty] =useState(1)
  const [details, setDetails] = useState({});
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex md:flex-row flex-col gap-10">
        <div className="md:w-2/5 relative">
          <img
            src={details.image}
            alt="productimage"
            className="w-full md:h-[560px]  object-cover"
          />

          <div className="absolute top-4 right-0">
            {details.isNew && (
              <p className="bg-black text-white font-semibold px-8 py-1">
                Sale
              </p>
            )}
          </div>
        </div>
        <div className="md:w-3/5 md:mt-16 flex-col justify-center gap-10">
          <div>
            <h2 className="text-3xl font-semibold px-4">{details.title}</h2>
            <div className="flex items-center gap-4 px-4 mt-3">
             
              <p className="line-through font-base text-gray-500 ">₹{details.oldPrice}</p>
              <p className="text-2xl font-medium">₹{details.price}</p>
            </div>
          </div>
          <div className="flex gap-1 px-4 mt-3">
          <IoMdStar className="text-yellow-500"/> 
          <IoMdStar className="text-yellow-500"/>
          <IoMdStar className="text-yellow-500"/>
          <IoMdStar className="text-yellow-500"/>
          <IoMdStar className="text-yellow-500"/>
          <p className="text-xs text-gray-500">(1 customer review)</p>
          </div>
          <p className="mt-10 text-base text-gray-500">{details.description}</p>
          <div className="flex gap-4 mt-10">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
             <div className="flex items-center gap-4 text-sm font-semibold">
             <button onClick={()=>setBaseQty(baseQty===1?(baseQty=1):baseQty-1)} className="border h-5 w-5 font-normal text-lg flex items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black active:text-red-500">-</button>
              <span>{baseQty}</span>
              <button onClick={()=>setBaseQty(baseQty+1)} className="border h-5 w-5 font-normal text-lg flex items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black active:text-red-500">+</button>
             </div>
             
            </div>
            <button onClick={()=>dispatch(addToCart({
                _id: details._id,
                title: details.title,
                image: details.image,
                price: details.price,
                quantity:baseQty,
                description: details.description,
            }
              )) & toast.success(`${details.title} is added`)
              
              } className="bg-black text-white py-3 px-6 active:bg-gray-800 duration-300 active:text-red-500">add to cart</button>
          </div>
          <p className="text-xl text-gray-500 mt-8">category : <span className="font-medium capitalize"> {details.category}</span></p>
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
  );
};

export default SingleProduct;
