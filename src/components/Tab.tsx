import { useState } from "react";
import Button from "./Button";
import CustomSelect from "../components/CustomSelect";
import { tabsMenu, dropdownData, tabContent } from '@/helper/data';

function Tab() {
  const [activeTab, setActiveTab] = useState("Home");
  const content = tabContent[activeTab as keyof typeof tabContent];

  return (
    <div className="relative px-8">

      <div className="px-6 md:px-8">

        {/* 🔹 Tabs */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-0">
          {tabsMenu.map((tab) => (
            <Button
              key={tab.id}
              text={tab.label}
              onClick={() => setActiveTab(tab.id)}
              className={`w-[186px] h-[43px] mx-auto font-semibold text-sm leading-[22px] transition ${activeTab === tab.id
                ? "bg-white text-[#253A86]"
                : "text-white hover:bg-white/20"
                }`}
            />
          ))}
        </div>

        {/* 🔹 Tab Content */}
        <div className="bg-white py-[16px] px-[25px] md:py-[30px] md:px-[50px] shadow text-black">

          {content && (
            <div>
              <h2 className="text-2xl font-semibold text-[#000000] mb-[30px]">{content.title}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[25px] justify-center items-center">
                {dropdownData.map((dropdown) => {
                  return (
                    <>
                      <CustomSelect key={dropdown.id} options={dropdown.options} className={dropdown.id === 7 ? "!max-w-full md:col-span-2" : ""} />
                    </>
                  )
                })}

                <Button text={content.button_text} icon={<i className="fa fa-search"></i>} className="!bg-[#B1222C] border-[#B1222C] !text-white h-[41px]" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tab;