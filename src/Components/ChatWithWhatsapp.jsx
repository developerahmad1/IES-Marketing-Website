import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";
import whatsappIcon from "../assets/whatsapp icon.jpg"

const ChatWithWhatsapp = () => {
    return (
        <a target="_main" href='https://api.whatsapp.com/send/?phone=923054474602&text=Hi+Sir%21+I+am+%3CYour+Name%3E+.+I+am+Interested+in+Real+Estate.+Can+I+get+more+information+about+your+projects.&type=phone_number&app_absent=0'>
            <div className='fixed bottom-[90px] right-5'>
                <div className='flex justify-center items-center'>
                    <div className='text-[10px] cursor-pointer py-3 px-2 pr-10 bg-white shadow-2xl border rounded-sm transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl mr-2'>Chat via Whatsapp</div>
                    <img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/whatsapp-512.png" className='top-[300px] right-5 w-[60px] cursor-pointer hover:scale-[1.06] duration-[0.2s] border-2 border-white rounded-full' />

                </div>
            </div>
        </a>
    )
}

export default ChatWithWhatsapp
