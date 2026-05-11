import { useState, useEffect } from "react";
import {
    // Plus,
    Caret,
} from "@/assets";
import {
    userData,
    editUserData,
    userInfoEdit,
    userPrintModeData,
    userWorkingHours,
    userSysLoginInfo,
    userDashboardTabsMenu,
} from '@/helper/data';
import {
    Tabs,
    Navbar,
    Footer,
    TextArea,
    HeroCard,
    CustomInput,
    CustomSelect,
    DashboardCard,
    CustomRadioBtn,
    CustomCheckbox,
    TinyMCE,
} from "@/components";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

const EditUserData = () => {
    const [activeMainTab, setActiveMainTab] = useState<number>(7);
    const [formData, setFormData] = useState<any>({});
    const [values, setValues] = useState<Record<string, string>>({});
    const [fieldValue4, setFieldValue4] = useState<string>("");
    const [selectedRadio, setSelectedRadio] = useState<string | null>(null);
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

    const loggedIn = useSelector(
        (state: RootState) => state.auth.loggedIn
    );

    const handleRadioChange = (id: string) => {
        setSelectedRadio(id);
    };

    const handleCheckboxChange = (id: string) => {
        setCheckedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const handleChangeFormData = (value: string, name: string) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

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
                <HeroCard parentClass="flex flex-col md:flex-row justify-between items-center gap-4 !m-0 !rounded-t-none !rounded-b-[20px] !py-[18px] !px-[30px] sticky top-0 z-20 shadow-[0_1px_2px_0_rgba(0,0,0,.5)]">
                    <h2 className="font-semibold text-base md:text-2xl text-black leading-tight">Editing user data</h2>

                    <div className="!text-3xl text-[#253A86]">
                        <i className={`fa fa-edit`} aria-hidden="true"></i>
                    </div>
                </HeroCard>

                <div className="flex flex-col lg:flex-row gap-[15px] my-[30px] bg-white px-[15px] py-[15px] rounded-[20px]">
                    {/* { LEFT SIDE } */}
                    <div className="basis-full md:basis-[230px]">
                        {editUserData.map((user) => (
                            <DashboardCard key={user.id}
                                parentCardClass="bg-[#E9ECEF] text-center"
                                className="!h-full !justify-center !px-0"
                                cardHeaderText={`${user.label}:`}
                                caretColorClass="!border-t-[#253A86]"
                                headerClass="bg-[#253A86] !text-base !text-white !py-[10px] !rounded-t-[20px]"
                            >
                                <div className="px-4.5 py-[10px] bg-[#E9ECEF] rounded-b-[20px]">
                                    {user.field.map((field) => (
                                        <div className="text-start leading-tight text-black mb-3">
                                            <div className="flex items-start gap-2 mb-3">
                                                <div className="!text-lg text-[#253A86]">
                                                    {field.icon}
                                                </div>
                                                <p className="font-normal text-sm">{field.field_desc}</p>
                                            </div>
                                            <div className="pl-5">
                                                {field.label && <strong className="mb-2 block">{field.label}</strong>}
                                                {field.field_input &&
                                                    <CustomInput
                                                        type="text"
                                                        name={field.name}
                                                        id={field.name}
                                                        placeholder="obvezno polij"
                                                        className={`!text-xs w-full border-[0.64px] !h-[16px] ${field.name == "Example-2" ? "bg-red-700 text-white placeholder:text-white" : ""}`}
                                                        value={formData[field.name] || ""}
                                                        onChange={(val) => handleChangeFormData(val as string, field.name)}
                                                    />
                                                }
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </DashboardCard>
                        ))}
                    </div>

                    {/* { RIGHT SIDE } */}
                    <div className="flex-1">
                        {userData.map((user, index1) => (
                            <DashboardCard key={index1}
                                parentCardClass="bg-[#E9ECEF]"
                                className="!h-full !justify-center !px-0"
                                cardHeaderText={user.label}
                                caretColorClass="!border-t-[#253A86]"
                                headerClass="bg-[#253A86] !text-base !text-white !py-[10px] !rounded-t-[20px]"
                            >
                                <div className="px-[20px] py-[10px] bg-[#E9ECEF]">
                                    {user.list.map((userLi, index2) => (
                                        <div key={index2} className="flex flex-col md:flex-row items-center gap-3 md:gap-6 capitalize text-center md:text-start leading-tight text-black mb-3">
                                            <div className="font-normal text-sm min-w-[130px]">{userLi.label}:</div>
                                            <p className="font-semibold text-sm">{userLi.value}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="relative px-[25px] py-[10px] text-sm lg:text-base font-medium 
                                        capitalize bg-[#253A86] text-white">
                                    <h4>{user.card_subHeader}</h4>
                                    <Caret caretColor="!border-t-[#253A86]" />
                                </div>

                                <div className="px-[25px] py-[10px] bg-[#E9ECEF] !rounded-b-[20px]">
                                    {user.subHeader_list.map((subItem, index3) => (
                                        <div key={index3} className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center md:text-start leading-tight text-black mb-3">
                                            <div className="font-normal text-sm min-w-[130px]">{subItem.label}:</div>
                                            <p className="font-semibold text-sm">{subItem.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </DashboardCard>
                        ))}

                        {userInfoEdit.map((user, index1) => (
                            <DashboardCard key={index1}
                                parentCardClass="bg-[#E9ECEF] mt-8"
                                className="!h-full !justify-center !px-0"
                                cardHeaderText={user.label}
                                caretColorClass="!border-t-[#253A86]"
                                headerClass="bg-[#253A86] !text-base !text-white !py-[10px] !rounded-t-[20px]"
                            >
                                <div className="px-[20px] py-[10px] bg-[#E9ECEF]">
                                    {user.list.map((userLi, index2) => (
                                        <div key={index2} className="flex flex-col md:flex-row items-center gap-3 md:gap-6 capitalize text-center md:text-start leading-tight text-black mb-3">
                                            <div className="font-normal text-sm min-w-[130px]">{userLi.label}:</div>
                                            {userLi.value && <p className="font-semibold text-sm">{userLi.value}</p>}
                                            {userLi.field_input &&
                                                <CustomInput
                                                    type="text"
                                                    name={userLi.name}
                                                    id={userLi.name}
                                                    placeholder="obvezno polij"
                                                    className="!text-xs w-full md:max-w-[180px] border-[0.64px] !h-[16px]"
                                                    value={formData[userLi.name!] || ""}
                                                    onChange={(val) => handleChangeFormData(val as string, userLi.name!)}
                                                />
                                            }
                                        </div>
                                    ))}
                                </div>

                                <div className="relative px-[25px] py-[10px] text-sm lg:text-base font-medium 
                                        capitalize bg-[#253A86] text-white">
                                    <h4>{user.card_subHeader}</h4>
                                    <Caret caretColor="!border-t-[#253A86]" />
                                </div>

                                <div className="px-[25px] py-[10px] bg-[#E9ECEF] !rounded-b-[20px]">
                                    {user.subHeader_list.map((subItem, index3) => (
                                        <div key={index3} className="flex flex-col md:flex-row items-center gap-3 md:gap-6 capitalize text-center md:text-start leading-tight text-black mb-3">
                                            <div className="font-normal text-sm min-w-[130px]">{subItem.label}:</div>
                                            {subItem.field_input &&
                                                <CustomInput
                                                    type="text"
                                                    name={subItem.name}
                                                    id={subItem.name}
                                                    placeholder="obvezno polij"
                                                    className="!text-xs w-full md:max-w-[180px] border-[0.64px] !h-[16px]"
                                                    value={formData[subItem.name] || ""}
                                                    onChange={(val) => handleChangeFormData(val as string, subItem.name)}
                                                />
                                            }
                                        </div>
                                    ))}
                                </div>
                            </DashboardCard>
                        ))}

                        {userWorkingHours.map((user, index1) => (
                            <DashboardCard key={index1}
                                parentCardClass="bg-[#E9ECEF] mt-8"
                                className="!h-full !justify-center !px-0"
                                cardHeaderText={user.label}
                                caretColorClass="!border-t-[#253A86]"
                                headerClass="bg-[#253A86] !text-base !text-white !py-[10px] !rounded-t-[20px]"
                            >
                                <div className="px-[20px] py-[10px] bg-[#E9ECEF] rounded-b-[20px]">
                                    {user.list.map((userLi, index2) => (
                                        <div key={index2} className="flex flex-col md:flex-row items-center gap-3 md:gap-6 capitalize text-center md:text-start leading-tight text-black mb-3">
                                            {(!userLi.field_select && userLi.field_checkbox) &&
                                                <>
                                                    <span className="font-normal text-sm min-w-[90px]">{userLi.label}:</span>
                                                    <CustomCheckbox
                                                        id={String(userLi.id)}
                                                        name={String(userLi.id)}
                                                        value={String(userLi.id)}
                                                        checkboxParent="md:justify-end"
                                                        inputClassName="!border-1 !border-[#C8C8C8] !rounded-none !h-5 !w-5"
                                                        labelClassName="font-normal normal-case !text-sm text-black min-w-[130px]"
                                                        custom_label_for={String(userLi.id)}
                                                        custom_label_text="Activation the publication of a new schedule"
                                                        checked={checkedItems[String(userLi.id)] || false}
                                                        onChange={() => handleCheckboxChange((String(userLi.id) as string))}
                                                    />
                                                </>
                                            }

                                            {(userLi.field_select &&
                                                <>
                                                    <span className="font-normal text-sm min-w-[90px]">{userLi.label}:</span>
                                                    <span className="font-normal text-sm min-w-[30px]">from:</span>
                                                    <div className="flex items-center gap-3">
                                                        <CustomSelect
                                                            value={values[userLi.id] || "0"}
                                                            onChange={(val) =>
                                                                setValues((prev) => ({
                                                                    ...prev,
                                                                    [userLi.id]: val,
                                                                }))
                                                            }
                                                            options={userLi.data} divider={false}
                                                            selectParentClass="w-max"
                                                            customArrows={<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.40625 0.40625L5.40625 5.40625L10.4062 0.40625" stroke="#94A3B3" stroke-width="0.8125" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            }
                                                            className="w-full md:w-max !px-3 gap-3 !bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                            innerOptionsClass="w-full md:w-max !px-3 gap-3 !bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]" />
                                                        :
                                                        <CustomSelect
                                                            value={values[userLi.id] || "0"}
                                                            onChange={(val) =>
                                                                setValues((prev) => ({
                                                                    ...prev,
                                                                    [userLi.id]: val,
                                                                }))
                                                            }
                                                            options={userLi.data} divider={false}
                                                            selectParentClass="w-max"
                                                            customArrows={<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.40625 0.40625L5.40625 5.40625L10.4062 0.40625" stroke="#94A3B3" stroke-width="0.8125" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            }
                                                            className="w-full md:w-max !px-3 gap-3 !bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                            innerOptionsClass="w-full md:w-max !px-3 gap-3 !bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]" />
                                                    </div>

                                                    <span className="font-normal text-sm min-w-[30px]">to:</span>
                                                    <div className="flex items-center gap-3">
                                                        <CustomSelect
                                                            value={values[userLi.id] || "0"}
                                                            onChange={(val) =>
                                                                setValues((prev) => ({
                                                                    ...prev,
                                                                    [userLi.id]: val,
                                                                }))
                                                            }
                                                            options={userLi.data} divider={false}
                                                            selectParentClass="w-max"
                                                            customArrows={<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.40625 0.40625L5.40625 5.40625L10.4062 0.40625" stroke="#94A3B3" stroke-width="0.8125" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            }
                                                            className="w-full md:w-max !px-3 gap-3 !bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                            innerOptionsClass="w-full md:w-max !px-3 gap-3 !bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]" />
                                                        :
                                                        <CustomSelect
                                                            value={values[userLi.id] || "0"}
                                                            onChange={(val) =>
                                                                setValues((prev) => ({
                                                                    ...prev,
                                                                    [userLi.id]: val,
                                                                }))
                                                            }
                                                            customArrows={<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.40625 0.40625L5.40625 5.40625L10.4062 0.40625" stroke="#94A3B3" stroke-width="0.8125" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            }
                                                            options={userLi.data} divider={false}
                                                            selectParentClass="w-max"
                                                            className="w-full md:w-max !px-3 gap-3 !bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                            innerOptionsClass="w-full md:w-max !px-3 gap-3 !bg-[#F9FAFB] border-[#D3DDE780] rounded-[9px] text-[#94A3B3]"
                                                        />
                                                    </div>

                                                    <span className="font-normal text-sm min-w-[30px]">CLOSED</span>
                                                </>
                                            )}

                                            {(!userLi.field_select && userLi.field_textArea) &&
                                                <>
                                                    <span className="font-normal normal-case text-sm min-w-[90px]">{userLi.label}:</span>

                                                    <TextArea placeholder='Vsak dan do pre dhodni najavi' className='w-full text-black text-sm h-[100px]'
                                                        value={fieldValue4}
                                                        enableShortNote={false}
                                                        onChange={(val) => { setFieldValue4(val as string) }} />

                                                </>
                                            }
                                        </div>
                                    ))}
                                </div>
                            </DashboardCard>
                        ))}

                        <DashboardCard
                            parentCardClass="bg-[#E9ECEF] mt-8"
                            className="!h-full !justify-center !px-0"
                            cardHeaderText="Description and presentation of your company"
                            caretColorClass="!border-t-[#253A86]"
                            headerClass="bg-[#253A86] !text-base !text-white !py-[10px] !rounded-t-[20px]"
                        >
                            <div className="pt-0 p-[10px] bg-[#E9ECEF] rounded-b-[20px]">
                                <TinyMCE />
                            </div>
                        </DashboardCard> 

                         {userPrintModeData.map((user, index1) => (
                            <DashboardCard key={index1}
                                parentCardClass="bg-[#E9ECEF] mt-8"
                                className="!h-full !justify-center !px-0"
                                cardHeaderText={user.label}
                                caretColorClass="!border-t-[#253A86]"
                                headerClass="bg-[#253A86] !text-base !text-white !py-[10px] !rounded-t-[20px]"
                            >
                                <div className="px-[20px] py-[10px] bg-[#E9ECEF]">
                                    {user.list.map((userLi, index2) => (
                                        <div key={index2} className="flex flex-col md:flex-row items-center gap-3 md:gap-6 capitalize text-center md:text-start leading-tight text-black mb-3">
                                            {/* <div className="font-normal text-sm min-w-[130px]">{userLi.label}:</div> */}
                                            
                                            {userLi.field_radio &&
                                                <>
                                                    {/* <span className="font-normal text-sm min-w-[90px]">{userLi.label}:</span> */}
                                                     <CustomRadioBtn
                                                        id={String(userLi.id)}
                                                        name={userLi.name}
                                                        value={String(userLi.id)}
                                                        radioBtnParent="md:justify-end"
                                                        inputClassName="!border-1 !border-[#C8C8C8] !h-5 !w-5"
                                                        labelClassName="font-normal normal-case !text-sm text-black min-w-[130px]"
                                                        custom_label_for={String(userLi.id)}
                                                        custom_label_text={userLi.label}
                                                        checked={selectedRadio === String(userLi.id)}
                                                        onChange={() => handleRadioChange(String(userLi.id))}                                                        
                                                  />
                                                </>
                                            }

                                        </div>
                                    ))}
                                </div>

                                <div className="relative px-[25px] py-[10px] text-sm lg:text-base font-medium 
                                        capitalize bg-[#253A86] text-white">
                                    <h4>{user.card_subHeader}</h4>
                                    <Caret caretColor="!border-t-[#253A86]" />
                                </div>

                                <div className="px-[25px] py-[10px] bg-[#E9ECEF] !rounded-b-[20px]">
                                    {user.subHeader_list.map((subItem, index3) => (
                                        <div key={index3} className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center md:text-start leading-tight text-black mb-3">
                                            {/* <div className="font-normal text-sm min-w-[130px]">{subItem.label}:</div> */}

                                            {subItem.field_radio &&
                                                <>
                                                    <CustomRadioBtn
                                                        id={String(subItem.id)}
                                                        name={subItem.name}
                                                        value={String(subItem.id)}
                                                        radioBtnParent="md:justify-end"
                                                        inputClassName="!border-1 !border-[#C8C8C8] !h-5 !w-5"
                                                        labelClassName="font-normal normal-case !text-sm text-black min-w-[130px]"
                                                        custom_label_for={String(subItem.id)}
                                                        custom_label_text={subItem.label}
                                                        checked={selectedRadio === String(subItem.id)}
                                                        onChange={() => handleRadioChange(String(subItem.id))}                                                        
                                                  />
                                                </>
                                            }
                                        </div>
                                    ))}
                                </div>
                            </DashboardCard>
                        ))}

                        {userSysLoginInfo.map((user, index1) => (
                            <DashboardCard key={index1}
                                parentCardClass="bg-[#E9ECEF] mt-8"
                                className="!h-full !justify-center !px-0"
                                cardHeaderText={user.label}
                                caretColorClass="!border-t-[#253A86]"
                                headerClass="bg-[#253A86] !text-base !text-white !py-[10px] !rounded-t-[20px]"
                            >
                                <div className="px-[20px] py-[10px] bg-[#E9ECEF] rounded-b-[20px]">
                                    {user.list.map((userLi, index2) => (
                                        <div key={index2} className="flex flex-col md:flex-row items-center gap-3 md:gap-6 capitalize text-center md:text-start leading-tight text-black mb-3">
                                            <div className="font-normal text-sm min-w-[130px]">{userLi.label}:</div>
                                            {userLi.field_input &&
                                            <div className="flex items-center gap-3 mb-3">
                                               <CustomInput
                                                    type={userLi.name === "password" ? "password" : "text"}
                                                    name={userLi.name}
                                                    id={userLi.name}
                                                    placeholder="obvezno polij"
                                                    className="!text-xs w-full md:max-w-[180px] border-[0.64px] !h-[16px]"
                                                    value={formData[userLi.name!] || ""}
                                                    onChange={(val) => handleChangeFormData(val as string, userLi.name!)}
                                                />
                                                <div className="!text-lg text-[#253A86]">
                                                    {userLi.icon}
                                                </div>
                                            </div>
                                            }
                                        </div>
                                    ))}
                                </div>
                            </DashboardCard>
                        ))}                   
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default EditUserData;