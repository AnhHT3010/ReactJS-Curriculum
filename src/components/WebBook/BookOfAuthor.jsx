import BookItem from "./BookItem";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AuthorCard } from "../../constants/bookauthor.const";

const BookOfAuthor = () => {
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={2}
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
      {AuthorCard.map((book) => (
        <SwiperSlide key={book.id}>
          <BookItem book={book} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BookOfAuthor;
