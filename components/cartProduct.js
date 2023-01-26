import Image from "next/image";
import Tuf from "../public/tuf.png";
const CartProduct = () => {
  return (
    <div className="flex items-center gap-2">
      <input type={"checkbox"} className="w-6 h-6" />
      <Image src={Tuf} className="w-36 h-24" />
    </div>
  );
};

export default CartProduct;
