import React from "react";
import SideFilterBooks from "./SideFilterBooks";
import ResultFilterBook from "./ResultFilterBook";

const Shop = () => {
  return (
    <div className="pt-48 pb-24 px-[10%] flex flex-row min-h-screen">
      <SideFilterBooks />
      <ResultFilterBook />
    </div>
  );
};

export default Shop;
