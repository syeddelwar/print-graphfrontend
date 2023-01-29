import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

function Sidebar() {
  const { sidebar, getSidebar } = useContext(AuthContext);

  useEffect(() => {
    getSidebar();
  }, []);

  return (
    <aside className="sidebar">
      <Link
        href={"#"}
        className="text-center text-base font-bold mb-3 bg-primary text-white p-2 rounded-md   w-[80%] block"
      >
        All Products
      </Link>

      {sidebar &&
        sidebar.data.map((menu, index) => (
          <div className="aec-bluprints" key={index}>
            <ul className="w-[80%] ">
              <li
                className={`text-titleSm   capitalize font-bold bg-[#111827] text-white p-2 rounded-tl-md rounded-tr-md text-left ${styles.borderGradient}`}
              >
                <Link href={`/shop/${menu.attributes.Menu}`}>
                  {menu.attributes.Menu}
                </Link>
              </li>

              {menu.attributes.SubMenu1 && (
                <li className="text-base  border-b cursor-pointer border-softGray p-2 font-bold capitalize hover:text-primary">
                  <Link
                    href={`/shop/${menu.attributes.Menu}/${menu.attributes.SubMenu1}`}
                  >
                    {menu.attributes.SubMenu1}
                  </Link>
                </li>
              )}

              {menu.attributes.SubMenu2 && (
                <li className="text-base  border-b cursor-pointer border-softGray p-2 font-bold capitalize hover:text-primary">
                  <Link  href={`/shop/${menu.attributes.Menu}/${menu.attributes.SubMenu2}`}>
                    {menu.attributes.SubMenu2}
                  </Link>
                </li>
              )}

              {menu.attributes.SubMenu3 && (
                <li className="text-base  border-b cursor-pointer border-softGray p-2 font-bold capitalize hover:text-primary">
                  <Link  href={`/shop/${menu.attributes.Menu}/${menu.attributes.SubMenu1}`}>
                    {menu.attributes.SubMenu3}
                  </Link>
                </li>
              )}

              {menu.attributes.SubMenu4 && (
                <li className="text-base  border-b cursor-pointer border-softGray p-2 font-bold capitalize hover:text-primary">
                  <Link  href={`/shop/${menu.attributes.Menu}/${menu.attributes.SubMenu1}`}>
                    {menu.attributes.SubMenu4}
                  </Link>
                </li>
              )}

              {menu.attributes.SubMenu5 && (
                <li className="text-base  border-b cursor-pointer border-softGray p-2 font-bold capitalize hover:text-primary">
                  <Link  href={`/shop/${menu.attributes.Menu}/${menu.attributes.SubMenu1}`}>
                    {menu.attributes.SubMenu5}
                  </Link>
                </li>
              )}

              {menu.attributes.SubMenu6 && (
                <li className="text-base  border-b cursor-pointer border-softGray p-2 font-bold capitalize hover:text-primary">
                  <Link  href={`/shop/${menu.attributes.Menu}/${menu.attributes.SubMenu1}`}>
                    {menu.attributes.SubMenu6}
                  </Link>
                </li>
              )}

              {menu.attributes.SubMenu7 && (
                <li className="text-base  border-b cursor-pointer border-softGray p-2 font-bold capitalize hover:text-primary">
                  <Link  href={`/shop/${menu.attributes.Menu}/${menu.attributes.SubMenu1}`}>
                    {menu.attributes.SubMenu7}
                  </Link>
                </li>
              )}

              {menu.attributes.SubMenu8 && (
                <li className="text-base  border-b cursor-pointer border-softGray p-2 font-bold capitalize hover:text-primary">
                  <Link  href={`/shop/${menu.attributes.Menu}/${menu.attributes.SubMenu1}`}>
                    {menu.attributes.SubMenu8}
                  </Link>
                </li>
              )}

              {menu.attributes.SubMenu9 && (
                <li className="text-base  border-b cursor-pointer border-softGray p-2 font-bold capitalize hover:text-primary">
                  <Link  href={`/shop/${menu.attributes.Menu}/${menu.attributes.SubMenu1}`}>
                    {menu.attributes.SubMenu9}
                  </Link>
                </li>
              )}

              {menu.attributes.SubMenu10 && (
                <li className="text-base  border-b cursor-pointer border-softGray p-2 font-bold capitalize hover:text-primary">
                  <Link  href={`/shop/${menu.attributes.Menu}/${menu.attributes.SubMenu1}`}>
                    {menu.attributes.SubMenu10}
                  </Link>
                </li>
              )}

              {menu.attributes.SubMenu11 && (
                <li className="text-base  border-b cursor-pointer border-softGray p-2 font-bold capitalize hover:text-primary">
                  <Link  href={`/shop/${menu.attributes.Menu}/${menu.attributes.SubMenu1}`}>
                    {menu.attributes.SubMenu11}
                  </Link>
                </li>
              )}

              {menu.attributes.SubMenu12 && (
                <li className="text-base  border-b cursor-pointer border-softGray p-2 font-bold capitalize hover:text-primary">
                  <Link  href={`/shop/${menu.attributes.Menu}/${menu.attributes.SubMenu1}`}>
                    {menu.attributes.SubMenu12}
                  </Link>
                </li>
              )}

              {menu.attributes.SubMenu13 && (
                <li className="text-base  border-b cursor-pointer border-softGray p-2 font-bold capitalize hover:text-primary">
                  <Link  href={`/shop/${menu.attributes.Menu}/${menu.attributes.SubMenu1}`}>
                    {menu.attributes.SubMenu13}
                  </Link>
                </li>
              )}

              {menu.attributes.SubMenu14 && (
                <li className="text-base  border-b cursor-pointer border-softGray p-2 font-bold capitalize hover:text-primary">
                  <Link  href={`/shop/${menu.attributes.Menu}/${menu.attributes.SubMenu1}`}>
                    {menu.attributes.SubMenu14}
                  </Link>
                </li>
              )}

              {menu.attributes.SubMenu15 && (
                <li className="text-base  border-b cursor-pointer border-softGray p-2 font-bold capitalize hover:text-primary">
                  <Link  href={`/shop/${menu.attributes.Menu}/${menu.attributes.SubMenu15}`}>
                    {menu.attributes.SubMenu15}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        ))}
    </aside>
  );
}

export default Sidebar;
