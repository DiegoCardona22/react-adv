import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {

  const isControlled = useRef( !!onChange);

  const [counter , setCounter] = useState(value);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  const increaseBy = (value : number) => {

    if (isControlled.current) {
      return onChange!({ count: value, product});
    }

    const newValue =  Math.max( counter + value, 0 )
    setCounter(newValue);
    onChange && onChange({ count: newValue, product: { ...product } });
  }

  return {
    counter,
    increaseBy
  }
};

export default useProduct;