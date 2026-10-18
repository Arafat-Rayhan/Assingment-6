"use client";
import Link from "next/link";
import { usePlans } from "@/context/cartContext";
import { PlainData } from "@/type/type";

const PlanBtn = ({
  plan,
  
}: {
  plan: PlainData;
  // min: number;
  // kcal: number;
}) => {
  const { seveP } = usePlans();

    return (
    <div className="w-[330px] h-[50px] rounded-[40px] bg-red-500 text-center text-3xl font-extrabold">
      <Link href="/My-plan" onClick={() => seveP(plan)}>
        Add To today's plan
      </Link>
    </div>
  );
};

export default PlanBtn;