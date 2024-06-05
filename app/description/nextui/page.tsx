import Link from "next/link";
import React from "react";
import AccordionComponent from "./components/Accordion";
import ButtonComponent from "./components/Buttons";
import CardComponent from "./components/Card";
import InputComponent from "./components/Input";

const Shadcn = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-2xl md:text-5xl font-sans font-bold text-center mb-10">NEXT UI</h1>
      <p className="text-lg md:text-2xl font-sans font-medium text-center mb-8 text-slate-300">
        NextUI is a UI library for React that helps you build beautiful and accessible user interfaces.
        <br /> Created on top of Tailwind CSS and React Aria.{" "}
        <a
          href="https://nextui.org/docs/guide/introduction"
          target="_blank"
          rel="noreferrer noopener"
          className="no-underline text-blue-600"
        >
          Documentation
        </a>
      </p>
      <p className="text-base md:text-xl font-sans font-medium text-center mb-16 text-slate-300">
        Check the documentation for more versions of the accordions
      </p>

      {/* NEXT UI examples */}
      <section className="flex flex-wrap gap-20 mb-10">
        <AccordionComponent />
        <CardComponent />
        <InputComponent />
      </section>
      <ButtonComponent />
    </div>
  );
};

export default Shadcn;
