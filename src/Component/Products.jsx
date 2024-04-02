import React from 'react'
import ProductsCards from './ProductsCards'

const Products = ({product}) => {
  console.log(product)
  return (
    <div className='py-10'>
        <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='text-2xl bg-black text-white py-2 w-80 '>Shopping everyday</h1>
            <span className='w-20 bg-black h-[3px] mt-4'></span>
            <span className='text-sm w-50 h-[3px] py-4'>
                make your shopping life easy, our product are best with affordable price
            </span>
        </div>
        <div className='max-w-screen-xl mx-auto py-10 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 '>
         {
          product.map((item)=>(
            <ProductsCards key={item._id} product={item}/>
          ))
         }
        </div>
      
    </div>
  )
}

export default Products
