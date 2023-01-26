import PhotoKecil from "../public/mouse.png";
import PhotoKecil2 from "../public/headphone.png";
import PhotoKecil3 from "../public/monitor.png";
import PhotoKecil4 from "../public/keyboard.png";
import Image from "next/image";
const GridPhoto = () => {
  return (
    <div class="grid grid-rows-2 grid-cols-2 gap-4 w-fit">
      <div className="bg-black w-44 h-44">
        <Image src={PhotoKecil} />
      </div>
      <div className="bg-black w-44 h-44">
        <Image src={PhotoKecil2} />
      </div>
      <div className="bg-black w-44 h-44">
        <Image src={PhotoKecil3} />
      </div>
      <div className="bg-black w-44 h-44">
        <Image src={PhotoKecil4} />
      </div>
    </div>
  );
};

export default GridPhoto;
