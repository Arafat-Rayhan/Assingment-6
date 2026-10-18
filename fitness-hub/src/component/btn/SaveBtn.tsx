"use client";

import Link from "next/link";
import { usePlans } from "@/context/cartContext";
import { PlainData } from "@/type/type";

const SaveBtn = ({
  plan,
  min,
  kcal,
}: {
  plan: PlainData;
  min: number;
  kcal: number;
}) => {
  const { todayPP } = usePlans();

  return (
    <div className="w-[300px] rounded-[40px] bg-green-500 text-center text-4xl font-extrabold">
      <Link href="/My-plan" onClick={() => todayPP(plan)}>
        Save
      </Link>
    </div>
  );
};

export default SaveBtn;
