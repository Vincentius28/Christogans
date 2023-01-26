import Image from "next/image";
import Asus from "../../public/asus.png";
import hp1 from "../../public/hp1.png";
import hp2 from "../../public/hp2.png";
import hp3 from "../../public/hp3.png";
import hp4 from "../../public/hp4.png";
const Galery = () => {
  return (
    <div className="w-72 flex flex-col gap-2">
      <Image src={Asus} className="w-full h-72" />
      <div className="w-full h-fit flex gap-2">
        <div className="w-full h-20 bg-gray-300">
          <Image src={hp1} className="w-full h-full" />
        </div>
        <div className="w-full h-20 bg-gray-300">
          <Image src={hp2} className="w-full h-full" />
        </div>
        <div className="w-full h-20 bg-gray-300">
          <Image src={hp3} className="w-full h-full" />
        </div>
        <div className="w-full h-20 bg-gray-300">
          <Image src={hp4} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Galery;
