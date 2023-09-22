import { useEffect, useRef, useState } from 'react'
import { UserIcon } from './Icons'
import { useAuth } from '../context/AuthContext';


export const UserPopOver = () => {
  
  const [open, setOpen ] = useState(false);
  const { signOff,  user:{ providerData }} = useAuth();
  const dropDownRef = useRef();

  const email = providerData[0].email;

  const handleMouseOver = () => {
    setOpen(true);
  }

  const handleMouseOut = (e) => {
    if(!dropDownRef.current.contains(e.target)){
      setOpen(false);
    } 
  }

  useEffect(() => {
    document.addEventListener('mouseout', handleMouseOut);
    return() =>{
      document.removeEventListener("mouseout", handleMouseOut);
    }
  
   
  }, [])
  

 
  
  return (
    <div className='position-relative' ref={dropDownRef}>   
      <div 
          onMouseOver={handleMouseOver}>
          <UserIcon/>
      </div>
        <div  className={`${open ? 'visible': 'invisible'} position-absolute shadow bg-body-tertiary rounded top-10 end-0`}
        >
          <div className="py-2 px-4 border-bottom">
              { email}
          </div>
            
            <ul
            className='m-0'  
            style={{
              listStyle: 'none',
              paddingLeft:0,
              width: '150px'
            }}>
              <li className='py-2 px-4' role='button'>
                Mis pedidos
              </li>
              <li className='py-2 px-4' role='button'>
                Mis favoritos
              </li>
            </ul>
            <div 
              className="py-2 border-top" 
              onClick={signOff}>
              <a href="#" 
                className="px-4">Cerrar Sesion</a>
            </div>
        </div>

    </div>
  );
}

