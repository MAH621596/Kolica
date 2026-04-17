import { sectionTabsMenu, adContentLeftPanelData, adContentRightPanel_1, singleDropdownData, checkboxList_2, checkboxList_3 } from '@/helper/data';
import { Navbar, HeroCard, CustomSelect, Tabs, CustomInput, CustomLabel, Footer } from "@/components";
import { useState } from 'react';

const AdContent = () => {
    const [activeMainTab, setActiveMainTab] = useState(3);
    const [fieldValue1, setFieldValue1] = useState("");
    const [fieldValue2, setFieldValue2] = useState("");
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
                <HeroCard parentClass="!bg-[#F9FAFB] !py-[25px] px-[20px] !md:px-[50px]">
                    <div className='flex flex-col lg:flex-row items-start gap-[50px]'>
                        <div className="w-full lg:w-[40%] bg-white rounded-[20px] px-[20px] py-[40px] text-center lg:text-left">
                            <h2 className="font-medium text-black text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-tight text-black mb-6 lg:mb-[30px]">Ad content:</h2>
                            {adContentLeftPanelData.map((data) => {
                                return (
                                    data.field ?
                                        <>
                                            <div>
                                                <h3 className="font-bold text-[14px] lg:text-[18px] leading-[27px] text-black mb-6 lg:mb-[20px]">{data.heading_}</h3>
                                                <CustomInput
                                                    name={data.heading_}
                                                    type="text"
                                                    className="h-[42px] mb-6 lg:mb-[30px] max-w-[247px] p-[14px] text-[#626262]"
                                                    placeholder="Mandatory field"
                                                    value={fieldValue1}
                                                    onChange={(val) => { setFieldValue1(val) }}
                                                />
                                            </div>

                                        </> :
                                        <>
                                            {data.sub_heading && <h3 className="font-bold text-[14px] lg:text-[18px] leading-[27px] text-black mb-6 lg:mb-[20px]">{data.sub_heading}</h3>}
                                            <p className='font-medium text-[#626262] text-sm lg:text-[18px] leading-[27px] mb-6 lg:mb-[30px]'>{data.paragraph}</p>
                                        </>
                                )
                            })}
                        </div>
                        <div className="w-full lg:w-[60%] bg-white rounded-[20px] px-[20px] py-[40px] text-center lg:text-left">
                            <div className="mb-10 lg:mb-[60px]">
                                <h1 className='font-medium text-lg md:text-xl lg:text-[30px] text-black mb-6 lg:mb-[30px]'>Basic vehicle information</h1>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                                    {adContentRightPanel_1.map((dropdown) => {
                                        return (
                                            <>
                                                <div>
                                                    {/* Label (common) */}
                                                    <CustomLabel
                                                        className="block mt-[40px] lg:mt-0 mb-[12px] text-[15px] text-[#627084]"
                                                        text={dropdown.label}
                                                    />

                                                    <CustomSelect
                                                        key={dropdown.id}
                                                        options={dropdown.options}
                                                        divider={true}
                                                        customArrows={<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.40625 0.40625L5.40625 5.40625L10.4062 0.40625" stroke="#94A3B3" stroke-width="0.8125" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                        }
                                                        className="w-full !bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                        innerOptionsClass="!bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                    />
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>

                                <div className="flex gap-[12px] items-center justify-start mt-[24px]">
                                    <CustomInput
                                        id="post_vin"
                                        name="post_vin"
                                        type="checkbox"
                                        className="p-[14px] text-[#626262]"
                                        value="selectric_car"
                                    />

                                    <CustomLabel
                                        text="post VIN in the ad"
                                        htmlFor="post_vin"
                                    />
                                </div>
                            </div>
                            <div className="mb-10 lg:mb-[60px]">
                                <h1 className='font-medium text-lg md:text-xl lg:text-[30px] text-black mb-6 lg:mb-[30px]'>Age and ownership</h1>
                                <div>
                                    {singleDropdownData.map((dropdown) => {
                                        return (
                                            <>
                                                <div>
                                                    {/* Label (common) */}
                                                    <CustomLabel
                                                        className="block text-[15px] text-[#627084] mt-[40px] lg:mt-0 mb-[12px]"
                                                        text={dropdown.label}
                                                    />

                                                    <CustomSelect
                                                        key={dropdown.id}
                                                        options={dropdown.options}
                                                        divider={true}
                                                        customArrows={<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.40625 0.40625L5.40625 5.40625L10.4062 0.40625" stroke="#94A3B3" stroke-width="0.8125" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                        }
                                                        className="w-full !bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                        innerOptionsClass="!bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                    />
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>

                                <div className='flex flex-wrap gap-[12px] items-center justify-start mt-[24px]'>
                                    {
                                        checkboxList_2.map((checkboxLi) => {
                                            return (
                                                <>
                                                    <div className="flex gap-[12px] items-center justify-start">
                                                        <CustomInput
                                                            id={checkboxLi.label}
                                                            name={checkboxLi.label}
                                                            type="checkbox"
                                                            className="mt-[40px] lg:mt-0 mb-[12px] p-[14px] text-[#626262]"
                                                            value="selectric_car"
                                                        />
                                                        <CustomLabel
                                                            className="block mt-[40px] lg:mt-0 mb-[12px] text-[15px] text-[#627084]"
                                                            text={checkboxLi.label}
                                                            htmlFor={checkboxLi.label}
                                                        />
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="mb-10 lg:mb-[60px]">
                                <h1 className='font-medium text-lg md:text-xl lg:text-[30px] text-black mb-6 lg:mb-[30px]'>Offer type</h1>
                                <div className='flex flex-wrap gap-[12px] items-center justify-start mt-[24px]'>
                                    {
                                        checkboxList_2.map((checkboxLi) => {
                                            return (
                                                <>
                                                    <div className="flex gap-[12px] items-center justify-start">
                                                        <CustomInput
                                                            id={checkboxLi.label}
                                                            name={checkboxLi.label}
                                                            type="checkbox"
                                                            className="mt-[40px] lg:mt-0 mb-[12px] p-[14px] text-[#626262]"
                                                            value="selectric_car"
                                                        />

                                                        <CustomLabel
                                                            className="block mt-[40px] lg:mt-0 mb-[12px] text-[15px] text-[#627084]"
                                                            text={checkboxLi.label}
                                                            htmlFor={checkboxLi.label}
                                                        />

                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="mb-10 lg:mb-[60px]">
                                <h1 className='font-medium text-lg md:text-xl lg:text-[30px] text-black mb-6 lg:mb-[30px]'>Price</h1>

                                {/* Label (common) */}
                                <CustomLabel
                                    className="block text-[15px] mt-[40px] lg:mt-0 mb-[12px] text-[#627084] lg:mt-0 mb-[12px] text-[15px] text-[#627084]"
                                    text="Price:"
                                />

                                <CustomInput
                                    name="price"
                                    type="text"
                                    className="h-[42px] max-w-[362px] !bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                    placeholder="euro"
                                    value={fieldValue2}
                                    onChange={(val) => { setFieldValue2(val) }}
                                />

                                <div className='flex flex-wrap gap-[12px] items-center justify-start mt-[24px]'>
                                    {
                                        checkboxList_3.map((checkboxLi) => {
                                            return (
                                                <>
                                                    <div className="flex gap-[12px] items-center justify-start">
                                                        <CustomInput
                                                            id={checkboxLi.label}
                                                            name={checkboxLi.label}
                                                            type="checkbox"
                                                            className="mt-[40px] lg:mt-0 mb-[12px] p-[14px] text-[#626262]"
                                                            value="selectric_car"
                                                        />
                                                        <CustomLabel
                                                            className="block mt-[40px] lg:mt-0 mb-[12px] text-[15px] text-[#627084]"
                                                            text={checkboxLi.label}
                                                            htmlFor={checkboxLi.label}
                                                        />
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </HeroCard>
            </section>

            <Footer />
        </div>
    );
}

export default AdContent;