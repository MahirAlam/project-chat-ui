import ChatPage from "../components/ChatPage";
import Chats from "../components/Chats";

function Chat() {
  return (
    <div className="flex flex-row w-full h-screen">
      <div className="w-full md:w-[calc(30%+1px)] lg:w-[calc(25%+1px)] md:block hidden md:border-r md:dark:border-slate-700">
        <Chats />
      </div>
      <div className="w-full md:w-[calc(70%+1px)] lg:w-[calc(75%+1px)] dark:bg-slate-800">
        <ChatPage />
      </div>
    </div>
  );
}

export default Chat;
