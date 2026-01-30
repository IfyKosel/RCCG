import React from "react";
import { ChevronDown, BarChart3, LineChart, LayoutGrid } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="h-screen bg-primary-100 flex items-center justify-center p-[10%]">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-4xl overflow-hidden shadow-2xl">
        {/* Left Side: Branding/Visuals */}
        <div className="hidden md:flex md:w-1/2 bg-[#7364D2] p-12 flex-col justify-between relative overflow-hidden">
          {/* Decorative floating stats */}
          <div className="space-y-6 z-10">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl w-48 shadow-lg flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <BarChart3 className="text-green-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800 leading-none">
                  2.8K
                </p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                  Reports
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl w-48 shadow-lg flex items-center gap-3 ml-4">
              <div className="bg-red-100 p-2 rounded-lg">
                <LineChart className="text-red-500 w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800 leading-none">
                  98%
                </p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                  Accuracy
                </p>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl w-40 border border-white/30 ml-12">
              <div className="flex items-end gap-1 h-12">
                <div className="w-3 bg-white/40 h-1/2 rounded-sm"></div>
                <div className="w-3 bg-white/60 h-3/4 rounded-sm"></div>
                <div className="w-3 bg-white h-full rounded-sm"></div>
                <div className="w-3 bg-white/50 h-2/3 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="z-10 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Data-Driven Insights.</h2>
            <p className="text-sm text-indigo-100 leading-relaxed max-w-xs mx-auto">
              Transform your workflow with real-time tracking, and comprehensive
              analytics
            </p>
          </div>

          {/* Abstract background shapes */}
          <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-[#5F51B8] rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-[#F8F9FD]">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome back!
            </h1>
            <p className="text-gray-500 text-sm">
              Enter your credentials to access your dashboard
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Role
              </label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-600 cursor-pointer">
                  <option>Coordinator</option>
                  <option>Administrator</option>
                  <option>User</option>
                </select>
                <ChevronDown className="absolute right-4 top-3.5 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Create password"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#241A5E] text-white py-4 rounded-xl font-bold hover:bg-[#1a1347] transition-colors shadow-lg shadow-indigo-100 active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
