const Checkout = () => {
  return (
    <div className="flex flex-col gap-4">
      <button className="p-2 text-black border border-black w-full bg-white rounded-md">
        Check Available Promo
      </button>
      <div className="border-b pb-2 border-gray-500">
        <p className="font-bold">Shopping Summary</p>
        <div className="flex justify-between items-center text-gray-500">
          <p>Total Price (1 Item)</p>
          <p>Rp9.999.000</p>
        </div>
      </div>
      <button className="p-2 text-white w-full bg-green-500 rounded-md">
        Buy All Checklist {"(1)"}
      </button>
    </div>
  );
};

export default Checkout;
