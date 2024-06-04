"use client";

import React from "react";
import { Input } from "@nextui-org/input";

export default function InputComponent() {
  return (
    <div>
      <h2 className="text-xl md:text-3xl font-sans font-bold mb-10">Inputs</h2>
      <p className="text-base font-sans mb-8 text-slate-900">Check the documentation for more versions of the inputs</p>
      <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          type="text"
          label="Name"
        />
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
        />
      </div>
    </div>
  );
}
