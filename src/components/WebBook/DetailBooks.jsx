import TabDetail from "./TabDetail";

const DetailBooks = () => {
  return (
    <div className="px-[10%] py-24">
      <div className="flex gap-8">
        <div className="border-[1px] border-[#00000024] border-solid p-5 rounded-xl">
          <img
            src="https://lh3.googleusercontent.com/imD708U0BRsFiqrJqyEJRTpGNnHZPInN5cqJxRZ5Jx6tC-X3u6uifaPNsYzOEBmrF0Gx8g0PWhMT6NpsVxrzI8eJOb9UOtwNEQ=rw-w600"
            alt=""
          />
        </div>
        <div className="border-[1px] border-[#00000024] border-solid p-5 rounded-xl flex-col flex gap-5 h-auto">
          <h2 className="font-bold text-4xl">Dire Wolf Stakes</h2>
          <p>
            <span className="text-gray-400 ">:Author:</span> Hailey Nguyen
          </p>
          <hr className="w-2/3 " />
          <p className="text-red-500 text-2xl py-3 font-medium">$513.00</p>
          <p className="text-slate-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <hr className="w-2/3 py-2" />
          <button className="bg-red-600 text-white w-fit px-7 py-2 rounded-full">
            <i className="fa-solid fa-basket-shopping"></i>Buy Now
          </button>
        </div>
      </div>
      <TabDetail />
    </div>
  );
};

export default DetailBooks;
