import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product } from '../interfaces/interfaces';

interface UseProductArgs {
    product: Product;
    onChange?: ( args: OnChangeArgs) => void;
    value?: number;
}

export const useProduct = ( {product, onChange, value = 0}: UseProductArgs) => {

    const [counter, setCounter] = useState(value);

    const isControlled = useRef( !!onChange );

    const increaseBy = ( value: number ) => {

        if ( isControlled.current ) {
            return onChange!({product, count: value})
        }
        const newValue = Math.max( counter + value, 0);
        setCounter( newValue )

        onChange && onChange({product, count: newValue});
    }

    useEffect(() => {
        setCounter( value )
    }, [value]);
    

    return {
        counter, increaseBy 
    };
};
