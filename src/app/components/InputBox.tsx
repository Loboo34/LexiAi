"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";

interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: React.FC<InputProps> = () => {
  // const [text, setText] = useState("")

  return (
    <div className="flex flex-col  w-[600px] h-[120px] border border-gray-300 bg-grey-600 shadow-lg rounded-2xl p-4">
      {/* Input Box */}
      <input
        type="text"
        placeholder="Type your prompt..."
        className="w-full h-[70px] px-4 pt-1 pb-2 pr-1 text-lg text-gray-100  rounded shadow-sm focus:outline-none  "
      />
      {/* Button */}
      <div className="mt-4 ml-3 flex">
        <button className="bg-grey-800 text-white font-semibold py-2 px-3 rounded-full border hover:border-gray-600 flex items-center justify-center w-10 h-10">
          <Plus className="text-gray-300 w-6 h-6 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default InputBox;
