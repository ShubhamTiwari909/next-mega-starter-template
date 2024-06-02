"use client";
import React from "react";
import { useDisclosure } from "@mantine/hooks";

const UseDisclosure = () => {
  const [opened, handlers] = useDisclosure(false);
  const { open, close } = handlers;
  return (
    <div className="px-4 w-96 relative">
      <h2 className="text-xl md:text-3xl font-sans font-bold mb-10">useDisclosure hook</h2>
      <button
        className={`px-4 py-2 mb-4 inline-block rounded-lg ${opened ? "bg-red-500" : "bg-green-500"} text-white`}
        onClick={open}
      >
        {opened ? "Close" : "Open"}
      </button>
      <div
        className={`${opened ? "block" : "hidden"} absolute top-0 left-0 grid place-items-center bg-slate-100 w-96 h-52 p-4 rounded-lg`}
      >
        <h3 className="text-lg md:text-xl font-sans font-bold mb-4">Modal</h3>
        <button
          className="px-4 py-2 mb-4 inline-block rounded-lg bg-red-500 text-white"
          onClick={close}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UseDisclosure;
