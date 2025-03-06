"use client";
import React from "react";
import InputBox from "../components/InputBox";

const page = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col justify-center items-center">
      <div className="text-center mt-12">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to LexiAI</h1>
        <p className="text-lg text-gray-600 mt-4">
          Use LexiAI to summarize your text quickly and efficiently.
        </p>
        <p className="text-base text-gray-500 mt-2">
          Get started by uploading your document or pasting your text below.
        </p>
      </div>
      <div className="mt-8">
        <InputBox type="text" value="" onChange={() => {}} />
      </div>
    </div>
  );
};

export default page;
