import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
export default function Calculator() {
  const {addToCart } = useContext(AuthContext);
  // geting all input data
  const [error, setError] = useState(null);
  const [widthError, setWidthError] = useState(null);

  const [calData, setCalData] = useState({
    ratio: 0,
    customHeigh: 0,
    customWidth: 0,
    quantity: 1,
    reinforce: "",
    lamination: "none",
    time: "",
    total: 10,
  });

  // make the main calculations

  const price = 10; //10 doller

  useEffect(() => {
    // let totalPrice =
    //   parseInt(customWidth) * parseInt(customHeigh) * price * quantity;
    if (calData.ratio !== "Custom Size") {
      setCalData({ ...calData, customHeigh: 0, customWidth: 0 });
    }
  }, [
    calData.ratio,
    calData.quantity,
    calData.reinforce,
    calData.time,
    calData.customHeigh,
    calData.customWidth,
  ]);

  // set quantity

  const handleQuantity = (e) => {
    if (e.target.value > 0) {
      setCalData({
        ...calData,
        quantity: e.target.value,
      });
      setError(null);
    } else {
      setError("plz enter valid quantity");
    }
  };

  const handleWidth = (e) => {
    if (e.target.value < 49) {
      setCalData({
        ...calData,
        customWidth: e.target.value,
      });
      setWidthError(null);
    } else {
      setWidthError("Max value is 48");
    }
  };

  const handleSubmit = () => {
     addToCart(calData)
  };

  return (
    <form className="  w-full shadow-md  " onSubmit={handleSubmit}>
      <h4
        className={` font-bold  p-2  pl-5 rounded-tl-md 
            
            rounded-tr-md shadow-sm
            bg-[#111827]   text-white  ${styles.borderGradient} `}
      >
        Price Calculator
      </h4>

      <div className="flex flex-wrap -mx-3 mb-6 px-8  pb-4   ">
        <div className="w-full mt-4 ">
          <label
            className="block  tracking-wide text-gray-700  mb-1  "
            htmlFor="grid-state"
          >
            Width & Length
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={(e) =>
                setCalData({
                  ...calData,
                  ratio: e.target.value,
                })
              }
            >
              <option>1' x 1'</option>
              <option>2' x 3'</option>
              <option>3' x 4'</option>
              <option>Custom Size</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
          </div>
        </div>

        {calData.ratio === "Custom Size" ? (
          <div className="flex  space-x-10">
            <div className="w-full mt-4   ">
              <label
                className="block tracking-wide text-gray-700  mb-1"
                htmlFor="grid-first-name"
              >
                Width <span className="text-red-600 font-bold">(Fet)</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="number"
                value={calData.customWidth}
                onChange={handleWidth}
              />
              {widthError && (
                <p className="text-red-600 text-sm">{widthError}</p>
              )}
            </div>
            <div className="w-full mt-4   ">
              <label
                className="block tracking-wide text-gray-700  mb-1"
                htmlFor="grid-first-name"
              >
                Height <span className="text-red-600 font-bold">(Fet)</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="number"
                placeholder="0"
                onChange={(e) =>
                  setCalData({
                    ...calData,
                    customHeigh: e.target.value,
                  })
                }
              />
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="w-full mt-4   ">
          <label
            className="block tracking-wide text-gray-700  mb-1"
            htmlFor="grid-first-name"
          >
            Quantity
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="number"
            value={calData.quantity}
            onChange={handleQuantity}
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>

        <div className="w-full mt-4   ">
          <label
            className="block tracking-wide text-gray-700  mb-1"
            htmlFor="grid-first-name"
          >
            Material
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="bond paper"
          />
        </div>

        <div className="w-full mt-4 ">
          <label
            className="block  tracking-wide text-gray-700  mb-1  "
            htmlFor="grid-state"
          >
            Reinforce
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={(e) =>
                setCalData({ ...calData, reinforce: e.target.value })
              }
            >
              <option>Binded</option>
              <option>Loose</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
          </div>
        </div>
        <div className="w-full mt-4 ">
          <label
            className="block  tracking-wide text-gray-700  mb-1  "
            htmlFor="grid-state"
          >
            Lamination
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={(e) =>
                setCalData({ ...calData, lamination: e.target.value })
              }
            >
              <option>None</option>
              <option>Matte</option>
              <option>Gloss</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
          </div>
        </div>

        <div className="w-full mt-4 ">
          <label
            className="block  tracking-wide text-gray-700  mb-1  "
            htmlFor="grid-state"
          >
            Production Time
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={(e) => setCalData({ ...calData, time: e.target.value })}
            >
              <option>2-3 Business Days</option>
              <option>Next Day</option>
              <option>Same Day</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
          </div>
        </div>

        <div className="w-full mt-4   ">
          <input
            className="appearance-none text-right block w-full bg-white  text-primary   rounded py-2 px-4 my-5 leading-tight font-bold text-[18px] focus:outline-none focus:bg-white "
            id="grid-first-name"
            disabled
            type="text"
            placeholder="1"
            value={`Total : $${calData.total}`}
          />
        </div>

        <Link
          href={"#"}
          onClick={handleSubmit}
          className="appearance-none text-center block w-full bg-[#111827]  text-white  border-red-500 rounded py-2  my-3 leading-tight font-bold text-[18px]  uppercase cursor-pointer focus:outline-none  "
        >
          add to cart
        </Link>
      </div>
    </form>
  );
}

// import styles from "@/styles/Home.module.css";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function Calculator() {
//   // geting all input data
//   const [ratio, setRatio] = useState(0);
//   const [customHeigh, setCustomHeigh] = useState(0);
//   const [customWidth, setCustomWidth] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [reinforce, setReinforce] = useState("");
//   const [lamination, setLamination] = useState("None");
//   const [color, setColor] = useState("Black & White");
//   const [time, setTime] = useState("");
//   const [total, setTotal] = useState(10);
//   const [error, setError] = useState(null);
//   // make the main calculations

//   const price = 10;

//   let colorPrice = color === "Black & White" ? 0.55 : 0.94;

//   useEffect(() => {
//     let totalPrice = quantity * price + colorPrice;
//     setTotal(totalPrice);
//   }, [ratio, quantity, reinforce, time, customHeigh, customWidth, color]);

//   // set quantity

//   const handleQuantity = (e) => {
//     if (e.target.value > 0) {
//       setQuantity(e.target.value);
//       setError(null);
//     } else {
//       setError("plz enter valid quantity");
//     }
//   };

//   const handleSubmit = () => {
//     console.log("hello");
//   };

//   return (
//     <form className="  w-full shadow-md  " onSubmit={handleSubmit}>
//       <h4
//         className={` font-bold  p-2  pl-5 rounded-tl-md

//             rounded-tr-md shadow-sm
//             bg-[#111827]   text-white  ${styles.borderGradient} `}
//       >
//         Price Calculator
//       </h4>

//       <div className="flex flex-wrap -mx-3 mb-6 px-8  pb-4   ">
//         <div className="w-full mt-4 ">
//           <label
//             className="block  tracking-wide text-gray-700  mb-1  "
//             htmlFor="grid-state"
//           >
//             Width & Length
//           </label>
//           <div className="relative">
//             <select
//               className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-state"
//               onChange={(e) => setRatio(e.target.value)}
//             >
//               <option>11" x 17"</option>
//               <option>12" x 18"</option>
//               <option>18" x 24"</option>
//               <option>24" x 36"</option>
//               <option>30" x 42"</option>
//               <option>36" x 48"</option>
//               <option>Custom Size</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
//           </div>
//         </div>

//         {ratio === "Custom Size" ? (
//           <div className="flex  space-x-10">
//             <div className="w-full mt-4   ">
//               <label
//                 className="block tracking-wide text-gray-700  mb-1"
//                 htmlFor="grid-first-name"
//               >
//                 Width <span className="text-red-600 font-bold">(Inch)</span>
//               </label>
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
//                 id="grid-first-name"
//                 type="number"
//                 placeholder="0"
//                 onChange={(e) => setCustomWidth(e.target.value)}
//               />
//             </div>
//             <div className="w-full mt-4   ">
//               <label
//                 className="block tracking-wide text-gray-700  mb-1"
//                 htmlFor="grid-first-name"
//               >
//                 Height <span className="text-red-600 font-bold">(Inch)</span>
//               </label>
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
//                 id="grid-first-name"
//                 type="number"
//                 placeholder="0"
//                 onChange={(e) => setCustomHeigh(e.target.value)}
//               />
//             </div>
//           </div>
//         ) : (
//           ""
//         )}

//         <div className="w-full mt-4   ">
//           <label
//             className="block tracking-wide text-gray-700  mb-1"
//             htmlFor="grid-first-name"
//           >
//             Quantity
//           </label>
//           <input
//             className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
//             id="grid-first-name"
//             type="number"
//             value={quantity}
//             onChange={handleQuantity}
//           />
//           {error && <p className="text-red-600 text-sm">{error}</p>}
//         </div>

//         <div className="w-full mt-4   ">
//           <label
//             className="block tracking-wide text-gray-700  mb-1"
//             htmlFor="grid-first-name"
//           >
//             Material
//           </label>
//           <input
//             className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
//             id="grid-first-name"
//             type="text"
//             placeholder="bond paper"
//           />
//         </div>

//         <div className="w-full mt-4 ">
//           <label
//             className="block  tracking-wide text-gray-700  mb-1  "
//             htmlFor="grid-state"
//           >
//             Reinforce
//           </label>
//           <div className="relative">
//             <select
//               className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-state"
//               onChange={(e) => setReinforce(e.target.value)}
//             >
//               <option>Binded</option>
//               <option>Loose</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
//           </div>
//         </div>
//         <div className="w-full mt-4 ">
//           <label
//             className="block  tracking-wide text-gray-700  mb-1  "
//             htmlFor="grid-state"
//           >
//             Color
//           </label>
//           <div className="relative">
//             <select
//               className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-state"
//               onChange={(e) => setColor(e.target.value)}
//             >
//               <option>Black & White</option>
//               <option>Color</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
//           </div>
//         </div>
//         <div className="w-full mt-4 ">
//           <label
//             className="block  tracking-wide text-gray-700  mb-1  "
//             htmlFor="grid-state"
//           >
//             Lamination
//           </label>
//           <div className="relative">
//             <select
//               className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-state"
//               onChange={(e) => setLamination(e.target.value)}
//             >
//               <option>None</option>
//               <option>Matte</option>
//               <option>Gloss</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
//           </div>
//         </div>

//         <div className="w-full mt-4 ">
//           <label
//             className="block  tracking-wide text-gray-700  mb-1  "
//             htmlFor="grid-state"
//           >
//             Production Time
//           </label>
//           <div className="relative">
//             <select
//               className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-state"
//               onChange={(e) => setTime(e.target.value)}
//             >
//               <option>2-3 Business Days</option>
//               <option>Next Day</option>
//               <option>Same Day</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
//           </div>
//         </div>

//         <div className="w-full mt-4   ">
//           <input
//             className="appearance-none text-right block w-full bg-white  text-primary   rounded py-2 px-4 my-5 leading-tight font-bold text-[18px] focus:outline-none focus:bg-white "
//             id="grid-first-name"
//             disabled
//             type="text"
//             placeholder="1"
//             value={`Total : $${total}`}
//           />
//         </div>

//         <Link
//           href={"#"}
//           className="appearance-none text-center block w-full bg-[#111827]  text-white  border-red-500 rounded py-2  my-3 leading-tight font-bold text-[18px]  uppercase cursor-pointer focus:outline-none  "
//         >
//           add to cart
//         </Link>
//       </div>
//     </form>
//   );
// }
