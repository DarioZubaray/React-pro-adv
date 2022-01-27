import ProductCard from "../components";

import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";
import { ProductButtons, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css'

export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>

                {
                    products.map(product => (
                        <ProductCard
                            key={ product.id }
                            product={ product }
                            className="bg-dark text-white"
                            onChange={ ({ count, product }) => onProductCountChange(count, product) }
                            value={ shoppingCart[product.id]?.count || 0 }
                        >
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard>
                    ))
                }
            </div>

            <div className="shopping-cart">
                {/* {
                    Object.keys(shoppingCart).map(keyValue => (
                        <ProductCard
                            key={ shoppingCart[keyValue].id }
                            product={ shoppingCart[keyValue] }
                            className="bg-dark text-white"
                            style={{ width: '100px'}}
                        >
                            <ProductImage />
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard>
                    ))
                } */}

                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={ key }
                            product={ product }
                            className="bg-dark text-white"
                            style={{ width: '100px'}}
                            onChange={ ({ count, product }) => onProductCountChange(count, product) }
                            value={ product.count }
                        >
                            <ProductImage />
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    );
};
