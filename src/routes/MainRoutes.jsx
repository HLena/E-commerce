import React from 'react'
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import { ItemListContainer } from '../pages/ItemListContainer'
import { ItemDetailContainer } from '../pages/ItemDetailContainer'
import { Home } from '../pages/Home'
import { CartRoutes } from '../cart/routes/Routes'
import MainLayout from '../layout/MainLayout';
import { Account } from '../auth/pages/Account'

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
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
              path="/cart/*" 
              element={<CartRoutes/>}
              />
              <Route 
              path="/account" 
              element={<Account/>}
              />
          </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}
