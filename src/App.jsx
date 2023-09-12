import { CartProvider } from './context/CartContext'
import { MainRoutes } from './routes/MainRoutes'
import './assets/styles/style.css';


function App() {

  return (
      <CartProvider>
        <MainRoutes/>
      </CartProvider>
  )
}

export default App
