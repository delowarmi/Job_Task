import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import ProductDtails from './components/pages/ProductDtails'
import Shop from './components/pages/Shop'
import Fruits from './components/Fruits'
import Register from './components/Register'
function App() {
 

  return (
    <>
      <div>
        <Routes>
        <Route element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/fruits' element={<Fruits/>}/>
        <Route path='/productdtails' element={<ProductDtails/>}/>
        </Route>
        </Routes>
    </div>
    </>
  )
}

export default App
