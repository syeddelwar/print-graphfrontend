import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { AuthProvider } from "@/context/AuthContext";

export default function MyApp({ Component, pageProps }) {
  // if (pageProps.protected && !user) {
  //   return (
  //     <Layout>Loading...</Layout>
  //   )
  // }

  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
