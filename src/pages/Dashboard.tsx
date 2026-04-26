import { useState } from "react";
import { 
  Stats, 
  Plus, 
  SeeMore, 
  ProfileInfo, 
} from "@/assets";
import { 
  sectionTabsMenu, 
  dashboardRegistrationData, 
  barChartContent,
} from '@/helper/data';
import { 
  Tabs, 
  Navbar, 
  Button, 
  Footer, 
  CarCard, 
  HeroCard, 
  BarChart, 
  DashboardCard, 
} from "@/components";

const Dashboard = () => {

  const [activeMainTab, setActiveMainTab] = useState<number>(1);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("auth") === "true"
  );

  console.log(setLoggedIn);

  type MiniCardProps = {
    id?: number;
    icon?: string;
    heading?: string;
    subHeading?: string;
  };

  const renderMiniCards = (field: MiniCardProps, index: number) => {
    return (
      <div key={index} className={`bg-[#F9FAFB] border-[#D3DDE780] rounded-[20px] h-full ${field.id === 1 ? "mb-0" : ""}`}>
        <div className="p-[18px] text-center">
          <h2 className="font-medium text-sm md:text-[16px] text-black leading-tight mb-[13px]">
            {field.heading}</h2>
          <p className="text-[#627084] text-sm md:text-[14px] font-normal capitalize text-[#627084] mb-[13px]">
            {field.subHeading}
          </p>
          { field.icon && <div><img src={field.icon} alt="img" className={`mx-auto`} /></div> }
        </div>
      </div>
    );
  };

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

      <section className="w-full max-w-[972px] mx-auto px-[30px] md:px-4 lg:px-0 mt-[50px]">
        <div className="flex flex-col md:flex-row gap-[25px] mb-[30px] md:max-h-[180px]">
          <DashboardCard
            parentCardClass="min-h-[150px] flex-1 hover:scale-110"
            className="!pb-2"
            cardBodyIcon={ProfileInfo}
            cardBodyHeading="Adam jackab"
            cardBodySubHeading="041961734"
            cardFooterText="Edit Contact Information"
          />

          <DashboardCard
            parentCardClass="min-h-[150px] flex-1 hover:scale-110"
            imageClass='w-[50px] h-[50px] lg:w-[55px] lg:h-[55px]'
            className="h-full"
            cardBodyIcon={Stats}
            cardBodyHeading="Statistics overview"
          />
          
          <CarCard
              dealerHeadingClass="text-sm md:text-[18px] !text-[22px]"
              dealerTextClass="min-h-[150px] flex-1 rounded-[20px] hover:scale-110"
              dealerText={"View All Post"} icon={SeeMore}
            />          
        </div>

        <div className="flex flex-col md:flex-row gap-[25px] mb-[30px]">
          <HeroCard parentClass="!py-[30px] !px-[30px] !mb-0 !rounded-[20px] basis-full md:basis-[306px]">
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
          </HeroCard>

          <HeroCard parentClass="!py-[30px] !px-[30px] !mb-0 !rounded-[20px] flex-1">
            <div>
              <h2 className="font-normal text-sm md:text-md lg:text-[22px] text-black leading-tight mb-[0px]">Review statistics for the last 7 days</h2>
              <div className="relative">
                <BarChart />

                <div className="mt-[50px]">
                  <h3 className="font-normal text-sm md:text-md lg:text-[22px] text-black leading-[27px]">Legend:</h3>

                  <ul className="list-disc list-outside my-6 lg:my-[20px] pl-[15px]">
                    {barChartContent.map((regPoint) => {
                      return (
                        <li key={regPoint.id} className="font-medium text-[16px] text-[#627084] leading-[20px] mb-[10px]">
                          {regPoint.point}
                        </li>
                      )
                    })}
                  </ul>                  
                </div>
              </div>
            </div>
          </HeroCard>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-[25px] mb-[30px]">
          <HeroCard parentClass="!py-[30px] !px-[30px] !mb-0 !rounded-[20px]">
            <h2 className="font-medium text-md md:text-2xl lg:text-[25px] text-black leading-[28px] mb-[30px]">
              Registration Type And Additional Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-[18px] h-full lg:h-[300px]">
              <div>
                {renderMiniCards(dashboardRegistrationData[0], 0)}
              </div>

              {/* RIGHT GRID */}
              <div className="right-grid grid lg:grid-cols-3 md:grid-rows-2 gap-x-[20px] gap-y-[18px]">
                {dashboardRegistrationData.slice(1).map((card, index) => (
                  <div className="h-full" key={index}>
                    {renderMiniCards(card, index)}
                  </div>
                ))}
              </div>
            </div>
          </HeroCard>
        </div>

        <div className="mb-[60px] md:mb-[200px]">
          <HeroCard parentClass="!rounded-[20px] !py-[30px] !px-[30px] !mb-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-[25px]">
            <h2 className="capitalize font-medium text-md md:text-2xl lg:text-[20px] text-black leading-tight">
              Do you have a registered business and want to advertise as a merchant?</h2>

            <Button type="button" text="I want to continue advertising as a merchant"
              className="w-full hover:scale-110
                  flex justify-center !bg-[#B1222C] border-[#B1222C] font-semibold text-xs 
                  lg:text-[18px] !text-white h-[41px]" />
          </HeroCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Dashboard;