// import {Breadcrumb as Bc } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/styles/breadCrumb.css';

export const Breadcrumb = () => {

  const location = useLocation();
  const currentPathname = location.pathname;

  const steps = [
    {
      path: '/cart',
      name: 'Carrito',
      next: true
    },
    {
      path: '/cart/checkout',
      name: 'Checkout',
      next: true
    },
    {
      path: '/cart/confirmation',
      name: 'Confirmación',
      next: false
    }
   
  ]


  const indexStep = steps.findIndex(step => step.path == currentPathname )


  const style = (index) => {
    if(index < indexStep) return 'bc-active';
    else if (index == indexStep) return 'bc-current'
    return 'bc-inactive'
  } 


  return (

    <div className='breadcrumb-container'>
      <ol className='breadcrumb-list'>
        {
          steps.map((step, index) => (
            <li key = {`${index}-${step.name}`} className='breadcrumb-li'>
              <Link 
                to = {index < indexStep ? step.path : null}
                className={`breadcrumb-link ${style(index)}`}
              >
                {step.name} 
              </Link>
              {step.next && <span className='breadcrumbs-separator'> {"  >  "} </span> }
              
            </li>
          ))
        }
      </ol>
    </div>
  );
}
