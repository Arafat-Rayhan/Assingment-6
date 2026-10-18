"use client";
import Link from "next/link";
import { usePlans } from "@/context/cartContext";
import { PlainData } from "@/type/type";

const PlanBtn = ({
  plan,
  min,
  kcal,
}: {
  plan: PlainData;
  min: number;
  kcal: number;
}) => {
  const { seveP } = usePlans();

    return (
    <div className="w-[300px] h-[50px] rounded-[40px] bg-red-500 text-center text-4xl font-extrabold">
      <Link href="/My-plan" onClick={() => seveP(plan)}>
        Plan
      </Link>
    </div>
  );
};

export default PlanBtn;