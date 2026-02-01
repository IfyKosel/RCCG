"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  BarChart3,
  LineChart,
  LayoutGrid,
  MoveRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const [role, setRole] = useState("");
  const [showAdminFields, setShowAdminFields] = useState(false);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();

    if (role === "Administrator") {
      setShowAdminFields(true);
    }
  };

  return (
    <div className="h-screen w-full bg-primary-100 flex items-center justify-evenly gap-12 p-14">
      <div className="flex-1 h-[90vh] relative overflow-hidden">
        <Image
          src="/assets/login_image.png"
          alt="login"
          fill
          priority
          className="rounded-2xl object-left object-cover"
        />
      </div>
      {/* <div className="bg-primary-50 rounded-2xl flex-1 flex-col justify-center py-10 px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back!
          </h1>
          <p className="text-gray-600 text-lg font-medium">
            Enter your credentials to access your dashboard
          </p>
        </div>

        <form className="space-y-6 my-10">
          <div>
            <label className="text-xl font-medium text-gray-800 mb-2">
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
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-100 h-12 bg-primary-500 text-white rounded-lg text-lg font-semibold cursor-pointer"
            >
              Continue
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center gap-3">
          <p className="text-gray-800">New here? Let's get you started</p>
          <MoveRight color="#38363E" />
          <Link
            href="/signUp"
            className="text-lg font-medium text-primary-500 underline"
          >
            Sign Up
          </Link>
        </div>
      </div> */}

      <div className="bg-primary-50 rounded-2xl flex-1 flex-col justify-center py-10 px-6 h-140">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back!
          </h1>
          <p className="text-gray-600 text-lg font-medium">
            Enter your credentials to access your dashboard
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6 my-10" onSubmit={handleContinue}>
          {/* Role */}
          <div>
            <label className="text-xl font-medium text-gray-800 mb-2 block">
              Role
            </label>
            <div className="relative">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-600 cursor-pointer"
              >
                <option value="">Select role</option>
                <option value="Coordinator">Coordinator</option>
                <option value="Administrator">Administrator</option>
              </select>
              <ChevronDown className="absolute right-4 top-3.5 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Admin-only fields */}
          {showAdminFields && (
            <>
              <div>
                <label className="text-xl font-medium text-gray-800 mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="text-xl font-medium text-gray-800 mb-2 block">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your password"
                />
              </div>
            </>
          )}

          {/* Buttons */}
          <div className="flex justify-center">
            {!showAdminFields ? (
              <button
                type="submit"
                className="w-100 h-12 bg-primary-500 text-white rounded-lg text-lg font-semibold cursor-pointer"
              >
                Continue
              </button>
            ) : (
              <button
                type="button"
                className="w-100 h-12 bg-primary-500 text-white rounded-lg text-lg font-semibold cursor-pointer"
              >
                Next
              </button>
            )}
          </div>
        </form>

        {/* Sign up section (hidden after Continue) */}
        {!showAdminFields && (
          <div className="flex justify-center items-center gap-3">
            <p className="text-gray-800">New here? Let's get you started</p>
            <MoveRight color="#38363E" />
            <Link
              href="/signUp"
              className="text-lg font-medium text-primary-500 underline"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
