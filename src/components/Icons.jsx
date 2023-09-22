
import 'bootstrap-icons/font/bootstrap-icons.css';

const CartIcon = () => {
    return (
        <i className="bi bi-cart2"  
            style={{ 
            fontSize: '24px', 
            cursor:'pointer',
            color: 'gray'}}
        />
    )
}

const DeleteIcon = () => {
    return <i className="bi bi-x"/>
}

const UserIcon = () => {
    return (
            <i 
                className="bi bi-person-circle" 
                style={{ 
                    fontSize: '24px', 
                    cursor:'pointer',
                    color: 'gray'}}/>
    )
}

const FavoriteIcon = () => {
    return <i className="bi bi-heart"/>
}

const MenuIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className = "bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
    )
}


export { 
    MenuIcon,
    CartIcon,
    DeleteIcon,
    UserIcon,
    FavoriteIcon
}