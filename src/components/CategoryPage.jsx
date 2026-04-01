import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductList from "./ProductList";

function CategoryPage() {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (p) => p.category === category
  );

  return (
    <div>
      <h1>{category} Products</h1>

      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <h2>No products found</h2>
      )}
    </div>
  );
}

export default CategoryPage;