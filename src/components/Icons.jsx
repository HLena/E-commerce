
import 'bootstrap-icons/font/bootstrap-icons.css';


const FavoriteIcon = () => {
    return <i className="bi bi-heart"/>
}

const FavoriteIconFill = () => {
    return <i className="bi bi-heart-fill"/>
}



const CustomIcon = ({name, size = 24, color = 'gray'}) => {
    let iconName;
    switch(name) {
        case 'user':
            iconName = "bi bi-person-circle" 
            break;
        case 'cart':        
            iconName = "bi bi-cart2" 
            break;
        case 'favorite':
            iconName = "bi bi-heart"
            break;
        case 'favorite-fill':
            iconName = "bi bi-heart-fill"
            break;
        case 'order':
            iconName = "bi bi-box"
            break;
        case 'menu':
            iconName = "bi bi-list"
            break
        case 'delete':
            iconName= "bi bi-x"
            break
        default:
            iconName = '';

    }
    return  (
        <i className={iconName}  
            style={{ 
                fontSize: `${size}px`, 
                cursor:'pointer',
                color: color
            }}
        />
    )
}


export { 
    FavoriteIcon,
    FavoriteIconFill,
    CustomIcon
}