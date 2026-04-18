import type { TabsProps } from "@/components/types";
import { Link, useLocation } from "react-router-dom";

const Tabs = ({
  className,
  tabs_list,
  children,
  tabContainerClass,
  tabItemClass,
  tabItemClassInner,
  activeTabClass,
  inActiveTabClass,
  activeTextClass,
  inactiveTextClass,
}: TabsProps) => {
  const location = useLocation();

  return (
    <div className="relative">
      <div className={className}>
        <ul className={`list-none ${tabContainerClass}`}>
          {tabs_list?.map((tab) => {
            const isActive = location.pathname === tab.path;

            return (
              <li
                key={tab.id}
                className={`p-2 flex items-center justify-center lg:max-w-[190px] h-[42px] border border-[#FFFFFF] border-l-0 first:border-l group cursor-pointer transition-all duration-300 ease-in-out
                ${tabItemClass}
                ${isActive ? activeTabClass : inActiveTabClass}`}
              >
                <Link
                  to={tab.path || "/"}
                  className={`flex items-center justify-center gap-2 font-semibold text-[10px] xxl:text-[14px] capitalize transition-all duration-200
                  ${tabItemClassInner}
                  ${isActive ? activeTextClass : inactiveTextClass}`}
                >
                  {tab.icon && <span><img src={tab.icon as string} alt="Car" /></span>}
                  
                  {tab.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {children && (
        <div>
          <div className="w-full max-w-[972px] mx-auto bg-white text-black rounded-[20px]">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabs;