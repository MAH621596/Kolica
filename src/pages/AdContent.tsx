import {
    sectionTabsMenu, adContentLeftPanelData, adContentRightPanel_1, adContentRightPanel_2, singleDropdownData,
    checkboxList_2, checkboxList_3, checkboxList_4, checkboxList_5, vehicalData,
    adContentRightPanel_3,
    adContentRightPanel_4,
    checkboxList_6
} from '@/helper/data';
import { Navbar, HeroCard, Button, CustomSelect, Tabs, CustomInput, CustomLabel, Footer, TextArea, CustomCheckbox } from "@/components";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const AdContent = () => {
    const navigate = useNavigate();
    const [activeMainTab, setActiveMainTab] = useState<number>(3);
    const [fieldValue1, setFieldValue1] = useState<string>("");
    const [fieldValue2, setFieldValue2] = useState<string>("");
    const [fieldValue3, setFieldValue3] = useState<string>("");
    const [fieldValue4, setFieldValue4] = useState<string>("");

      const [values, setValues] = useState<Record<string, string>>({});
    
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
                <HeroCard parentClass="!bg-[#F9FAFB] !py-[25px] px-[20px] !md:px-[50px]">
                    <div className='flex flex-col lg:flex-row items-start gap-[25px]'>
                        <div className="w-full lg:w-[40%] bg-white rounded-[20px] px-[20px] py-[40px] text-left">
                            <h2 className="font-medium text-black text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-tight text-black mb-6 lg:mb-[30px]">Ad content:</h2>
                            {adContentLeftPanelData.map((data, index1) => {
                                return (
                                    data.field ?
                                        <>
                                            <div key={index1}>
                                                <h3 className="font-bold text-[14px] lg:text-[18px] leading-[27px] text-black mb-6 lg:mb-[20px]">{data.heading_}</h3>
                                                <CustomInput
                                                    name={data.heading_}
                                                    type="text"
                                                    className="mb-6 lg:mb-[30px] h-[42px] max-w-[247px] p-[14px] text-[#626262]"
                                                    placeholder="Mandatory field"
                                                    value={fieldValue1}
                                                    onChange={(val) => { setFieldValue1(val as string) }}
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

                        <div className="w-full lg:w-[60%] bg-white rounded-[20px] px-[20px] py-[40px] text-left">
                            <div className="mb-10 lg:mb-[50px]">
                                <h1 className='font-medium text-lg md:text-xl lg:text-[30px] text-black mb-6 lg:mb-[30px]'>Basic vehicle information</h1>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                                    {adContentRightPanel_1.map((dropdown, index2) => {
                                        return (
                                            <>
                                                <div key={index2}>
                                                    {/* Label (common) */}
                                                    <CustomLabel
                                                        className="block mt-[20px] lg:mt-0 mb-[12px] text-[15px] text-[#627084]"
                                                        text={dropdown.label}
                                                    />

                                                    <CustomSelect
                                                        key={dropdown.id}
                                                        options={dropdown.options}
                                                        divider={true}
                                                        value={values[dropdown.id] || ""}
                                                        onChange={(val) =>
                                                            setValues((prev) => ({
                                                                ...prev,
                                                                [dropdown.id]: val,
                                                            }))
                                                        }
                                                        className="w-full !bg-[#F9FAFB] rounded-[9px] text-[#94A3B3]"
                                                        innerOptionsClass="!bg-[#F9FAFB] rounded-[9px] text-[#94A3B3]"
                                                    />
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>

                                <div className="mb-6 lg:mb-[30px] mt-[24px]">
                                <CustomCheckbox
                                    id="post_vin"
                                    name="post_vin"
                                    value="post_vin"
                                    checkboxParent="justify-start"
                                    custom_label_for="post_vin"
                                    inputClassName="max-w-[247px] p-[14px] text-[#626262]"
                                    labelClassName="!text-[14px] block"
                                    custom_label_text="post VIN in the ad"
                                />
                                </div>                                                        
                            </div>

                            <div className="mb-10 lg:mb-[50px]">
                                <h1 className='font-medium text-lg md:text-xl lg:text-[30px] text-black mb-6 lg:mb-[30px]'>Age and ownership</h1>
                                <div>
                                    {singleDropdownData.map((dropdown, index3) => {
                                        return (
                                            <>
                                                <div key={index3}>
                                                    {/* Label (common) */}
                                                    <CustomLabel
                                                        className="block text-[15px] text-[#627084] mt-[20px] lg:mt-0 mb-[12px]"
                                                        text={dropdown.label}
                                                    />

                                                    <CustomSelect
                                                        key={dropdown.id}
                                                        options={dropdown.options}
                                                        divider={true}
                                                                                value={values[dropdown.id] || ""}
                        onChange={(val) =>
                          setValues((prev) => ({
                            ...prev,
                            [dropdown.id]: val,
                          }))
                        }
                                                        className="w-full lg:w-1/2 !bg-[#F9FAFB] rounded-[9px] text-[#94A3B3]"
                                                        innerOptionsClass="!bg-[#F9FAFB] rounded-[9px] text-[#94A3B3]"
                                                    />
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>

                                <div className='flex flex-col md:flex-row gap-[12px] items-start md:items-center justify-start mt-[24px]'>
                                    {
                                        checkboxList_2.map((checkboxLi, index4) => {
                                            return (
                                                <>
                                                    <div key={index4} className="mb-6 lg:mb-[30px]">                                                       
                                                        <CustomCheckbox
                                                            id={`${checkboxLi.label + 2}`}
                                                            name={checkboxLi.label}
                                                            value="post_vin"
                                                            checkboxParent="justify-start"
                                                            custom_label_for={`${checkboxLi.label + 2}`}
                                                            inputClassName="max-w-[247px] p-[14px] text-[#626262]"
                                                            labelClassName="block !text-[14px] text-[#627084]"
                                                            custom_label_text={checkboxLi.label}
                                                        />
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div className="mb-10 lg:mb-[50px]">
                                <h1 className='font-medium text-lg md:text-xl lg:text-[30px] text-black mb-6 lg:mb-[30px]'>Offer type</h1>
                                <div className='flex flex-col md:flex-row gap-[12px] items-start md:items-center justify-start mt-[24px]'>
                                    {
                                        checkboxList_2.map((checkboxLi, index5) => {
                                            return (
                                                <>
                                                    <div key={index5} className="mb-6 lg:mb-[30px]">
                                                        <CustomCheckbox
                                                            id={`${checkboxLi.label + 1}`}
                                                            name={checkboxLi.label}
                                                            value={checkboxLi.label}
                                                            checkboxParent="justify-start"
                                                            custom_label_for={`${checkboxLi.label + 1}`}
                                                            inputClassName="p-[14px] text-[#626262]"
                                                            labelClassName="block !text-[14px] text-[#627084]"
                                                            custom_label_text={checkboxLi.label}
                                                        />
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div className="mb-10 lg:mb-[50px]">
                                <h1 className='font-medium text-lg md:text-xl lg:text-[30px] text-black mb-6 lg:mb-[30px]'>Price</h1>

                                {/* Label (common) */}
                                <CustomLabel
                                    className="block text-[14px] mt-[40px] lg:mt-0 mb-[12px] text-[#627084] lg:mt-0 mb-[12px] text-[#627084]"
                                    text="Price:"
                                />

                                <CustomInput
                                    name="price"
                                    type="text"
                                    className="w-full lg:w-1/2 h-[42px] !text-[11px] max-w-[362px] !bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                    placeholder="euro"
                                    value={fieldValue2}
                                    onChange={(val) => { setFieldValue2(val as string) }}
                                />

                                <div className='flex flex-col md:flex-row md:flex-wrap gap-[12px] items-start md:items-center justify-start my-[24px]'>
                                    {
                                        checkboxList_3.map((checkboxLi, index6) => {
                                            return (
                                                <>                                                   
                                                    <div key={index6} className="mb-6 lg:mb-[30px]">
                                                        <CustomCheckbox
                                                            id={checkboxLi.label}
                                                            name={checkboxLi.label}
                                                            value={checkboxLi.label}
                                                            checkboxParent="justify-start"
                                                            custom_label_for={checkboxLi.label}
                                                            inputClassName="p-[14px] text-[#626262]"
                                                            labelClassName="block !text-[14px] text-[#627084]"
                                                            custom_label_text={checkboxLi.label}
                                                        />
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>

                                <p className="lg:mt-0 mb-[12px] text-[#627084] lg:mt-0 my-[24px] text-[16px] text-[#627084] leading-[27px]">
                                    The publication of the final, retail price is mandatory. Publication of the price excluding tax, leasing deposit, starting price at auction... is not permitted.
                                    <br /> <br />
                                    To avoid violations of the Unlawful Employment Prevention Act , the publication of an offer for RENTAL is only available to registered traders!
                                </p>
                            </div>

                            <div className="mb-10 lg:mb-[50px]">
                                <h1 className='font-medium text-lg md:text-xl lg:text-[30px] text-black mb-6 lg:mb-[30px]'>Vehicle condition</h1>

                                <p className="font-medium block lg:mt-0 mb-[12px] text-[#627084] lg:mt-0 my-[24px] text-[16px] text-[#627084] leading-[7px]">
                                    Current situation:
                                </p>

                                <div className='flex flex-col flex-wrap gap-[12px] items-start justify-center my-[24px]'>
                                    {
                                        checkboxList_4.map((checkboxLi, index7) => {
                                            return (
                                                <>
                                                    <div key={index7} className="mb-2 lg:mb-[20px]">
                                                        <CustomCheckbox
                                                            id={checkboxLi.label}
                                                            name={checkboxLi.label}
                                                            value={checkboxLi.label}
                                                            checkboxParent="justify-start"
                                                            custom_label_for={checkboxLi.label}
                                                            inputClassName="p-[14px] text-[#626262]"
                                                            labelClassName=" lowercase block !text-[14px] text-[#627084]"
                                                            custom_label_text={checkboxLi.label}
                                                        />
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>

                                <p className="pt-[30px] border-t border-t-[#626262] font-medium block lg:mt-0 mb-[12px] text-[#627084] lg:mt-0 my-[24px] text-[16px] text-[#627084] leading-[27px]">
                                    Vehicle history:
                                </p>

                                <div className='flex flex-col flex-wrap gap-[12px] items-start justify-center my-[24px]'>
                                    {
                                        checkboxList_5.map((checkboxLi, index8) => {
                                            return (
                                                <>
                                                    <div key={index8} className="mb-2 lg:mb-[20px]">
                                                        <CustomCheckbox
                                                            id={checkboxLi.label}
                                                            name={checkboxLi.label}
                                                            value={checkboxLi.label}
                                                            checkboxParent="justify-start"
                                                            custom_label_for={checkboxLi.label}
                                                            inputClassName="p-[14px] text-[#626262]"
                                                            labelClassName="lowercase block !text-[14px] text-[#627084]"
                                                            custom_label_text={checkboxLi.label}
                                                        />
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>

                                <p className="lg:mt-0 mb-[12px] text-[#627084] lg:mt-0 my-[24px] text-[16px] text-[#627084] leading-[27px]">
                                    Mark a vehicle as DAMAGED when there is minor damage to the vehicle that requires repair, e.g. hail damage... Mark a vehicle involved in a traffic accident as CRASHED . Mark a vehicle as FAILURED when there is a technical defect, e.g. engine or transmission failure, or when the vehicle is NOT technically sound. In the CAR section, only the sale of complete vehicles can be advertised. To advertise a vehicle for parts, the PARTS AND EQUIPMENT section must be used.
                                </p>
                            </div>

                            <div className="mb-10 lg:mb-[30px] pb-[30px] border-b border-b-[#626262]">
                                <h1 className='font-medium text-lg md:text-xl lg:text-[30px] text-black mb-6 lg:mb-[30px]'>Vehicle characteristics:</h1>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                                    {adContentRightPanel_2.map((dropdown, index9) => {
                                        return (
                                            <div key={index9}>
                                                {/* Label (common) */}
                                                <CustomLabel
                                                    className="block mt-[20px] lg:mt-0 mb-[12px] text-[15px] text-[#627084]"
                                                    text={dropdown.label}
                                                />

                                                {dropdown.dropDownCount > 1 ? (
                                                    <div className="flex items-center gap-[10px]">
                                                        {[...Array(dropdown.dropDownCount)].map((_, i) => (
                                                            <CustomSelect
                                                                key={`${dropdown.id}-${i}`}
                                                                options={dropdown.options}
                                                                divider={true}
                                                                value={values[dropdown.id] || ""}
                                                                onChange={(val) =>
                                                                    setValues((prev) => ({
                                                                        ...prev,
                                                                        [dropdown.id]: val,
                                                                    }))
                                                                }
                                                                className="w-full !bg-[#F9FAFB] rounded-[9px] text-[#94A3B3]"
                                                                innerOptionsClass="!bg-[#F9FAFB] rounded-[9px] text-[#94A3B3]"
                                                            />
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <>
                                                        {dropdown.inputField ?
                                                            <>
                                                                <CustomInput
                                                                    name={dropdown.label}
                                                                    type="text"
                                                                    className="w-full !text-[11px] h-[42px] mb-[24px] !bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                                    placeholder={dropdown.placeholder}
                                                                    value={fieldValue3}
                                                                    onChange={(val) => { setFieldValue3(val as string) }}
                                                                />
                                                            </> : <>
                                                                <CustomSelect
                                                                    key={dropdown.id}
                                                                    options={dropdown.options}
                                                                    divider={true}
                                                                        value={values[dropdown.id] || ""}
                                                                        onChange={(val) =>
                                                                            setValues((prev) => ({
                                                                                ...prev,
                                                                                [dropdown.id]: val,
                                                                            }))
                                                                        }
                                                                    className="w-full !bg-[#F9FAFB] rounded-[9px] text-[#94A3B3]"
                                                                    innerOptionsClass="!bg-[#F9FAFB] rounded-[9px] text-[#94A3B3]"
                                                                />
                                                            </>
                                                        }
                                                    </>
                                                )}
                                            </div>
                                        )
                                    })} <span className='flex items-end pb-2'>CC</span>
                                </div>
                            </div>

                            <div className="mb-10 lg:mb-[30px] pb-[30px] border-b border-b-[#626262] grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                                {vehicalData.map((vehical, index10) => {
                                    return (
                                        <>
                                            <div>
                                                {vehical.input_label && (
                                                    <div key={index10}>
                                                        <CustomLabel
                                                            className="block text-[14px] mt-[40px] lg:mt-0 mb-[12px] text-[#627084] lg:mt-0 mb-[12px] text-[#627084]"
                                                            text={vehical.input_label}
                                                        />
                                                        <CustomInput
                                                            name={vehical.input_label}
                                                            type="text"
                                                            className="w-full h-[42px] !text-[11px] max-w-[362px] !bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                            placeholder="Any"
                                                            value={fieldValue2}
                                                            onChange={(val) => { setFieldValue2(val as string) }}
                                                        />
                                                    </div>
                                                )}

                                                <div className='flex flex-wrap gap-[12px] items-center justify-start'>
                                                    {vehical.checkboxes && (
                                                        vehical.checkboxes.map((checkbox, index11) => {
                                                            return (
                                                                <div key={index11} className="mb-2 lg:mb-[20px]">
                                                                    <CustomCheckbox
                                                                        id={checkbox.label}
                                                                        name={checkbox.label}
                                                                        value={checkbox.label}
                                                                        checkboxParent="justify-start mt-[24px]"
                                                                        custom_label_for={checkbox.label}
                                                                        inputClassName="p-[14px] text-[#626262]"
                                                                        labelClassName="lowercase block !text-[14px] text-[#627084]"
                                                                        custom_label_text={checkbox.label}
                                                                    />
                                                                </div>
                                                            )
                                                        })
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                                {adContentRightPanel_3.map((dropdown, index9) => {
                                    return (
                                        <div key={index9}>
                                            {/* Label (common) */}
                                            <CustomLabel
                                                className="block mt-[20px] lg:mt-0 mb-[12px] text-[15px] text-[#627084]"
                                                text={dropdown.label}
                                            />

                                            {dropdown.dropDownCount > 1 ? (
                                                <div className="flex items-center gap-[10px]">
                                                    {[...Array(dropdown.dropDownCount)].map((_, i) => (
                                                        <CustomSelect
                                                            key={`${dropdown.id}-${i}`}
                                                            options={dropdown.options}
                                                            divider={true}
                                                            value={values[dropdown.id] || ""}
                                                            onChange={(val) =>
                                                                setValues((prev) => ({
                                                                    ...prev,
                                                                    [dropdown.id]: val,
                                                                }))
                                                            }
                                                            className="w-full !bg-[#F9FAFB] rounded-[9px] text-[#94A3B3]"
                                                            innerOptionsClass="!bg-[#F9FAFB] rounded-[9px] text-[#94A3B3]"
                                                        />
                                                    ))}
                                                </div>
                                            ) : (
                                                <>
                                                    {dropdown.inputField ?
                                                        <>
                                                            <CustomInput
                                                                name={dropdown.label}
                                                                type="text"
                                                                className="w-full !text-[11px] h-[42px] mb-[24px] !bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                                placeholder={dropdown.placeholder}
                                                                value={fieldValue3}
                                                                onChange={(val) => { setFieldValue3(val as string) }}
                                                            />
                                                        </> : <>
                                                            <CustomSelect
                                                                key={dropdown.id}
                                                                options={dropdown.options}
                                                                divider={true}
                                                                    value={values[dropdown.id] || ""}
                                                                    onChange={(val) =>
                                                                        setValues((prev) => ({
                                                                            ...prev,
                                                                            [dropdown.id]: val,
                                                                        }))
                                                                    }
                                                                className="w-full !bg-[#F9FAFB] rounded-[9px] text-[#94A3B3]"
                                                                innerOptionsClass="!bg-[#F9FAFB] rounded-[9px] text-[#94A3B3]"
                                                            />
                                                        </>
                                                    }
                                                </>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>


                            <h1 className='font-medium text-lg md:text-xl lg:text-[30px] text-black my-6 lg:my-[30px]'>Vehicle Fuel consumption and emissions (WLTP):</h1>
                            <div className="grid grid-cols-1 gap-[20px]">
                                {adContentRightPanel_4.map((dropdown, index9) => {
                                    return (
                                        <div key={index9}>
                                            {/* Label (common) */}
                                            <CustomLabel
                                                className="block mt-[20px] lg:mt-0 mb-[12px] text-[15px] text-[#627084]"
                                                text={dropdown.label}
                                            />

                                            {dropdown.dropDownCount > 1 ? (
                                                <div className="flex items-center gap-[10px]">
                                                    {[...Array(dropdown.dropDownCount)].map((_, i) => (
                                                        <CustomSelect
                                                            key={`${dropdown.id}-${i}`}
                                                            options={dropdown.options}
                                                            divider={true}
                                                            value={values[dropdown.id] || ""}
                                                            onChange={(val) =>
                                                                setValues((prev) => ({
                                                                    ...prev,
                                                                    [dropdown.id]: val,
                                                                }))
                                                            }
                                                            className="w-full !bg-[#F9FAFB] rounded-[9px] text-[#94A3B3]"
                                                            innerOptionsClass="!bg-[#F9FAFB] rounded-[9px] text-[#94A3B3]"
                                                        />
                                                    ))}
                                                </div>
                                            ) : (
                                                <>
                                                    {dropdown.inputField ?
                                                        <>
                                                            <CustomInput
                                                                name={dropdown.label}
                                                                type="text"
                                                                className="w-full !text-[11px] h-[42px] mb-[24px] !bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                                placeholder={dropdown.placeholder}
                                                                value={fieldValue3}
                                                                onChange={(val) => { setFieldValue3(val as string) }}
                                                            />
                                                        </> : <>
                                                            <CustomSelect
                                                                key={dropdown.id}
                                                                options={dropdown.options}
                                                                divider={true}
                                                                    value={values[dropdown.id] || ""}
                                                                    onChange={(val) =>
                                                                        setValues((prev) => ({
                                                                            ...prev,
                                                                            [dropdown.id]: val,
                                                                        }))
                                                                    }
                                                                className="w-full !bg-[#F9FAFB] rounded-[9px] text-[#94A3B3]"
                                                                innerOptionsClass="!bg-[#F9FAFB] rounded-[9px] text-[#94A3B3]"
                                                            />
                                                        </>
                                                    }
                                                </>
                                            )}
                                        </div>
                                    )
                                })}
                             
                                <div className="mb-2 lg:mb-[20px]">
                                    <CustomCheckbox
                                        id="data_consumed"
                                        name="data_consumed"
                                        value="data_consumed"
                                        checkboxParent="justify-start mt-[24px]"
                                        custom_label_for="data_consumed"
                                        inputClassName="p-[14px] text-[#626262]"
                                        labelClassName="lowercase block !text-[14px] text-[#627084]"
                                        custom_label_text="I want to automatically publish consumption data with the ad."
                                    />
                                </div>
                            </div>

                            <div className="mb-10 lg:mb-[50px]">
                                <h1 className='font-medium text-lg md:text-xl lg:text-[30px] text-black my-2 my-[30px]'>Equipment information:</h1>
                                
                                <div className='mt-[24px]'>
                                    {
                                        checkboxList_6.map((amenities, index) => {
                                            return (
                                                <div key={index} className="mb-10 pb-[30px] border-b border-b-[#626262]">
                                                    <h1 className='font-medium block lg:mt-0 mb-[12px] text-[#627084] lg:mt-0 my-[24px] text-[16px] text-[#627084] leading-[27px]'>
                                                        {amenities.heading}
                                                    </h1>

                                                    <div className="flex flex-col flex-wrap gap-[12px] items-start justify-center my-[24px]">

                                                        {amenities.checkboxes.map((amentiesChx, idx) => (
                                                            <div key={idx} className="mb-2 lg:mb-[20px]">
                                                                <CustomCheckbox
                                                                    id={amentiesChx.label}
                                                                    name={amentiesChx.label}
                                                                    value={amentiesChx.label}
                                                                    checkboxParent="justify-start"
                                                                    custom_label_for={amentiesChx.label}
                                                                    inputClassName="max-w-[247px] text-[14px] p-[14px] text-[#626262]"
                                                                    labelClassName="lowercase block !text-[14px] text-[#627084]"
                                                                    custom_label_text={amentiesChx.label}
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="mb-10 lg:mb-[50px]">
                                <h1 className='font-medium text-lg md:text-xl lg:text-[30px] text-black mb-6 lg:my-[30px]'>Entering notes and other information about the offer:</h1>
                                <div className='mt-[24px]'>
                                    <h3 className="block mt-[40px] lg:mt-0 mb-[12px] text-[15px] text-[#627084">Notes</h3>
                                    <TextArea placeholder='Type here...' className='w-full h-[262px]'  
                                    value={fieldValue4}
                                    onChange={(val) => { setFieldValue4(val as string) }} />
                                    <p className="mb-[12px] text-[#627084] my-[24px] text-[16px] text-[#627084] leading-[27px]">
                                        The field for entering notes allows for a maximum of 4000 characters (or 8000 characters if you purchase the RICH TEXT option).
                                    </p>
                                </div>

                                <h1 className='font-medium text-lg md:text-xl lg:text-[30px] text-black mb-6 lg:mb-[30px]'>Stock information:</h1>
                                <p className="font-medium block lg:mt-0 mb-[12px] text-[#627084] lg:mt-0 my-[24px] text-[16px] text-[#627084] leading-[7px]">
                                    In Stock
                                </p>                              

                                <div className="mb-2 lg:mb-[20px]">
                                    <CustomCheckbox
                                        id="agreeTerms"
                                        name="agreeTerms"
                                        value="agreeTerms"
                                        checkboxParent="justify-start mt-[30px]"
                                        custom_label_for="agreeTerms"
                                        inputClassName="max-w-[247px] text-[14px] p-[14px] text-[#626262]"
                                        labelClassName="lowercase block !text-[14px] text-[#627084]"
                                        custom_label_text="The offer is located at our address, which is provided upon user registration."
                                    />
                                </div>


                                <div className='mb-[50px]'>
                                    <h1 className='font-medium text-lg md:text-xl lg:text-[30px] text-black my-6 lg:my-[30px]'>Contact information:</h1>
                                    <div className="flex items-center justify-start">
                                        <div>
                                        <svg className="w-[50px] h-[50px] lg:w-[65px] lg:h-[65px]" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="65" height="65" rx="4" fill="#253A86" />
                                            <g clip-path="url(#clip0_474_2419)">
                                                <path d="M41.3918 53.0001C46.6941 52.9009 50.6626 49.2785 50.9855 44.5759C51.0685 43.3703 50.729 42.4586 49.6387 41.9718C46.8879 40.7438 44.1186 39.555 41.3476 38.37C41.0354 38.2258 40.685 38.1908 40.3511 38.2704C40.0172 38.3501 39.7188 38.5398 39.5026 38.8099C38.9623 39.4394 38.4648 40.1055 38.0138 40.8037C37.1042 42.1834 36.4659 42.3856 35.1265 41.472C32.7281 39.8321 30.4274 38.0517 28.5899 35.7472C26.6435 33.3136 25.0402 30.6646 24.1049 27.6431C23.8208 26.7314 24.1049 26.1454 24.9665 25.7804C25.7393 25.4758 26.4944 25.1271 27.2283 24.7358C28.3537 24.0955 28.5862 23.5339 28.3777 22.2703C28.2191 21.3174 28.0788 20.3589 27.8685 19.4173C27.4645 17.6257 27.0807 15.8248 26.5623 14.065C26.2413 12.9736 25.5162 12.178 24.2728 12.0488C19.8043 11.5845 15.9706 14.1081 14.5758 18.4269C13.574 21.5158 13.9762 24.528 15.0389 27.4971C16.5886 31.829 19.0332 35.6349 21.8504 39.2087C25.3834 43.6885 29.2651 47.7865 34.1745 50.7668C36.4991 52.1858 38.9713 52.9908 41.3918 53.0001Z" fill="white" />
                                                <path d="M41.392 53C38.9752 53 36.503 52.1857 34.1784 50.7741C29.269 47.7938 25.3873 43.6959 21.8543 39.216C19.0371 35.6423 16.5925 31.8364 15.0428 27.5044C13.9801 24.5353 13.5779 21.5232 14.5797 18.4343C15.98 14.1136 19.8083 11.5919 24.2767 12.0562C25.5201 12.1853 26.2452 12.981 26.5662 14.0724C27.0846 15.8321 27.4684 17.6293 27.8724 19.4246C28.0827 20.3606 28.223 21.3247 28.3816 22.2776C28.5901 23.5413 28.3576 24.1029 27.2322 24.7431C26.4989 25.1344 25.7444 25.4831 24.9722 25.7877C24.118 26.1509 23.8265 26.7387 24.1106 27.6504C25.046 30.6719 26.6492 33.3134 28.5956 35.7546C30.4406 38.0591 32.7283 39.8394 35.1322 41.4793C36.4716 42.3929 37.11 42.1907 38.0195 40.811C38.4688 40.1079 38.9651 39.4367 39.5047 38.8023C39.7209 38.5322 40.0193 38.3424 40.3532 38.2628C40.687 38.1832 41.0375 38.2182 41.3496 38.3624C44.117 39.5474 46.8844 40.7361 49.6407 41.9642C50.7311 42.451 51.0705 43.3626 50.9875 44.5682C50.6591 49.2784 46.6907 52.9008 41.392 53Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_474_2419">
                                                    <rect width="37" height="41" fill="white" transform="translate(14 12)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        </div>

                                        <div className='py-[10px] px-[12px] leading-[27px] font-medium text-[#626262]'>
                                            <div className='text-lg md:text-xl lg:text-[30px]'>041961734</div>
                                            <div className="text-[14px] lg:text-[18px] lowercase">ALEXANDER</div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <Button type="button" text="Add Photo" icon={<i className="fa fa-image"></i>} 
                                     onClick={() => console.log("Add Photos")} className="w-full md:max-w-[385px] flex justify-center !bg-[#B1222C] border-[#B1222C] font-semibold text-xs lg:text-[16px] !text-white h-[35px] cursor-pointer transition-all duration-200 hover:opacity-80" />
                                    <Button type="button" text="Finish editing" 
                                    onClick={() => navigate("/select-photos")}
                                    className="mt-[20px] w-full md:max-w-[385px] flex justify-center !bg-[#B1222C] border-[#B1222C] font-semibold text-xs lg:text-[16px] !text-white h-[35px] cursor-pointer transition-all duration-200 hover:opacity-80" />
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