import React from 'react'
import './App.css'
import Header from './Component/Header'
import Home from './Pages/Home'


import {
  createBrowserRouter, Outlet,RouterProvider,ScrollRestoration,
} from 'react-router-dom';
import Footer from './Component/Footer'
import { productsData } from './api/Api';
import SingleProduct from './Component/SingleProduct';
import Cart from './Pages/Cart';
import Login from './Pages/Login';


const Layout=()=>{
  return(
    <div>
      <Header/>
      <ScrollRestoration/>
    <div className='min-vh-100'>
   <Outlet/>
    </div>
    <Footer/>
    </div>
  )
}

const router= createBrowserRouter(
  [
    {
      path:'/',element:<Layout/>,
      children:[
        {
          path:'/',element:<Home/>,
          loader: productsData,
        },
        {
          path:'/products/:id',
          element:<SingleProduct/>
        },
        {
          path:'/cart',
          element:<Cart/>
        },
        {
          path:'/login',
          element:<Login/>
        },
      
    ]
    }
  ]
)


function App() {


  return (
    <>
 <RouterProvider router={router}/>
    </>
  )
}

export default App
