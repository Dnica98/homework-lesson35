import { Link } from 'react-router-dom';
import path from "../../constants";


const NavigationBar =() => {
    return(
     <div>
        <Link to={path.homePage}>Home</Link>
        <br/>
        <Link to={path.shopPage}>Shop</Link>
        <br/>
        <Link to={path.cart}> Your Cart</Link>
    </div>
    )
}

export default NavigationBar;