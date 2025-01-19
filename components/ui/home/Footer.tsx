import Image from "next/image";
import GardamoLogo from "@/public/logo.svg";

export default function Footer() {
  return (
    <footer className=" bg-accent text-text  w-full pt-24 pb-10">
      <div className="container mx-auto flex flex-wrap items-center gap-16 justify-between px-10">
        <div className="md:w-1/4">
          <div>
            <Image src={GardamoLogo} alt="Gardamo Logo" className="w-64 h-32" />
          </div>

          <p className="text-sm leading-relaxed">
            Gardamo is an e-commerce platform that offers high-quality products
            at affordable prices, with a focus on customer satisfaction.
          </p>
        </div>

        <div className="max-sm:w-1/4">
          <h3 className="text-blue-900 text-lg font-semibold mb-4">
            Categories
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-500">
                Women's Clothing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Men's Clothing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Electronic
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Home and Life
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Discounted Products
              </a>
            </li>
          </ul>
        </div>

        <div className="max-sm:w-1/4">
          <h3 className="text-blue-900 text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Return Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                SSS
              </a>
            </li>
          </ul>
        </div>
        <div className="max-sm:w-1/4">
          <h3 className="text-blue-900 text-lg font-semibold mb-4">
            Newsletter
          </h3>
          <p className="text-sm mb-4">
            Subscribe to be informed about the latest campaigns!
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded-r-md hover:bg-yellow-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-10 pt-6 text-center">
        <p className="text-sm">
          © 2025 Gardamo. All rights reserved . |{" "}
          <a href="#" className="text-blue-900 hover:text-yellow-500">
            Terms of Use
          </a>
        </p>
      </div>
    </footer>
  );
}
