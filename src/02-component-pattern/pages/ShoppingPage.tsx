import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components";

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
        <ProductCard product={ product }>
          <ProductCard.Image img={ product.img } />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard >

        <ProductCard product={ product }>
          <ProductImage img={ product.img } />
          <ProductTitle />
          <ProductButtons />
        </ProductCard >
      </div>
    </div>
  );
};

export default ShoppingPage;