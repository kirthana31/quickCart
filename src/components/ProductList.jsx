import productsData from "../data/products";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  const data = products || productsData;

  return (
    <div>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;