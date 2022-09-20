import Client from "../components/Client/Client";
import Banner from "../components/Home/Banner";
import Hotel from "../components/Hotel/Hotel";
import Images from "../components/images/Images";
import Review from "../components/Review/Review";
import Scroll from "../components/Scroll/Scroll";
import Footer from "../components/share/Footer";
import Navbar from "../components/share/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="bg-black">
        <Banner></Banner>

        <Images />
        <Hotel />
        <div className="bg-white">
          <Review />
        </div>
        <Client />
        <Footer></Footer>
        <Scroll />
      </div>
    </div>
  );
}
