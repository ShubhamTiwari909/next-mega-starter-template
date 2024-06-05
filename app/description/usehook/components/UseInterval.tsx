"use client";
import React, { useEffect, useState } from "react";
import { useInterval } from "@mantine/hooks";

const UseInterval = () => {
  const [seconds, setSeconds] = useState(0);
  const { start, stop, active, toggle } = useInterval(() => setSeconds((s) => s + 1), 1000);

  useEffect(() => {
    start();
    return stop;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="px-4 w-96">
      <h2 className="text-xl md:text-3xl font-sans font-bold mb-10">useInterval hook</h2>
      <p className="text-lg font-sans mb-4">
        Timer <b>{seconds}</b> seconds
      </p>
      <button
        onClick={toggle}
        className={`px-4 py-2 mb-4 inline-block rounded-lg ${active ? "bg-red-500" : "bg-green-500"} text-white`}
      >
        {" "}
        {active ? "Stop" : "Start"} counting
      </button>
    </div>
  );
};

export default UseInterval;
