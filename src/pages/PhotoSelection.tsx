import { useState, useEffect } from 'react';
import { Navbar, HeroCard, Button, Tabs, Footer, CarCard } from "@/components";
import { sectionTabsMenu, photoSelectionData, photoSelectionCardDataContent } from '@/helper/data';

const PhotoSelection = () => {
    const [activeMainTab, setActiveMainTab] = useState<number>(3);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    // const [activeTab, setActiveTab] = useState(-1);
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
                tabs_list={sectionTabsMenu}
                tabItemClass="svgInactive"
                activeTabClass="bg-white"
                inActiveTabClass="hover:bg-white"
                activeTextClass="text-[#253A86]"
                inactiveTextClass="text-white group-hover:text-[#253A86]"
                variant="route"
                activeTab={activeMainTab}
                onClick={(id) => setActiveMainTab(id)} />

            <section className="md:px-4 lg:px-0">
                <HeroCard>
                    <div>
                        <h2 className="text-center text-2xl font-semibold text-[#000000] mb-[30px]">1. Click on the SELECT photos to post button </h2>
                        <div className="relative">
                            <Button type="button" text="Select a Photo to post" className="mx-auto w-full lg:w-[385px] flex justify-center mt-[25px] !bg-[#B1222C] border-[#B1222C] font-semibold text-xs lg:text-[18px] !text-white h-[41px] hover:scale-110" />
                        </div>
                    </div>
                </HeroCard>

                <HeroCard>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-[15px] !md:gap-[25px]'>
                        {photoSelectionData.map((card, index) => {
                            return (
                                <CarCard key={index} className='h-[250px] gap-[18px] py-[22px] px-[20px]'
                                    imageSizeClass=''
                                    image={card.image} heading={card.heading} footerbutton={card.footerbutton} />
                            )
                        })}                        
                    </div>
                    <Button type="button" text="Finish editing" className="mt-[50px] w-full flex justify-center !bg-[#B1222C] border-[#B1222C] font-semibold text-xs lg:text-[16px] !text-white h-[35px] hover:scale-110" />
                </HeroCard>

                <HeroCard parentClass="py-[25px] px-[20px] md:px-[50px]">
                    {photoSelectionCardDataContent.map((QA, index) => {
                        return (
                            <div key={index} className="mb-[50px]">
                                <h2 className="text-2xl lg:text-[35px] font-medium text-[#000000] mb-[30px] capitalize">{QA.heading} </h2>
                                <ul className="list-disc">
                                    {QA.list.map((Qa_list, Qindex) => {
                                        return (
                                            <li key={Qindex} className="font-roboto font-normal text-black text-sm lg:text-[18px] leading-[32px]">
                                                {Qa_list}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </HeroCard>
            </section>

            <Footer />
        </div>
    );
}

export default PhotoSelection;