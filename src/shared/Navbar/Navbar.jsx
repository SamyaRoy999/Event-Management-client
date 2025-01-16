import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { CiLogin } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { ModeToggle } from "@/Components/DarkModeButton/Dark";

const Navbar = () => {
  const { userSignOut, user, Name, photo } = useContext(AuthContext);
  const [showProfile, setShowProfile] = useState(false);
  const [navIcon, setNavIcon] = useState(false);
  const NabList = (
    <>
      <NavLink
        to="/"
        className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
      >
        <a>Home</a>
      </NavLink>
      <NavLink
        to="/eventCreation"
        className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
      >
        <a>Event Creation</a>
      </NavLink>
      <NavLink
        to="/dashboard"
        className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
      >
        <a>Dashboard</a>
      </NavLink>
    </>
  );

  return (
    <>
      <nav className="bg-white rounded-lg fixed   z-20 w-full mx-auto   border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-lg mx-auto  flex flex-wrap items-center justify-between  p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://i.ibb.co.com/bHcdGXJ/a7053374ff199ebf21f1fe6cde6ac5bb.png"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              EventsApp
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
                    <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
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
              {NabList}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
