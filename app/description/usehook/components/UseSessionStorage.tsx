"use client";
import React from "react";
import { useSessionStorage } from "@mantine/hooks";

const UseSessionStorage = () => {
  const [login, setLogin] = useSessionStorage({ key: "isLoggedIn", defaultValue: false });
  return (
    <div className="px-4 w-96">
      <h2 className="text-xl md:text-3xl font-sans font-bold mb-10">useSessionStorage hook</h2>
      <div className="flex flex-wrap gap-4 items-center">
        <button
          className={`px-4 py-2 mb-4 inline-block rounded-lg ${login ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}
          onClick={() => setLogin(!login)}
        >
          {login ? "Logout" : "Login"}
        </button>
        <p className="text-lg font-sans mb-4 text-slate-900">{login ? "Logged in" : "Logged out"}</p>
      </div>
      <p className="text-lg font-sans mb-4 text-slate-900">Refresh the page, the value will be persisted</p>
    </div>
  );
};

export default UseSessionStorage;
