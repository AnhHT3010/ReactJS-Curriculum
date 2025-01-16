const SideFilterBooks = () => {
  return (
    <div className="w-1/5">
      <div>
        <div>
          <h3>Tác giả</h3>
          <div className="cursor-pointer">
            <input className="w-4 h-4" type="checkbox" id="a1" />
            <label className="cursor-pointer" htmlFor="a1">
              Author 1
            </label>
          </div>
        </div>
        <div>Price</div>
        <div>Rating</div>
      </div>
    </div>
  );
};

export default SideFilterBooks;
