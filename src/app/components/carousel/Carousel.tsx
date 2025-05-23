import Image from "next/image";


import BookDayBanner1 from "../../assets/images/book-day-banner.jpg";
import BookDayBanner2 from "../../assets/images/book-day-banner-2.jpg";
import BookDayBanner3 from "../../assets/images/book-day-banner-3.jpg";


const images = [BookDayBanner1, BookDayBanner2, BookDayBanner3];



const Carousel = () => {
    return (
        <>

            <div className="relative cursor-pointer">
                    {images.map((src, index) => (
                        <Image
                        key={index}
                        src={src}
                        alt={`Banner ${index + 1}`}
                        width={1200}
                        height={400}
                        className={`max-w-[94%] h-auto rounded-[18px] object-cover transition-opacity duration-500 ${
                            index === 0 ? "opacity-100" : "opacity-0 absolute top-0 left-0"
                        }`}
                        data-index={index}
                        />
                    ))}
            </div>

            <div className="flex items-center justify-center gap-2 mt-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className="w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-600 transition-all cursor-pointer"
                        onClick={() => switchBanner(index)}
                        data-index={index}
          />
        ))}
      </div>
        </>
    )
}


function switchBanner(index: number) {
  const banners = document.querySelectorAll("[data-index]");
  banners.forEach((banner) => {
    const bannerIndex = parseInt(banner.getAttribute("data-index") ?? "0");
    
    if (banner.tagName === "IMG") {
      banner.classList.toggle("opacity-100", bannerIndex === index);
      banner.classList.toggle("opacity-0", bannerIndex !== index);
    }
  });
}

export default Carousel;