"use client";
import React from "react";
import { useWindowSize } from "@uidotdev/usehooks";

type Size = {
  width: number | null;
  height: number | null;
};

function Box({ size }: { size: Size }) {
  return (
    <textarea
      className={`border border-slate-800 w-full md:w-72 lg:w-96 h-40 mb-6 ${size.width !== null && size.width > 1024 ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-900"}`}
    />
  );
}

const Usehook = () => {
  const size: Size = useWindowSize();
  return (
    <div className="px-4 max-w-96">
      <h2 className="text-xl md:text-3xl font-sans font-bold mb-10">useWindowSize hook</h2>
      <Box size={size} />
      <p className="text-base font-sans mb-4 text-slate-900">
        Resize the browser using devtools to see the changed width and height
      </p>
      <p className="text-lg font-sans mb-4 text-slate-900">
        Width - <span className="text-sky-700 font-medium">{size.width}</span>
      </p>
      <p className="text-lg font-sans mb-4 text-slate-900">
        Height - <span className="text-sky-700 font-medium">{size.height}</span>
      </p>
    </div>
  );
};

export default Usehook;
