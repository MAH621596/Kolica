import { useState } from "react";
import {
    Car4,
    Car5,
    Car6,
    SeeMore,
} from "@/assets";
import {
    sectionTabsMenu,
} from '@/helper/data';
import {
    Tabs,
    Navbar,
    Footer,
    CarCard,
} from "@/components";

const MyAds = () => {

    const [activeMainTab, setActiveMainTab] = useState<number>(1);
    const [loggedIn, setLoggedIn] = useState(
        localStorage.getItem("auth") === "true"
    );

    console.log(setLoggedIn);

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
                <div className="md:mb-[100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-[18px] lg:gap-[26px] 
                     relative z-10 w-full max-w-[972px] mx-auto px-[54px] py-[65px] md:px-[40px] md:py-[25px] text-black rounded-[20px] bg-[#F9FAFB]">
                    <CarCard image={Car4} heading="Forthing U-Tour 1.5T ADA..." price="$28,900" />
                    <CarCard image={Car5} heading="Forthing U-Tour MY2025..." price="$28,900" />
                    <CarCard image={Car6} heading="Hongqi H9 2.0T MHEV..." price="$28,900" />
                    <CarCard dealerText={"All Dealers Ads"} dealerTextClass="h-[206px] w-[206px]" icon={SeeMore} />
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default MyAds;