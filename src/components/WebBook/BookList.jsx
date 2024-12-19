import { bookList } from "../../constants/books.const";
import BookItem from "./BookItem";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const BookList = () => {
  return (
    <div className="px-[10%] py-[5%] bg-[#fff7f0]">
      <h2 className="text-[36px] text-[#2c3136] font-bold text-center mb-8">
        Featured Books
      </h2>
      <div className="flex gap-5 px-[10%]">
        <Swiper
          spaceBetween={100}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[Autoplay, Navigation]}
        >
          {bookList.map((book) => (
            <SwiperSlide key={book.id}>
              <BookItem book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#2c3136] text-white p-2 rounded-full"
          aria-label="Previous"
        >
          {/* Replace this icon with any desired one */}
          <span>➡️</span>
        </button>
        <button
          className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#2c3136] text-white p-2 rounded-full"
          aria-label="Next"
        >
          {/* Replace this icon with any desired one */}
          <span>↙️</span>
        </button>
      </div>
    </div>
  );
};

export default BookList;
