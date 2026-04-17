import { HeroCard } from "@/components";

const Faqs = () => {
    return (
        <div>
            <HeroCard parentClass="py-[25px] px-[20px] md:px-[50px]">
                <div className="mb-[50px]">
                    <h2 className="text-2xl lg:text-[35px] font-medium text-[#000000] mb-[30px]">Quick help with choosing a section</h2>
                    <p className="font-roboto font-normal text-black text-sm lg:text-[18px] leading-[32px]">
                        When you want to post a new ad, you must first SELECT A SECTION. You select a section by selecting the tab with the name (CAR, MOTORCYCLE, COMMERCIAL VEHICLES ...) of the relevant section at the top of the page.
                    </p>
                </div>

                <div>
                    <div className="flex items-center justify-between gap-[20px] pb-[40px] border-b-1 border-black mb-[40px]">
                        <h6 className="font-medium text-sm lg:text-[20px] text-black leading-[30px]">Do you advertise spare parts, equipment, upgrades, attachments for machinery?</h6>
                        <svg className="rotate-360 min-w-[35px] hover:opacity-50 cursor-pointer" width="40" height="40" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24.5" cy="24.5" r="24.5" fill="black" fill-opacity="0.2" />
                            <path d="M31.3806 18.62C31.3806 18.0677 30.9329 17.62 30.3806 17.62L21.3806 17.62C20.8283 17.62 20.3806 18.0677 20.3806 18.62C20.3806 19.1723 20.8283 19.62 21.3806 19.62L29.3806 19.62L29.3806 27.62C29.3806 28.1723 29.8283 28.62 30.3806 28.62C30.9329 28.62 31.3806 28.1723 31.3806 27.62L31.3806 18.62ZM17.6406 31.36L18.3477 32.0671L31.0877 19.3271L30.3806 18.62L29.6735 17.9129L16.9335 30.6529L17.6406 31.36Z" fill="black" />
                        </svg>
                    </div>

                    <div>
                        <div className="flex items-center justify-between gap-[20px]">
                            <h6 className="font-medium text-sm lg:text-[20px] text-black leading-[30px]">Are you advertising as an individual?</h6>
                            <svg className="rotate-180 min-w-[35px] hover:opacity-50 cursor-pointer" width="40" height="40" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24.5" cy="24.5" r="24.5" fill="black" fill-opacity="0.2" />
                                <path d="M31.3806 18.62C31.3806 18.0677 30.9329 17.62 30.3806 17.62L21.3806 17.62C20.8283 17.62 20.3806 18.0677 20.3806 18.62C20.3806 19.1723 20.8283 19.62 21.3806 19.62L29.3806 19.62L29.3806 27.62C29.3806 28.1723 29.8283 28.62 30.3806 28.62C30.9329 28.62 31.3806 28.1723 31.3806 27.62L31.3806 18.62ZM17.6406 31.36L18.3477 32.0671L31.0877 19.3271L30.3806 18.62L29.6735 17.9129L16.9335 30.6529L17.6406 31.36Z" fill="black" />
                            </svg>
                        </div>
                        <p className="font-roboto font-normal text-black text-sm lg:text-[18px] leading-[32px]">To avoid violations of the law, especially the "Act on the Prevention of Illegal Work and Employment", the "Industrial Property Act", the "Law on the Protection of Competition" and the "Law on Consumer Protection", advertising in certain sections may be additionally limited or available only to traders with registered activities. The number of advertisements may be additionally limited to avoid illegal work.</p>
                    </div>
                </div>
            </HeroCard>
        </div>
    )
}

export default Faqs