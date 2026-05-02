import { useState } from "react";
import {
    Stats,
    Plus,
    SeeMore,
    ProfileInfo,
    Car1, Car2, Car3, Car4, Car5, Car6
} from "@/assets";
import {
    sectionTabsMenu,
    dashboardRegistrationData,
    barChartContent,
} from '@/helper/data';
import {
    Tabs,
    Navbar,
    Button,
    Footer,
    CarCard,
    HeroCard,
    BarChart,
    DashboardCard,
    CustomInput,
} from "@/components";

const BusinessPostAd = () => {

    const [priceFilter, setPriceFilter] = useState<string>("");
    const [activeMainTab, setActiveMainTab] = useState<number>(1);
    const [loggedIn, setLoggedIn] = useState(
        localStorage.getItem("auth") === "true"
    );

    console.log(setLoggedIn);

    type MiniCardProps = {
        id?: number;
        icon?: string;
        heading?: string;
        subHeading?: string;
    };

    const renderMiniCards = (field: MiniCardProps, index: number) => {
        return (
            <div key={index} className={`bg-[#F9FAFB] border-[#D3DDE780] rounded-[20px] h-full ${field.id === 1 ? "mb-0" : ""}`}>
                <div className="p-[18px] text-center">
                    <h2 className="font-medium text-sm md:text-[16px] text-black leading-tight mb-[13px]">
                        {field.heading}</h2>
                    <p className="text-[#627084] text-sm md:text-[14px] font-normal capitalize text-[#627084] mb-[13px]">
                        {field.subHeading}
                    </p>
                    {field.icon && <div><img src={field.icon} alt="img" className={`mx-auto`} /></div>}
                </div>
            </div>
        );
    };

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
                tabs_list={sectionTabsMenu}
                tabItemClass="svgInactive"
                activeTabClass="bg-white"
                inActiveTabClass="hover:bg-white"
                activeTextClass="text-[#253A86]"
                inactiveTextClass="text-white group-hover:text-[#253A86]"
                activeTab={activeMainTab}
                variant="route"
                onClick={(id) => setActiveMainTab(id)} />

            <section className="w-full max-w-[972px] mx-auto px-[30px] md:px-4 lg:px-0 mt-[50px]">

                <div className="mb-[60px] md:mb-[30px]">
                    <HeroCard parentClass="!rounded-[20px] !py-[20px] !px-[16px] !mb-0 flex flex-col lg:flex-row items-center justify-center gap-6 lg:justify-between">
                        <h2 className="capitalize font-bold text-md md:text-2xl lg:text-[24px] text-black leading-tight pr-4">
                            Quick Serach for an ad by internal ID tag:</h2>

                        <div className="flex flex-col md:flex-row gap-4 flex-1 w-full">
                            <CustomInput
                                type="text"
                                name="price_filter"
                                placeholder="Enter your Internal ID"
                                value={priceFilter}
                                onChange={(val) => { setPriceFilter(val as string) }}
                                className="!text-[12px] w-full border-[0.64px] h-[41px] p-[14px]"
                            />
                            <Button type="button" text="Show ad"
                                icon={<i className="fa fa-search text-white text-lg"></i>}
                                className="w-full hover:scale-110 
                        flex justify-center !bg-[#B1222C] border-[#B1222C] font-semibold text-xs 
                        lg:text-[18px] !text-white h-[41px]" />
                        </div>
                    </HeroCard>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-[25px] mb-[30px]">
                    <HeroCard parentClass="!py-[20px] !px-[16px] !mb-0 !rounded-[20px]">
                        <h2 className="font-bold text-md md:text-2xl lg:text-[25px] text-black leading-[28px] mb-[30px]">
                            Your latest published ads</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-[18px] lg:gap-[26px] 
        relative z-10 w-full max-w-[972px] mx-auto px-[20px] py-[65px] md:px-[20px] md:py-[25px] text-black rounded-[20px] bg-[#F9FAFB]">
                            <CarCard className="!h-[180px] !w-[180px]" imageSizeClass="h-[125px] !w-[150px]" image={Car1} heading="BMW 320d xDrive" price="$28,900" />
                            <CarCard className="!h-[180px] !w-[180px]" imageSizeClass="h-[125px] !w-[150px]" image={Car2} heading="Mercedes-Benz C 200" price="$28,900" />
                            <CarCard className="!h-[180px] !w-[180px]" imageSizeClass="h-[125px] !w-[150px]" image={Car3} heading="Audi A4 Avant" price="$28,900" />
                            <CarCard className="!h-[180px] !w-[180px]" imageSizeClass="h-[125px] !w-[150px]" image={Car4} heading="Audi A4 Avant" price="$28,900" />
                            <CarCard className="!h-[180px] !w-[180px]" imageSizeClass="h-[125px] !w-[150px]" image={Car5} heading="Audi A4 Avant" price="$28,900" />
                        </div>

                        <div className="px-[12px] !py-[10px] text-sm font-bold 
                    capitalize text-black text-end bg-[#E9E9E9] shadow-[0_1px_2px_0_rgba(0,0,0,.5)]">Number of remaining summit jumps this month : 57</div>
                    </HeroCard>
                </div>

                <div className="mb-[60px] md:mb-[30px]">
                    <HeroCard parentClass="!rounded-[20px] !py-[20px] !px-[16px] !mb-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4]">
                        <h2 className="capitalize font-bold text-md md:text-2xl lg:text-[24px] text-black leading-tight pr-4">
                            Notice to the merchant</h2>
                    </HeroCard>
                </div>
                <div className="flex flex-col lg:flex-row items-start gap-[25px] mb-[30px]">
                    <HeroCard parentClass="!py-[20px] !px-[16px] !mb-0 !rounded-[20px]">
                        <h2 className="font-bold text-md md:text-2xl lg:text-[25px] text-black leading-[28px] mb-[30px]">
                            Subscription: Additional Options</h2>
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-[18px] h-full lg:h-[300px]">
                            <div>
                                {renderMiniCards(dashboardRegistrationData[0], 0)}
                            </div>

                            {/* RIGHT GRID */}
                            <div className="right-grid grid lg:grid-cols-3 md:grid-rows-2 gap-x-[20px] gap-y-[18px]">
                                {dashboardRegistrationData.slice(1).map((card, index) => (
                                    <div className="h-full" key={index}>
                                        {renderMiniCards(card, index)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </HeroCard>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default BusinessPostAd;