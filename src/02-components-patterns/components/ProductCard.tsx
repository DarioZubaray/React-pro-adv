import { createContext, CSSProperties, ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, OnChangeArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export interface ProductCardProps {
    product: Product;
    children: ReactElement | ReactElement [];
    className?: string;
    style?: CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
}

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ children, product, className, style, onChange, value }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct({ onChange, product, value });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={` ${ styles.productCard } ${ className } `} style={ style }>
                { children }
            </div>
        </Provider>
    );
};

// ProductCard.Image = ProductImage
// ProductCard.Title = ProductTitle
// ProductCard.Buttons = ProductButtons
