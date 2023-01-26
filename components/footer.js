import Link from "next/link";

const Footer = () => {
  return (
    <div className=" w-full flex justify-center items-center bg-purp shadow-sm gap-x-4 px-2">
      <div className="pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-medium tracking-wide text-black">
                PRODUCT CATEGORIES
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Dekstops
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Mobile Phone
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Computer Accesories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Gaming Accesories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-black">
                USEFUL LINKS
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Latest News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Our Sitemap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-black">My Account</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Account Details
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Whistlist
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Logout
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Lost Password
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-black">
                CONTACT INFO
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Office Address: * No 15, Kodesoh Street, Ikeja, Lagos.
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Phone Number: +2347064901525
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Email: info@blessingcomputers.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:max-w-md lg:col-span-2">
            <span className="text-base font-medium tracking-wide text-black">
              JOIN OUR NEWSLETTER:
            </span>
            <form className="flex flex-col mt-4 md:flex-row">
              <input
                placeholder="Email"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded-md shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="inline-flex bg-blue-500 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-md shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-white">
              Will be used in accordance with our Privacy Policy
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center pt-5 pb-10 border-t border-gray-800 sm:flex-row ">
          <p className="text-sm text-white">
            JMT Computer Bali Ltd © 2022. All Rights Reserved. Designed by Chris
            Corporation Hub.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
