import { createContext, CSSProperties, ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, OnChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export interface ProductCardProps {
    product: Product;
    // children: ReactElement | ReactElement [];
    children: ( args: ProductCardHandlers) => JSX.Element
    className?: string;
    style?: CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps) => {

    const { 
        counter,
        increaseBy,
        maxCount,
        isMaxCountReached,
        reset
    } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div className={` ${ styles.productCard } ${ className } `} style={ style }>
                { 
                    children({
                        count: counter,
                        increaseBy,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        product,
                        reset
                    })
                }
            </div>
        </Provider>
    );
};

