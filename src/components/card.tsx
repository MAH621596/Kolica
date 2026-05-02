
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, CustomInput } from "@/components";
import type { Car_CardProps, Hero_CardProps, CategoriesCardProps, DashboardProps } from "@/components/types";

export const CarCard = ({
  image,
  heading,
  className,
  icon,
  price,
  dealerText,
  footerbutton,
  imageSizeClass,
  dealerTextClass,
  dealerHeadingClass,
}: Car_CardProps) => {
  return (
    dealerText ? <>
      <Link to="/" className={`flex flex-col items-center justify-center gap-[15px] bg-[#253A86] border border-[#253A86] rounded-[10px] transition-all duration-300 ease-in-out ${dealerTextClass}`}>
        <img className="w-[30px] h-[30px]"
          src={icon}
          alt="img" />
        <div className={`text-xl lg:text-[16px] xl:text-[18px] leading-[30px] text-white font-medium ${dealerHeadingClass}`}>{dealerText}</div>
      </Link>
    </>
      :
      <Link to="/product-detail">
        <div className={`group flex flex-col items-center justify-center cursor-pointer gap-0 h-[206px] w-[206px] bg-[#F1F1F1] border border-[#C8C8C8] rounded-[10px] ${className}`}>
          <div className="card_header flex items-center justify-center h-[40px]">
            <span className="font-bold text-sm leading-[20px] text-[#000000] group-hover:underline decoration-1">{heading}</span>
          </div>

          <div className="card_body relative">
            <img
              src={image}
              alt="img"
              className={`w-full object-cover transition-all duration-300 group-hover:scale-98 ${imageSizeClass ? imageSizeClass :
                "h-[125px] w-[281px]"
                }`}
            />
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300 rounded-lg"></div>

            {/* ZOOM ICON */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <i className="fa fa-search text-white text-lg"></i>
            </div>
          </div>
          <div className="card_footer flex items-center justify-center h-[40px] w-full">
            {footerbutton ? <Button type="button" text="Add" className="hover:scale-110 w-full max-w-[233px] flex justify-center
                     !bg-[#B1222C] border-[#B1222C] font-semibold text-xs lg:text-[16px] !text-white h-[35px] 
                     " />
              :
              <p className="font-bold text-sm leading-[20px] text-[#000000] group-hover:text-gray-600">{price}</p>
            }
          </div>
        </div>
      </Link>
  );
}

export const CategoriesCard = ({
  icon,
  subcategory,
  className,
}: CategoriesCardProps) => {
  return (
    <Link to="/">
      <div className={`px-4 group flex flex-col items-center justify-center cursor-pointer gap-[28px] 
                h-[177px] bg-[#F1F1F1] border border-[#F1F1F1] hover:border-[#253A86] rounded-[20px]
                transition-all duration-300 ease-in-out ${className}`}>
        <div>{icon}</div>
        <h4 className="text-center font-medium text-base leading-tight text-black group-hover:text-[#253A86] group-hover:font-semibold">{subcategory}</h4>
      </div>
    </Link>
  );
}

export const DashboardCard = ({
  children,
  className,
  svgClass,
  imageClass,
  headerClass,
  cardBodyIcon,
  cardHeaderText,
  cardFooterText,
  parentCardClass,
  cardBodyHeading,
  cardHeadingClass,
  cardSubHeadingClass,
  cardBodySubHeading,
}: DashboardProps) => {
  return (
    <div className={`bg-white rounded-[20px] cursor-pointer transition-all duration-300 ease-in-out ${parentCardClass}`}>
      {cardHeaderText &&
        <div className={`px-[30px] pt-[30px] text-sm lg:text-[18px] font-medium capitalize text-black ${headerClass}`}>
          <h4>{cardHeaderText}</h4>
        </div>}

      {(cardBodyHeading || cardBodySubHeading) &&
        <div className={`flex items-center justify-start gap-[18px] py-[30px] px-[30px] ${className}`}>
          {cardBodyIcon && (
            <span>
              {typeof cardBodyIcon === "string" ? (
                <img src={cardBodyIcon} alt="img" className={`${imageClass}`} />
              ) : (
                <span className={`${svgClass}`}>{cardBodyIcon}</span>
              )}
            </span>
          )}

          <div className={`text-black`}>
            <div className={`text-sm md:text-[18px] lg:text-[22px] font-medium capitalize leading-[25px] ${cardHeadingClass}`}>{cardBodyHeading}</div>
            {cardBodySubHeading && <div className={`text-[14px] lg:text-[18px] font-normal capitalize text-[#94A3B3] leading-[25px] ${cardSubHeadingClass}`}>{cardBodySubHeading}</div>}
          </div>
        </div>}

      {children && <>{children}</>}

      {cardFooterText &&
        <div className="leading-[28px] px-[30px] pb-[30px] text-sm lg:text-[18px] font-medium capitalize text-black">
          <h4>{cardFooterText}</h4>
        </div>}
    </div>
  )
}

export const HeroCard = ({
  image,
  heading,
  paragraph,
  buttonText,
  smallbuttonText,
  className,
  list,
  children,
  parentClass,
}: Hero_CardProps) => {

  const [inpValue, setInpValue] = useState("");

  return (
    image ? (
      <div
        className={`hidden md:flex flex-col lg:flex-row items-center justify-between gap-8 ${className}`}
      >
        {/* TEXT SECTION */}
        <div className="w-full lg:w-[50%] py-4 text-center lg:text-left">
          <h3 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight text-white mb-4 lg:mb-[30px]">
            {heading}
          </h3>

          <p className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-tight text-white mb-6 lg:mb-[30px]">
            {paragraph}
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button
              type="button"
              text={buttonText}
              className="!bg-[#B1222C] font-medium text-lg md:text-xl lg:text-[30px] border-[#B1222C] 
              !text-white w-[180px] md:w-[220px] lg:w-[250px] h-[50px] md:h-[60px] hover:scale-110"
            />
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-end relative">
          <img
            src={image}
            alt="hero"
            className="w-full object-contain max-w-[680px] lg:max-w-full lg:min-w-[620px] lg:ml-[118px]"
          />
          <Button
            type="button"
            text={smallbuttonText}
            className="absolute bottom-[60px] md:right-[130px] lg:bottom-[50px] lg:right-[10px] 
            !bg-[#B1222C] 
            font-bold text-[10px] lg:text-[14px] border-[#B1222C] p-0 !text-white w-[167px] h-[30px] 
            hover:scale-110"
          />
        </div>
      </div>
    )
      : children ? <>
        <div className={`w-full max-w-[972px] mx-auto px-[28px] py-[46px] md:px-[45px] md:py-[50px] md:mb-[50px] relative z-10 bg-white text-black md:rounded-[20px] ${parentClass}`}>{children}</div>
      </> : (
        <>
          <div
            className={`flex items-center justify-between gap-8 ${className}`}
          >
            {/* TEXT SECTION */}
            <div className="w-full text-start md:text-left">
              <h3 className="font-medium text-[21px] leading-tight text-[#253A86] mb-4 md:mb-[30px]">
                {heading}
              </h3>

              <div className="">
                <ul className="list-none grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0">
                  {list?.map((item, index) => (
                    <li>
                      <Link to={`/${item}`} target="_blank" key={index} className="font-normal text-sm leading-tight text-black transition-all duration-200 hover:text-[#253A86]">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="border-[#000000] w-full my-[30px]" />

              <div className="flex items-center justify-start">
                <i className="fa fa-search text-sm"></i>
                <CustomInput
                  type="text"
                  className="!text-sm w-full border-0 h-[42px] pl-3 text-black placeholder:text-black"
                  placeholder="See an overview of all brands from A to Z"
                  value={inpValue}
                  onChange={(val) => { setInpValue(val as string) }}
                />
              </div>
            </div>
          </div>
        </>
      )
  );
};

export const ListingCard = ({
  className,
  products_list,
  imageSizeClass,
}: Car_CardProps) => {
  return (
    <Link to="/product-detail">
      {products_list?.map((product, index) => {
        return (
          <>
            <div key={index} className={`flex flex-col sm:flex-row items-start justify-between cursor-pointer gap-4 lg:gap-0 py-[8px] border-b border-b-[#C8C8C8] ${className}`}>
              <div className="group relative border border-[#C8C8C8] rounded-none pb-6 p-1 w-full md:w-auto">
                <img
                  src={product.image}
                  alt="img"
                  className={`w-full object-cover transition-all duration-300 group-hover:scale-98 ${imageSizeClass ? imageSizeClass :
                    "h-[140px] sm:h-[125px] sm:max-w-[160px]"
                    }`}
                />
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300 rounded-lg"></div>

                {/* ZOOM ICON */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <i className="fa fa-search text-white text-lg"></i>
                </div>
              </div>

              <div className="w-full md:w-auto text-center sm:text-start">
                <h2 className="font-bold text-sm lg:text-base text-black leading-[27px]">{product.heading} </h2>
                <ul className="list-none sm:list-disc list-inside">
                  {product.list?.map((P_list, Qindex) => {
                    return (
                      <li key={Qindex} className="font-roboto font-normal text-black text-sm leading-tight">
                        {P_list}
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className={`sm:flex items-start gap-4 w-full md:w-auto`}>
                <div>
                  <div className="mb-[16px] bg-white border border-[#C8C8C8] rounded-none h-[90px]">
                    <div className="flex items-center justify-center gap-[18px] py-[20px] px-[35px] h-full">
                      <div className="text-black">
                        <div className="text-sm md:text-[20px] capitalize leading-[25px] 
                          font-bold text-center">{product.mainPrice}</div>
                        <div className="text-[14px] lg:text-[16px] capitalize text-[#94A3B3] leading-[25px] font-bold text-center">
                          {product.discountedPrice}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-[8px] pl-[10px] flex items-center justify-center md:justify-start cursor-pointer hover:opacity-80">
                    <span className="text-black text-sm leading-tight font-normal"><i className="fa fa-calendar text-base" aria-hidden="true"></i> {product.fromDate}</span>
                  </div>
                  <div className="mb-[8px] pl-[10px] flex items-center justify-center md:justify-start cursor-pointer hover:opacity-80">
                    <span className="text-black text-sm leading-tight font-normal"><i className="fa fa-pencil-square text-base" aria-hidden="true"></i> {product.toDate}</span>
                  </div>
                  <div className="mb-[8px] pl-[10px] flex items-center justify-center md:justify-start cursor-pointer hover:opacity-80">
                    <span className="text-black text-sm leading-tight font-normal"><i className="fa fa-calendar-times-o text-base" aria-hidden="true"></i> Stock age: {product.stockAge}</span>
                  </div>
                </div>

                <div className="hidden sm:block border border-[#C8C8C8] h-5 w-5">
                </div>
              </div>
            </div>
          </>
        )
      })}
    </Link>
  );
}