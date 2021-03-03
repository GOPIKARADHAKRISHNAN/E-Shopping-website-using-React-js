import React, {createContext, useState} from "react"
import iphone from "../images/iphone.jpg"
import yellowtee from "../images/blueyellow.jpg"
import laptop from "../images/laptop.jpg"
import frock from "../images/pink.jpg"
import skirt from "../images/skirt.jpg"
import shoes from "../images/shoes.jpg"
import tablet from "../images/tablet.jpg"
import shirt from "../images/yellowshirt.jpg"

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState([
        {id:1, name:'iphone', price:30000, image:iphone, status:'hot'},
        {id:2, name:'Tee Shirts', price:400, image:yellowtee, status:'new'},
        {id:3, name:'Laptops', price:50000, image:laptop, status:'hot'},
        {id:4, name:'Frocks', price:500, image:frock, status:'hot'},
        {id:5, name:'Skirts', price:350, image:skirt, status:'hot'},
        {id:6, name:'Shoes', price:1000, image:shoes, status:'new'},
        {id:7, name:'Tablets', price:30000, image:tablet, status:'hot'},
        {id:8, name:'Shirts', price:750, image:shirt, status:'hot'}
    ]);
    return(
        <ProductsContext.Provider value={{products: [...products]}}>
            {props.children}

        </ProductsContext.Provider>

    )
}
export default ProductsContextProvider;
//export default ProductsContext;