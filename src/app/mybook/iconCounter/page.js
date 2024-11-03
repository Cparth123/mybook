"use client";
import React, { useEffect, useState } from "react";
import IconItem from "./Componets/IconItem";
import { useDispatch, useSelector } from "react-redux";
import { GetAllData } from "@/app/store/features/counter";

function Page() {
  const [incomeTotal, setTotalAmount] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.items?.main?.data?.singalIcon);

  useEffect(() => {
    dispatch(GetAllData());
  }, [dispatch]);
  useEffect(() => {
    const total = data?.reduce(
      (acc, item) => acc + item.amount * item.qly,
      0
    );
    setTotalAmount(total);
  }, [data]);

  return (
    <div className="bg-lightmode dark:bg-darkmode py-10  w-full flex flex-col justify-center">
      <h1 className="text-center text-3xl">Totls Amount :- ${incomeTotal}</h1>
      <IconItem data={data} />
    </div>
  );
}

export default Page;
