"use client";

import { useState } from "react";
import { SetDataToSeved, SetDataToToday } from "./SetDataToBord";

const ListBord = () => {
  const [active, setActive] = useState<"Today" | "Saved">("Today");

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8">
      <div className="mb-6 flex gap-3" role="tablist" aria-label="Plan lists">
        <button
          type="button"
          role="tab"
          aria-selected={active === "Today"}
          onClick={() => setActive("Today")}
          className={`rounded-full px-5 py-2 font-semibold ${
            active === "Today" ? "bg-lime-400 text-black" : "bg-gray-800 text-white"
          }`}
        >
          Today
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={active === "Saved"}
          onClick={() => setActive("Saved")}
          className={`rounded-full px-5 py-2 font-semibold ${
            active === "Saved" ? "bg-lime-400 text-black" : "bg-gray-800 text-white"
          }`}
        >
          Saved plans
        </button>
      </div>

      {active === "Today" ? <SetDataToToday /> : <SetDataToSeved />}
    </section>
  );
};

export default ListBord;