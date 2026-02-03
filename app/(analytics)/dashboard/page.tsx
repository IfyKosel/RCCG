"use client";
import { Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const Dashboard = (props: Props) => {
  const [showNewAreaForm, setShowNewAreaForm] = useState(false);
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
          <div className="bg-white rounded-2xl p-6 space-y-6 shadow-sm">
            {/* Zone & Area */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input className="input" placeholder="Zone Name" />
              <input className="input" placeholder="Area Name" />
            </div>

            {/* Family & Axis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select className="input">
                <option>Select family</option>
              </select>
              <select className="input">
                <option>Select axis</option>
              </select>
            </div>

            {/* Pastor Details */}
            <div>
              <h3 className="font-semibold mb-3">Pastor’s Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input className="input" placeholder="Pastor’s Name" />
                <input className="input" placeholder="Phone" />
                <input className="input" placeholder="Email" />
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex justify-end gap-4">
              <button
                onClick={() => {
                  setShowNewAreaForm(false);
                }}
                //   onClick= {() => void}
                className="px-6 py-3 rounded-lg border text-gray-700"
              >
                Cancel
              </button>

              <button className="px-6 py-3 rounded-lg bg-primary-700 text-white">
                Save Area
              </button>
            </div>
          </div>
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
