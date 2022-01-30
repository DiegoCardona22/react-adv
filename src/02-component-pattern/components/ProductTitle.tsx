import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";
import { useContext, CSSProperties } from "react";

export interface ProductTitleProps {
  className?: string;
  title?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: ProductTitleProps) => {

  const { product } = useContext(ProductContext);

  return (
    <span 
      className={`${styles.productDescription} ${className}`}
      style={ style }
    >
      { title ? title : product.title }
    </span>
  )
}