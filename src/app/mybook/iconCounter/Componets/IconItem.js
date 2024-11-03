"use client";
import React, { useEffect, useState } from "react";
import Tooltip from "../../compoents/Tooltip";
import CenterModel from "../../compoents/models/CenterModel";
import { useDispatch, useSelector } from "react-redux";
import {
  singalIconRemove,
  singalIconQty,
  GetAllData,
} from "../../../store/features/counter";
import { toast } from "react-toastify";
import Image from "next/image";

function IconItem({ data }) {
  const [isOpenModel, setIsOpenModel] = useState(false);
  const dispatch = useDispatch();
  let [modeltype, setModeltype] = useState();

  // const data = useSelector((state) => state?.items?.main?.data?.singalIcon);

  // useEffect(() => {
  //   dispatch(GetAllData());
  // }, [dispatch]);

  const testfn = (id) => {
    setModeltype("remove"),
      dispatch(singalIconRemove({ id: id })),
      toast("delect income data!");
  };

  const addnew = () => {
    setIsOpenModel(true);
    setModeltype("singleicon");
  };

  const handleIncrement = (item) => {
    let updateQty = {
      ...item,
      qly: item.qly + 1,
    };
    dispatch(singalIconQty({ id: item._id, item: updateQty }));
  };

  const handleDecrement = (item) => {
    let updateQty = {
      ...item,
      qly: item.qly == 0 ? 0 : item.qly - 1,
    };
    dispatch(singalIconQty({ id: item._id, item: updateQty }));
  };

  return (
    <>
      <div className="px-5 mx-auto mt-10">
        <div className="flex flex-wrap justify-center md:justify-normal md:gap-x-14 gap-[20px]">
          <div
            onClick={addnew}
            className="w-24 grid place-content-center text-3xl hover:bg-gray-200 dark:hover:bg-[#91565663] rounded-full  h-24 border-dashed border-2"
          >
            +
          </div>
          {data?.map((item, index) => {
            return (
              <Tooltip
                key={index}
                text={"remove"}
                tp={"0px"}
                fn={() => testfn(item._id)}
              >
                <div>
                  <div className="w-24  text-3xl hover:bg-gray-200 dark:hover:bg-[#91565663] rounded-full  h-24 border-dashed border-2 p-2">
                    <Image
                      width={100}
                      height={100}
                      className="w-full h-full  rounded-full"
                      src={
                        item.icon ? item.icon : "/assets/images/bookicon.jpg"
                      }
                      alt="emty"
                    />
                    <span className="absolute right-0 text-[12px] w-8 h-8 text-center bg-gray-200 dark:bg-[#915656] shadow-lightmode dark:shadow-customshadow rounded-full -top-4">
                      {item.qly}
                    </span>
                  </div>
                  <p className="pl-3 text-sm text-center max-w-[100px] text-ellipsis overflow-hidden">
                    {item.name}
                  </p>
                  <p className="text-sm text-center">{item.amount}</p>
                  <div className="flex items-center justify-center gap-5 my-3">
                    <button
                      onClick={() => handleIncrement(item)}
                      className="w-[30px] shadow-lightmode dark:shadow-customshadow rounded-lg text-3xl dark:active:shadow-lightmodeclick active:shadow-buttonclick"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleDecrement(item)}
                      className="w-[30px] shadow-lightmode dark:shadow-customshadow rounded-lg text-3xl dark:active:shadow-lightmodeclick active:shadow-buttonclick"
                    >
                      -
                    </button>
                  </div>
                </div>
              </Tooltip>
            );
          })}
        </div>
      </div>

      <CenterModel
        isOpenModel={isOpenModel}
        setIsOpenModel={setIsOpenModel}
        modeltype={modeltype}
      />
    </>
  );
}

export default IconItem;
