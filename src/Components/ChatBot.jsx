import React, { useState, useRef, useEffect } from 'react';
import { MdMessage } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import iesWhiteLogo from "../assets/ies icon.png";
import { useAppContext } from '../Context/AppContext.jsx';
import { MdCancel } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const ChatBot = () => {
    const { isOpenChatBot, setIsOpenChatBot, openChatBot, closeChatBot, userMsg, setUserMsg, iesMessages, setiesMessages } = useAppContext();

    const endOfiesMessagesRef = useRef(null);
    const chatBotRef = useRef(null);
    const buttonRef = useRef(null); // Add ref for the button

    useEffect(() => {
        if (isOpenChatBot && endOfiesMessagesRef.current) {
            endOfiesMessagesRef.current.scrollIntoView({ behavior: "auto" });
        }
    }, [iesMessages, isOpenChatBot]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (chatBotRef.current && !chatBotRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)) {
                closeChatBot();
            }
        };

        if (isOpenChatBot) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpenChatBot, closeChatBot]);

    const handleSendMessage = (e) => {
        e.preventDefault();

        if (userMsg.trim()) {
            const newMessage = {
                text: userMsg,
                type: "user",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                status: "Delivered"
            };
            setiesMessages((previesMessages) => [
                ...previesMessages,
                newMessage
            ]);
            setUserMsg("");

            // Auto Reply
            // setTimeout(() => {
            //     setiesMessages((previesMessages) => {
            //         if (previesMessages[previesMessages.length - 1]?.type !== "ai") {
            //             return [
            //                 ...previesMessages,
            //                 { text: "This is the AI response.", type: "ai", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
            //             ];
            //         }
            //         return previesMessages;
            //     });
            // }, 100);
        }
    };

    return (
        <div className='mt-[100px]'>
            {isOpenChatBot && (
                <div
                    ref={chatBotRef}
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px' }}
                    className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-2 sm:p-6 pr-0 rounded-lg border border-[#e5e7eb] w-[90%] sm:w-[440px] h-[634px] flex flex-col mt-[100px] shadow-2xl"
                >
                    <div className="flex flex-col space-y-1.5 pb-6">
                        <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
                        <p className="text-sm text-[#6b7280] leading-3">Powered by Mendable and Vercel</p>
                    </div>

                    <div className="flex-1 overflow-y-auto overflow-x-hidden px-3 mt-[120px]">
                        {iesMessages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex flex-col gap-1 my-2 text-sm ${msg.type === "user" ? "self-end items-end" : "self-start items-start"}`}
                            >
                                <div
                                    className={`flex items-start ${msg.type === "user" ? "justify-end" : "justify-start"} gap-2`}
                                >
                                    <span className={`relative flex shrink-0 justify-center items-center overflow-hidden rounded-full w-8 h-8 ${msg.type === "user" ? "bg-blue-500" : "bg-gray-800"}`}>
                                        {msg.type === "user" ?
                                            <IoPerson className='text-white text-[20px]' />
                                            :
                                            <img src={iesWhiteLogo} alt="IES" className='w-[20px]' />
                                        }
                                    </span>
                                    <div className={`p-3 rounded-[15px] max-w-[75%] ${msg.type === "user" ? "bg-gray-700 text-white rounded-tr-[0px]" : "bg-gray-200 text-gray-800 rounded-tl-[0px]"}`}>
                                        <p className="leading-relaxed ">{msg.text}</p>
                                        <div className="flex justify-between items-center text-xs mt-1 min-w-[120px]">
                                            <span className="text-gray-500">{msg.time}</span>
                                            {msg.type === "user" && <span className="text-white pl-[10px]">{msg.status}</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={endOfiesMessagesRef} />
                    </div>

                    {/* <hr className='bg-black h-[2px] mb-[5px]'/> */}
                    <div className="flex items-center pt-0 mt-auto">
                        <form className="flex items-center justify-center w-full space-x-2 pr-2 sm:mr-0" onSubmit={handleSendMessage}>
                            <input
                                className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:opacity-50 text-[#030712]"
                                placeholder="Type your message"
                                value={userMsg}
                                onChange={(e) => setUserMsg(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <div className='flex justify-center items-center fixed bottom-4 right-4'>
                {isOpenChatBot? null :
                <div className='text-[10px] z-3 cursor-pointer py-3 px-2 pr-10 bg-white shadow-2xl border rounded-sm transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl mr-1' onClick={openChatBot}>Chat via Chat Bot</div>}
                <button
                    ref={buttonRef} // Set ref for the button
                    className=" inline-flex items-center justify-center font-medium disabled:pointer-events-none disabled:opacity-50 rounded-full w-[61px] h-[61px] bg-black text-white text-[25px] p-0 normal-case leading-5 hover:scale-[1.06] duration-[0.2s] border-2"
                    type="button"
                    onClick={() => setIsOpenChatBot(!isOpenChatBot)}
                >
                    {isOpenChatBot? <RxCross2 className='text-4xl' />  : <MdMessage className='text-3xl' />}
                </button>
            </div>
        </div>
    );
};

export default ChatBot;







// import React, { useState, useRef, useEffect } from 'react';
// import { MdMessage } from "react-icons/md";
// import { IoPerson } from "react-icons/io5";
// import iesWhiteLogo from "../assets/ies icon.png";
// import { useAppContext } from '../Context/AppContext.jsx';

// const ChatBot = () => {
//     const { isOpenChatBot, setIsOpenChatBot, openChatBot, closeChatBot } = useAppContext();
//     const [userMsg, setUserMsg] = useState("");
//     const [iesMessages, setiesMessages] = useState([
//         { text: "Hi, how can I help you today?", type: "ai", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
//     ]);
//     const endOfiesMessagesRef = useRef(null);
//     const chatBotRef = useRef(null);
//     const buttonRef = useRef(null); // Add ref for the button

//     useEffect(() => {
//         if (isOpenChatBot && endOfiesMessagesRef.current) {
//             endOfiesMessagesRef.current.scrollIntoView({ behavior: "auto" });
//         }
//     }, [iesMessages, isOpenChatBot]);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (chatBotRef.current && !chatBotRef.current.contains(event.target) &&
//                 buttonRef.current && !buttonRef.current.contains(event.target)) {
//                 closeChatBot();
//             }
//         };

//         if (isOpenChatBot) {
//             document.addEventListener('mousedown', handleClickOutside);
//         } else {
//             document.removeEventListener('mousedown', handleClickOutside);
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [isOpenChatBot, closeChatBot]);

//     const handleSendMessage = (e) => {
//         e.preventDefault();

//         if (userMsg.trim()) {
//             const newMessage = {
//                 text: userMsg,
//                 type: "user",
//                 time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//                 status: "Delivered"
//             };
//             setiesMessages((previesMessages) => [
//                 ...previesMessages,
//                 newMessage
//             ]);
//             setUserMsg("");

//             setTimeout(() => {
//                 setiesMessages((previesMessages) => {
//                     if (previesMessages[previesMessages.length - 1]?.type !== "ai") {
//                         return [
//                             ...previesMessages,
//                             { text: "This is the AI response.", type: "ai", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
//                         ];
//                     }
//                     return previesMessages;
//                 });
//             }, 500);
//         }
//     };

//     return (
//         <div>
//             {isOpenChatBot && (
//                 <div
//                     ref={chatBotRef}
//                     style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px' }}
//                     className="fixed right-0 mr-4 bg-white rounded-t-[50px] border w-[400px] h-[500px] flex flex-col z-[10000] shadow-sm hover:shadow-lg bottom-[80px]"
//                 >
//                     <div className="flex flex-col space-y-1.5 rounded-t-[50px] bg-black text-white">
//                         <p className="text-lg text-center py-3">Contact With <span className='font-bold'>IES Marketing</span> Team</p>
//                     </div>

//                     <div className="flex-1 p-6 overflow-y-auto pr-4 border-t-2 border-black">
//                         {iesMessages.map((msg, index) => (
//                             <div
//                                 key={index}
//                                 className={`flex flex-col gap-1 my-2 text-sm ${msg.type === "user" ? "self-end items-end" : "self-start items-start"}`}
//                             >
//                                 <div
//                                     className={`flex items-start ${msg.type === "user" ? "justify-end" : "justify-start"} gap-2`}
//                                 >
//                                     <span className={`relative flex shrink-0 justify-center items-center overflow-hidden rounded-full w-8 h-8 ${msg.type === "user" ? "bg-blue-500" : "bg-gray-800"}`}>
//                                         {msg.type === "user" ?
//                                             <IoPerson className='text-white text-[20px]' />
//                                             :
//                                             <img src={iesWhiteLogo} alt="IES" className='w-[20px]' />
//                                         }
//                                     </span>
//                                     <div className={`p-3 rounded-lg max-w-[75%] ${msg.type === "user" ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"}`}>
//                                         <p className="leading-relaxed">{msg.text}</p>
//                                         <div className="flex justify-between items-center text-xs mt-1 min-w-[120px]">
//                                             <span className="text-gray-500">{msg.time}</span>
//                                             {msg.type === "user" && <span className="text-white pl-[10px]">{msg.status}</span>}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                         <div ref={endOfiesMessagesRef} />
//                     </div>

//                     <div className="flex items-center pt-0 mt-auto">
//                         <form className="flex items-center justify-center m-3 w-full space-x-2" onSubmit={handleSendMessage}>
//                             <input
//                                 className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
//                                 placeholder="Type your message...."
//                                 value={userMsg}
//                                 onChange={(e) => setUserMsg(e.target.value)}
//                             />
//                             <button
//                                 type="submit"
//                                 className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
//                             >
//                                 Send
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             )}

//                 <button
//                     ref={buttonRef} // Set ref for the button
//                     className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 rounded-full w-16 h-16 bg-black text-white text-[25px] p-0 normal-case leading-5 hover:scale-[1.06] duration-[0.2s] border-2"
//                     type="button"
//                     onClick={() => setIsOpenChatBot(!isOpenChatBot)}
//                 >
//                     <MdMessage className='text-3xl' />
//                 </button>
//         </div>
//     );
// };

// export default ChatBot;



















// https://chatgpt.com/c/84c250ff-a44a-4bfe-b2af-665807532894

// Admin Pannel Ui Design
// https://codepen.io/macridgway23/pen/rNMgRgY