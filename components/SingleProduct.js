import Link from "next/link";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

export default function SingleProduct({ attributes }) {
  return (
    <section className="product  cursor-pointer ">
      <div className="product-img">
        <Image
          src={`https://demo-production-edcf.up.railway.app${attributes.Images.data[0].attributes.url}`}
          height="350"
          width="350"
          className="rounded-md"
          alt="img"
        />
      </div>
      <div className="product-details">
        <h3 className="product-title text-[20px] font-bold pt-2">
          {attributes.Title}
        </h3>

        <p className="product-des text-base mb-[1.5rem]   ">
          {attributes.Description.slice(0, 80)}
        </p>

        <Link
          href={`/shop/${attributes.sibebar.data.attributes.Menu}/${attributes.Title}`}
          className="  capitalize py-2  pl-2 pr-1 rounded-md text-white bg-primary"
        >
          view details
          <AiOutlineRight className="inline-block pl-1 " />
        </Link>
      </div>
    </section>
  );
}
