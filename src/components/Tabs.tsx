
import type { TabsProps } from "@/components/types";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
  variant = "route",
  activeTab,
  onClick,
}: TabsProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="relative">
      <div className={className}>
        <ul className={`list-none ${tabContainerClass}`}>
          {tabs_list?.map((tab) => {

            const isActive =
              variant === "route"
                ? (activeTab ? activeTab === tab.id : location.pathname === tab.path)
                : activeTab === tab.id;

            console.log(location.pathname, tab.path)

            return (
              <li
                key={tab.id}
                onClick={() =>
                  variant === "state" && onClick?.(tab.id)
                }
                className={`p-2 flex items-center justify-center text-center lg:max-w-[190px] h-[42px] border border-[#FFFFFF] border-l-0 first:border-l group cursor-pointer transition-all duration-300 ease-in-out
                ${tabItemClass}
                ${isActive ? activeTabClass : inActiveTabClass}`}
              >
                {variant === "route" ?
                  <Link
                    to={tab.path || "#"}
                    className={`flex items-center justify-center gap-2 font-semibold text-xs capitalize transition-all duration-200
                  ${tabItemClassInner}
                  ${isActive ? activeTextClass : inactiveTextClass}`}
                  >
                    {tab.icon && (
                      <span>
                        {typeof tab.icon === "string" ? (
                          <img src={tab.icon} alt="img" />
                        ) : (
                          <span className={`${location.pathname === "#" ? "homeActive" : "homeInActive"}`}>{tab.icon}</span>
                        )}
                      </span>
                    )}
                    {tab.label}
                  </Link>
                  : <div
                    className={`flex items-center justify-center gap-2 font-semibold text-[10px] xxl:text-[14px] capitalize transition-all duration-200
                  ${tabItemClassInner}
                  ${isActive ? activeTextClass : inactiveTextClass}`}
                  >
                    {tab.icon && (
                      <span>
                        {typeof tab.icon === "string" ? (
                          <img src={tab.icon} alt="img"
                            onClick={() => {
                              navigate(`${tab.href}`);
                            }} />
                        ) : (
                          <span className={`${location.pathname === "#" ? "homeActive" : "homeInActive"}`}>{tab.icon}</span>
                        )}
                      </span>
                    )}
                    {tab.label}
                  </div>}
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