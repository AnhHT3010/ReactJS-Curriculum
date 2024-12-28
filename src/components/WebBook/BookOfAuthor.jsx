import { BookOfAuthor } from "../../constants/books.const";
import BookItem from "./BookItem";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BookOfAuthor = () => {
  return (
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
  );
};

export default BookOfAuthor;
