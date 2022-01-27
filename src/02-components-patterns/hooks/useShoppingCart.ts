import { useState } from "react";
import { Product } from "../interfaces/interfaces";

interface ProductInCart extends Product {
    count: number;
}

export const useShoppingCart = () => {
  
    const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({});

    const onProductCountChange = (count: number, product: Product) => {
        setShoppingCart(oldShoppingCar => {

            if (count === 0) {
                // delete oldShoppingCar[product.id];
                // return {
                //     ...oldShoppingCar
                // }

                const { [product.id]: toDelete, ...rest} = oldShoppingCar;
                return rest;
            }
            return {
                ...oldShoppingCar,
                [product.id]: { ...product, count }
            }
        });
    }

    return {
        shoppingCart,
        onProductCountChange,
    }
};
