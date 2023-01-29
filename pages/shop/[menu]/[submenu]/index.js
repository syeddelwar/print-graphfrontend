import Layout from "@/components/Layout";
import ProductDetails from "@/components/ProductDetails";
import Calculator from "@/components/Calculator";

import { useRouter } from "next/router";
// (data) => router.query.menu ===
function index({ products }) {
  const router = useRouter();

  const filteredProduct = products?.data.find(
    (data) => data.attributes.Title === router.query.submenu
  );

  return (
    <Layout title={router.query.submenu}>
      <div className="wrapper p-4 grid xl:grid-cols-3 grid-cols-1 gap-16  ">
        <div className="col-span-2 ">
          <ProductDetails data={filteredProduct} />
        </div>
        <div>
          <Calculator />
        </div>
      </div>
    </Layout>
  );
}

export default index;

export async function getStaticProps() {
  const res = await fetch(
    "https://demo-production-edcf.up.railway.app/api/products?populate=*"
  );
  const products = await res.json();
  return {
    props: { products },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://demo-production-edcf.up.railway.app/api/products?populate=*`
  );

  const path = await res.json();

  return {
    paths: path.data.map((menu) => {
      return {
        params: {
          menu: menu.attributes.sibebar.data.attributes.Menu,
          submenu: menu.attributes.Title,
        },
      };
    }),
    fallback: false, // can also be true or 'blocking'
  };
}
