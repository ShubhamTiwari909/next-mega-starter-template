"use client";
import React from "react";
import useSWR from "swr";
import { fetcher } from "./api/fetcher";

// NEXT UI Components
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
const SWR = () => {
  const { data, error, isLoading } = useSWR("/api/data", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div className="w-full h-screen grid place-items-center text-5xl bg-slate-200">Loading...</div>;

  return (
    <div className="bg-gray-900 text-white min-h-[calc(100vh-64px)] p-8">
      <h1 className="text-2xl md:text-5xl font-sans font-bold text-center mb-10">SWR Data fetching</h1>
      <p className="text-lg md:text-2xl font-sans font-medium text-center mb-16 text-slate-300">
        With SWR, components will get a stream of data updates constantly and automatically.
        <br /> And the UI will be always fast and reactive.{" "}
        <a
          href="https://swr.vercel.app/docs/getting-started"
          target="_blank"
          rel="noreferrer noopener"
          className="no-underline text-blue-600"
        >
          Documentation
        </a>
      </p>

      {/* SWR Data fetching examples */}
      <section className="flex flex-col items-center gap-10">
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.products?.map((product: any) => {
            return (
              <li key={product.id}>
                <Card className="pt-4 w-fit bg-slate-200 text-slate-900 h-[500px]">
                  <CardHeader className="pt-2 px-4 flex-col items-start pb-4">
                    <p className="text-tiny uppercase font-bold mb-2">{product.category}</p>
                    <h4 className="font-bold text-large w-60">{product.title}</h4>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt={`${product.title}-${product.id}`}
                      className="object-contain rounded-xl w-full h-[250px]"
                      src={product.images[0]}
                      width={250}
                      height={250}
                    />
                  </CardBody>
                  <CardFooter className="flex flex-col gap-4 rounded-none items-center bg-violet-900 text-slate-100">
                    <div className="flex justify-between w-full mb-2">
                      <p className="text-sky-200 font-bold">Price: {product.price}</p>
                      <p className="text-purple-200 font-bold">Rating: {product.rating}</p>
                    </div>
                    <small
                      className={`px-4 py-2 rounded-full ${product.availabilityStatus === "In Stock" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
                    >
                      Availability: {product.availabilityStatus}
                    </small>
                  </CardFooter>
                </Card>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default SWR;
