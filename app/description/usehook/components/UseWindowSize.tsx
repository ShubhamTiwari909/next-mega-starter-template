"use client";
import React from "react";
import { useViewportSize } from "@mantine/hooks";

type Size = {
  width: number | null;
  height: number | null;
};

const Usehook = () => {
  const { height, width }: Size = useViewportSize();
  return (
    <div className="px-4 w-96">
      <h2 className="text-xl md:text-3xl font-sans font-bold mb-10">useWindowSize hook</h2>
      <textarea
        className={`border border-slate-800 w-full md:w-72 lg:w-96 h-40 mb-6 ${width !== null && width > 1024 ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-900"}`}
      />
      <p className="text-base font-sans mb-4 text-slate-900">
        Resize the browser using devtools to see the changed width and height
      </p>
      <p className="text-lg font-sans mb-4 text-slate-900">
        Width - <span className="text-sky-700 font-medium">{width}</span>
      </p>
      <p className="text-lg font-sans mb-4 text-slate-900">
        Height - <span className="text-sky-700 font-medium">{height}</span>
      </p>
    </div>
  );
};

export default Usehook;
