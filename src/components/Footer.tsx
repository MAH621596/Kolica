import Logo from "../assets/Logo.svg";
import Facebook from "../assets/Facebook.svg";
import Insta from "../assets/Instagram.svg";
import Ellipse from "../assets/Ellipse.svg";
import Twitter from "../assets/Twitter.svg";
import Web from "../assets/Web.svg";
import { footerLinks } from '@/helper/data';

const Footer = () => {
    return (
        <div className='bg-[#253A86] py-[60px] px-[30px]'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[60px] max-w-[1200px] mx-auto">
                <div>
                    {/* Logo */}
                    <img src={Logo} alt="logo" className="mb-[30px] w-[104px] h-[38px]" />
                    <p className="mb-[30px] font-normal text-[16px] text-white leading[30px]">The most trusted automotive marketplace. Find your perfect vehicle from thousands of verified listings.</p>
                    <p className="mb-[30px] font-normal text-[16px] text-white leading[30px]">123 456-7890</p>
                    <p className="mb-[30px] font-normal text-[16px] text-white leading[30px]">info@601printing.com</p>
                    <p className="mb-[30px] font-normal text-[16px] text-white leading[30px]">601 Print Street Your City, ST 12345</p>
                </div>

                {footerLinks.map((footerItems, index) => {
                    return <>
                        <div key={index}>
                            <h6 className="mb-[30px] font-semibold text-[22px] text-white leading[27px]">{footerItems.heading}</h6>
                            <p className="mb-[20px] font-normal text-[16px] text-white leading[20px]">{footerItems.link1}</p>
                            <p className="mb-[20px] font-normal text-[16px] text-white leading[20px]">{footerItems.link2}</p>
                            <p className="mb-[20px] font-normal text-[16px] text-white leading[20px]">{footerItems.link3}</p>
                            <p className="mb-[20px] font-normal text-[16px] text-white leading[20px]">{footerItems.link4}</p>
                        </div>
                    </>
                })}
            </div>

            <hr className="border-[#FFFFFF] w-full my-[30px]" />

              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <p className="font-normal text-[14px] lg:text-[18px] leading-tight text-white">© 2025 AutoMarket. All Rights Reserved.</p>
                <div className="flex items-center justify-between gap-3">
                    <p className="font-normal text-[14px] lg:text-[18px] leading-tight text-white pr-[10px]">Follow On</p>
                    <img src={Facebook} alt="fb" />
                    <img src={Insta} alt="ins" />
                    <img src={Web} alt="ellp" />
                    <img src={Twitter} alt="twt" />
                </div>
              </div>
        </div>
    )
}

export default Footer