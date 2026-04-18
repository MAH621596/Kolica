import { useState } from "react";
import { HeroCardData, dropdownData, homePagetabsMenu, mobileNavbarLinks } from '@/helper/data';
import { Navbar, HeroCard, CarCard, Button, Tabs, CustomSelect, Car, Car1, Car2, Car3, SeeMore, Sorting, CustomInput, CustomLabel, Footer } from "@/components";
const Home = () => {
  const [search, setSearch] = useState("");
  const [activeMainTab, setActiveMainTab] = useState(3);
  const [activeMainTab1, setActiveMainTab1] = useState(2);

  return (
    <>
      <Navbar />

      <Tabs
        className="w-full bg-[url('/img/TabsBG.png')] text-white h-[42px] p-0 hidden md:block"
        tabContainerClass="w-full max-w-[972px] mx-auto px-[30px] md:px-4 lg:px-0 grid grid-cols-7 gap-0"
        tabs_list={homePagetabsMenu}
        activeTabClass="bg-white"
        inActiveTabClass="hover:bg-white"
        activeTextClass="text-[#253A86]"
        inactiveTextClass="text-white group-hover:text-[#253A86]"
        activeTab={activeMainTab}
        onClick={(id) => setActiveMainTab(id)} />

      <Tabs
        className="w-full text-white h-[42px] p-0 mb-[50px] hidden md:block"
        tabContainerClass="w-full max-w-[972px] mx-auto px-[30px] md:px-4 lg:px-0 grid grid-cols-7 gap-0"
        tabItemClass="p-[30px] mb-[50px] block"
        tabs_list={mobileNavbarLinks}
        activeTabClass="bg-white"
        inActiveTabClass="bg-[#F1F1F1] hover:bg-white"
        activeTab={activeMainTab1}
        onClick={(id) => setActiveMainTab1(id)} />

      <section className="md:px-4 lg:px-0">
        <HeroCard>
          <div>
            <h2 className="text-2xl font-semibold text-[#000000] mb-[30px]">Millions of cars. A simple search.</h2>
            <div className="relative">
              <img src={Sorting} alt="sort" className="absolute top-0 bottom-0 my-auto left-[16px]" />

              <CustomInput
                id="filter"
                name="filter"
                type="text"
                className="h-[42px] w-full border-[0.64px] border-[#626262] py-[11px] pl-[50px] pr-[65px] leading-[20px] text-[10px] md:text-[12px] "
                placeholder="Advanced search with additional filters"
                value={search}
                onChange={(val) => { setSearch(val) }}

              />
              <div className="absolute top-0 bottom-0 my-auto right-[16px] bg-[#B1222C] w-[33px] h-[33px] rounded-[5px] flex items-center justify-center cursor-pointer hover:opacity-80">
                <span className="text-white text-[20px] font-bold"><i className="fa fa-search"></i></span>
              </div>
            </div>
          </div>
        </HeroCard>

        <HeroCard>
          <div>
            <h2 className="text-2xl font-semibold text-[#000000] mb-[30px] text-center md:text-start px-4">Quick search for passenger vehicles</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[20px] justify-center items-center">
              {dropdownData.map((dropdown) => {
                return (
                  <>
                    <div>
                      <CustomLabel
                        className="block mt-[40px] mb-[10px] lg:mt-0 mb-[12px] text-[12px] text-[#627084]"
                        text={dropdown.label}
                      />
                      <CustomSelect key={dropdown.id} options={dropdown.options} divider={true} />
                    </div>
                  </>
                )
              })}

              <Button text="Search Vehicle" icon={<i className="fa fa-search"></i>} className="hidden md:flex justify-start mt-[25px] !bg-[#B1222C] border-[#B1222C] font-normal text-xs !text-white h-[41px] cursor-pointer transition-all duration-200 hover:opacity-80" />
            </div>

            <div className="mt-[30px] gap-[30px] flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex gap-[12px] items-center justify-center">

                <CustomInput
                  id="electric_car"
                  name="electric_car"
                  type="checkbox"
                  className="border-[0.64px] border-[#626262] py-[11px] px-[50px] leading-[20px] text-[10px] md:text-[12px] "
                  placeholder="Advanced search with additional filters"
                  value="selectric_car"
                />
                <CustomLabel
                  className="text-[18px]"
                  text="Only electric car"
                  htmlFor="electric_car"
                />
              </div>

              <Button text="Search Vehicle" icon={<i className="fa fa-search"></i>} className="block md:hidden w-full justify-start !bg-[#B1222C] border-[#B1222C] font-normal text-xs !text-white h-[41px] cursor-pointer transition-all duration-200 hover:opacity-80" />

              <div className="flex gap-[24px] items-center justify-center">
                <div className="flex gap-[12px] items-center justify-center cursor-pointer group">
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-[#B1222C]">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.97434 3.7334C8.04899 3.7334 7.21059 3.87484 6.45694 4.10093C6.04998 4.22302 5.62119 3.99213 5.49909 3.5852C5.377 3.17829 5.60795 2.74946 6.01485 2.62739C6.90223 2.36118 7.88942 2.19495 8.97434 2.19495C13.9261 2.19495 17.9486 6.17409 17.9486 11.0975C17.9486 16.0209 13.9261 20 8.97434 20C4.02249 20 0 16.0209 0 11.0975C0 9.26638 0.562022 7.55851 1.51612 6.14424C1.7537 5.79206 2.23181 5.69914 2.58399 5.93674C2.93615 6.17434 3.02907 6.65243 2.7915 7.00461C2.00202 8.17488 1.53845 9.58503 1.53845 11.0975C1.53845 15.1587 4.85953 18.4615 8.97434 18.4615C13.0891 18.4615 16.4102 15.1587 16.4102 11.0975C16.4102 7.0363 13.0891 3.7334 8.97434 3.7334Z" fill="#626262" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.11111 0.123965C8.46748 0.355157 8.56902 0.831506 8.33782 1.18792L7.03487 3.1967L9.06268 4.50198C9.4199 4.73189 9.52304 5.20789 9.29314 5.56511C9.06317 5.92234 8.58717 6.02554 8.23 5.79557L5.55309 4.07251C5.38115 3.96186 5.26036 3.78728 5.2174 3.58736C5.17439 3.38745 5.21279 3.17866 5.32405 3.00711L7.04712 0.350714C7.27832 -0.00570878 7.75468 -0.107222 8.11111 0.123965Z" fill="#626262" />
                  </svg>
                  <div className="font-normal text-[18px] leading-tight text-[#626262] group-hover:text-[#B1222C]">Reset</div>
                </div>

                <div className="flex gap-[12px] items-center justify-center cursor-pointer group">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-[#B1222C]">
                    <path d="M0.625 3.53201H10.1408C10.4276 4.83617 11.5934 5.81527 12.9837 5.81527C14.374 5.81527 15.5398 4.83621 15.8266 3.53201H19.375C19.7202 3.53201 20 3.25244 20 2.90761C20 2.56279 19.7202 2.28322 19.375 2.28322H15.8263C15.5389 0.979715 14.3716 0 12.9837 0C11.5951 0 10.4283 0.979559 10.1411 2.28322H0.625C0.279844 2.28322 0 2.56279 0 2.90761C0 3.25244 0.279844 3.53201 0.625 3.53201ZM11.3233 2.90925C11.3233 2.90703 11.3234 2.90476 11.3234 2.90254C11.3261 1.99065 12.0709 1.24883 12.9837 1.24883C13.8952 1.24883 14.6401 1.98964 14.644 2.9011L14.6441 2.91027C14.6427 3.82372 13.8984 4.56651 12.9837 4.56651C12.0694 4.56651 11.3254 3.82446 11.3233 2.91155L11.3233 2.90925ZM19.375 16.468H15.8263C15.5389 15.1645 14.3716 14.1847 12.9837 14.1847C11.5951 14.1847 10.4283 15.1643 10.1411 16.468H0.625C0.279844 16.468 0 16.7475 0 17.0923C0 17.4372 0.279844 17.7167 0.625 17.7167H10.1408C10.4276 19.0209 11.5934 20 12.9837 20C14.374 20 15.5398 19.0209 15.8266 17.7167H19.375C19.7202 17.7167 20 17.4372 20 17.0923C20 16.7475 19.7202 16.468 19.375 16.468ZM12.9837 18.7512C12.0694 18.7512 11.3254 18.0092 11.3233 17.0963L11.3233 17.094C11.3233 17.0917 11.3234 17.0895 11.3234 17.0873C11.3261 16.1754 12.0709 15.4335 12.9837 15.4335C13.8952 15.4335 14.6401 16.1743 14.644 17.0858L14.6441 17.0949C14.6428 18.0085 13.8985 18.7512 12.9837 18.7512ZM19.375 9.37561H9.85918C9.57238 8.07144 8.4066 7.09239 7.01629 7.09239C5.62598 7.09239 4.4602 8.07144 4.1734 9.37561H0.625C0.279844 9.37561 0 9.65518 0 10C0 10.3449 0.279844 10.6244 0.625 10.6244H4.17371C4.46109 11.9279 5.62844 12.9076 7.01629 12.9076C8.40488 12.9076 9.57172 11.928 9.85895 10.6244H19.375C19.7202 10.6244 20 10.3449 20 10C20 9.65518 19.7202 9.37561 19.375 9.37561ZM8.67668 9.99836C8.67668 10.0006 8.67664 10.0028 8.67664 10.0051C8.67391 10.917 7.9291 11.6588 7.01629 11.6588C6.10477 11.6588 5.35992 10.918 5.35598 10.0066L5.35586 9.99743C5.35723 9.08386 6.10156 8.34118 7.01629 8.34118C7.93059 8.34118 8.67465 9.08319 8.67672 9.99614L8.67668 9.99836Z" fill="#626262" />
                  </svg>
                  <div className="font-normal text-[18px] leading-tight text-[#626262] group-hover:text-[#B1222C]">More filters</div>
                </div>
              </div>

            </div>
          </div>
        </HeroCard>

        <HeroCard className="relative z-10 py-4 bg-transparent text-white w-full max-w-[972px] mx-auto mb-[50px]"
          heading="Začutite energijo mesta"
          paragraph="Geely Cityrayže od"
          buttonText="€26.990"
          smallbuttonText="Odkrijte več"
          image={Car}
        />

        <HeroCard className="w-full max-w-[972px] mx-auto px-[28px] py-[46px] md:px-[45px] md:py-[50px] md:mb-[50px] relative z-10 bg-white text-black rounded-[20px]"
          heading="Overview of popular brands"
          list={HeroCardData}
        />

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

export default Home;