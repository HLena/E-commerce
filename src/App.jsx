import { CartProvider } from './context/CartContext'
import { MainRoutes } from './routes/MainRoutes'
import { AuthProvider } from './context/AuthContext';


function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <MainRoutes/>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
