import Layout from "@/components/layout";
import CartProduct from "@/components/cartProduct";
import ProductDetail from "@/components/productDetail";
import CardTitle from "@/components/cartTitle";
import Checkout from "@/components/checkout";
const Cart = () => {
  return (
    <div className="w-full h-full p-4 md:px-36 pb-14">
      <div className="border-b border-gray-500 py-4 my-4">
        <CardTitle />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4">
        <div className="divide-y-2 divide-gray-500 space-y-4 w-full">
          <div className="flex items-center gap-6">
            <CartProduct />
            <ProductDetail />
          </div>
          <div className="flex items-center gap-6 pt-4">
            <CartProduct />
            <ProductDetail />
          </div>
          <div className="flex items-center gap-6 pt-4">
            <CartProduct />
            <ProductDetail />
          </div>
        </div>
        <div>
          <div className="w-full md:w-64 h-96 border border-gray-500 p-3 rounded-md">
            <Checkout />
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.layout = Layout;
export default Cart;
