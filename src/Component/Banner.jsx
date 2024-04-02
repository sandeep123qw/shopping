import React from 'react'
import { Carousel } from 'flowbite-react';

const Banner = () => {
  return (

<div className='h-full w-full'>
       
<div className="h-56 sm:h-80 xl:h-96 2xl:h-96">
      <Carousel pauseOnHover>

        <img src="https://media.istockphoto.com/id/1694195877/photo/a-close-up-view-of-an-unrecognizable-beautiful-cuban-woman-holding-paper-bags-after-going.jpg?s=2048x2048&w=is&k=20&c=uBf1y29S_N-xcBPXjo9npGqwa-TqGadDZm8vFLyvHmI=" alt="..." />
        <img src="https://images.unsplash.com/photo-1598452963314-b09f397a5c48?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
       

      </Carousel>
    </div>
</div>
 

  )
}

export default Banner
