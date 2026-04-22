import { useState } from "react";
import { sectionTabsMenu } from '@/helper/data';
import { Navbar, HeroCard, CarCard, Tabs, Car1, Car2, Car3, SeeMore, Sorting, CustomInput, Footer } from "@/components";
const Dashboard = () => {
  const [search, setSearch] = useState("");
  // const [values, setValues] = useState<Record<string, string>>({});
  const [activeMainTab, setActiveMainTab] = useState<number>(1);
  // const [activeSubTab, setActiveSubTab] = useState<number>(-1);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("auth") === "true"
  );

  console.log(setLoggedIn);

  // const login = () => {
  //   localStorage.setItem("auth", "true");
  //   setLoggedIn(true);
  // };

  // const logout = () => {
  //   localStorage.setItem("auth", "false");
  //   setLoggedIn(false);
  // };

  return (
    <>
      <Navbar logStatus={loggedIn} />

      <Tabs
        className="w-full bg-[url('/img/TabsBG.png')] text-white h-[42px] p-0 hidden md:block"
        tabContainerClass="w-full max-w-[972px] mx-auto px-[30px] md:px-4 lg:px-0 grid grid-cols-7 gap-0"
        tabs_list={sectionTabsMenu}
        tabItemClass="svgInactive"
        activeTabClass="bg-white"
        inActiveTabClass="hover:bg-white"
        activeTextClass="text-[#253A86]"
        inactiveTextClass="text-white group-hover:text-[#253A86]"
        activeTab={activeMainTab}
        variant="route"
        onClick={(id) => setActiveMainTab(id)} />

      <section className="md:px-4 lg:px-0">
        <HeroCard parentClass="mt-[50px]">
          <div>
            <h2 className="text-2xl font-semibold text-[#000000] mb-[30px]">Millions of cars. A simple search.</h2>
            <div className="relative">
              <img src={Sorting} alt="sort" className="absolute top-0 bottom-0 my-auto left-[16px]" />

              <CustomInput
                id="filter"
                name="filter"
                type="text"
                className="h-[42px] w-full border-[0.64px] border-[#626262] py-[11px] pl-[50px] pr-[65px] leading-[20px] text-[10px] md:text-[12px]"
                placeholder="Advanced search with additional filters"
                value={search}
                onChange={(val) => { setSearch (val as string) }}

              />
              <div className="absolute top-0 bottom-0 my-auto right-[16px] bg-[#B1222C] w-[33px] h-[33px] rounded-[5px] flex items-center justify-center cursor-pointer hover:opacity-80">
                <span className="text-white text-[20px] font-bold"><i className="fa fa-search"></i></span>
              </div>
            </div>
          </div>
        </HeroCard>

        <div className="md:mb-[100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-[18px] lg:gap-[26px] 
        relative z-10 w-full max-w-[972px] mx-auto px-[54px] py-[65px] md:px-[40px] md:py-[25px] text-black rounded-[20px] bg-[#F9FAFB]">
          <CarCard image={Car1} heading="BMW 320d xDrive" price="$28,900" />
          <CarCard image={Car2} heading="Mercedes-Benz C 200" price="$28,900" />
          <CarCard image={Car3} heading="Audi A4 Avant" price="$28,900" />
          <CarCard dealerText={"All dealers ads"} icon={SeeMore} />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Dashboard;