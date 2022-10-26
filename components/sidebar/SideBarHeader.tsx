import Image from "next/image";
import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiSearch, BiSearchAlt } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
function SideBarHeader() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <header className="dark:bg-slate-900 bg-gray-100 right-0 z-50 text-sm h-16 fixed left-0 md:right-[70%] lg:right-[75%] p-2 flex items-center justify-between flex-row">
        <div className="">
          <span className="inline-flex items-center self-start font-sans text-xl font-semibold gap-x-2 dark:text-white/95">
            <Image
              className="transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
              width={"44px"}
              height={"44px"}
              src="/logo.svg"
              alt="Logo"
            />
            Project Chat
          </span>
        </div>
        <div className="flex flex-row space-x-2">
          <div>
            <button
              type="button"
              onClick={() => setShowSearch(true)}
              className={`${
                showSearch ? "hidden" : "flex"
              } p-2 rounded-full focus-visible:border-blue-500 focus-visible:border-2 dark:hover:bg-gray-800 hover:bg-gray-200 focus-visible:outline-none items-center z-20`}
            >
              <BiSearchAlt className="w-6 h-6 text-slate-800 dark:text-slate-400 active:fill-slate-500" />
            </button>
            <div className={`${showSearch ? "block" : "hidden"}`}>
              <label htmlFor="icon" className="sr-only">
                Search
              </label>
              <div className="absolute left-2 top-2 right-2">
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-[10px]">
                  <BiSearch className="w-5 h-5 text-slate-700 dark:text-slate-400" />
                </div>
                <input
                  type="text"
                  id="search"
                  name="search"
                  className="py-3 px-4 pl-11 bg-gray-200 block w-[88%] border-gray-300 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400"
                  placeholder="Search A User"
                />
                <button
                  type="button"
                  onClick={() => setShowSearch(false)}
                  className="absolute right-0 sm:right-3 md:-right-1 lg:right-0 top-2 dark:border-slate-400 border-slate-700 focus-visible:border-blue-600 focus-visible:outline-none focus:border-slate-600 hover:border-slate-500 border-[2.5px] p-1 rounded-full items-center z-20"
                >
                  <MdOutlineClose className="text-slate-700 dark:text-slate-400 h-[18px] active:fill-slate-400 w-[18px]" />
                </button>
              </div>
            </div>
          </div>
          <button
            className={`${
              showSearch ? "hidden" : "flex"
            } focus-visible:border-blue-500 justify-center items-center inline-block focus-visible:border-2 dark:hover:bg-gray-800 hover:bg-gray-200 focus-visible:outline-none h-[2.375rem] w-[2.375rem] bg-transparent rounded-full overflow-hidden`}
          >
            <AiOutlinePlusCircle className="w-[26px] h-[26px] text-slate-700 dark:text-slate-400" />
          </button>
          <button
            className={`${
              showSearch ? "hidden" : "flex"
            } focus-visible:border-blue-500 inline-block focus-visible:border-2 dark:hover:bg-gray-800 hover:bg-gray-200 focus-visible:outline-none h-[2.375rem] w-[2.375rem] bg-transparent rounded-full overflow-hidden`}
          >
            <svg
              className="w-full h-full text-slate-700 dark:text-slate-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.62854" y="0.359985" width="15" height="15" rx="7.5" />
              <path
                className="dark:fill-slate-400 fill-slate-700"
                d="M8.12421 7.20374C9.21151 7.20374 10.093 6.32229 10.093 5.23499C10.093 4.14767 9.21151 3.26624 8.12421 3.26624C7.0369 3.26624 6.15546 4.14767 6.15546 5.23499C6.15546 6.32229 7.0369 7.20374 8.12421 7.20374Z"
              />
              <path
                className="dark:fill-slate-400 fill-slate-700"
                d="M11.818 10.5975C10.2992 12.6412 7.42106 13.0631 5.37731 11.5537C5.01171 11.2818 4.69296 10.9631 4.42107 10.5975C4.28982 10.4006 4.27107 10.1475 4.37419 9.94123L4.51482 9.65059C4.84296 8.95684 5.53671 8.51624 6.30546 8.51624H9.95231C10.7023 8.51624 11.3867 8.94749 11.7242 9.62249L11.8742 9.93184C11.968 10.1475 11.9586 10.4006 11.818 10.5975Z"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}

export default SideBarHeader;
