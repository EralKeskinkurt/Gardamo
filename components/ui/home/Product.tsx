import Image from "next/image";
import { GoHeart, GoHeartFill } from "react-icons/go";
interface Props {
  product: {
    name: string;
    description: string;
    image: any;
    price: number;
    isWish: boolean;
  };
}

export default function Product({
  product: { name, description, image, price, isWish },
}: Props) {
  return (
    <li className="w-full flex flex-col relative bg-accent rounded-md overflow-hidden shadow-md">
      <Image
        src={image}
        alt="default product image"
        width={400}
        height={400}
        className="w-full object-cover max-h-[70%]"
      />
      <span className="absolute top-2 right-2 text-3xl cursor-pointer">
        <GoHeart
          className={`absolute right-1 transition-transform ${
            isWish ? "scale-0" : "scale-100"
          }`}
        />
        <GoHeartFill
          className={`absolute right-1 transition-transform text-red-500 ${
            isWish ? "scale-100" : "scale-0"
          }`}
        />
      </span>
      <div className="p-2 flex flex-col items-start justify-start w-full h-full">
        <h3 className="text-sm font-semibold text-text">{name}</h3>
        <p className="truncate w-full text-xs flex-1 text-text">
          {description}
        </p>
        <div className="flex items-center w-full">
          <span className="flex-1 text-lg text-text font-light">
            ${price}.00
          </span>
        </div>
      </div>
    </li>
  );
}
