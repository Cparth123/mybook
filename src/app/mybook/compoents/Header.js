"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import ToggleDarkMode from "@/app/auth/darkmode/ToggleDarkMode";
import Image from "next/image";

function Header() {
  const router = useRouter();
  const path = usePathname();

  const [btnname, setBtnname] = useState();

  useEffect(() => {
    setBtnname(
      path === "/mybook/userDash"
        ? "mybook"
        : path === "/mybook/iconCounter"
        ? "mybook"
        : path === "/mybook" && "iconCounter"
    );
  }, [path]);

  const hadlingchanging = () => {
    if (path == "/mybook") {
      router.push("/mybook/iconCounter");
    } else if (path == "/mybook/iconCounter") {
      router.push("/mybook");
    } else {
      router.push(`/mybook`);
    }
  };
  return (
    <div className="shadow-lightmode bg-[#eccccc] dark:shadow-customshadow px-2 z-20 dark:bg-darkmode sm:px-28 py-4 sticky flex items-center justify-between top-0 left-0">
      <div className="flex items-center gap-2">
        <Image
          width={100}
          height={100}
          className="h-[50px] w-auto"
          src="/assets/images/h-man2.png"
          alt="img"
        />
        <h1 className="font-bold">MyBook</h1>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={hadlingchanging}
          className={`min-h-[50px] px-4 w-full rounded-lg text-white font-bold shadow-lightmode active:shadow-lightmodeclick  dark:shadow-customshadow dark:active:shadow-buttonclick `}
        >
          {btnname}
        </button>

        {path !== "/mybook/userDash" && (
          <button
            onClick={() => router.push("/mybook/userDash")}
            className={`min-h-[50px] px-4 w-full rounded-lg text-white font-bold shadow-lightmode active:shadow-lightmodeclick  dark:shadow-customshadow dark:active:shadow-buttonclick `}
          >
            userDash
          </button>
        )}

        <ToggleDarkMode />
      </div>
    </div>
  );
}

export default Header;
