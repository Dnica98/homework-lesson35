import { useContext, useEffect } from "react";
import Cart from '../../Components/Cart';
import Typography from '../../Components/Typography';

import './styles.css'
import { ProductContext } from "../../context/productContext";

const ShopPage = () => {
    const {products, getProducts} = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <Typography>Shop</Typography>
            <div className="product-list">
                {products.map(({ title, price, img, id }) => {
                    return <Cart
                        key={title}
                        title={title}
                        price={price}
                        img={img}
                        id={id}
                    />
                })}
            </div>
        </div>
    )
}

export default ShopPage;