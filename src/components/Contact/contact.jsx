import React from "react";
export default function Contact() {
    return (
      <div>
      <div className="bg-white rounded-lg border border-yellow-400 w-72 h-auto px-2">
      <h1 className="text-yellow-500 font-medium text-lg py-3.5 ml-4">Contact Us!</h1>
      <div className="pr-8 overflow-hidden">
        <input type="text" placeholder="User name" className="rounded-full py-2.5 my-1.5 mx-1 border-2 border-gray-50 border-solid drop-shadow bg-white placeholder-yellow-500 p-4 h-12 w-64 text-base font-normal" required/>
    
        <input type="email" placeholder="Email" className="rounded-full py-2.5 my-1.5 mx-1 border-2 border-gray-50 border-solid drop-shadow bg-white placeholder-yellow-500 p-4 h-12 w-64 text-base font-normal" required />
    
        <textarea placeholder="Message" className="rounded-2xl py-3 my-1.5 mx-1   border-2 border-gray-50 border-solid drop-shadow bg-white placeholder-yellow-500 p-4 text-base h-40 w-64 font-normal" required ></textarea>
      </div>
      <div>
        <button className="rounded-full py-3 px-24 mx-4 my-3 p-4 h-12 w-46 drop-shadow-lg bg-yellow-500 text-white text-base text-center font-medium">Send</button>
      </div>
    </div>
    </div>
    );}