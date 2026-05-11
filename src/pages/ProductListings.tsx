import { useState, useEffect } from "react";
import {
    Plus,
    Caret,
} from "@/assets";
import {
    adsListingData,
    searchListingData,
    merchantListingData,
    userDashboardTabsMenu,
    productListingDetails,
} from '@/helper/data';
import {
    Tabs,
    Navbar,
    Button,
    Footer,
    HeroCard,
    CustomInput,
    CustomLabel,
    ListingCard,
    DashboardCard,
} from "@/components";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

const ProductListing = () => {

    const [searchFilter, setSearchFilter] = useState<string>("");
    const [priceFilter, setPriceFilter] = useState<string>("");
    const [activeMainTab, setActiveMainTab] = useState<number>(2);
    const loggedIn = useSelector(
        (state: RootState) => state.auth.loggedIn
    );

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

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
                tabContainerClass="w-full max-w-[972px] mx-auto px-[30px] md:px-4 lg:px-0 grid grid-cols-8 gap-0"
                tabs_list={userDashboardTabsMenu}
                tabItemClass="svgInactive"
                activeTabClass="bg-white"
                inActiveTabClass="hover:bg-white"
                activeTextClass="text-[#253A86]"
                inactiveTextClass="text-white group-hover:text-[#253A86]"
                activeTab={activeMainTab}
                variant="route"
                onClick={(id) => setActiveMainTab(id)} />

            <section className="w-full max-w-[972px] mx-auto px-8 md:px-4 lg:px-0">
                <HeroCard parentClass="flex flex-col md:flex-row justify-between items-center gap-4 !m-0 !rounded-t-none !rounded-b-[20px] !py-[18px] !px-[30px] sticky top-0 z-20 shadow-[0_1px_2px_0_rgba(0,0,0,.5)]">
                    <h2 className="font-semibold text-base md:text-2xl text-black leading-tight">Displaying ads: Passenger Vehicles</h2>
                    <Button pre={true} type="button" text="Post a new ad"
                        icon={<img src={Plus} alt="+" />}
                        className="w-full md:w-max hover:scale-110 
                        !bg-[#B1222C] border-[#B1222C] font-semibold 
                        text-sm text-white h-[34px]" />
                </HeroCard>

                <div className="flex flex-col lg:flex-row gap-[15px] my-[30px] bg-white px-[15px] py-[15px] rounded-[20px]">
                     {/* { LEFT SIDE } */}
                    <div className="basis-full md:basis-[230px]">
                        {merchantListingData.map((merchant) => (
                            <DashboardCard key={merchant.id}
                                parentCardClass="bg-[#E9ECEF] text-center"
                                className="!h-full !justify-center !px-0"
                                cardHeaderText={`${merchant.label}:`}
                                caretColorClass="!border-t-[#253A86]"
                                headerClass="bg-[#253A86] !text-base !text-white !py-[10px] !rounded-t-[20px]"
                            >
                                <div className="px-4.5 py-[10px] bg-[#E9ECEF]">
                                    <div className="bg-white p-4 border border-[#d3dde7] py-[16px] text-center rounded-lg">
                                        <img src={merchant.image} alt="trade" className="mx-auto w-[150px] h-[50px]" />
                                    </div>

                                    <div className="capitalize border-t border-t-[#d3dde7] pt-[12px] mt-[10px] -mx-[20px] text-center leading-tight text-black">
                                        {merchant.list.map((item, index) => (
                                            <p key={index} className="font-semibold text-sm">{item.value}</p>
                                        ))}
                                    </div>

                                    <div className="mb-[8px] pl-[10px] pt-4 flex items-center justify-center lg:justify-start cursor-pointer hover:opacity-80">
                                        <span className="text-black text-sm leading-tight font-normal pt-4">
                                            <i className="fa fa-globe pr-3" aria-hidden="true"></i>
                                            {merchant.link}</span>
                                    </div>
                                </div>

                                <div className="relative px-4.5 py-[10px] text-sm lg:text-base font-medium 
                                        bg-[#253A86] text-white">
                                    <h4>{merchant.card_subHeader}</h4>
                                    <Caret caretColor="!border-t-[#253A86]" />
                                </div>

                                <div className="px-4.5 py-[10px] bg-[#E9ECEF] !rounded-b-[20px]">
                                    <h2 className="text-start font-bold text-sm lg:text-base text-black leading-[27px] mb-1">{merchant.card_subHeaderText}</h2>
                                    <ul className="list-disc list-inside text-start">
                                        {merchant.inner_list.map((item, index) => (
                                            <li key={index} className="font-roboto font-normal text-black text-sm leading-[23px] flex justify-between">
                                                {item.label} <span>{item.value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </DashboardCard>
                        ))}

                        {searchListingData.map((adsLi) => (
                            <DashboardCard
                                parentCardClass="bg-[#E9ECEF] text-center mt-[30px]"
                                className="!h-full !justify-center !px-0"
                                cardHeaderText={`${adsLi.label}:`}
                                caretColorClass="!border-t-[#253A86]"
                                headerClass="bg-[#253A86] !text-base !text-white !px-[10px] !py-[10px] !normal-case !rounded-t-[20px]"
                            >
                                <div className="relative px-[20px] py-[10px] text-sm lg:text-base font-medium 
                                        capitalize bg-[#E9ECEF] !rounded-b-[20px] text-white">

                                    <CustomInput
                                        type="text"
                                        name="price_filter"
                                        placeholder="Enter your internal ID or VIN"
                                        value={searchFilter}
                                        onChange={(val) => { setSearchFilter(val as string) }}
                                        className="!text-[12px] w-full border-[0.64px] !h-[34px] p-[14px]"
                                    />

                                    <Button post={true} type="button" text={adsLi.buttonLabel}
                                        icon={<i className="fa fa-search"></i>}
                                        className="w-full hover:scale-110 
                                        !bg-[#B1222C] border-[#B1222C] font-semibold 
                                        text-sm text-white h-[34px] mt-3" />

                                </div>
                            </DashboardCard>
                        ))}  

                        {adsListingData.map((adsLi) => (
                            <DashboardCard
                                parentCardClass="bg-[#E9ECEF] text-center mt-[30px]"
                                className="!h-full !justify-center !px-0"
                                cardHeaderText={adsLi.label}
                                caretColorClass="!border-t-[#253A86]"
                                headerClass="bg-[#253A86] !text-base !text-white !py-[10px] !rounded-t-[20px]"
                            >
                                <div className="px-[20px] py-[10px] bg-[#E9ECEF]">
                                    <div className="capitalize text-start leading-tight text-black">
                                        <p className="font-semibold text-base">{adsLi.adsDesc}</p>
                                    </div>
                                </div>

                                <div className="relative px-[20px] py-[10px] text-sm lg:text-base font-medium 
                                        capitalize bg-[#253A86] text-white">
                                    <h4>{adsLi.card_subHeader}</h4>
                                    <Caret caretColor="!border-t-[#253A86]" />
                                </div>

                                <div className="py-[10px] bg-[#E9ECEF] !rounded-b-[20px]">
                                    {adsLi.specs.map((spec, index) => (
                                        <div key={index} className="border-b border-b-[#d3dde7] last:border-none py-[8px]">
                                            <h2 className="px-[20px] text-start font-bold text-sm lg:text-base text-black leading-[23px]">{spec.innerHeading}</h2>
                                            <ul className="px-[20px] list-disc list-inside text-start">
                                                {spec.innerListing.map((liItem) => (
                                                    <li className="font-roboto font-normal text-black text-sm leading-[23px] flex justify-between">
                                                        {liItem.label} <span className="ml-auto">{liItem.value}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </DashboardCard>
                        ))}            
                    </div>

                    {/* { RIGHT SIDE } */}
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