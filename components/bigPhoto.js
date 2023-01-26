import Image from "next/image";
import Iphone from "../public/ipong14.png";
const BigPhoto = () => {
  return <Image src={Iphone} className="w-full md:w-2/4 h-2/4" />;
};

export default BigPhoto;
