import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components";
import '../styles/custom-styles.css';

export const ShoppingPage = () => {

  const product = {
    id: "1",
    title: "Coffee Mug",
    img: "./coffee-mug.png"
  };

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
        <ProductCard product={ product } className="bg-dark text-white">
          <ProductCard.Image className="custom-image" img={ product.img } />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard >

        <ProductCard product={ product } className="bg-dark text-white">
          <ProductImage className="custom-image" img={ product.img } />
          <ProductTitle className="text-bold"/>
          <ProductButtons className="custom-buttons"/>
        </ProductCard >

        <ProductCard product={ product } style={{
          backgroundColor: "red",
        }}>
          <ProductImage img={ product.img } style={{
            boxShadow: "0 0 10px red"
          }}/>
          <ProductTitle style={{
            color: "blue"
          }} />
          <ProductButtons style={{
            display: "flex",
            justifyContent: "end"
          }}/>
        </ProductCard >
      </div>
    </div>
  );
};

export default ShoppingPage;