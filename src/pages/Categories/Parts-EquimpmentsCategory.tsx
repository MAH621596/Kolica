import { useState } from "react";
import { homePagetabsMenu, freeTimeCategoryData, freeTimeSparePartsData } from '@/helper/data';
import { Navbar, HeroCard, CarCard, Tabs, CustomInput, CategoriesCard, Footer } from "@/components";
import { Truck1, Truck2, Truck3, SeeMore, Sorting } from "@/assets";

const PartsEquimpCategory = () => {
    const [search, setSearch] = useState("");
    const [activeMainTab, setActiveMainTab] = useState<number>(6);
    const [loggedIn, setLoggedIn] = useState(
        localStorage.getItem("auth") === "true"
    );

    console.log(setLoggedIn);

    return (
        <>
            <Navbar logStatus={loggedIn} />

            <Tabs
                className="w-full bg-[url('/img/TabsBG.png')] text-white h-[42px] mb-[50px] p-0 hidden md:block"
                tabContainerClass="w-full max-w-[972px] mx-auto px-[30px] md:px-4 lg:px-0 grid grid-cols-7 gap-0"
                tabs_list={homePagetabsMenu}
                tabItemClass="svgInactive"
                activeTabClass="bg-white"
                inActiveTabClass="hover:bg-white"
                activeTextClass="text-[#253A86]"
                inactiveTextClass="text-white group-hover:text-[#253A86]"
                activeTab={activeMainTab}
                variant="route"
                onClick={(id) => setActiveMainTab(id)} />

            <section className="md:px-4 lg:px-0">
                <HeroCard>
                    <div>
                        <h2 className="text-[21px] font-semibold text-[#000000] mb-[30px] text-center capitalize">
                            Millions of cars. A simple search.</h2>
                        <div className="relative">
                            <img src={Sorting} alt="sort" className="absolute top-0 bottom-0 my-auto left-[16px]" />

                            <CustomInput
                                id="filter"
                                name="filter"
                                type="text"
                                className="h-[42px] w-full border-[0.64px] border-[#626262] py-[11px] pl-[50px] pr-[65px] leading-[20px] !text-sm"
                                placeholder="Advanced search with additional filters"
                                value={search}
                                onChange={(val) => { setSearch(val as string) }}

                            />
                            <div className="absolute top-0 bottom-0 my-auto right-[16px] bg-[#B1222C] w-[33px] h-[33px] rounded-[5px] flex items-center justify-center cursor-pointer hover:opacity-80">
                                <span className="text-white text-[20px] font-bold"><i className="fa fa-search"></i></span>
                            </div>
                        </div>
                    </div>
                </HeroCard>

                <HeroCard>
                    <div>
                        <h2 className="text-[21px] font-semibold text-[#000000] mb-[30px] text-center md:text-start capitalize">
                            Select a subcategory</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[25px]">
                            {freeTimeCategoryData.map((category) => {
                                return (
                                    <CategoriesCard
                                        icon={category.icon}
                                        subcategory={category.subcategory}
                                        className="hover:scale-110" />
                                )
                            })}
                        </div>
                    </div>
                </HeroCard>

                <HeroCard>
                    <div>
                        <h2 className="text-[21px] font-semibold text-[#000000] mb-[30px] text-center md:text-start capitalize">
                            Are you looking for spare parts or car accessories?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[25px]">
                            {freeTimeSparePartsData.map((spareParts) => {
                                return (
                                    <CategoriesCard
                                        icon={spareParts.icon}
                                        subcategory={spareParts.subcategory}
                                        className="hover:scale-110" />
                                )
                            })}
                        </div>
                    </div>
                </HeroCard>

                <div className="md:mb-[100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-[18px] lg:gap-[26px] 
                      relative z-10 w-full max-w-[972px] mx-auto px-[54px] py-[65px] md:px-[40px] md:py-[25px] text-black rounded-[20px] bg-[#F9FAFB]">
                    <CarCard image={Truck1} heading="Bilan PJ-1A with single ..." price="$28,900" />
                    <CarCard image={Truck2} heading="Mc Hale FUSION 4 PLUS" price="$28,900" />
                    <CarCard image={Truck3} heading="Mc Hale FUSION 4 PRO" price="$28,900" />
                    <CarCard dealerText={"All Dealers Ads"} dealerTextClass="h-[206px] w-[206px]" icon={SeeMore} />
                </div>
            </section>

            <Footer />
        </>
    );
}

export default PartsEquimpCategory;