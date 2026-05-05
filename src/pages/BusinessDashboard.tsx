import { useState } from "react";
import {
    Stats,
    Plus,
    GlobTrade,
    ProfileInfo,
    Car1, Car2, Car3, Car4, Car5,
} from "@/assets";
import {
    barChartContent,
    reviewMyAdsData,
    userDashboardData,
    userDashboardTabsMenu,
} from '@/helper/data';
import {
    Tabs,
    Navbar,
    Button,
    Footer,
    CarCard,
    HeroCard,
    BarChart,
    CustomInput,
    DashboardCard,
} from "@/components";

const BusinessDashboard = () => {

    const [priceFilter, setPriceFilter] = useState<string>("");
    const [activeMainTab, setActiveMainTab] = useState<number>(1);
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
                <HeroCard parentClass="flex flex-col md:flex-row justify-between items-center gap-4 !m-0 
                            !rounded-t-none !rounded-b-[20px] !py-[20px] !px-[16px] sticky top-0 z-20 shadow-[0_1px_2px_0_rgba(0,0,0,.5)]">
                    {userDashboardData.map((item) => (
                        <>
                            <h2 className="font-semibold text-base md:text-2xl text-black leading-tight">{item.website}</h2>
                            <h2 className="font-semibold text-base md:text-2xl text-black leading-tight">Merchant ID: {item.merchantID}</h2>
                        </>
                    ))}
                </HeroCard>

                <div className="flex flex-col md:flex-row gap-[25px] my-[30px] md:max-h-[180px]">
                    <DashboardCard
                        parentCardClass="min-h-[150px] flex-1 hover:scale-110"
                        className="!py-[20px] !px-[16px] !justify-center h-[80%]"
                        cardBodyIcon={GlobTrade}
                        imageClass="w-full flex-1"
                        cardFooterText="Edit Logo"
                        footerClass="!px-[16px]"
                    />

                    <DashboardCard
                        parentCardClass="min-h-[150px] flex-1 hover:scale-110"
                        className="!py-[20px] !px-[16px] h-[80%] !justify-between"
                        cardBodyIcon={ProfileInfo}
                        cardBodyHeading="20"
                        cardHeadingClass="!font-bold !text-4xl mb-2 text-end"
                        cardBodySubHeading="Ads in post"
                        cardFooterText="View all posts"
                        footerClass="!px-[16px]"
                    />

                     <DashboardCard
                        parentCardClass="min-h-[150px] flex-1 hover:scale-110"
                        className="!py-[20px] !px-[16px] h-[80%] !justify-between"
                        cardBodyIcon={Stats}
                        cardBodyHeading="192"
                        cardHeadingClass="!font-bold !text-4xl mb-2 text-end"
                        cardBodySubHeading="Views today"
                        cardFooterText="Statistics overview"
                        footerClass="!px-[16px]"
                    />                    
                </div>

                <div className="flex flex-col md:flex-row gap-[25px] mb-[30px]">
                    <HeroCard parentClass="!py-[20px] !px-[16px] !mb-0 !rounded-[20px] basis-full md:basis-[306px]">
                        <div>
                            <h2 className="font-medium text-md md:text-2xl lg:text-[30px] text-black leading-tight mb-[30px]">Review My Ads</h2>
                            <div className="relative">
                                <ul className="list-none text-start">
                                    {reviewMyAdsData.map((liItem) => (
                                        <li className="py-2.5 font-roboto font-normal text-black text-sm leading-[23px] 
                                        flex justify-between items-center gap-4
                                        border-b border-b-[#d3dde7]">
                                            <div>{liItem.icon}</div>
                                            <div className="flex-1">{liItem.label}</div>
                                            <div className="font-semibold">{liItem.count}</div>
                                        </li>
                                    ))}
                                </ul>

                                <p className="py-2.5 text-sm font-medium capitalize text-[#627084] my-3">
                                    our sections where you have ads in the publication are deployed. Sectors where your ads are not published are not displayed in the column, Sections where you ahve unfinished ads may also be deployed in the last.
                                </p>

                                <Button pre={true} type="button" text="Post a new ad"
                                    icon={<img src={Plus} alt="+" />}
                                    className="w-full hover:scale-110 
                  flex justify-center mt-[25px] !bg-[#B1222C] border-[#B1222C] font-semibold text-xs 
                  lg:text-[18px] !text-white h-[41px]" />
                            </div>
                        </div>
                    </HeroCard>

                    <HeroCard parentClass="!py-[20px] !px-[16px] !mb-0 !rounded-[20px] flex-1">
                        <div>
                            <h2 className="font-medium text-md md:text-2xl lg:text-[30px] text-black leading-tight mb-[0px]">Review statistics for the last 7 days</h2>
                            <div className="relative">
                                {/* <BarChart /> */}
                                <BarChart
                                    labels={["22. April", "23. April", "24. April", "25. April", "26. April", "27. April", "28. April"]}
                                    legendPosition="top"
                                    tooltipBg="#6799cc" 
                                    categoryPercentage={0.4}                                   
                                    borderRadius={0}
                                    datasets={[
                                        { label: "Income", data: [780, 790, 840, 750, 850, 690, 190], color: "#6799cc" },
                                    ]}
                                />

                                <div className="mt-[50px]">
                                    <h3 className="font-normal text-sm md:text-md lg:text-[22px] text-black leading-[27px]">Legend:</h3>

                                    <ul className="list-disc list-outside my-6 lg:my-[20px] pl-[15px]">
                                        {barChartContent.map((regPoint) => {
                                            return (
                                                <li key={regPoint.id} className="font-medium text-sm lg:text-[16px] text-[#627084] leading-[20px] mb-[10px]">
                                                    {regPoint.point}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </HeroCard>
                </div>

                <div className="mb-[30px]">
                    <HeroCard parentClass="!rounded-[20px] !py-[20px] !px-[16px] !mb-0 flex flex-col md:flex-row items-center justify-center gap-4 md:justify-between">
                        <h2 className="w-full md:w-1/2 normal-case font-semibold text-base md:text-2xl text-black leading-tight">
                            Quick search for an ad by internal ID tag:</h2>

                        <div className="flex flex-col md:flex-row gap-4 flex-1 w-full md:w-1/2">
                            <CustomInput
                                type="text"
                                name="price_filter"
                                placeholder="Enter your Internal ID"
                                value={priceFilter}
                                onChange={(val) => { setPriceFilter(val as string) }}
                                className="!text-[12px] w-full border-[0.64px] h-[34px] p-[14px]"
                            />
                            <Button type="button" text="Show ad" post={true}
                                icon={<i className="fa fa-search text-white text-lg"></i>}
                                className="w-full hover:scale-110 
                                flex justify-center !bg-[#B1222C] border-[#B1222C] font-semibold 
                                text-sm !text-white h-[34px]" />
                        </div>
                    </HeroCard>
                </div>

                <div className="mb-[30px]">
                    <HeroCard parentClass="!py-[20px] !px-[16px] !mb-0 !rounded-[20px] overflow-hidden">
                        <h2 className="font-semibold text-base md:text-2xl text-black leading-[28px] mb-4 text-center sm:text-start">
                            Your latest published ads</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-[18px] lg:gap-[20px] 
                                relative z-10 w-full">
                            <CarCard className="!h-[174px] !w-[174px]" imageSizeClass="h-[125px] !w-[150px]" image={Car1} heading="BMW 320d xDrive" price="$28,900" />
                            <CarCard className="!h-[174px] !w-[174px]" imageSizeClass="h-[125px] !w-[150px]" image={Car2} heading="Mercedes-Benz C 200" price="$28,900" />
                            <CarCard className="!h-[174px] !w-[174px]" imageSizeClass="h-[125px] !w-[150px]" image={Car3} heading="Audi A4 Avant" price="$28,900" />
                            <CarCard className="!h-[174px] !w-[174px]" imageSizeClass="h-[125px] !w-[150px]" image={Car4} heading="Audi A4 Avant" price="$28,900" />
                            <CarCard className="!h-[174px] !w-[174px]" imageSizeClass="h-[125px] !w-[150px]" image={Car5} heading="Audi A4 Avant" price="$28,900" />
                        </div>

                        <hr className="border-[#C8C8C8] w-screen my-4 -mx-[16px]" />

                        <div className="px-[12px] !py-[10px] text-sm font-bold mt-4
                            capitalize text-black text-center sm:text-end bg-[#E9E9E9]">
                            Number of remaining summit jumps this month : 57
                        </div>
                    </HeroCard>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default BusinessDashboard;