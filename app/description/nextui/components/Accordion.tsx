"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function AccordionComponent() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="w-96 text-white">
      <h2 className="text-xl md:text-3xl font-sans font-bold mb-4">Accordion</h2>

      <Accordion variant="splitted">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Accordion 1"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Accordion 2"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="Accordion 3"
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
