import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AuthorCard } from "../../constants/bookauthor.const";
import BookAuthorItem from "./BookAuthorItem";

const BookOfAuthor = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      className="flex-1 h-[400px]"
      modules={[Autoplay, Navigation]}
    >
      {AuthorCard.map((book) => (
        <SwiperSlide key={book.id}>
          <BookAuthorItem book={book} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BookOfAuthor;
