// Product.jsx
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  return <h2>Product ID: {id}</h2>;
}

export default Product;
