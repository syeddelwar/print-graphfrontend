import { createContext, useEffect, useState } from "react";
import { NEXT_URL } from "@/config/index";

import { destroyCookie } from "nookies";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [looding, setLooding] = useState(true);
  const [sliderImage, setSliderImage] = useState(null);
  const [sidebar, setSidbar] = useState(null);

  const [cart, setCart] = useState({
    cartItems: [],
  });

  useEffect(() => {
    checkUserLoggedId();
  }, []);

  // shoping cart functionality
  const addToCart = async (calData) => {
    const res = await fetch(
      `https://demo-production-edcf.up.railway.app/api/carts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            cart: {
              ratio: calData.ratio,
              customHeigh: calData.customHeigh,
              customWidth: calData.customWidth,
              quantity: calData.quantity,
              reinforce: calData.reinforce,
              lamination: calData.lamination,
              time: calData.time,
              total: calData.total,
              email: user.user.email,
            },
          },
        }),
      }
    );
    const data = await res.json();
    setCart({ cartItems: [...cart.cartItems, data.data.attributes.cart] });
    console.log(cart);
  };

  const signup = async ({ username, email, password }) => {
    const res = await fetch(`${NEXT_URL}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.user) {
      setUser(data);
    } else {
      setError(data);
    }
  };

  const singin = async ({ email: identifier, password }) => {
    const res = await fetch(`${NEXT_URL}/api/signin`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });
    const data = await res.json();
    if (data.user) {
      setUser(data);
    } else {
      setError(data);
    }
  };

  const sinout = async (user) => {
    setUser(null);
    setError(null);
    setCart({ cartItems: [] });
    destroyCookie(null, "token");
  };

  const checkUserLoggedId = async () => {
    const res = await fetch(`${NEXT_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data);
      checkUser(data);
    } else {
      setUser(null);
    }
  };

  const checkUser = async (user) => {

    const res = await fetch(
      `https://demo-production-edcf.up.railway.app/api/carts`
    );
    const cartRes = await res.json();
    const filteredProducts = cartRes.data.filter((e) => {
      if (e.attributes.cart.email === user.user.email) {
        return e.attributes.cart;
      }
    });
    setCart({ cartItems: filteredProducts });
  };

  const getSidebar = async () => {
    const res = await fetch(`${NEXT_URL}/api/sidebar`);
    const sidebar = await res.json();
    setSidbar(sidebar);
  };

  const getHomeSliderImage = async () => {
    const res = await fetch(
      "https://demo-production-edcf.up.railway.app/api/service-page-slider-image-should-be-w-1920px-h-600px?populate=*"
    );
    const data = await res.json();
    setSliderImage(data);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        setUser,
        singin,
        signup,
        sinout,
        checkUserLoggedId,
        looding,
        sliderImage,
        getHomeSliderImage,
        getSidebar,
        sidebar,
        cart: cart.cartItems,
        setCart,
        addToCart,
        checkUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
