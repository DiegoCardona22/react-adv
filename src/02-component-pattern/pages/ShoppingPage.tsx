import '../styles/custom-styles.css';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components";
import useShoppingCart from '../hooks/useShoppingCart';


export const ShoppingPage = () => {

  const { products, shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row"
        }}  
      >
        {products.map(product => (
          <ProductCard 
            key={product?.id}
            product={ product } 
            className="bg-dark text-white"
            onChange={ (evento) => onProductCountChange(evento) }
            value={ shoppingCart[product.id]?.count || 0 }
          >
            <ProductImage className="custom-image" img={ product.img } />
            <ProductTitle className="text-bold"/>
            <ProductButtons className="custom-buttons"/>
          </ProductCard >
        ))}
      </div>

      <div className='shopping-cart'>

        {Object.keys(shoppingCart).map(key => (
          <ProductCard 
            key={key}
            product={ shoppingCart[key] }
            className="bg-dark text-white"
            style={{ width: "100px" }}
            value={ shoppingCart[key].count }
            onChange={ (evento) => onProductCountChange(evento) }
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold"/>
            <ProductButtons className="custom-buttons" style={{ display: 'flex', justifyContent: 'center' }}/>
          </ProductCard >
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;