import { useState, useEffect } from "react";
import {
    Plus,
    Medal,
    GlobTrade,
    Car, Car1, Car2, Car3,
    Logo,
} from "@/assets";
import {
    basicData,
    municipalData_1,
    municipalData_2,
    municipalData_3,
    municipalData_4,
    sellerCardData,
    workingHoursData,
    userDashboardTabsMenu,
    additionalOptionsData,
    productListingDetails,
} from '@/helper/data';
import {
    Tabs,
    Navbar,
    Button,
    Footer,
    HeroCard,
    CarCard,
    CustomInput,
    CustomLabel,
    ListingCard,
    DashboardCard,
    LightBoxGallery,
} from "@/components";
import { Link } from "react-router-dom";

const ProductListing = () => {

    const [priceFilter, setPriceFilter] = useState<string>("");
    const [activeMainTab, setActiveMainTab] = useState<number>(1);
    const [loggedIn, setLoggedIn] = useState(
        localStorage.getItem("auth") === "true"
    );

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

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
        <div
            style={{
                minHeight: "100vh",
                backgroundImage: "url('/img/bg-image.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#000000",
                backgroundPosition: "-285.5px 100px",
                backgroundSize: "1920px auto"
            }}
        >
            <Navbar logStatus={loggedIn} />

            <Tabs
                className="w-full bg-[url('/img/TabsBG.png')] text-white h-[42px] p-0 hidden md:block"
                tabContainerClass="w-full max-w-[972px] mx-auto px-[30px] md:px-4 lg:px-0 grid grid-cols-7 gap-0"
                tabs_list={userDashboardTabsMenu}
                tabItemClass="svgInactive"
                activeTabClass="bg-white"
                inActiveTabClass="hover:bg-white"
                activeTextClass="text-[#253A86]"
                inactiveTextClass="text-white group-hover:text-[#253A86]"
                activeTab={activeMainTab}
                variant="route"
                onClick={(id) => setActiveMainTab(id)} />

            <section className="w-full max-w-[972px] mx-auto px-[30px] md:px-4 lg:px-0">
                <HeroCard parentClass="flex flex-col sm:flex-row justify-between items-center gap-4 !m-0 !rounded-t-none !rounded-b-[20px] !py-[18px] !px-[30px] sticky top-0 z-20 shadow-[0_1px_2px_0_rgba(0,0,0,.5)]">
                    <h2 className="font-semibold text-md md:text-2xl lg:text-[24px] text-black leading-tight">Displaying ads: Passenger Vehicle</h2>
                    <Button type="button" text="Post a new ad"
                        icon={<img src={Plus} alt="+" />}
                        className="w-full md:w-max hover:scale-110 
                        flex justify-center !bg-[#B1222C] border-[#B1222C] font-semibold text-xs 
                        lg:text-[18px] !text-white h-[41px]" />
                </HeroCard>

                <div className="flex flex-col lg:flex-row gap-[15px] my-[30px] bg-white px-[15px] py-[15px] rounded-[20px]">
                    <div className="basis-full md:basis-[230px]">

                        <DashboardCard
                            parentCardClass="bg-[#E9ECEF] text-center"
                            className="!h-full !justify-center !px-0"
                            cardHeaderText="Merchant"
                            headerClass="bg-[#253A86] !text-base !text-white !py-[10px] !rounded-t-[20px]"
                        >
                            <div className="px-[20px] py-[10px] bg-[#E9ECEF]">
                                <div className="bg-white p-4 border border-[#d3dde7] py-[16px] text-center">
                                    <img src={GlobTrade} alt="trade" className="mx-auto w-[150px] h-[50px]" />
                                </div>

                                <div className="capitalize border-t border-t-[#d3dde7] pt-[12px] mt-[10px] text-center leading-tight text-black">
                                    <p className="font-semibold text-sm">EURO GLOBTRADE Voklo</p>
                                    <p className="font-semibold text-sm">Voklo BTRADE 49 Voklo </p>
                                    <p className="font-semibold text-sm">Šenčur Voklo</p>
                                </div>

                                <div className="mb-[8px] pl-[10px] flex items-center justify-center md:justify-start cursor-pointer hover:opacity-80">
                                    <span className="text-black text-sm leading-tight font-normal pt-4">
                                        <i className="fa fa-globe pr-3" aria-hidden="true"></i>
                                        view website</span>
                                </div>
                            </div>

                            <div className="px-[20px] py-[10px] text-sm lg:text-base font-medium 
                                        capitalize bg-[#253A86] text-white">
                                <h4>The dealer's entire offer</h4>
                            </div>

                            <div className="px-[20px] py-[10px] bg-[#E9ECEF] !rounded-b-[20px]">
                                <h2 className="text-start font-bold text-sm lg:text-base text-black leading-[27px] mb-2">Categories </h2>
                                <ul className="list-disc list-inside text-start">
                                    <li className="font-roboto font-normal text-black text-sm leading-[27px] flex justify-between">
                                        Car <span>18</span>
                                    </li>
                                    <li className="font-roboto font-normal text-black text-sm leading-[27px] flex justify-between">
                                        Mooped, Motorcycle<span>1</span>
                                    </li>
                                    <li className="font-roboto font-normal text-black text-sm leading-[27px] flex justify-between">
                                        Rim<span>1</span>
                                    </li>
                                </ul>
                            </div>
                        </DashboardCard>

                        <DashboardCard
                            parentCardClass="bg-[#E9ECEF] text-center mt-[30px]"
                            className="!h-full !justify-center !px-0"
                            cardHeaderText="Showing 18 ads"
                            headerClass="bg-[#253A86] !text-base !text-white !py-[10px] !rounded-t-[20px]"
                        >
                            <div className="px-[20px] py-[10px] bg-[#E9ECEF]">
                                <div className="capitalize text-start leading-tight text-black">
                                    <p className="font-semibold text-base">AUTO Section</p>
                                </div>
                            </div>

                            <div className="px-[20px] py-[10px] text-sm lg:text-base font-medium 
                                        capitalize bg-[#253A86] text-white">
                                <h4>Limit Display</h4>
                            </div>

                            <div className="px-[20px] py-[10px] bg-[#E9ECEF] !rounded-b-[20px]">
                                <h2 className="text-start font-bold text-sm lg:text-base text-black leading-[27px] mb-2">Offer type</h2>
                                <ul className="list-disc list-inside text-start">
                                    <li className="font-roboto font-normal text-black text-sm leading-[27px] flex justify-between">
                                        sale <span className="ml-auto">18</span>
                                    </li>
                                </ul>
                                <h2 className="text-start font-bold text-sm lg:text-base text-black leading-[27px] mb-2">Brand</h2>
                                <ul className="list-disc list-inside text-start">
                                    <li className="font-roboto font-normal text-black text-sm leading-[27px] flex justify-between">
                                        BMW <span className="ml-auto">18</span>
                                    </li>
                                    <li className="font-roboto font-normal text-black text-sm leading-[27px] flex justify-between">
                                        Citroen <span className="ml-auto">18</span>
                                    </li>
                                    <li className="font-roboto font-normal text-black text-sm leading-[27px] flex justify-between">
                                        Flat <span className="ml-auto">18</span>
                                    </li>
                                    <li className="font-roboto font-normal text-black text-sm leading-[27px] flex justify-between">
                                        Hyndai <span className="ml-auto">18</span>
                                    </li>
                                    <li className="font-roboto font-normal text-black text-sm leading-[27px] flex justify-between">
                                        Suzuki <span className="ml-auto">18</span>
                                    </li>
                                    <li className="font-roboto font-normal text-black text-sm leading-[27px] flex justify-between">
                                        Damage <span className="ml-auto">18</span>
                                    </li>
                                    <li className="font-roboto font-normal text-black text-sm leading-[27px] flex justify-between">
                                        Mercedes <span className="ml-auto">18</span>
                                    </li>
                                </ul>
                            </div>
                        </DashboardCard>                
                    </div>

                    <div className="flex-1">
                        <HeroCard parentClass="!bg-[#E9ECEF] flex justify-between items-center !mb-[20px] !m-0 !rounded-b-none !rounded-t-[20px] !py-[12px] !px-[20px]">
                            <h2 className="font-normal text-sm lg:base text-black leading-tight">Results 1-18 of 18 total</h2>
                            <div className="flex justify-center items-center gap-4">
                                <CustomLabel
                                    className="!text-[12px] block"
                                    text="sort:"
                                />

                                <CustomInput
                                    type="text"
                                    name="price_filter"
                                    placeholder="by price - most expensive"
                                    value={priceFilter}
                                    onChange={(val) => { setPriceFilter(val as string) }}
                                    className="!text-[12px] w-full border-[0.64px] !h-[20px] p-[14px]"
                                />
                            </div>
                        </HeroCard>

                        <HeroCard parentClass="!p-0 !m-0 !rounded-none">
                            <ListingCard products_list={productListingDetails} className="last:border-none" />
                        </HeroCard>                                   
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default ProductListing;