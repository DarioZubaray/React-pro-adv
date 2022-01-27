import ProductCard from "../components";
import { products } from "../data/products";
import { ProductButtons, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css'

const product = products[0]

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />

            <ProductCard
                key={ product.id }
                product={ product }
                className="bg-dark text-white"
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({ reset, count, increaseBy, isMaxCountReached }) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons className="custom-buttons"/>

                            <div className="aditional-buttons">
                                <button onClick={ reset }>Reset</button>
                                <button onClick={ () => increaseBy(-2)}>-2</button>
                                {
                                    !isMaxCountReached && <button onClick={ () => increaseBy(2)}>+2</button>
                                }
                                

                            </div>
                            <span>count: { count }</span>
                        </>
                    )
                }
            </ProductCard>

        </div>
    );
};
