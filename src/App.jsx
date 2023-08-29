import { Navbar } from './components/Navbar'
import { CartProvider } from './context/CartContext'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { CartContainer } from './pages/CartContainer'
import { ItemListContainer } from './pages/ItemListContainer'
import { ItemDetailContainer } from './pages/ItemDetailContainer'

function App() {

  return (
      <CartProvider>
        <Navbar/>
        <Container>
        <Routes>
          <Route 
            path="/" 
            element={ <ItemListContainer/> }
            />
          <Route 
            path="category/:categoryId" 
            element={ <ItemListContainer /> } 
          />
          <Route 
            path="item/:itemId" 
            element={<ItemDetailContainer />}
          />
          <Route 
            path="cart" 
            element={<CartContainer />}
          />
        </Routes>
        </Container>
      </CartProvider>
  )
}

export default App
