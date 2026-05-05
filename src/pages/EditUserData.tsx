import { useState, useEffect } from "react";
import {
    // Plus,
    Caret,
} from "@/assets";
import {
    editUserData,
    userData,
    userInfoEdit,
    userDashboardTabsMenu,
} from '@/helper/data';
import {
    Tabs,
    Navbar,
    Footer,
    HeroCard,
    DashboardCard,
} from "@/components";

const EditUserData = () => {
    const [activeMainTab, setActiveMainTab] = useState<number>(7);
    const [loggedIn, setLoggedIn] = useState(
        localStorage.getItem("auth") === "true"
    );

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    console.log(setLoggedIn);

    // const login = () => {
    //   localStorage.setItem("auth", "true");
    //   setLoggedIn(true);
    // };

    // const logout = () => {
    //   localStorage.setItem("auth", "false");
    //   setLoggedIn(false);
    // };

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
                                                {field.field_input && <div>{field.field_input}</div>}
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
                                            {userLi.field_input && <div>{userLi.field_input}</div>}
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
                                            {subItem.field_input && <div>{subItem.field_input}</div>}
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