import { useState } from "react";
import { categoryData } from "../../constants/categories.const";

const SideFilterBooks = () => {
  const [filter, setFilter] = useState({
    author: "",
    price: {
      min: 0,
      max: 5,
    },
    rating: "",
  });
  const handleAuthorFilter = (key, value) => {
    setFilter({ ...filter, [key]: `${filter.author},${value}` });
  };
  console.log(filter);
  return (
    <div className="w-1/5 flex flex-col gap-4">
      <div>
        <h3 className="font-semibold">Tác giả</h3>
        <div className="flex flex-wrap flex-row gap-4 mt-3">
          {categoryData.map((item, index) => (
            <div
              className="cursor-pointer"
              onClick={() => handleAuthorFilter("author", item.authorName)}
              key={item.id}
            >
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id={item.authorName + index}
              />
              <label
                className="cursor-pointer"
                htmlFor={item.authorName + index}
              >
                {item.authorName}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold">Giá</h3>
        <div className="flex flex-wrap flex-row gap-2 mt-3">
          <div className="cursor-pointer border-2 border-solid border-[#fbeae9] hover:bg-[#fbeae9] text-center px-4 py-2  rounded-3xl">
            💵 dưới 100$
          </div>
          <div className="cursor-pointer border-2 border-solid border-[#fbeae9] hover:bg-[#fbeae9] text-center px-4 py-2  rounded-3xl">
            💵 100$-500$
          </div>
          <div className="cursor-pointer border-2 border-solid border-[#fbeae9] hover:bg-[#fbeae9] text-center px-4 py-2  rounded-3xl">
            💵 500$-1000$
          </div>
          <div className="cursor-pointer border-2 border-solid border-[#fbeae9] hover:bg-[#fbeae9] text-center px-4 py-2  rounded-3xl">
            💵 trên 1000$
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold">Đánh giá</h3>
        <div className="flex flex-wrap flex-row gap-4 mt-3">
          <div className="cursor-pointer">
            <input className="w-4 h-4 mr-2" type="checkbox" id="s1" />
            <label className="cursor-pointer" htmlFor="s1">
              Từ 5 ⭐
            </label>
          </div>
          <div className="cursor-pointer">
            <input className="w-4 h-4 mr-2" type="checkbox" id="s2" />
            <label className="cursor-pointer" htmlFor="s2">
              Từ 4 ⭐
            </label>
          </div>
          <div className="cursor-pointer">
            <input className="w-4 h-4 mr-2" type="checkbox" id="s3" />
            <label className="cursor-pointer" htmlFor="s3">
              Từ 3 ⭐
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideFilterBooks;
