import React from 'react'
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import { ItemListContainer } from '../pages/ItemListContainer'
import { ItemDetailContainer } from '../pages/ItemDetailContainer'
import { Home } from '../pages/Home'
import { Cart } from '../pages/Cart'
import { Navbar } from '../components/Navbar'
import { Login } from '../auth/pages/Login'
import { Container } from 'react-bootstrap'

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='m-2'>
        <Routes>
            <Route 
            path="/" 
            element={ <Home/> }
            />
            <Route 
            path="/category/:categoryId" 
            element={ <ItemListContainer /> } 
            />
            <Route 
            path="/item/:itemId" 
            element={<ItemDetailContainer />}
            />
            <Route 
            path="/cart" 
            element={<Cart />}
            />
            <Route 
            path="/login" 
            element={<Login />}
            />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
