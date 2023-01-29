import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import SingleProduct from "@/components/SingleProduct";
import Slider from "@/components/Slider";

export default function productDetails({ product, params }) {
  const filteredProduct = product?.data.filter((data) => {
    if (params.menu === data.attributes.sibebar.data.attributes.Menu) {
      return data;
    }
  });



  return (
    <Layout title={params.menu}>
      <div className=" slider rounded-md my-4  md:mb-0 lg:h-[26rem] md:h-[12rem]">
        <Slider />
      </div>
      <div className="single-products grid md:grid-cols-2  lg:grid-cols-3 lg:gap-10 md:gap-5 justify-center  gap-y-8 justify-items-center">
        {filteredProduct && filteredProduct?.map((data,index) => (
          <SingleProduct {...data} key={index} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://demo-production-edcf.up.railway.app/api/products?populate=*`
  );

  const product = await res.json();

  return {
    props: { product, params },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://demo-production-edcf.up.railway.app/api/sibebars?populate=*`
  );

  const path = await res.json();

  return {
    paths: path.data.map((menu) => {
      return {
        params: {
          menu: menu.attributes.Menu,
        },
      };
    }),

    fallback: false,
  };
}
