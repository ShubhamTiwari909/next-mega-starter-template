import Link from "next/link";
import React from "react";
import AccordionComponent from "./components/Accordion";
import ButtonComponent from "./components/Buttons";
import CardComponent from "./components/Card";
import InputComponent from "./components/Input";

const Shadcn = () => {
  return (
    <div className="bg-slate-200 min-h-screen p-8">
      <h1 className="text-2xl md:text-5xl font-sans font-bold text-center mb-10">NEXT UI</h1>
      <p className="text-lg md:text-2xl font-sans font-medium text-center mb-16 text-slate-500">
        NextUI is a UI library for React that helps you build beautiful and accessible user interfaces.
        <br /> Created on top of Tailwind CSS and React Aria.
        <a
          href="https://nextui.org/docs/guide/introduction"
          target="_blank"
          rel="noreferrer noopener"
          className="no-underline text-blue-600"
        >
          Documentation
        </a>
      </p>

      {/* Hooks examples */}
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
