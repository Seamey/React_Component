import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentNavbar from './component/header/Navbar'
import CardProduct from './component/Cards/productCard'
import FeedbackCard from './component/Cards/CardFeedback'
import Componentfooter from './component/footer/FooterComponent'

function App() {


  return (
    <>
     
     <ComponentNavbar />
     <h1 className='text-4xl p-6 font-semibold text-lime-500'>Popular product</h1>
     <section className='flex gap-4'>
       <CardProduct />
       <CardProduct />
       <CardProduct />
       <CardProduct />
     </section>
     <h1 className='text-4xl p-12 font-semibold text-lime-500'>User Feedback</h1>
     <section className='flex gap-6 w-10/12 mx-auto'>
      <FeedbackCard />
      <FeedbackCard />
      
     </section>
     <footer className='py-10'>
      <Componentfooter />
     </footer>
     
    </>
  )
   
}

export default App
