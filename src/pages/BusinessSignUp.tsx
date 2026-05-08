import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Navbar, HeroCard, Button, Tabs, Footer } from "@/components";
import { homePagetabsMenu, businessSignUpData } from '@/helper/data';

const BusinessSignUp = ({ setLoggedIn }: any) => {
    // const navigate = useNavigate();
    const [activeMainTab, setActiveMainTab] = useState<number>(0);

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
            <Navbar />

            <Tabs
                className="w-full bg-[url('/img/TabsBG.png')] text-white h-[42px] p-0 mb-[50px] hidden md:block"
                tabContainerClass="w-full max-w-[972px] mx-auto px-[30px] md:px-4 lg:px-0 grid grid-cols-7 gap-0"
                tabs_list={homePagetabsMenu}
                tabItemClass="svgInactive"
                activeTabClass="bg-white ASSSSS"
                inActiveTabClass="hover:bg-white"
                activeTextClass="text-[#253A86]"
                inactiveTextClass="text-white group-hover:text-[#253A86]"
                activeTab={activeMainTab}
                variant="route"
                onClick={(id) => setActiveMainTab(id)} />

            <section className="flex flex-col lg:flex-row items-stretch justify-center gap-6 w-full h-full max-w-[972px] mx-auto px-8 md:px-4 lg:px-0 my-[50px]">
                {businessSignUpData.map((signUpCard) => (
                    <HeroCard key={signUpCard.id} parentClass="!max-w-[400px] !p-0 !rounded-[20px]">
                        <div className="h-[102px] bg-white rounded-t-[20px]">
                            <div className="h-full flex flex-col items-center justify-center gap-0 cursor-pointer bg-[#F1F1F1] rounded-t-[20px]">
                                <h2 className="uppercase text-[1.2rem] md:text-[1.5rem] font-medium text-[#000000] leading-tight]">{signUpCard.package_name}</h2>
                                <h2 className="text-[#000000] leading-tight font-bold">
                                    <span className="text-base md:text-xl lg:text-4xl">€{signUpCard.package_price}</span>
                                    <span className="text-lg pl-2">{signUpCard.package_duration}</span></h2>
                            </div>
                        </div>

                        <div className={`p-[1.25rem] rounded-b-[20px] h-[calc(100%_-_102px)]`}>
                            <div className="h-[calc(100%_-_90px)]">
                                <ul className="list-disc list-outide px-5 my-6 lg:my-5">
                                    {signUpCard.list.map((regPoint) => {
                                        return (
                                            <li key={regPoint.id} className="font-normal text-sm sm:text-base text-[#626262] leading-[32px]">
                                                {regPoint.point}
                                            </li>
                                        )
                                    })}
                                </ul>
                                <h4 className="mb-[15px] font-normal text-sm sm:text-base text-[#626262] leading-[32px]">
                                    {signUpCard.package_details}</h4>
                            </div>

                            <Button pre={true} type="button" text="I want to register"
                                className="mt-[30px] w-full flex justify-center 
                                    !bg-[#B1222C] border-[#B1222C] 
                                    font-semibold text-xs lg:text-[18px] leading-[12px] !text-white h-[41px] 
                                    hover:scale-90" />
                        </div>
                    </HeroCard>
                ))}
            </section>

            <Footer />
        </div>
    );
};

export default BusinessSignUp;