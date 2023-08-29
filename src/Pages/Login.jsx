import React from "react";
import doct from '../images/doct.avif'

export default function Login() {
  return (
    <div className="container flex h-screen bg-gray-100">
      <div className=" w-1/2 bg-gray-100  ">
        
        <h2 className="text-5xl font-semibold mb-4 pt-8 py-16">Login</h2>
        
        <form className="w-4/5 px-6 py-12 bg-white rounded shadow-md">
        
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Log in
          </button>
        </form>
      </div>
      <div className="w-1/2 bg-gray-100 flex justify-center items-center">
      <div className="">
        <img
          src={doct}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      </div>
      
    </div>
  );
}
