import Hero from "./child-components/hero";
import Brands from "./child-components/brands";
import Scalable from "./child-components/scalable";
import Features from "./child-components/features";
import Compaigns from "./child-components/compaigns";
import WeDo from "./child-components/we-do";
import Pricing from "./child-components/pricing";
import Footer from "./child-components/footer";
import Header from "./child-components/header.jsx";

const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Features />
      <Scalable />
      <Compaigns />
      <WeDo />
      <Pricing />
      <Footer />
    </>
  );
};
export default Landing;
