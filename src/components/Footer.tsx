import Logo from "../assets/Logo.svg";
import Facebook from "../assets/Facebook.svg";
import Insta from "../assets/Instagram.svg";
import Twitter from "../assets/Twitter.svg";
import Web from "../assets/Web.svg";
import { footerLinks } from '@/helper/data';
// import Ellipse from "../assets/Ellipse.svg";

const Footer = () => {
    return (
        <div className='bg-[#253A86] py-[60px] px-[30px]'>
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(400px,1.5fr)_repeat(3,1fr)] gap-[30px] lg:gap-[60px] max-w-[1200px] mx-auto">
                <div>
                    {/* Logo */}
                    <a target="_self" href="https://kolica-landing-page.web.app">
                        <img src={Logo} alt="logo" className="mb-[20px] w-[104px] h-[38px]" />
                    </a>

                    <p className="mb-[15px] font-normal text-[16px] text-white leading-[30px]">The most trusted automotive marketplace. Find your perfect vehicle from thousands of verified listings.</p>
                    <p className="mb-[15px] font-normal text-[16px] text-white leading-[30px]">123 456-7890</p>
                    <p><a href="mailto:someone@example.com" className="block mb-[15px] font-normal text-[16px] text-white leading-[30px] hover:underline decoration-1 w-max">info@601printing.com</a></p>
                    <p className="mb-[15px] font-normal text-[16px] text-white leading-[30px]">601 Print Street Your City, ST 12345</p>
                </div>

                {footerLinks.map((footerItems, index) => {
                    return <>
                        <div key={index}>
                            <h6 className="mb-[20px] font-semibold text-[22px] text-white leading-[27px]">{footerItems.heading}</h6>
                            <p><a href={footerItems.link1} className="block mb-[15px] font-normal text-[16px] text-white leading-[20px] hover:underline decoration-1 w-max">{footerItems.link1}</a></p>
                            <p><a href={footerItems.link2} className="block mb-[15px] font-normal text-[16px] text-white leading-[20px] hover:underline decoration-1 w-max">{footerItems.link2}</a></p>
                            <p><a href={footerItems.link3} className="block mb-[15px] font-normal text-[16px] text-white leading-[20px] hover:underline decoration-1 w-max">{footerItems.link3}</a></p>
                            <p><a href={footerItems.link4} className="block mb-[15px] font-normal text-[16px] text-white leading-[20px] hover:underline decoration-1 w-max">{footerItems.link4}</a></p>
                        </div>
                    </>
                })}
            </div>

            <div className="max-w-[1200px] mx-auto">
                <hr className="border-[#FFFFFF] w-full my-[30px]" />

                <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                    <p className="font-normal text-[14px] lg:text-[18px] leading-tight text-white">© 2025 AutoMarket. All Rights Reserved.</p>
                    <div className="flex items-center justify-between gap-3">
                        <p className="font-normal text-[14px] lg:text-[18px] leading-tight text-white pr-[10px]">Follow On</p>
                        <a target="_blank" href="/facebook" className="transition-all duration-200 hover:scale-110">
                            <img src={Facebook} alt="fb" className="w-[40px] h-[40px]" />
                        </a>
                        <a target="_blank" href="/instagram" className="transition-all duration-200 hover:scale-110">
                            <img src={Insta} alt="ins" className="w-[40px] h-[40px]" />
                        </a>
                        <a target="_blank" href="/web" className="transition-all duration-200 hover:scale-110">
                            <img src={Web} alt="ellp" className="w-[40px] h-[40px]" />
                        </a>
                        <a target="_blank" href="/twitter" className="transition-all duration-200 hover:scale-110">
                            <img src={Twitter} alt="twt" className="w-[40px] h-[40px]" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer