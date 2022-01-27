import ProductCard from "../components";
import { ProductButtons, ProductImage, ProductTitle } from "../components";

import '../styles/custom-styles.css'

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

            <ProductCard product={ product } className="bg-dark text-white">
                <ProductImage />
                <ProductTitle title={ 'Sin descripcion' }/>
                <ProductButtons className="custom-buttons"/>
            </ProductCard>

            <ProductCard product={ product } className="bg-dark text-white">
                <ProductCard.Image className="custom-image"/>
                <ProductCard.Title className="text-bold"/>
                <ProductCard.Buttons className="custom-buttons" style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }}/>
            </ProductCard>

            <ProductCard product={ product } style={{ backgroundColor: '#70D1F8'}}>
                <ProductCard.Image style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                <ProductCard.Title />
                <ProductCard.Buttons />
            </ProductCard>

            <ProductCard product={product2} children={<h1>Hola juli</h1>}/>

        </div>
    </div>
  );
};
