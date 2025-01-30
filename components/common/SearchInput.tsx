import { FaSearch } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import PopularProduct from "../ui/PopularProduct";

export default function Input() {
  return (
    <div tabIndex={1} className="w-[28rem] relative group">
      <label className="w-full bg-white text-text flex items-center text-end rounded-full shadow-sm overflow-hidden py-3 px-3 cursor-text">
        <input
          type="text"
          id="search"
          className="w-[85%] h-full text-sm outline-none"
          autoComplete="off"
          placeholder="Search for a product or category."
        />
        <FaSearch className="text-secondary ml-auto cursor-pointer" size={20} />
      </label>
      <div className="group-focus-within:flex overflow-hidden hidden w-[40rem] right-0 top-14 absolute h-[22rem] flex-col items-start justify-start gap-3 text-text z-10 bg-white shadow-md rounded-lg px-6 py-5">
        <h3 className="font-semibold">Popular searches</h3>
        <ul className="w-full flex flex-wrap text-sm item-center justify-start gap-3">
          <li className="border-2 border-transparent hover:border-secondary flex items-center gap-1 bg-secondary/20 hover:text-secondary rounded-md transition-all font-medium px-4 py-1 cursor-pointer">
            <FcRating size={18} />
            Fur
          </li>
          <li className="border-2 border-accent hover:border-secondary hover:text-secondary rounded-md transition-all font-medium px-4 py-1 cursor-pointer">
            English home
          </li>
          <li className="border-2 border-accent hover:border-secondary hover:text-secondary rounded-md transition-all font-medium px-4 py-1 cursor-pointer">
            Shirt
          </li>
          <li className="border-2 border-accent hover:border-secondary hover:text-secondary rounded-md transition-all font-medium px-4 py-1 cursor-pointer">
            Pierre cardin
          </li>
          <li className="border-2 border-accent hover:border-secondary hover:text-secondary rounded-md transition-all font-medium px-4 py-1 cursor-pointer">
            Bra
          </li>
          <li className="border-2 border-accent hover:border-secondary hover:text-secondary rounded-md transition-all font-medium px-4 py-1 cursor-pointer">
            Marker
          </li>
        </ul>
        <h3 className="font-semibold">Popular product</h3>
        <PopularProduct />
      </div>
    </div>
  );
}
