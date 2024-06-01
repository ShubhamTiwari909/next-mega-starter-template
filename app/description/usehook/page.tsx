import React from "react";
import UseWindowSize from "./components/UseWindowSize";
import UseNetworkState from "./components/UseNetworkState";
import UseSessionStorage from "./components/UseSessionStorage";

const Usehook = () => {
  return (
    <div className="bg-slate-200 min-h-screen p-8">
      <h1 className="text-2xl md:text-5xl font-sans font-bold text-center mb-10">Usehook</h1>
      <p className="text-lg md:text-2xl font-sans font-medium text-center mb-16 text-slate-500">
        A collection of modern, server-safe React hooks - from the ui.dev team.{" "}
        <a
          href="https://usehooks.com/"
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
      </section>
    </div>
  );
};

export default Usehook;
