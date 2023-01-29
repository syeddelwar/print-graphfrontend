import Header from "@/components/Header";
import { MdDeleteForever } from "react-icons/md";
import Footer from "@/components/Footer";
import Image from "next/image";
import photo from "../../img/bg/travel-sale-flyer-template_52683-46904.webp";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
export default function shopping() {
  const { cart, user } = useContext(AuthContext);

  return (
    <>
      <Header />

      {
        <div className="container mx-auto">
          <h3 className="font-bold text-[25px] my-[2rem] ml-[10rem]">
            {cart !== [] ? "Shopping Cart" : "No Cart"}
          </h3>
          {cart !== []
            ? cart.map((data, index) => (
                <div
                  className=" rounded-lg my-8 shadow-lg p-10 lg:mx-[10rem] "
                  key={index}
                >
                  <div
                    className="shoppin-cart 
   grid  grid-cols-1
   md:grid-cols-4
justify-items-center

md:justify-items-start

       justify-center
     gap-5
     gap-y-10

  "
                  >
                    <div className="product-img">
                      <Image
                        src={photo}
                        height={150}
                        width={150}
                        alt="product-img"
                        className="rounded-md"
                      />
                    </div>

                    <div
                      className="product-des 
      col-span-3
     flex justify-between 
    xl:space-x-[20rem] "
                    >
                      <div className="details ">
                        <h2 className="font-bold mb-2">
                          Banner 12 oz (Viny! Banners)
                        </h2>

                        <ul>
                          <li>
                            <span className="title font-bold">Job Name: </span>
                            <span className="data">201564646778777</span>
                          </li>
                          <li>
                            <span className="title font-bold">
                              Width & Length:
                            </span>
                            <span className="data">
                              {data.attributes.cart.customWidth}`` Width x{" "}
                              {data.attributes.cart.customHeigh} `` Height
                            </span>
                          </li>
                          <li>
                            <span className="title font-bold">Width : </span>
                            <span className="data">
                              {data.attributes.cart.customWidth}``
                            </span>
                          </li>
                          <li>
                            <span className="title font-bold">Height : </span>
                            <span className="data">
                              {data.attributes.cart.customHeigh}``
                            </span>
                          </li>
                          <li>
                            <span className="title font-bold">Meterial : </span>
                            <span className="data">
                              13 oz. Matte viny! Banner
                            </span>
                          </li>
                          <li>
                            <span className="title font-bold">
                              Reinforce :{" "}
                            </span>
                            <span className="data">
                              {data.attributes.cart.lamination}
                            </span>
                          </li>
                          <li>
                            <span className="title font-bold">
                              Finishing :{" "}
                            </span>
                            <span className="data">None</span>
                          </li>
                        </ul>
                      </div>

                      <div className="quantity flex space-x-6 md:space-x-12 font-bold justify-between">
                        <p>
                          {data.attributes.cart.quantity}
                          <span className="font-normal"> Qty</span>
                        </p>

                        <p> {data.attributes.cart.total}</p>
                      </div>
                    </div>
                  </div>
                  <div className="editOrder max-w-[75%] ml-[10%] md:ml-[25%] mt-6 p-2  border-gray-200 border-t    flex justify-between items-center   ">
                    <p className="cursor-pointer">Edit Order</p>
                    <p>
                      <MdDeleteForever className="text-[1.4rem] cursor-pointer text-red-600" />
                    </p>
                  </div>
                </div>
              ))
            : ""}
        </div>
      }

      <Footer />
    </>
  );
}
