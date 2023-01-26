const Amount = () => {
  return (
    <div className="border border-black p-3 rounded-md w-full md:w-full lg:w-1/4 flex flex-col gap-2">
      <div>
        <p>Tentukan Jumlah :</p>
        <div className="flex items-center gap-4 border border-black p-1 w-fit rounded-md">
          <p className="border border-black w-6 h-6 flex items-center justify-center rounded-md">
            -
          </p>
          <p>0</p>
          <p className="border border-black w-6 h-6 flex items-center justify-center rounded-md">
            +
          </p>
        </div>
      </div>
      <div>
        <p>Pilih Variant :</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-4 border border-black p-1 w-fit rounded-md">
            <p className=" w-fit h-6 flex items-center justify-center rounded-md">
              8/128GB
            </p>
          </div>
          <div className="flex items-center gap-4 border border-black p-1 w-fit rounded-md">
            <p className=" w-fit h-6 flex items-center justify-center rounded-md">
              8/128GB
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <button className="w-full h-10 rounded-xl bg-orange-500 text-white flex justify-center items-center border">
          + Keranjang
        </button>
        <button className="w-full h-10 rounded-xl bg-white text-orange-500 border-black flex justify-center items-center border">
          Beli
        </button>
      </div>
    </div>
  );
};

export default Amount;
