import { HiHome } from "react-icons/hi";
import Link from "next/link";
import { BsTelephoneForwardFill, BsFacebook } from "react-icons/bs";
import { MdOutgoingMail } from "react-icons/md";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="  shadow-md   py-[2.5rem] text-white bg-[#1E1E1E]">
      <div className="container mx-auto   ">
        <div className="grid  justify-items-center md:justify-items-start text-center md:text-left  gap-y-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <div className="info">
            <h3 className="info-title text-[25px] font-bold capitalize">
              information
            </h3>
            <ul className=" capitalize mt-2">
              <li className="mb-1">help</li>
              <li className="mb-1">order Satus</li>
              <li className="mb-1">Delivery Choices</li>
              <li className="mb-1">Payment Options</li>
              <li className="mb-1">Returns</li>
              <li className="mb-1">Price Promise</li>
            </ul>
          </div>
          <div className="info">
            <h3 className="info-title text-[25px] font-bold capitalize">
              Contact us
            </h3>
            <ul className=" text-capilalize mt-3">
              <li className="flex space-x-2 mb-2  items-center">
                <HiHome className="text-primary" />
                <p>13220 Jamaica Ave, Queens, NY 11418</p>
              </li>
              <li className="flex space-x-2 mb-2  items-center">
                <BsTelephoneForwardFill className="text-primary" />

                <p>929 217-6589</p>
              </li>
              <li className="flex space-x-2 mb-2  items-center">
                <MdOutgoingMail className="text-primary" />
                <p>nprintandgraph@gmail.com</p>
              </li>
            </ul>

            <div className="mt-5 md:mt-8 ">
              <ul className=" text-capilalize flex space-x-4">
                <li className="p-3 rounded-full border cursor-pointer">
                  <AiOutlineTwitter className="text-[1.2rem] cursor-pointer" />
                </li>
                <li className="p-3 rounded-full border cursor-pointer">
                  <BsFacebook className="text-[1.2rem]" />
                </li>
                <li className="p-3 rounded-full border">
                  <AiFillInstagram className="text-[1.2rem] cursor-pointer" />
                </li>

                <li className="p-3 rounded-full border cursor-pointer">
                  <FaLinkedin className="text-[1.2rem]" />
                </li>
              </ul>
            </div>
          </div>
          <div className="info">
            <h3 className="info-title text-[25px] font-bold  capitalize">
              Service
            </h3>
            <ul className=" capitalize mt-2">
              <li className="mb-1">Queries</li>
              <li className="mb-1">Map</li>
              <li className="mb-1">Store</li>
              <li className="mb-1">Afiliate</li>
              <Link href={"/faq"} className="font-bold text-[14px]">
                Help & Faq
              </Link>
              <li className="mb-1">Privacy</li>
            </ul>
          </div>
          <div className="info">
            <h3 className="info-title text-[25px] font-bold capitalize">
              Newsletter
            </h3>
            <ul className=" capitalize mt-2">
              <li className="mb-1">
                <input
                  type="search"
                  className="rounded-full py-4  w-72"
                  placeholder="Your email address"
                />
              </li>
              <li className=" mt-3">
                <p>
                  Sign up with your email address to receive news and updates
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy  mt-10 ">
          <p className="text-white text-center lg:text-left">
            ©2022 Print & Graph
          </p>
        </div>
      </div>
    </footer>
  );
}
