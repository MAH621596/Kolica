import { useState } from "react";
import {
    userDashboardTabsMenu,
} from '@/helper/data';
import {
    Tabs,
    Navbar,
    Footer,
    HeroCard,
    DashboardCard,
} from "@/components";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

const UserStatistics = () => {
    const [activeMainTab, setActiveMainTab] = useState<number>(5);

    const loggedIn = useSelector(
        (state: RootState) => state.auth.loggedIn
    );

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
                    <h2 className="font-semibold text-base md:text-2xl text-black leading-tight">Overview of statistics for all posts</h2>
                </HeroCard>

                <div className="flex flex-col lg:flex-row gap-4 my-[30px] lg:max-h-[180px]">
                    <DashboardCard
                        parentCardClass="!rounded-md min-h-[130px] flex-1 hover:scale-110"
                        className="!py-[20px] !px-[16px] h-[80%] !justify-between"
                        cardBodyIcon={<i className="fa fa-calendar-o text-[#253A86] !text-5xl"></i>}
                        cardBodyHeading="7"
                        cardHeadingClass="!font-bold !text-5xl mb-2 text-end"
                        cardBodySubHeading="Last 7 days"
                        cardSubHeadingClass="!text-sm"
                        cardFooterText="View Statistics"
                        footerClass="!px-[16px] !text-sm"
                    />

                    <DashboardCard
                        parentCardClass="!rounded-md min-h-[130px] flex-1 hover:scale-110"
                        className="!py-[20px] !px-[16px] h-[80%] !justify-between"
                        cardBodyIcon={<i className="fa fa-calendar-o text-[#253A86] !text-5xl"></i>}
                        cardBodyHeading="14"
                        cardHeadingClass="!font-bold !text-5xl mb-2 text-end"
                        cardBodySubHeading="Last 14 days"
                        cardSubHeadingClass="!text-sm"
                        cardFooterText="View Statistics"
                        footerClass="!px-[16px] !text-sm"
                    />

                    <DashboardCard
                        parentCardClass="!rounded-md min-h-[130px] flex-1 hover:scale-110"
                        className="!py-[20px] !px-[16px] h-[80%] !justify-between"
                        cardBodyIcon={<i className="fa fa-calendar-o text-[#253A86] !text-5xl"></i>}
                        cardBodyHeading="30"
                        cardHeadingClass="!font-bold !text-5xl mb-2 text-end"
                        cardBodySubHeading="Last Month"
                        cardSubHeadingClass="!text-sm"
                        cardFooterText="View Statistics"
                        footerClass="!px-[16px] !text-sm"
                    />

                    <DashboardCard
                        parentCardClass="!rounded-md min-h-[130px] flex-1 hover:scale-110"
                        className="!py-[20px] !px-[16px] h-[80%] !justify-between"
                        cardBodyIcon={<i className="fa fa-calendar text-[#253A86] !text-5xl"></i>}
                        cardBodyHeading="90"
                        cardHeadingClass="!font-bold !text-5xl mb-2 text-end"
                        cardBodySubHeading="Last 3 Months"
                        cardSubHeadingClass="!text-sm"
                        cardFooterText="View Statistics"
                        footerClass="!px-[16px] !text-sm"
                    />
                </div>

                <div className="bg-[#E9ECEF] rounded-b-[20px] rounded-[20px]">
                    <div className="px-4.5 py-[10px] text-base lg:text-2xl font-semibold bg-red-700 text-yellow-300 rounded-t-[20px]">
                        <h4>You do not have ADDITIONAL OPTIONS statistics activated.</h4>
                    </div>

                    <p className="font-normal text-sm px-4.5 py-[10px] ">
                        If you would like to use this functionality, in the future, we suggest that you contact your administration.
                    </p>

                    <p className="font-normal text-sm px-4.5 py-[10px] ">
                        Contact Phone : 056713700
                    </p>

                    <p className="font-normal text-sm px-4.5 py-[10px] ">
                        Email : kolica@helpdesk.com
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default UserStatistics;