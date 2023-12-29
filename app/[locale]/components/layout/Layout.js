import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Header from "./Header";
import PageHead from "./PageHead";

const Layout = ({ children, HeaderStyle, }) => {

  return (
    <>
      <PageHead />
      <div className="page-wrapper" id="top">
        <Header />
        {children}
        <Footer />
      </div>
      {/* <BackToTop /> */}
      <BackToTop />
    </>
  );
};

export default Layout;
