import Head from "next/head";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";

export default function layout({ title, des, content, children, mainContent }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={content} content={des}></meta>
      </Head>
      <Header />
      <Main> {children} </Main>

      <div className="mt-[4rem]">
        <Footer></Footer>
      </div>
    </>
  );
}

layout.defaultProps = {
  title: "about",
  des: "about page",
  content: "this is about page",
};
