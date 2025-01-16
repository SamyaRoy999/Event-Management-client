import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { CiLogin } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { Button } from "../../Components/ui/button";
import { use } from "react";
import { ModeToggle } from "@/Components/DarkModeButton/Dark";

const Navbar = () => {
  const { userSignOut, user, Name, photo } = useContext(AuthContext);
  const [showProfile, setShowProfile] = useState(false);
  const [navIcon, setNavIcon] = useState(false);
  const NabList = (
    <>
      <NavLink to="/" className=" mr-3 text-sm font-montserrat ">
        <a>Home</a>
      </NavLink>
      <NavLink to="/rooms" className="  mr-3 text-sm font-montserrat">
        <a>Rooms</a>
      </NavLink>
      <NavLink to="myRooms" className="  mr-3 text-sm font-montserrat">
        <a>My Bookings</a>
      </NavLink>
    </>
  );
  console.log(user);

  return (
    <>
      <nav className="bg-white max-w-screen-lg mx-auto border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {user ? (
              <>
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  onClick={() => setShowProfile(!showProfile)}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.photoURL}
                    alt="user photo"
                  />
                </button>

                <div
                  className={`z-50 ${
                    showProfile ? "absolute right-20 top-10" : "hidden"
                  }  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {user.displayName}
                    </span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                      {user.email || "Guest"}
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <ModeToggle />
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" px-4 py-2 flex gap-2 items-center text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        onClick={() => userSignOut()}
                      >
                        <FiLogOut className="text-xl " /> Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <NavLink to="/login" className="flex gap-2 items-center">
                <CiLogin className="text-xl" /> Login
              </NavLink>
            )}
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setNavIcon(!navIcon)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center ${
              navIcon ? " " : "hidden"
            } justify-between  w-full md:flex md:w-auto md:order-1`}
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// {user ? (
//           <>
//             <a
//               className="flex gap-1 items-center font-bold  text-sm lg:text-lg font-montserrat cursor-pointer  text-[#90B0B7] "
//               onClick={() => userSignOut()}
//             >
//               {" "}
//               <FiLogOut className="text-xl " /> Logout
//             </a>
//             <div className="">
//               <div className="group relative cursor-pointer  px-4">
//                 <div className="flex items-center  justify-between space-x-5 p-1 bg-white ">
//                   <a className="menu-hover  " onClick="">
//                     <div className="avatar border-4 rounded-full  border-[#90B0B7] p-1">
//                       <div className="w-7   rounded-full">
//                         <img src={user.photoURL || photo} />
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//                 <div className="invisible absolute z-50 flex w-28  right-0 flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
//                   <a className="my-2 block border-b    w-full border-gray-100  font-semibold text-gray-500 hover:text-black ">
//                     {user.displayName || Name}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </>
//         ) : (
//           <Link to="./login">
//             <button className="flex gap-1 items-center font-bold text-base lg:text-lg font-montserrat btn-md  btn btn-outline text-[#90B0B7] ">
//               <CiLogin className="text-xl" /> Login
//             </button>
//           </Link>
//         )}
//       </div>
