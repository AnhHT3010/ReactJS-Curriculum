const SideFilterBooks = () => {
  return (
    <div className="w-1/5">
      <div>
        <div>
          <h3>Tác giả</h3>
          <div className="cursor-pointer w-1/2">
            <input className="w-4 h-4" type="checkbox" id="a1" />
            <label className="cursor-pointer" htmlFor="a1">
              Author 1
            </label>
          </div>
          <div className="cursor-pointer w-1/2">
            <input className="w-4 h-4" type="checkbox" id="a1" />
            <label className="cursor-pointer" htmlFor="a1">
              Author 2
            </label>
          </div>
          <div className="cursor-pointer w-1/2">
            <input className="w-4 h-4" type="checkbox" id="a1" />
            <label className="cursor-pointer" htmlFor="a1">
              Author 3
            </label>
          </div>

          <div className="cursor-pointer w-1/2">
            <input className="w-4 h-4" type="checkbox" id="a1" />
            <label className="cursor-pointer" htmlFor="a1">
              Author 4
            </label>
          </div>
        </div>
        <div className="">
          Price
          <div classname="border-2 border-solid border-gray-500 text-center p-2 text-container">
            dưới 80000
          </div>
          <div classname="">80000-130000</div>
          <div classname="">130000-230000</div>
          <div classname="">trên 230000</div>
        </div>

        <div>Rating</div>
      </div>
    </div>
  );
};

export default SideFilterBooks;
