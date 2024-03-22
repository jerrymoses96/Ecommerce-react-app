import { Helmet } from "react-helmet";
import Body from "../../includes/Body";
import Footer from "../../includes/Footer";
import Header from "../../includes/Header";
import HeroContainer from "../../includes/HeroContainer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <HeroContainer />
      <Body/>
      <Footer />
    </div>
  );
};

export default Home;
