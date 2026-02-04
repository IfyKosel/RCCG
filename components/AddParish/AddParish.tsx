"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { ParishProps } from "@/types/types";

export default function AddParish() {
  const [parishes, setParishes] = useState<ParishProps[]>([
    { parishName: "", hfCentres: "" },
  ]);

  const addParish = () => {
    setParishes([...parishes, { parishName: "", hfCentres: "" }]);
  };

  const removeParish = (index: number) => {
    if (parishes.length === 1) return;
    setParishes(parishes.filter((_, i) => i !== index));
  };

  const updateParish = (
    index: number,
    field: keyof ParishProps,
    value: string,
  ) => {
    const updated = [...parishes];
    updated[index][field] = value;
    setParishes(updated);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-2 flex justify-between px-2">
        <p className="text-lg font-medium text-black">
          Parishes & House Fellowship Centres
        </p>

        <button
          type="button"
          onClick={addParish}
          className="flex items-center gap-2 text-primary-500"
        >
          <Plus size={18} />
          Add Parish
        </button>
      </div>

      {/* Parish Forms */}
      <div className="space-y-4">
        {parishes.map((parish, index) => (
          <div key={index} className="rounded-xl bg-primary-50 p-4">
            {/* Parish Name + Delete */}
            <div className="mb-2 flex items-center gap-2">
              <input
                type="text"
                placeholder="Parish Name"
                value={parish.parishName}
                onChange={(e) =>
                  updateParish(index, "parishName", e.target.value)
                }
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />

              {parishes.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeParish(index)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 size={18} />
                </button>
              )}
            </div>

            {/* HF Centres */}
            <div className="ml-6">
              <label className="font-medium text-gray-800">
                HF Centres
                <input
                  type="text"
                  placeholder="No. of HF Centres"
                  value={parish.hfCentres}
                  onChange={(e) =>
                    updateParish(index, "hfCentres", e.target.value)
                  }
                  className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
