"use client";
import { useDebouncedValue } from "@mantine/hooks";
import { useState } from "react";

function UseDebouncedState() {
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 200);

  return (
    <div className="px-4 w-96">
      <h2 className="text-xl md:text-3xl font-sans font-bold mb-10">useInterval hook</h2>

      <div className="flex flex-col gap-4 items-start mb-6">
        <label className="text-lg">Enter value to see debounce effect</label>
        <input
          className="pl-2 py-2 rounded-lg border border-slate-700"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </div>

      <p className="text-lg font-sans mb-4">Value: {value}</p>
      <p className="text-lg font-sans mb-4">Debounced value: {debounced}</p>
    </div>
  );
}

export default UseDebouncedState;
