
import React, { useEffect, useState } from 'react'
import Banner from '../Component/Banner'
import Products from '../Component/Products'
import { useLoaderData } from 'react-router-dom'


const Home = () => {
  const[product,setProduct]=useState([]);
  const data = useLoaderData();
  useEffect(()=>{
    setProduct(data.data)
  },[data]);
  
  return (
    <div>
      <Banner/>
      <Products product={product}/>   
    </div>
  )
}

export default Home
