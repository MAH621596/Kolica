import { useState } from "react";
import {
    Car1, Car2, Car3, Car4, Car5,
} from "@/assets";
import {
    sectionTabsMenu,
    dashboardRegistrationData,
} from '@/helper/data';
import {
    Tabs,
    Navbar,
    Button,
    Footer,
    CarCard,
    HeroCard,
    CustomInput,
} from "@/components";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

const BusinessPostAd = () => {

    const [priceFilter, setPriceFilter] = useState<string>("");
    const [activeMainTab, setActiveMainTab] = useState<number>(1);
    const loggedIn = useSelector(
        (state: RootState) => state.auth.loggedIn
    );

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

            <section className="w-full max-w-[972px] mx-auto px-8 md:px-4 lg:px-0 mt-[50px]">
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

                <div className="mb-[30px]">
                    <HeroCard parentClass="!rounded-[20px] !py-[20px] !px-[16px] !mb-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4]">
                        <h2 className="capitalize font-semibold text-base md:text-2xl text-black leading-tight pr-4">
                            Notice to the merchant</h2>
                    </HeroCard>
                </div>

                <div className="mb-[30px]">
                    <HeroCard parentClass="!py-[20px] !px-[16px] !mb-0 !rounded-[20px]">
                        <h2 className="font-semibold text-base md:text-2xl text-black leading-[28px] mb-[30px]">
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