"use client";
import axios from "axios";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import img from "../../assets/images/bg.jpg";
import Image from "next/image";

function Page() {
  const usernameref = useRef(null);
  const passwordref = useRef(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });
      setToken(response.data.token);
      toast("Login successful");
    } catch (error) {
      console.error(error);
      toast("Login failed");
    }
  };

  const hadlingsubmit = () => {};
  return (
    <div className="  bg-[#ead6d6] dark:bg-[#3f2727] min-h-[100vh] flex justify-center pt-5 sm:pt-0 sm:items-center">
      <div>
        {" "}
        <Image
          src={img}
          width={"auto"}
          height={"auto"}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          alt="emty"
        ></Image>
      </div>
      <div className="w-full relative z-99 mx-3 sm:w-[500px] p-[24px]  customshadow dark:shadow-customshadow mt-5 rounded-lg sm:mx-auto">
        <form onSubmit={handleSubmit}>
          <h6 className="font-bold">usename:-</h6>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter   username"
            onKeyDown={(e) => e.key == "Enter" && amountref.current.focus()}
            className="w-full mt-2 font-bold text-green-500 focus:outline-none bg-transparent backdrop-blur-sm shadow-lightmodeclick dark:shadow-buttonclick p-[5px_10px] rounded-md"
            type="text"
          />
          <h6 className="mt-5 font-bold">password:-</h6>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter   password"
            className="w-full mt-2 focus:outline-none bg-transparent backdrop-blur-sm  shadow-lightmodeclick   p-[5px_10px] rounded-md"
          />
          <p className="mt-2 text-end text-red-400 font-bold">forget password ?</p>
          <button
            type="submit"
            className="min-h-[50px] shadow-lightmode backdrop-blur-sm dark:shadow-customshadow w-full px-10 mt-5 rounded-lg text-white font-bold active:shadow-lightmodeclick dark:active:shadow-buttonclick"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
