import Link from "next/link";
import Image from "next/image";
import logo from "../img/logo.png";
import styles from "@/styles/Home.module.css";
import { MdAccountCircle, MdPhoneCallback, MdEmail } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { AiFillClockCircle } from "react-icons/ai";
import falyer from "../img/travel-sale-flyer-template_52683-46904.webp";
import like from "../img/like.webp";
import headphone from "../img/headpone.webp";
import Footer from "@/components/Footer";
import charlotte from "../img/man/charlotte.webp";
import { Navbar } from "flowbite-react";
import tvPhoto from "../img/tv-01.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper";

// ads image
import add2 from "../img/ads2.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HomeCatagory from "@/components/HomeCatagory";
import HomeProducts from "@/components/HomeProducts";

export default function Home() {
  return (
    <section>
      <header className="  sticky top-0  z-[9999]">
        <div className="header-top bg-[#1E1E1E] py-3">
          <div className="container mx-auto lg:px-10">
            <div className="header-top-content flex justify-between">
              <ul className="flex flex-wrap   items-center  text-white">
                <Link href={`tel:929 217-6589`}>
                  <li className="  border-r px-3 flex   items-center">
                    <MdPhoneCallback className="text-[1.2rem] text-second" />

                    <span className=" hidden lg:block tracking-wider ml-1 font-bold  text-[13px]">
                      929 217-6589
                    </span>
                  </li>
                </Link>
                <Link href={`mailto:nprintandgraph@gmail.com`}>
                  <li className="   px-3 flex   space-x-1 items-center">
                    <MdEmail className=" text-[1.2rem]" />
                    <span className="hidden lg:block  text-[13px]">
                      nprintandgraph@gmail.com
                    </span>
                  </li>
                </Link>
              </ul>

              <ul className="flex  text-white">
                <li className=" cursor-pointer  px-3  space-x-1  flex  items-center ">
                  <HiHome className="text-[1.5rem]" />
                  <div>
                    <p className="text-[12px]  hidden lg:block  leading-tight font-bold">
                      13220 Jamaica Ave
                      <span className="block text-[10px] font-normal">
                        Queens, NY 11418
                      </span>
                    </p>
                  </div>
                </li>
                <li className=" cursor-pointer  px-3  space-x-1  flex  items-center ">
                  <AiFillClockCircle className="text-[1.5rem]" />
                  <div>
                    <p className="text-[12px]  hidden lg:block  leading-tight font-bold">
                      Mon-Fri9.00am-5.00pm
                      <span className="block text-[10px] font-normal">
                        Sat-Sun Closed
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header-main  bg-white py-2  w-[100%] shadow-md">
          <div className="container mx-auto">
            <div className="header-main-lg   ">
              <Navbar fluid={true} rounded={true}>
                <Image
                  src={logo}
                  alt="logo"
                  height={150}
                  width={150}
                  className="text-center md:mb-6  md:ml-[15rem] lg:ml-0 lg:mb-0"
                />

                <Navbar.Toggle />

                <Navbar.Collapse>
                  <Link href={"/"} className="font-bold text-[14px]">
                    Home
                  </Link>

                  <Link href={"/shop"} className="font-bold text-[14px]">
                    Our Services
                  </Link>
                  <Link href={"/aboutus"} className="font-bold text-[14px]">
                    About Us
                  </Link>

                  <Link href={"/contacts"} className="font-bold text-[14px]">
                    Contact
                  </Link>
                  <Link href={"/contacts"} className="font-bold text-[14px]">
                    Request A Quote
                  </Link>
                  <Link href={"/contacts"} className="font-bold text-[14px]">
                    Our Catalog
                  </Link>
                </Navbar.Collapse>

                <div className="dropdown  hidden lg:block  font-bold cursor-pointer">
                  <ul className="flex  space-x-3">
                    <li className=" px-3 flex   items-center">
                      <MdAccountCircle className=" text-[1.3rem] mr-1" />
                      <span>Account</span>
                    </li>
                    <li>
                      <Link href={"/shop"}>
                        <button className="bg-primary text-white p-2 rounded-lg cursor-pointer">
                          Place Order
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Navbar>
            </div>
          </div>
        </div>
      </header>
      <div className="hero ">
        <Swiper
          pagination={true}
          centeredSlides={true}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          modules={[Autoplay, Pagination]}
          className="mySwiper text-white h-full w-full"
        >
          <SwiperSlide>
            <Image
              src={tvPhoto}
              height={700}
              width={1400}
              alt="img"
              className="w-[100%]  h-[100%]"
            />
          </SwiperSlide>
          <SwiperSlide className={`${styles.hero2}   `}>
            <div className=" bg-[#000000ac] h-full ">
              <div className="hero-content py-[10rem] flex container mx-auto   leading-[3.5rem] ">
                <div className="text-center md:text-left">
                  <h4 className=" text-white font-bold text-[14px]">
                    #1 YOUR PRINTING PARTNER
                  </h4>

                  <h1 className="font-bold lg:text-[85px] text-[40px]  text-white ">
                    {" "}
                    <span className=" text-primary ">Same Day</span> Print
                  </h1>

                  <p className="  text-white  leading-[1.8rem] mt-[1rem] lg:pr-[50rem] lg:mt-[3rem] text-[14px] lg:text-[16px]">
                    In the city that never sleeps... <br />
                    You can rely on Printing New York, your trusted printing
                    services NYC partner. From business cards to brochures, this
                    local print shop has you covered.
                  </p>

                  <div className="cta-btn flex md:flex-row  flex-col    space-y-4 md:space-y-0 md:space-x-4 mt-[3rem] items-center">
                    <Link href={`/shop`}>
                      <button className="  w-[18rem] bg-primary px-[3rem]  text-white  font-bold  rounded-md text-[14px]">
                        View Products
                      </button>
                    </Link>
                    <button className="   w-[18rem] border px-[3rem]  text-white  font-bold  rounded-md text-[14px]">
                      View Products+
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.hero4}   `}>
            <div className=" bg-[#000000ac] h-full ">
              <div className="hero-content py-[10rem] flex container mx-auto   leading-[3.5rem] ">
                <div className="text-center md:text-left">
                  <h4 className=" text-white font-bold text-[14px]">
                    #1 YOUR PRINTING PARTNER
                  </h4>

                  <h1 className="font-bold lg:text-[85px] text-[40px]  text-white ">
                    {" "}
                    <span className=" text-primary ">Same Day</span> Print
                  </h1>

                  <p className="  text-white  leading-[1.8rem] mt-[1rem] lg:pr-[50rem] lg:mt-[3rem] text-[14px] lg:text-[16px]">
                    In the city that never sleeps... <br />
                    You can rely on Printing New York, your trusted printing
                    services NYC partner. From business cards to brochures, this
                    local print shop has you covered.
                  </p>

                  <div className="cta-btn flex md:flex-row  flex-col    space-y-4 md:space-y-0 md:space-x-4 mt-[3rem] items-center">
                    <Link href={`/shop`}>
                      <button className="  w-[18rem] bg-primary px-[3rem]  text-white  font-bold  rounded-md text-[14px]">
                        View Products
                      </button>
                    </Link>
                    <button className="   w-[18rem] border px-[3rem]  text-white  font-bold  rounded-md text-[14px]">
                      View Products+
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.hero5}   `}>
            <div className=" bg-[#000000ac] h-full ">
              <div className="hero-content py-[10rem] flex container mx-auto   leading-[3.5rem] ">
                <div className="text-center md:text-left">
                  <h4 className=" text-white font-bold text-[14px]">
                    #1 YOUR PRINTING PARTNER
                  </h4>

                  <h1 className="font-bold lg:text-[85px] text-[40px]  text-white ">
                    {" "}
                    <span className=" text-primary ">Same Day</span> Print
                  </h1>

                  <p className="  text-white  leading-[1.8rem] mt-[1rem] lg:pr-[50rem] lg:mt-[3rem] text-[14px] lg:text-[16px]">
                    In the city that never sleeps... <br />
                    You can rely on Printing New York, your trusted printing
                    services NYC partner. From business cards to brochures, this
                    local print shop has you covered.
                  </p>

                  <div className="cta-btn flex md:flex-row  flex-col    space-y-4 md:space-y-0 md:space-x-4 mt-[3rem] items-center">
                    <Link href={`/shop`}>
                      <button className="  w-[18rem] bg-primary px-[3rem]  text-white  font-bold  rounded-md text-[14px]">
                        View Products
                      </button>
                    </Link>
                    <button className="   w-[18rem] border px-[3rem]  text-white  font-bold  rounded-md text-[14px]">
                      View Products+
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.hero6}   `}>
            <div className=" bg-[#000000ac] h-full ">
              <div className="hero-content py-[10rem] flex container mx-auto   leading-[3.5rem] ">
                <div className="text-center md:text-left">
                  <h4 className=" text-white font-bold text-[14px]">
                    #1 YOUR PRINTING PARTNER
                  </h4>

                  <h1 className="font-bold lg:text-[85px] text-[40px]  text-white ">
                    {" "}
                    <span className=" text-primary ">Same Day</span> Print
                  </h1>

                  <p className="  text-white  leading-[1.8rem] mt-[1rem] lg:pr-[50rem] lg:mt-[3rem] text-[14px] lg:text-[16px]">
                    In the city that never sleeps... <br />
                    You can rely on Printing New York, your trusted printing
                    services NYC partner. From business cards to brochures, this
                    local print shop has you covered.
                  </p>

                  <div className="cta-btn flex md:flex-row  flex-col    space-y-4 md:space-y-0 md:space-x-4 mt-[3rem] items-center">
                    <Link href={`/shop`}>
                      <button className="  w-[18rem] bg-primary px-[3rem]  text-white  font-bold  rounded-md text-[14px]">
                        View Products
                      </button>
                    </Link>
                    <button className="   w-[18rem] border px-[3rem]  text-white  font-bold  rounded-md text-[14px]">
                      View Products+
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="terms py-[3rem]  bg-[#191919]">
        <div className="grid gap-12   lg:grid-cols-3 sm:grid-cols-1  md:grid-cols-2 container mx-auto    justify-items-center   text-center   ">
          <button className="  w-[20rem] py-3 text-white font-bold uppercase  bg-transparent rounded-full border">
            How to order
          </button>
          <button className="  w-[20rem] py-3 text-white font-bold uppercase  bg-transparent rounded-full border">
            GET A SAMPLE PACK
          </button>
          <button className=" w-[20rem] sm:col-span-2 lg:col-span-1   py-3 text-white font-bold uppercase  bg-transparent rounded-full border">
            BROWSE TEMPLATES
          </button>
        </div>
      </div>

      <div className="catagory py-[6rem]">
        <div className="container mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-[5rem]">
          <HomeCatagory />
        </div>
      </div>

      <div className="shipping bg-[#191919] p-8">
        <h1 className="text-center  text-white font-bold text-[25px]">
          Free Worldwide Shipping on orders over $500
        </h1>
        <div className="container mx-auto grid mt-6  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:px-[13rem] justify-items-center ">
          <HomeProducts />
        </div>
      </div>

      <div className="why-choose py-[6rem] px-5">
        <div className="container mx-auto  grid  gap-10  lg:gap-[5rem] sm:grid-cols-1 md:grid-cols-2 md:items-center    justify-items-end ">
          <div className="img-box">
            <Image src={falyer} width={550} height={550} alt="img" />
          </div>
          <div className="content">
            <h4 className="font-bold ">Why choose us</h4>
            <h2 className="font-bold  lg:text-[50px] text-[35px]  mb-2 lg:mb-4">
              Highly Catchy Green Printing
            </h2>
            <p className=" lg:pr-10 text-gray-800 text-[14px] lg:text-[17px]">
              Diam ut venenatis tellus in metus vulputate. Semper eget duis at
              tellus at urna condimentum. Odio tempor orci dapibus ultrices in
              iaculis nunc. In hac habitasse platea dictumst quisque sagittis
              purus sit. A arcu cursus vitae congue mauris rhoncus aenean.
              Mauris cursus mattis molestiehy
            </p>

            <div className="benifit mt-8">
              <div className="flex space-x-4 items-center   justify-start">
                <div className="icon">
                  <Image src={like} width={80} height={80} alt="img" />
                </div>
                <div className="data ">
                  <h4 className="data-title font-bold mb-3 capitalize text-[18px] lg:text-[25px]">
                    Satisfied Service
                  </h4>
                  <p className="data-pera text-gray-800 text-[14px] lg:text-[17px]">
                    Amet consectetur adipiscing elit duis tristique sollicitudin
                    nibh sit FSed libero enim sed faucibus turpisuy
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 mt-[4rem] items-center   justify-start">
                <div className="icon">
                  <Image src={headphone} width={80} height={80} alt="img" />
                </div>
                <div className="data ">
                  <h4 className="data-title font-bold mb-3 capitalize text-[18px] lg:text-[25px]">
                    Free Consultancy
                  </h4>
                  <p className="data-pera text-gray-800 text-[14px] lg:text-[17px]">
                    Rhues ut lectus arcu bibendum at varius vel pharetra. Lacus
                    suspendisse faucibus interdum posut
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials py-[3rem] pb-[6rem] px-5">
        <div className="container mx-auto">
          <div className="tes-data text-center mb-[4rem]">
            <h4 className="font-bold uppercase text-primary mb-2">
              TESTIMONIALS
            </h4>
            <h2 className="font-bold text-[40px] mb-2">Customer Words</h2>
            <p className="  text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor
            </p>
          </div>

          <div className="customers grid sm:grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3    align-middle ">
            <div className="customer sm:justify-center md:justify-start">
              <div className="bio flex justify-center md:justify-start  items-center space-x-5">
                <Image
                  src={charlotte}
                  alt="logo"
                  height={100}
                  width={100}
                  className=" rounded-full"
                />
                <div>
                  <h5 className="name  font-bold">Oliva</h5>
                  <h5 className="proffesion  text-gray-400">Manager</h5>
                </div>
              </div>
              <p className="message text-center md:text-left mt-6 text-gray-600  pr-6">
                Olivia Massa placerat duis ultricies lacus sed turpis tincidunt
                id aliquet. Fringilla est ullamcorper eget nulla facilisi gestas
                maecenas.Sem viverra aliquet eget sit amet tellus cras
                adipiscing. Interdum velit euismod in pellentesque massa.
              </p>
            </div>
            <div className="customer ">
              <div className="bio flex  justify-center md:justify-start items-center space-x-5">
                <Image
                  src={charlotte}
                  alt="logo"
                  height={100}
                  width={100}
                  className=" rounded-full"
                />
                <div>
                  <h5 className="name  font-bold">Oliva</h5>
                  <h5 className="proffesion  text-gray-400">Manager</h5>
                </div>
              </div>
              <p className="message text-center md:text-left mt-6 text-gray-600  pr-6">
                Olivia Massa placerat duis ultricies lacus sed turpis tincidunt
                id aliquet. Fringilla est ullamcorper eget nulla facilisi gestas
                maecenas.Sem viverra aliquet eget sit amet tellus cras
                adipiscing. Interdum velit euismod in pellentesque massa.
              </p>
            </div>
            <div className="customer sm:justify-center md:jus ">
              <div className="bio flex justify-center md:justify-start items-center space-x-5">
                <Image
                  src={charlotte}
                  alt="logo"
                  height={100}
                  width={100}
                  className=" rounded-full"
                />
                <div>
                  <h5 className="name  font-bold">Oliva</h5>
                  <h5 className="proffesion  text-gray-400">Manager</h5>
                </div>
              </div>
              <p className="message text-center md:text-left mt-6 text-gray-600  pr-6">
                Olivia Massa placerat duis ultricies lacus sed turpis tincidunt
                id aliquet. Fringilla est ullamcorper eget nulla facilisi gestas
                maecenas.Sem viverra aliquet eget sit amet tellus cras
                adipiscing. Interdum velit euismod in pellentesque massa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "https://demo-production-edcf.up.railway.app/api/people"
  );
  const people = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { people },
    revalidate: 1,
  };
}
