import { useState } from "react";
import { Product } from "../interfaces/interfaces";

interface ProductInCart extends Product {
    count: number;
}

export const useShoppingCart = () => {
  
    const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({});

    const onProductCountChange = (count: number, product: Product) => {
        setShoppingCart(oldShoppingCar => {

            const productInCart: ProductInCart = oldShoppingCar[product.id] || { ...product, count: 0 };

            if ( Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCar,
                    [product.id]: productInCart
                }
            }

                const { [product.id]: toDelete, ...rest} = oldShoppingCar;
                return rest;

            // if (count === 0) {
            //     // delete oldShoppingCar[product.id];
            //     // return {
            //     //     ...oldShoppingCar
            //     // }

            //     const { [product.id]: toDelete, ...rest} = oldShoppingCar;
            //     return rest;
            // }
            // return {
            //     ...oldShoppingCar,
            //     [product.id]: { ...product, count }
            // }
        });
    }

    return {
        shoppingCart,
        onProductCountChange,
    }
};
