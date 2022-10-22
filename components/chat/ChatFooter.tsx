import { FaRegPaperPlane } from "react-icons/fa";
import { IoImageOutline } from "react-icons/io5";

function ChatFooter() {
  return (
    <div className="fixed bottom-0 left-0 lg:left-[calc(25%+1px)] md:left-[calc(30%+1px)] right-0">
      <div className="flex flex-row items-center bg-base space-x-2 dark:bg-slate-900 bg-white justify-center px-4 py-2">
        <button
          type="button"
          className="inline-flex p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-opacity flex-shrink-0 justify-center items-center border border-transparent font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-none text-sm dark:text-slate-400 text-slate-800"
        >
          <IoImageOutline className="h-6 w-6" />
        </button>
        <input
          type="text"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          className="py-1 px-3 w-full rounded-md text-lg focus:ring-0 focus:outline-none h-9 bg-transparent border-none text-gray-900 dark:text-gray-200"
          placeholder="Message..."
        />
        <button
          type="button"
          className="inline-flex p-2 rounded-md hover:opacity-60 transition-opacity flex-shrink-0 justify-center items-center border border-transparent font-semibold bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-none text-sm dark:text-slate-300 text-slate-800"
        >
          <FaRegPaperPlane className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default ChatFooter;
