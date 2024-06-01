"use client";
import React from "react";
import { useNetworkState } from "@uidotdev/usehooks";

const UseNetworkState = () => {
  const network = useNetworkState();
  console.log(network);
  return (
    <div className="px-4 max-w-96">
      <h2 className="text-xl md:text-3xl font-sans font-bold mb-10">useNetworkState hook</h2>
      <p className="text-base font-sans mb-4 text-slate-900">Turn off your internet to see the status change</p>
      <p>
        Status -{" "}
        <span className={`font-medium ${network.online ? "text-green-500" : "text-red-500"}`}>
          {network.online ? "Online" : "Offline"}
        </span>
      </p>
      <p>Downlink - {network.online ? `${network.downlink} mbps` : "Offline"}</p>
      <p>Network Type - {network.online ? `${network.effectiveType}` : "Offline"}</p>
    </div>
  );
};

export default UseNetworkState;
