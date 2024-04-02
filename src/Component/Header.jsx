import React from "react";
import logo from "/images/logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import login from "/images/login.jpg";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  console.log(productData)
  const userInfo = useSelector((state) => state.bazar.userInfo)


  return (
    <div className="h-20 w-full  border-b-[1px] border-b-gray-700 sticky top-0 z-20 bg-gray-600 text-white">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <div className="flex items-center">
            <img src={logo} alt="" className="h-20" />
            <h4 className="text-2xl font-bold text-white">Shopping</h4>
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className=" items-center gap-8 flex ">
            {/* <Link to={"/"}>
              {" "}
              <li className="text-base text-white font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
            </Link> */}
          
           {/* <Link to={'/'}>
           <li className="text-base text-white font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
           </Link> */}
           
          </ul>
          <Link to={"/cart"}>
            <div className="relative">
              <CiShoppingCart className="w-8 h-8" />

              <span className="absolute w-6 top-2 left-1 text-sm flex items-center justify-center font-semibold text-red-500">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to={"/login"}>
            {" "}
            <img
              src={
                userInfo?userInfo.image:login
              }
              alt=""
              className="w-8 h-8 rounded-full text-white border-[1px] border-white"
            />
          </Link>
          {
            userInfo && <p className="text-base font-semibold underline underline-offset-2">{userInfo.name}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
