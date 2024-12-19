const BookList = () => {
  return (
    <div className="bg-[#fbeae9ff] px-[10%] py-[5%]">
      <h2 className="text-[36px] text-[#2c3136] font-bold text-center mb-8">
        Featured Books
      </h2>
      <div className="flex gap-5">
        <div className="flex flex-col items-center">
          <div>
            <img
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1582216107l/41555962.jpg"
              className="w-[200px] h-[300px] object-cover"
            />
          </div>
          <p className="font-bold text-[20px] mt-4 text-center">
            Each of Us a Desert
          </p>
          <p className="text-gray-600 text-center">Mark Oshiro</p>
          <p className="text-[#2c3136] font-bold mt-2">$825</p>
          <div className="flex justify-center items-center mt-2">
            ⭐⭐⭐⭐⭐
          </div>
          <button className="bg-[#2c3136] text-white px-4 py-2 rounded-lg mt-4 hover:bg-black transition-all duration-300">
            Buy Now
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <img
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586800498l/53168757.jpg"
              className="w-[200px] h-[300px] object-cover"
            />
          </div>
          <p className="font-bold text-[20px] mt-4 text-center">
            Long Live the Post Horn!
          </p>
          <p className="text-gray-600 text-center">Vigdis Hjorth</p>
          <p className="text-[#2c3136] font-bold mt-2">$178</p>
          <div className="flex justify-center items-center mt-2">⭐⭐⭐⭐</div>
          <button className="bg-[#2c3136] text-white px-4 py-2 rounded-lg mt-4 hover:bg-black transition-all duration-300">
            Buy Now
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1609095173i/50202953.jpg"
              className="w-[200px] h-[300px] object-cover"
            />
          </div>
          <p className="font-bold text-[20px] mt-4 text-center">Piranesi</p>
          <p className="text-gray-600 text-center">Susanna Clarke</p>
          <p className="text-[#2c3136] font-bold mt-2">$54</p>
          <div className="flex justify-center items-center mt-2">⭐⭐⭐⭐</div>
          <button className="bg-[#2c3136] text-white px-4 py-2 rounded-lg mt-4 hover:bg-black transition-all duration-300">
            Buy Now
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <img
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1578586120l/49247292.jpg"
              className="w-[200px] h-[300px] object-cover"
            />
          </div>
          <p className="font-bold text-[20px] mt-4 text-center">
            Over the Woodward Wall
          </p>
          <p className="text-gray-600 text-center">Annie Leibovitz</p>
          <p className="text-[#2c3136] font-bold mt-2">$312.45</p>
          <div className="flex justify-center items-center mt-2">
            ⭐⭐⭐⭐⭐
          </div>
          <button className="bg-[#2c3136] text-white px-4 py-2 rounded-lg mt-4 hover:bg-black transition-all duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookList;
