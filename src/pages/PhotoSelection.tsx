import { sectionTabsMenu, photoSelectionData } from '@/helper/data';
import { Navbar, HeroCard, Button, Tabs, Faq, Footer, CarCard } from "@/components";
import { useState } from 'react';

const PhotoSelection = () => {
    const [activeMainTab, setActiveMainTab] = useState(3);
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
                activeTabClass="bg-white"
                inActiveTabClass="hover:bg-white"
                activeTextClass="text-[#253A86]"
                inactiveTextClass="text-white group-hover:text-[#253A86]"
                activeTab={activeMainTab}
                onClick={(id) => setActiveMainTab(id)} />

            <section className="md:px-4 lg:px-0">
                <HeroCard>
                    <div>
                        <h2 className="text-center text-2xl font-semibold text-[#000000] mb-[30px]">1. Click on the SELECT photos to post button </h2>
                        <div className="relative">
                            <Button text="Select a Photo to post" className="mx-auto w-full lg:w-[385px] flex justify-center mt-[25px] !bg-[#B1222C] border-[#B1222C] font-semibold text-xs lg:text-[18px] !text-white h-[41px] cursor-pointer transition-all duration-200 hover:opacity-80" />
                        </div>
                    </div>
                </HeroCard>

                <HeroCard>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-[15px] !md:gap-[25px]'>
                        {photoSelectionData.map((card) => {
                            return (
                                <CarCard className='h-[250px] gap-[18px] py-[22px] px-[20px]'
                                    imageSizeClass=''
                                    image={card.image} heading={card.heading} footerbutton={card.footerbutton} />
                            )
                        })}
                    </div>
                </HeroCard>

                <Faq />
            </section>

            <Footer />
        </div>
    );
}

export default PhotoSelection;