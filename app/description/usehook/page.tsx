import React from "react";
import UseWindowSize from "./components/UseWindowSize";
import UseNetworkState from "./components/UseNetworkState";
import UseSessionStorage from "./components/UseSessionStorage";
import UseInterval from "./components/UseInterval";
import UseDebouncedState from "./components/UseDebounceState";
import UseDisclosure from "./components/UseDisclosure";

const Usehook = () => {
  return (
    <div className="bg-slate-200 min-h-screen p-8">
      <h1 className="text-2xl md:text-5xl font-sans font-bold text-center mb-10">Mantine</h1>
      <p className="text-lg md:text-2xl font-sans font-medium text-center mb-16 text-slate-500">
        Build fully functional accessible web applications faster than ever - Mantine includes more than 100 <br />
        customizable components and 50 hooks to cover you in any situation.{" "}
        <a
          href="https://mantine.dev/"
          target="_blank"
          rel="noreferrer noopener"
          className="no-underline text-blue-600"
        >
          Documentation
        </a>
      </p>

      {/* Hooks examples */}
      <section className="flex flex-wrap gap-20">
        <UseWindowSize />
        <UseNetworkState />
        <UseSessionStorage />
        <UseInterval />
        <UseDebouncedState />
        <UseDisclosure />
      </section>
    </div>
  );
};

export default Usehook;
