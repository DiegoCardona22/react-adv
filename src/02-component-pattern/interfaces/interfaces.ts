import { ReactElement, CSSProperties } from "react";
import { ProductButtonsProps } from "../components/ProductButtons";
import { ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";
export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (amount: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps ) : JSX.Element,
  Title: ({ title, className }: ProductTitleProps) => JSX.Element,
  Image: ({ img, className }: ProductImageProps) => JSX.Element,
  Buttons: ({ className }: ProductButtonsProps) => JSX.Element
}