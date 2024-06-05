"use client";
import React from "react";
import { useNetwork } from "@mantine/hooks";

const UseNetworkState = () => {
  const network = useNetwork();
  return (
    <div className="px-4 w-96">
      <h2 className="text-xl md:text-3xl font-sans font-bold mb-10">useNetworkState hook</h2>
      <p className="text-base font-sans mb-4">Turn off your internet to see the status change</p>
      <p>
        Status -{" "}
        <span className={`font-medium ${network.online ? "text-green-500" : "text-red-500"}`}>
          {network.online ? "Online" : "Offline"}
        </span>
      </p>
      <p className="text-lg font-sans mb-4">Downlink - {network.online ? `${network.downlink} mbps` : "Offline"}</p>
      <p className="text-lg font-sans mb-4">Network Type - {network.online ? `${network.effectiveType}` : "Offline"}</p>
    </div>
  );
};

export default UseNetworkState;
