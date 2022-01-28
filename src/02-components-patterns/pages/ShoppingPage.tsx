import ProductCard from "../components";
import { products } from "../data/products";
import { ProductButtons, ProductImage, ProductTitle } from "../components";

const product = products[0]

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />

            <ProductCard
                key={ product.id }
                product={ product }
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
                            <ProductButtons />
                        </>
                    )
                }
            </ProductCard>

        </div>
    );
};
