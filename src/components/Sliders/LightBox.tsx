import {
    Car1,
    Car2,
    Car3,
    Car4,
    Car5,
} from "@/assets";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);

    const images = [Car1, Car2, Car3, Car4, Car5];
    const slides = images.map((img) => ({ src: img }));

    return (
        <div className="bg-white rounded-xl shadow-md w-full max-w-[700px] mx-auto">

            {/* BIG IMAGE WRAPPER */}
            <div
                className="relative group cursor-pointer"
                onClick={() => setOpen(true)}
            >
                <img
                    src={images[activeIndex]}
                    className="w-full h-[220px] sm:h-[300px] md:h-[450px] object-cover rounded-lg"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300 rounded-lg"></div>

                {/* ZOOM ICON */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <i className="fa fa-search-plus text-white text-5xl sm:text-6xl md:text-7xl"></i>
                </div>
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-2 mt-3 overflow-x-auto">
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        className={`w-[90px] h-[70px] object-cover rounded cursor-pointer border-2 transition ${activeIndex === i
                            ? "border-[#253A86]"
                            : "border-transparent hover:border-gray-300"
                            }`}
                        onClick={() => setActiveIndex(i)}
                    />
                ))}

                {/* VIEW MORE BOX */}
                <div
                    className="min-w-[90px] h-[70px] flex flex-col items-center 
                    justify-center bg-black rounded cursor-pointer hover:opacity-80 transition"
                    onClick={() => setOpen(true)}
                >
                    <span className="text-lg text-white"><i className="fa fa-2x fa-camera px-3 pt-2 pb-1"></i></span>
                    <span className="text-[10px] sm:text-xs text-white font-semibold">View All</span>
                </div>
            </div>

            {/* LIGHTBOX */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={activeIndex}
            />
        </div>
    );
};

export default Gallery;