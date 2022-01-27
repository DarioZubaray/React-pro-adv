import { useEffect, useState, useRef } from 'react';
import { InitialValues, OnChangeArgs, Product } from '../interfaces/interfaces';

interface UseProductArgs {
    product: Product;
    onChange?: ( args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ( {product, onChange, value = 0, initialValues}: UseProductArgs) => {

    const [ counter, setCounter ] = useState<number>( initialValues?.count || value);
    const isMounted = useRef(false);

    const increaseBy = ( value: number ) => {

        let newValue = Math.max( counter + value, 0);
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount);
        }
        setCounter( newValue )

        onChange && onChange({product, count: newValue});
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if (!isMounted.current) return;

        setCounter( value )
    }, [value]);
    
    useEffect(() => {
        isMounted.current = true;
    }, []);
    
    console.log('maxCountReached: ', !!initialValues?.count && initialValues.maxCount === counter);

    return {
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,

        maxCount: initialValues?.maxCount,
        reset
    };
};
