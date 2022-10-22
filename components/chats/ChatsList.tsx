import Image from "next/image";

function ChatsList() {
  return (
    <div className="flex flex-col before:mt-16 before:content-[' '] h-full overflow-scroll w-full p-3 md:dark:bg-gradient-to-b dark:to-slate-700 dark:from-slate-900 space-y-2 bg-transparent z-10 left-0">
      <button
        type="button"
        className="items-center flex-shrink-0 block w-full p-2 space-x-2 font-medium text-left bg-slate-100/50 border rounded-lg group md:bg-transparent md:border-none hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-transparent hover:opacity-80 dark:border-slate-700/70"
      >
        <div className="flex items-center">
          <Image
            className="inline-block flex-shrink-0 rounded-full"
            src="/user1.jpg"
            height={"46px"}
            width={"46px"}
            alt="user avatar"
          />
          <div className="ml-3">
            <h3 className="font-semibold text-slate-800 dark:text-slate-300">
              Suzan Wanner
            </h3>
            <p className="-mt-1 text-sm font-medium text-gray-600 dark:text-slate-400">
              You: how are you bro? &#183;
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                {" "}
                4M AGO
              </span>
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}

export default ChatsList;
