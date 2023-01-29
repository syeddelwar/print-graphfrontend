import Layout from "@/components/Layout";
import Slider from "@/components/Slider";
import SingleProduct from "@/components/SingleProduct";


export default function Shop({ products: { data } }) {
  return (
    <Layout title={"shop"}>
      <div className=" slider rounded-md my-4  md:mb-0 lg:h-[26rem] md:h-[12rem]">
        <Slider />
      </div>
      <div className="single-products grid md:grid-cols-2  lg:grid-cols-3 lg:gap-10 md:gap-5 justify-center  gap-y-8 justify-items-center">
        { data && data.map((data) => (
          <SingleProduct {...data} key={data.id} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://demo-production-edcf.up.railway.app/api/products?populate=*");
  const products = await res.json();
  return {
    props: { products},
    revalidate: 1,
  };
}
