import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClose = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full max-w-full mx-auto  md:py-4 md:px-6 md:flex md:space-x-3 md:justify-between  ">
      <div className="w-[50%] md:flex md:items-center  xs:hidden ss:hidden ">
        <p className="uppercase text-2xl font-extrabold font-jose">
          Benthawoods
        </p>
      </div>

      <div className="w-[50%] md:flex md:justify-between md:items-center  xs:hidden ">
        <div>
          <ul className="flex ">
            <li className="mr-10">Home</li>
            <Link to={"#menu"}>
              <li className="mr-10">Menu</li>
            </Link>
            <Link to={"#about"}>
              <li className="mr-10">About</li>
            </Link>
            <Link to={"#blog"}>
              <li className="mr-10">Blog</li>
            </Link>
            <Link to={"#contact"}>
              <li className="mr-10">Contact</li>
            </Link>
          </ul>
        </div>
        <div className=" flex items-center">
          <button>
            <HiOutlineShoppingBag size={"30px"} />
          </button>
        </div>
      </div>

      {/* deskstop n mobile view */}
      <div className="w-[100%] xs:flex xs:justify-between mx-auto lg:hidden  ">
        <div className="w-[100%] bg-white xs:px-4 xs:py-6 flex justify-between items-center    ">
          <div className="flex space-x-1">
            <p className="uppercase text-2xl font-extrabold font-jose">
              Benthawoods
            </p>
          </div>
          <div className=" flex gap-2 items-center">
            <div onClick={handleClose}>
              {
                nav ? (<IoClose size={'30px'} color={'black'} />)
                :
                (<GiHamburgerMenu  size={'30px'} color={'black'} />)
              }
            </div>
            <div>
              <button>
                <HiOutlineShoppingBag size={"30px"} />
              </button>
            </div>
          </div>
        </div>

        <div
          className={
            nav
              ? "fixed w-full z-40  sm:h-[50%] xs:h-[100%] top-0 left-0 right-0 mt-16 bg-white border border-gray-300 "
              : "fixed left-[-100%]"
          }
        >
          <ul className=" text-left text-xl font-poppins font-bold  pt-10">
            <li className="mb-10 pl-5  hover:bg-blue-400 py-4  ">Home</li>
            <Link to={"#menu"}>
              <li className="mb-10 pl-5  hover:bg-blue-400 py-4 ">Menu</li>
            </Link>
            <Link to={"#about"}>
              <li className="mb-10 pl-5  hover:bg-blue-400 py-4 ">About</li>
            </Link>
            <Link to={"#blog"}>
              <li className="mb-10 pl-5  hover:bg-blue-400 py-4 ">Blog</li>
            </Link>
            <Link to={"#contact"}>
              <li className=" pl-5 hover:bg-blue-400 py-4  ">Contact</li>
            </Link>
          </ul>
        </div>
      </div> 
    </div>
  );
};

export default Navbar;
