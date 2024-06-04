"use client";

import React from "react";
import { Button } from "@nextui-org/button";

export default function ButtonComponent() {
  return (
    <div className="">
      <h2 className="text-xl md:text-3xl font-sans font-bold mb-10">Buttons</h2>
      <p className="text-base font-sans mb-8 text-slate-900">
        Check the documentation for more versions of the buttons
      </p>
      <div className="grid lg:grid-cols-2">
        <div>
          <h3 className="text-lg md:text-xl font-sans font-medium mb-4">Sizes</h3>
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <Button size="lg">Large</Button>
            <Button size="md">Medium</Button>
            <Button size="sm">Small</Button>
          </div>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-sans font-medium mb-4">Radius</h3>
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <Button radius="full">Full</Button>
            <Button radius="lg">Large</Button>
            <Button radius="md">Medium</Button>
            <Button radius="sm">Small</Button>
            <Button radius="none">None</Button>
          </div>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-sans font-medium mb-4">Colors</h3>
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <Button color="default">Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
          </div>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-sans font-medium mb-4">Variants</h3>
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <Button
              color="primary"
              variant="solid"
            >
              Solid
            </Button>
            <Button
              color="primary"
              variant="faded"
            >
              Faded
            </Button>
            <Button
              color="primary"
              variant="bordered"
            >
              Bordered
            </Button>
            <Button
              color="primary"
              variant="light"
            >
              Light
            </Button>
            <Button
              color="primary"
              variant="flat"
            >
              Flat
            </Button>
            <Button
              color="primary"
              variant="ghost"
            >
              Ghost
            </Button>
            <Button
              color="primary"
              variant="shadow"
            >
              Shadow
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
