// Mỗi element sẽ tương ứng với 1 cái box,
// padding là khoảng cách từ nội dung đến viền,
// border là viền,
// margin là khoảng cách từ box này đến box khác
import { Link } from "react-router-dom";
export function Header() {
  return (
    <div className="flex fixed bg-white z-50 w-full justify-between px-40 py-6 items-center shadow-md">
      <div>
        <img src="https://lh3.googleusercontent.com/bhg6FoxZPA5S6q50_Gmu6YgMt2GcKxpjsbnaRvvHUwSV9JSnAj83TpbJEHIJjgKnbNoZmM7Mnx0pBlUau5CG2yIOG5v7rGc=w100-rw" />
      </div>
      <ul className="flex gap-8">
        <li className="text-[#e04943ff] cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-[#e04943ff] cursor-pointer">
          <Link to="/about-us">About us</Link>
        </li>
        <li className="hover:text-[#e04943ff] cursor-pointer">Shop</li>
        <li className="hover:text-[#e04943ff] cursor-pointer">Contact</li>
      </ul>
    </div>
  );
}
