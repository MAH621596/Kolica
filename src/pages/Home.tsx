import Navbar from "../components/Navbar";
import Tab from "../components/Tab";
import HeroCard from "@/components/HeroCard";
import { HeroCardData } from '@/helper/data';
import CarCard from "@/components/Car_Card";
import Car from "../assets/Car.png";
import Car1 from "../assets/Car1.png";
import Car2 from "../assets/Car2.png";
import Car3 from "../assets/Car3.png";
import SeeMore from "../assets/SeeMore.png";
import Footer from "@/components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <section>
        <Tab />

        <HeroCard className="relative z-10 px-[64px] py-4 bg-transparent text-white"
          heading="Začutite energijo mesta"
          paragraph="Geely Cityrayže od"
          buttonText="€26.990"
          image={Car}
        />

        <HeroCard className="mb-[60px] relative z-10 max-w-[1250px] mx-auto px-8 py-4 bg-white text-black rounded-[20px]"
          heading="Overview of popular brands"
          list={HeroCardData}
        />

        <div className="mb-[100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[26px] relative z-10 max-w-[1250px] mx-auto px-[40px] py-[25px] bg-white text-black rounded-[20px]">
          <CarCard image={Car1} heading="BMW 320d xDrive" price="$28,900" className="bg-[#F1F1F1] border border-[#C8C8C8] rounded-[10px]" />
          <CarCard image={Car2} heading="Mercedes-Benz C 200" price="$28,900" className="bg-[#F1F1F1] border border-[#C8C8C8] rounded-[10px]" />
          <CarCard image={Car3} heading="Audi A4 Avant" price="$28,900" className="bg-[#F1F1F1] border border-[#C8C8C8] rounded-[10px]" />
          <CarCard dealerText={"All dealers ads"} icon={SeeMore} />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;