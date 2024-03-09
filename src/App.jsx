import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentNavbar from './component/header/Navbar'
import Componentfooter from './component/footer/FooterComponent'
import MainComponent from './component/main/MainComponent'
function App() {


  return (
    <>
     
     <ComponentNavbar />
     <MainComponent/>

     <footer className='py-10'>
      <Componentfooter />
     </footer>
     
    </>
  )
}
export default App
