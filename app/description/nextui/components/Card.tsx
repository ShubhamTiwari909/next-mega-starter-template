"use client";

import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function CardComponent() {
  return (
    <div>
      <h2 className="text-xl md:text-3xl font-sans font-bold mb-10">Card</h2>
      <p className="text-base font-sans mb-8 text-slate-900">Check the documentation for more versions of the cards</p>
      <Card className="py-4 w-fit bg-slate-900 text-slate-100">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Card>
    </div>
  );
}
