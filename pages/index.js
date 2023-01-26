import Layout from "@/components/layout";
import Carousel from "@/components/carousel";
import Banner from "@/components/banner";
import GridPhoto from "@/components/gridPhoto";
import BigPhoto from "@/components/bigPhoto";

import Image from "next/image";
import SidePhoto from "../public/PC.png";
import BottomPhoto from "../public/kursi.png";

const Home = () => {
  return (
    <>
      <div className="h-full py-14 flex flex-col md:flex-row gap-14 w-full justify-center p-2 md:px-36">
        <div className="h-full w-full md:w-2/4  bg-black">
          <Carousel />
        </div>
        <div className="h-full w-full md:w-1/4 bg-black">
          <Banner />
        </div>
      </div>
      <div className="bg-white w-full h-screen p-2 md:px-36 hidden md:hidden lg:block">
        <div className="flex flex-col md:flex-row gap-4">
          <BigPhoto />
          <div className="flex flex-col w-fit h-fit gap-4">
            <div className="w-fit h-fit flex gap-4">
              <GridPhoto />
              <div className="w-60 h-full">
                <Image src={SidePhoto} />
              </div>
            </div>
            <div className="h-50 w-full bg-black"></div>
            <Image src={BottomPhoto} />
          </div>
        </div>
      </div>
    </>
  );
};

Home.layout = Layout;
export default Home;
