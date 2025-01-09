import TabDetail from "./TabDetail";

const DetailBooks = () => {
  return (
    <div className="px-[10%] py-24">
      <div className="flex">
        <div>
          <img
            src="https://lh3.googleusercontent.com/imD708U0BRsFiqrJqyEJRTpGNnHZPInN5cqJxRZ5Jx6tC-X3u6uifaPNsYzOEBmrF0Gx8g0PWhMT6NpsVxrzI8eJOb9UOtwNEQ=rw-w600"
            alt=""
          />
        </div>
        <div>
          <h2>Dire Wolf Stakes</h2>
          <p>
            <span>:Author:</span> Hailey Nguyen
          </p>
          <hr />
          <p>$513.00</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <hr />
          <button>
            <i className="fa-solid fa-basket-shopping"></i>Buy Now
          </button>
        </div>
      </div>
      <TabDetail />
    </div>
  );
};

export default DetailBooks;
