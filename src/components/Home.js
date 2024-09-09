import React from 'react';
import Logo from '../assets/logo.png';

const Login = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-black">

      <div className="bg-black w-full h-16 flex justify-center border-b-2 border-[#25262B]">
        <div className="flex justify-center items-center">
          <img src={Logo} alt="logo" className="mt-2 h-6" />
        </div>
      </div>

      <div className="flex items-center justify-center flex-grow">
        <div className="w-96 p-8 border border-stone-700 bg-zinc-900 rounded-lg shadow-lg">
          <h2 className="mb-6 text-xl text-center text-white">Create a new account</h2>
          <button
            className="flex items-center justify-center w-full p-3 mb-4 text-white border border-stone-700 rounded-md hover:bg-gray-600"
          >
            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google logo" className="mr-2" />
            Sign Up with Google
          </button>
          <button
            className="flex items-center justify-center w-2/3 p-3 mt-10 text-white rounded-md mx-auto"
            style={{
              background: "linear-gradient(to right, #547cff, #0735ff)", /* Gradient style */
            }}>
            Create an Account
          </button>

          <p className="text-center mt-5 text-stone-400">
            Already have an account? <span className="text-slate-200 cursor-pointer hover:underline">Sign In</span>
          </p>
        </div>
      </div>

      <div className="bg-[#121212] h-8 flex items-center justify-center border-t-2 border-[#25262B]">
        <p className="text-xs text-gray-500">&copy; 2023 Reachinbox. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Login;
