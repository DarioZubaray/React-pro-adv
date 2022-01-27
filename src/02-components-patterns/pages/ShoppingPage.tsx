import ProductCard from "../components";
import { ProductButtons, ProductImage, ProductTitle } from "../components";

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}
const product2 = {
    id: '2',
    title: 'Tea pot'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Page</h1>

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            <ProductCard product={ product }>
                <ProductImage />
                <ProductTitle title={ 'Sin descricion' } />
                <ProductButtons/>
            </ProductCard>

            <ProductCard product={ product }>
                <ProductCard.Image/>
                <ProductCard.Title/>
                <ProductCard.Buttons/>
            </ProductCard>

            <ProductCard product={product2} children={<h1>Hola juli</h1>}/>

        </div>
    </div>
  );
};
