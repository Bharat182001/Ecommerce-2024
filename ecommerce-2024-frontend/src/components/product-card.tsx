import { FaPlus } from "react-icons/fa";

type ProductsProps = {
    productId: string;
    photo: string;
    name: string;
    price: number;
    stock: number;
    handler: () => void;

}

const server = "safdsfsdf";

const ProductCard = ({productId, photo, name, price, stock, handler} : ProductsProps) => {
  return (
    <div className="product-card">
        <img src={photo} alt={name} />
        <p>{name}</p>
        <span>₹{price}</span>

        {/* This div is used as an overlay */}
        <div> 
          <button onClick={() => handler()}><FaPlus /></button>
        </div>
    </div>
  )
}

export default ProductCard
