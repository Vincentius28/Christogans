import Layout from "@/components/layout";
import Galery from "@/components/detail/galery";
import Description from "@/components/detail/description";
import Amount from "@/components/detail/amount";
const Detail = () => {
  return (
    <div className="w-full h-full p-4 flex-col md:flex-col lg:flex-row md:px-36 pb-14 flex gap-4">
      <Galery />
      <Description />
      <Amount />
    </div>
  );
};

Detail.layout = Layout;
export default Detail;
