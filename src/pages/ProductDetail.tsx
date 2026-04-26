import { useState } from "react";
import {  
    Medal, 
    GlobTrade,
} from "@/assets";
import {
    basicData,
    municipalData_1,
    municipalData_2,
    municipalData_3,
    municipalData_4,
    sellerCardData,
    sectionTabsMenu,
    workingHoursData,
    additionalOptionsData,
} from '@/helper/data';
import {
    Tabs,
    Navbar,
    Button,
    Footer,
    HeroCard,
    DashboardCard,
    LightBoxGallery,
} from "@/components";
import { Link } from "react-router-dom";

const ProductDetail = () => {

    const [activeMainTab, setActiveMainTab] = useState<number>(1);
    const [loggedIn, setLoggedIn] = useState(
        localStorage.getItem("auth") === "true"
    );

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

            <section className="w-full max-w-[972px] mx-auto px-[30px] md:px-4 lg:px-0">
                <HeroCard parentClass="!m-0 !rounded-t-none !py-[18px] !px-[30px] sticky top-0 z-1000 shadow-[0_1px_2px_0_rgba(0,0,0,.5)]">
                    <h2 className="font-medium text-md md:text-2xl lg:text-[24px] text-black leading-tight">Hongqi H9 2.0T MHEV</h2>
                </HeroCard>

                <div className="flex flex-col md:flex-row gap-[25px] my-[30px]">
                    <div className="flex-1">
                        <HeroCard parentClass="!py-[30px] !px-[30px] !mb-[30px] !rounded-[20px]">
                            <div>                                
                                <div className="LightBoxGallery">
                                    <LightBoxGallery />
                                </div>
                            </div>
                        </HeroCard>

                        <HeroCard parentClass="!py-[30px] !px-[30px] !mb-0 !rounded-[20px]">
                            <table className="table-auto w-full mb-[16px]">
                                <thead>
                                    <tr>
                                        <th colSpan={2} className="px-[12px] !py-[10px] text-sm lg:text-[18px] font-medium 
                                        capitalize text-black text-left bg-[#E9ECEF]">Basic data</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {basicData.map((tabular) => {
                                        return (
                                            <tr key={tabular.id} className="capitalize border-b border-b-[#d3dde7] last:border-b-0 leading-tight text-black text-sm">
                                                <th className="p-[12px] text-left font-normal">{tabular.tableHeader}</th>
                                                <td className="p-[12px] text-left font-semibold">{tabular.tableData}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>

                            <table className="table-auto w-full mb-[16px]">
                                <thead className="">
                                    <tr>
                                        <th colSpan={2} className="px-[12px] !py-[10px] text-sm lg:text-[18px] font-medium 
                                        capitalize text-black text-left bg-[#E9ECEF]">Equipment and other information about the offer</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <h2 className="font-semibold text-[#DAA520] text-xl leading-tight my-4 lg:my-[18px]">Femac DOC 201  -  <span className="block leading-tight font-normal">municipal side mulcher</span></h2>
                                    {municipalData_1.map((tabular) => {
                                        return (
                                            <tr key={tabular.id} className="capitalize leading-[23px] text-black text-sm">
                                                <td className="text-left font-normal">{tabular.tableLabel}</td>
                                            </tr>
                                        )
                                    })}

                                    <br />
                                    <br />

                                    {municipalData_2.map((tabular) => {
                                        return (
                                            <tr key={tabular.id} className="capitalize leading-[23px] text-black text-sm">
                                                <td className="text-left font-normal">{tabular.tableLabel}</td>
                                            </tr>
                                        )
                                    })}

                                    <h2 className="font-semibold text-[#DAA520] text-sm leading-tight my-4 lg:my-[18px]">Additional equipment:
                                        <span className="block leading-tight text-black">Included in the price</span></h2>

                                    {municipalData_3.map((tabular) => {
                                        return (
                                            <tr key={tabular.id} className="capitalize leading-[23px] text-black text-sm">
                                                <td className="text-left font-normal">{tabular.tableLabel}</td>
                                            </tr>
                                        )
                                    })}

                                    <h2 className="font-semibold text-[#DAA520] text-xl leading-tight my-4 lg:my-[18px]">Price:
                                        <span className="block leading-tight text-black"> €13,090.16 + VAT = €15,970.00</span></h2>

                                    <br />
                                    <br />

                                    <h2 className="font-semibold text-[#DAA520] text-sm leading-tight my-4 lg:my-[18px]">Financing option via SKB Leasing:
                                    </h2>

                                    {municipalData_4.map((tabular) => {
                                        return (
                                            <tr key={tabular.id} className="capitalize leading-[23px] text-black text-sm">
                                                <td className="text-left font-normal">{tabular.tableLabel}</td>
                                            </tr>
                                        )
                                    })}

                                    <br />
                                    <br />

                                    <p className="text-left font-normal capitalize leading-[23px] text-black text-sm">
                                        Possible errors when entering, check directly with the seller for accuracy.</p>
                                </tbody>
                            </table>
                        </HeroCard>
                    </div>

                    <div className="basis-full md:basis-[306px]">
                        <DashboardCard
                            parentCardClass="h-[150px] flex-1 mb-[30px]"
                            className="!h-full !justify-center"
                            cardBodyHeading="€15,970"
                            cardHeadingClass="!font-bold mb-[20px] !text-[28px] text-center"
                            cardSubHeadingClass="!font-bold text-center"
                            cardBodySubHeading="or €13,090 + VAT"
                        />

                        <DashboardCard
                            parentCardClass="text-center mb-[0px]"
                            className="!h-full !justify-center !px-0"
                            cardHeaderText="Seller"
                            headerClass="bg-[#253A86] !text-white !py-[10px] !rounded-t-[20px]"
                            cardFooterText={<Button type="button" text="Send an email to the seller"
                                icon={<i className="fa fa-envelope"></i>}
                                className="w-full hover:scale-110 
                                flex justify-center mt-[25px] !bg-[#B1222C] 
                                border-[#B1222C] font-semibold text-xs 
                                lg:text-sm !text-white h-[50px]" />}>

                            <div className="border-b border-b-[#d3dde7] py-[16px] text-center">
                                <img src={GlobTrade} alt="trade" className="mx-auto" />
                            </div>

                            <div className="capitalize border-b border-b-[#d3dde7] py-[16px] text-center leading-tight text-black">
                                <p className="font-semibold text-sm">EURO GLOBTRADE, doo, Voklo</p>
                                <p className="font-semibold text-sm">Voklo 49 </p>
                                <p className="font-semibold text-sm">Šenčur</p>
                            </div>

                            {sellerCardData.map((seller) => {
                                return (
                                    <div key={seller.id} className={`capitalize py-[16px] text-center leading-tight text-black font-semibold border-b border-b-[#d3dde7]`}>
                                        {seller.icon && <div><img src={seller.icon} alt="img" className={`rounded-md mb-[20px] mx-auto w-[26px] h-[32px] md:w-[36px] md:h-[42px]'`} /></div>}
                                        <Link to="tel:04 / 2798000" className="text-xl hover:underline underline-offset-2 decoration-2 w-max">{seller.phoneNo}</Link>
                                        <p className="text-sm text-[#94A3B3] text-sm">{seller.location}</p>
                                    </div>
                                )
                            })}
                        </DashboardCard>

                        <div className="capitalize py-[16px] text-center leading-6 text-white font-semibold text-sm">
                            <img src={Medal} alt="trade" className="mx-auto mb-[16px]" />
                            <p className="">Registered as a dealer </p>
                            <p className="">www.avto.net since 1.1.2013</p>
                        </div>

                        <DashboardCard
                            parentCardClass="text-center mb-[30px]"
                            className="!h-full !justify-center !px-0"
                            cardHeaderText="Working hours"
                            headerClass="bg-[#253A86] !text-white !py-[10px] !rounded-t-[20px]"
                            cardFooterText={<p className="font-semibold text-sm pt-[12px]">outside working hours by prior arrangement</p>}>

                            <table className="table-auto w-full">
                                <tbody>
                                    {workingHoursData.map((tabular) => {
                                        return (
                                            <tr key={tabular.id} className="capitalize border-b border-b-[#d3dde7] leading-tight text-black text-sm">
                                                <th className="p-[12px] text-left">{tabular.tableHeader}</th>
                                                <td className="p-[12px] text-left">{tabular.tableData}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>

                            {/* {sellerCardData.map((seller) => {
                                return (
                                    <div key={seller.id} className={`capitalize py-[16px] text-center leading-tight text-black font-semibold border-b border-b-[#d3dde7]`}>
                                        {seller.icon && <div><img src={seller.icon} alt="img" className={`rounded-md mb-[20px] mx-auto w-[26px] h-[32px] md:w-[36px] md:h-[42px]'`} /></div>}
                                        <Link to="tel:04 / 2798000" className="text-xl hover:underline underline-offset-2 decoration-2 w-max">{seller.phoneNo}</Link>
                                        <p className="text-sm text-[#94A3B3] text-sm">{seller.location}</p>
                                    </div>
                                )
                            })} */}
                        </DashboardCard>

                        <DashboardCard
                            parentCardClass="text-center"
                            className="!h-full !justify-center !px-0"
                            cardHeaderText="Additional options"
                            headerClass="bg-[#253A86] !text-white !py-[10px] !rounded-t-[20px]"
                        >
                            <div>
                                {additionalOptionsData.map((optionsData) => {
                                    return (
                                        optionsData.id === 7 ?
                                            <>
                                                <div className="px-[30px] py-[10px] text-sm lg:text-[18px] font-medium 
                                        capitalize bg-[#253A86] text-white">
                                                    <h4>{optionsData.label}</h4>
                                                </div>
                                            </>
                                            :
                                            <Link to={optionsData.label} key={optionsData.id}
                                                className="text-sm py-[12px] px-[18px] 
                                            capitalize border-b border-b-[#d3dde7] last:border-b-0
                                            leading-6 text-black 
                                            hover:text-[#495057] hover:bg-[#f8f9fa] hover:last:rounded-b-[20px]
                                            flex gap-[16px] items-center">
                                                <div>{optionsData.icon}</div>
                                                <div className="text-start">{optionsData.label}</div>
                                            </Link>
                                    )
                                })}
                            </div>

                            {/* {sellerCardData.map((seller) => {
                                return (
                                    <div key={seller.id} className={`capitalize py-[16px] text-center leading-tight text-black font-semibold border-b border-b-[#d3dde7]`}>
                                        {seller.icon && <div><img src={seller.icon} alt="img" className={`rounded-md mb-[20px] mx-auto w-[26px] h-[32px] md:w-[36px] md:h-[42px]'`} /></div>}
                                        <Link to="tel:04 / 2798000" className="text-xl hover:underline underline-offset-2 decoration-2 w-max">{seller.phoneNo}</Link>
                                        <p className="text-sm text-[#94A3B3] text-sm">{seller.location}</p>
                                    </div>
                                )
                            })} */}
                        </DashboardCard>

                        {/* <HeroCard parentClass="!py-[30px] !px-[30px] !mb-0 !rounded-[20px]">
                            <div>
                                <h2 className="font-medium text-md md:text-2xl lg:text-[30px] text-black leading-tight mb-[30px]">Review My Ads</h2>
                                <div className="relative">
                                    <p className="text-sm md:text-[16px] font-medium capitalize text-[#627084] mb-[30px]">
                                        ou currently have no ads in your post. To post a new ad, click the button below.
                                    </p>
                                    <Button type="button" text="Post a new ad"
                                        icon={<img src={Plus} alt="+" />}
                                        className="w-full hover:scale-110 
                                            flex justify-center mt-[25px] !bg-[#B1222C] border-[#B1222C] font-semibold text-xs 
                                            lg:text-[18px] !text-white h-[41px]" />
                                </div>
                            </div>
                        </HeroCard> */}
                    </div>
                </div>

                <div className="mb-[30px]">
                    <HeroCard parentClass="!py-[30px] !px-[30px] !mb-0 !rounded-[20px]">
                        <h2 className="font-semibold text-lg text-black leading-[28px] mb-[8px]">
                            Price:</h2>
                        <DashboardCard
                            parentCardClass="!bg-transparent border border-[#d3dde7] h-[150px] mb-[16px] w-full md:max-w-[580px]"
                            className="!h-full !justify-center"
                            cardBodyHeading="€15,970"
                            cardHeadingClass="!font-bold mb-[20px] !text-[28px] text-center"
                            cardSubHeadingClass="!font-bold text-center"
                            cardBodySubHeading="or €13,090 + VAT"
                        />

                        <div className="px-[12px] !py-[10px] text-sm font-bold 
                            capitalize text-black text-center bg-[#E9E9E9]">- financing option - installment sale -</div>
                    </HeroCard>
                </div>

                <DashboardCard
                    parentCardClass="text-center rounded-b-none"
                    className="!h-full !justify-center !px-0"
                    cardHeaderText="Seller"
                    headerClass="bg-[#253A86] !text-white !py-[10px] !rounded-t-[20px] text-left">

                    <div className="flex flex-col lg:flex-row items-start gap-0">
                        <div className="w-full basis-full lg:basis-[260px]">
                            <div className="py-[16px] text-center">
                                <img src={GlobTrade} alt="trade" className="mx-auto" />
                            </div>
                        </div>

                        <div className="w-full flex-1 lg:border-l lg:border-l-[#d3dde7]">
                            <div className="flex items-start justify-between gap-0 px-[16px]">
                                <div>
                                    <div className="capitalize py-[16px] text-left leading-tight text-black">
                                        <p className="font-bold text-xl">EURO GLOBTRADE, doo, Voklo</p>
                                        <Link to="#" className="font-normal text-sm 
                                             hover:underline decoration-1 w-max">
                                            <i className="fa fa-map-marker pr-2"></i>
                                            Voklo 49, Šenčur</Link>
                                    </div>

                                    {sellerCardData.map((seller) => {
                                        return (
                                            <div key={seller.id} className={`flex items-start gap-[8px] my-[6px] capitalize text-left leading-tight text-black font-semibold`}>
                                                <Link to="#" className="text-sm hover:underline w-max">{seller.phoneNo}</Link>
                                                <p className="text-sm text-[#94A3B3] font-normal">{seller.location}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="hidden lg:block py-[16px] text-center leading-6 text-black font-normal text-sm">
                                    <img src={Medal} alt="trade" className="mx-auto mb-[16px]" />
                                    <p>Registered as a dealer <br /> on www.avto.net since <br /> 1.1.2013 </p>
                                </div>
                            </div>

                            <Link to="https://www.euro-globtrade.si"
                                className="px-[14px] block leading-[24px] mb-[8px] font-normal text-sm 
                                             hover:underline decoration-1 w-max">
                                <i className="fa fa-external-link pr-2"></i>
                                https://www.euro-globtrade.si</Link>

                            <div className="flex flex-col lg:flex-row items-center gap-5 px-[14px] pb-[16px]">
                                <Button type="button" text="Email"
                                    icon={<i className="fa fa-envelope"></i>}
                                    className="w-full hover:scale-110 
                                flex justify-center !bg-[#B1222C] 
                                border-[#B1222C] font-semibold text-xs 
                                lg:text-sm !text-white h-[36px]" />

                                <Button type="button" text="Location"
                                    icon={<i className="fa fa-map-marker"></i>}
                                    className="w-full hover:scale-110 
                                flex justify-center !bg-[#B1222C] 
                                border-[#B1222C] font-semibold text-xs 
                                lg:text-sm !text-white h-[36px]" />

                                <Button type="button" text="Working hours"
                                    icon={<i className="fa fa-clock"></i>}
                                    className="w-full hover:scale-110 
                                flex justify-center !bg-[#B1222C] 
                                border-[#B1222C] font-semibold text-xs 
                                lg:text-sm !text-white h-[36px]" />
                            </div>
                        </div>
                    </div>
                </DashboardCard>
                <div className="px-[12px] !py-[10px] text-sm font-bold mb-[50px] 
                    capitalize text-black text-center bg-[#E9E9E9] shadow-[0_1px_2px_0_rgba(0,0,0,.5)]">Subscriber of the advertisement:
                    <h2 className="font-normal text-sm text-black leading-tight mb-[0px]">
                        EURO GLOBTRADE, doo, Voklo, Voklo 49, 4208 Šenčur, Slovenia, DŠ:SI66080533</h2></div>
            </section>
            <Footer />
        </div>
    );
}

export default ProductDetail;