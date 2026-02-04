"use client";
import AddParish from "@/components/AddParish/AddParish";
import { Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const Dashboard = (props: Props) => {
  const [showNewAreaForm, setShowNewAreaForm] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-12">
      <div className="h-40 w-full rounded-3xl bg-primary-300 flex justify-between gap-3 p-4">
        <div>
          <Image
            src="/assets/dashboard_hero_people.svg"
            alt="dashboard"
            width={260}
            height={170}
          />
        </div>
        <div className="text-primary-100 flex flex-col justify-center">
          <p className="">Hi, Aiyoola Iyola </p>
          <h1 className="font-semibold text-white text-3xl">
            Welcome to Haven
          </h1>
          <p className="">
            Your centralized hub for managing church operations, tracking
            growth, and reporting insights.
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <Image src="/assets/X.svg" alt="close" width={24} height={24} />
          <Image
            src="/assets/dashboard_hero_flower.svg"
            alt="flower"
            width={24}
            height={44}
          />
        </div>
      </div>

      <div className="bg-white w-full p-5 rounded-xl shadow-[0_2px_8px_#00000014]">
        <div className="flex justify-between items-center mb-5">
          <div>
            <p className="font-semibold text-2xl text-gray-800">
              {showNewAreaForm ? "Add New Area" : "All Areas (0)"}
            </p>
          </div>
          {!showNewAreaForm && (
            <button
              type="button"
              onClick={() => setShowNewAreaForm(true)}
              className="text-white bg-primary-500 p-4 rounded-lg flex items-center gap-4 h-12 w-48 cursor-pointer"
            >
              <span>
                <Plus />
              </span>
              New Area
            </button>
          )}
        </div>
        {showNewAreaForm ? (
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Zone Name"
                  className="w-full rounded-lg border border-gray-200 py-2 px-3 text-sm text-gray-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
                <input
                  type="text"
                  placeholder="Area Name"
                  className="w-full rounded-lg border border-gray-200 py-2 px-3 text-sm text-gray-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="family"
                    className="font-medium text-lg text-black"
                  >
                    Family
                  </label>
                  <select
                    className="w-full rounded-lg border border-gray-200 py-2 px-3 text-sm text-gray-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  >
                    <option value="" disabled>
                      Select family
                    </option>
                    <option value="agape">Agape</option>
                    <option value="convenant">Convenant</option>
                    <option value="tom">Tabernacle of Miracle</option>
                    <option value="oliveg">Olive G</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="axis"
                    className="font-medium text-lg text-black"
                  >
                    Axis
                  </label>
                  <select
                    className="w-full rounded-lg border border-gray-200 py-2 px-3 text-sm text-gray-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  >
                    <option value="" disabled>
                      Select Axis
                    </option>
                    <option value="alapere">Alapere</option>
                    <option value="agiliti">Agiliti</option>
                    <option value="ikorodu">Ikorodu</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="zonalDetails"
                  className="font-medium text-lg text-black"
                >
                  Zonal Coordinator’s Details
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <input
                    type="text"
                    placeholder="Coordinator’s Name"
                    className="w-full rounded-lg border border-gray-200 py-2 px-3 text-sm text-gray-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full rounded-lg border border-gray-200 py-2 px-3 text-sm text-gray-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full rounded-lg border border-gray-200 py-2 px-3 text-sm text-gray-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="areaDetails"
                  className="font-medium text-lg text-black"
                >
                  Area Pastor’s Details
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <input
                    type="text"
                    placeholder="Pastor’s Name"
                    className="w-full rounded-lg border border-gray-200 py-2 px-3 text-sm text-gray-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full rounded-lg border border-gray-200 py-2 px-3 text-sm text-gray-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full rounded-lg border border-gray-200 py-2 px-3 text-sm text-gray-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
              </div>

              <AddParish />

              <div className="flex justify-center gap-4 h-10 font-medium">
                <button
                  type="button"
                  className="w-36 rounded-lg border text-primary-500"
                  onClick={() => setShowNewAreaForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-36 rounded-lg bg-primary-500 text-white"
                >
                  Save Area
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="">
            <p className="text-lg text-gray-800 text-center w-full">
              No areas added yet. Click "Add New Area" to get started.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
