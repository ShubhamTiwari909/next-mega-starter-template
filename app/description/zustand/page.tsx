"use client";
import { useStore } from "@/store/useStore";
import React from "react";

const Zustand = () => {
  const loggedIn = useStore((state) => state.loggedIn);
  const setLoggedIn = useStore((state) => state.setLoggedIn);

  return (
    <div className="bg-slate-200 min-h-screen p-8">
      <h1 className="text-2xl md:text-5xl font-sans font-bold text-center mb-10">Zustand</h1>
      <p className="text-lg md:text-2xl font-sans font-medium text-center mb-16 text-slate-500">
        A small, fast and scalable bearbones state-management solution using simplified flux principles.
        <br /> Has a comfy API based on hooks, isn't boilerplatey or opinionated.
        <a
          href="https://github.com/pmndrs/zustand"
          target="_blank"
          rel="noreferrer noopener"
          className="no-underline text-blue-600"
        >
          Documentation
        </a>
      </p>

      {/* Hooks examples */}
      <section className="flex flex-col items-center gap-10">
        <div className="flex items-center gap-6">
          <h3>User - {loggedIn ? "Logged In" : "Logged Out"}</h3>
          <button
            className={`px-4 py-2 inline-block rounded-lg text-white ${loggedIn ? "bg-red-500" : "bg-green-500"}`}
            onClick={() => setLoggedIn(!loggedIn)}
          >
            {loggedIn ? "Logout" : "Login"}
          </button>
        </div>
        <p className="text-lg font-sans mb-4 text-slate-900">Login and refresh the page, the state will persist</p>
      </section>
    </div>
  );
};

export default Zustand;
