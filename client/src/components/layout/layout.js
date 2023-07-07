import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <div>
          <meta name="description" content={description} />
          <meta name="author" content={author} />
          <meta name="keywords" content={keywords} />
        </div>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>
        {children}
        <ToastContainer/>
      </main>

      {/* <Footer/> */}
    </>
  );
};

Layout.defaultProps = {
  title: "Ecommerce App",
  description: "MERN App",
  keywords: "Discount Sale , Buy1Get1",
  author: "Rakshit Jain",
};

export default Layout;
