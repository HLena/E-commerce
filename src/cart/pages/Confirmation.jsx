import { useNavigate } from "react-router-dom"


export const Confirmation = () => {
  const navigate = useNavigate()
  return (
    <div className="text-center my-5">
        <h4>¡Confirmación de compra!</h4>
        <p>Felicidades su pedido se realizo con exito</p>
        <p>Para saber el estado de sus pedidos haga click en el siguiente boton</p>
        <button 
          className = "bt main-btn" 
          onClick={ () => navigate('/account',{state:{option:'orders'}})}>
            Mis pedidos
        </button>
    </div>
  )
}
