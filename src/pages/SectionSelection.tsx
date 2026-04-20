import { sectionTabsMenu, sectionInnerTabsMenu, selectionDropdownData, checkboxList, InformationParagraph } from '@/helper/data';
import { Navbar, HeroCard, Button, CustomSelect, Tabs, Faq, CustomInput, CustomLabel, Footer } from "@/components";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SectionSelection = () => {
    const navigate = useNavigate();
    const [activeMainTab, setActiveMainTab] = useState<number>(3);
    const [activeTab, setActiveTab] = useState<number>(-1);
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
                activeTab={activeMainTab}
                variant="route"
                onClick={(id) => setActiveMainTab(id)} />

            <section className="md:px-4 lg:px-0">
                <HeroCard parentClass="!bg-[#F9FAFB] !py-[25px] !px-[30px]">
                    <div>
                        <Tabs
                            className="w-full text-whites h-[42px] p-0 mb-[50px]"
                            tabContainerClass="w-full max-w-[972px] mx-auto px-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[6px] lg:gap-[8px]"
                            tabs_list={sectionInnerTabsMenu}
                            tabItemClass="bg-white rounded-[6px]"
                            tabItemClassInner="text-[11px] font-semibold text-[#253A86]"
                            activeTabClass="!bg-[#B1222C]"
                            inActiveTabClass="hover:bg-[#B1222C]"
                            activeTextClass="text-white"
                            inactiveTextClass="text-[#253A86] group-hover:text-white"
                            activeTab={activeTab}
                            variant="state"
                            onClick={(id) => setActiveTab(id)}>
                            {activeTab !== -1 && (
                                <div className="bg-[#F9FAFB]">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                                        {selectionDropdownData.map((dropdown) => {
                                            return (
                                                <>
                                                    <div>
                                                        {/* Label (common) */}
                                                        <CustomLabel
                                                            className="block text-[15px] text-[#627084] mt-[40px] lg:mt-0 mb-[12px]"
                                                            text={dropdown.label}
                                                        />

                                                        {dropdown.dropDownCount > 1 ? (
                                                            <div className="flex items-center gap-[10px]">
                                                                {[...Array(dropdown.dropDownCount)].map((_, i) => (
                                                                    <CustomSelect
                                                                        key={`${dropdown.id}-${i}`}
                                                                        options={dropdown.options}
                                                                        divider={false}
                                                                        customArrows={<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M0.40625 0.40625L5.40625 5.40625L10.4062 0.40625" stroke="#94A3B3" stroke-width="0.8125" stroke-linecap="round" stroke-linejoin="round" />
                                                                        </svg>
                                                                        }
                                                                        className="w-full !bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                                        innerOptionsClass="!bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                                    />
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <CustomSelect
                                                                key={dropdown.id}
                                                                options={dropdown.options}
                                                                divider={false}
                                                                customArrows={<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0.40625 0.40625L5.40625 5.40625L10.4062 0.40625" stroke="#94A3B3" stroke-width="0.8125" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                                }
                                                                className="w-full !bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                                innerOptionsClass="!bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                            />
                                                        )}
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </div>
                                    <CustomLabel
                                        className=" mt-[24px] mb-[20px] block"
                                        text="Propellant:"
                                    />
                                    <div className='flex flex-wrap items-center justify-start gap-[20px] mb-[50px]'>
                                        {
                                            checkboxList.map((checkboxLi) => {
                                                return (
                                                    <>
                                                        <div className="flex gap-[12px] items-center justify-start">
                                                            <CustomInput
                                                                id={checkboxLi.label}
                                                                name={checkboxLi.label}
                                                                type="checkbox"
                                                                className="border-[0.64px] border-[#626262] py-[11px] px-[50px] leading-[20px] text-[10px] md:text-[12px] "
                                                                placeholder="Advanced search with additional filters"
                                                                value="selectric_car"
                                                            />
                                                            <CustomLabel
                                                                className="text-[18px] block"
                                                                text={checkboxLi.label}
                                                                htmlFor={checkboxLi.label}
                                                            />
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                    <Button text="Click To Continue" 
                                    onClick={() => navigate("/ad-content")}
                                    className="w-full lg:w-[385px] flex justify-center mt-[25px] !bg-[#B1222C] border-[#B1222C] font-semibold text-xs lg:text-[18px] !text-white h-[41px] cursor-pointer transition-all duration-200 hover:opacity-80" />

                                    <div className="mt-[50px]">
                                        <h2 className="mb-[30px] text-2xl lg:text-[25px] font-medium text-[#000000] mb-[30px] leading-[30px]">For your information:</h2>
                                        {InformationParagraph.map((paragraphic) => {
                                            return (
                                                <p key={paragraphic.id} className="font-roboto font-normal text-black text-sm lg:text-[18px] leading-[32px] mb-[25px]">
                                                    {paragraphic.paragraph}
                                                </p>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}
                        </Tabs>
                    </div>

                    {activeTab === -1 && (
                        <div className='h-[340px]'>
                            <h2 className="text-2xl lg:text-[35px] font-medium text-[#000000] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pt-[30px] sm:pt-0">Choose a Section</h2>
                        </div>
                    )}
                </HeroCard>

                <Faq />
            </section>

            <Footer />
        </div>
    );
}

export default SectionSelection;