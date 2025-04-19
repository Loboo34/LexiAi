"use client";
import { useState } from "react";

import { useLogin } from "../hooks/useLogin";
import { useRegister } from "../hooks/useRegister";

interface LoginProps {
  initialMode?: "login" | "register";
}


export default function Login({ initialMode = "login" }: LoginProps) {
  const { login} = useLogin()
  const { register} = useRegister()
  const [isLogin, setIsLogin] = useState(initialMode === "login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const visibilityHandler = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = () => {
    if (isLogin) {
      login(email, password);
      
    } else {
     register(name, email, password);
    }
   
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className=" max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-black shadow-lg">
        <h1 className="text-center text-3xl font-bold text-gray-900">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>
        <div className="">
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <input
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-[#0f4efc] focus:border-[#0f42fc] focus:z-10 sm:text-sm"
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="">
              <input
                className=" appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-[#0f4efc] focus:border-[#0f42fc] focus:z-10 sm:text-sm"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user Email"
                required
              />
            </div>
            <div className="relative">
              <input
                className=" appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-[#0f4efc] focus:border-[#0f42fc] focus:z-10 sm:text-sm"
                type={isVisible ? "text" : "password"}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
              <button
                className="absolute inset-y-0 end-0 flex items-center z-20 px-2.5 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus-visible:text-indigo-500 hover:text-indigo-500 transition-colors"
                type="button"
                onClick={visibilityHandler}
              >
                {isVisible ? <p>s</p> : <p>h</p>}
              </button>
            </div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[#106EBE] hover:bg-[#fc2b0f] hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2  transition-colors duration-300"
            >
              Login
            </button>
            <div>
              <p className="text-center text-sm text-gray-600">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-[#106EBE] hover:text-[#fc2b0f] transition-colors duration-300"
                >
                  {isLogin ? "Create Account" : "Login"}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
