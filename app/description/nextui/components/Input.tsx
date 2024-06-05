"use client";

import React from "react";
import { Input } from "@nextui-org/input";

export default function InputComponent() {
  return (
    <div className="text-white w-96">
      <h2 className="text-xl md:text-3xl font-sans font-bold mb-10">Inputs</h2>
      <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-6">
        <Input
          type="text"
          label="Name"
          placeholder="Enter your name"
          className="w-full"
        />
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          className="w-full"
        />
      </div>
    </div>
  );
}
