import NoImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';
import { useContext } from 'react';

export const ProductImage = ({ img = ''}) => {

  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = NoImage;
  }

  return (
    <img className={styles.productImg} src={ imgToShow } alt="Coffe Mug" />
  )
}