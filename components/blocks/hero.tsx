import React from "react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="w-full flex items-center justify-center flex-col gap-6 my-12">
      <h1 className="text-center text-5xl font-bold">
        Landing Page Starter Kit
      </h1>
      <div className="h-187.5 w-11/12 max-w-300 bg-primary"></div>

      {/* Buttons */}
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="flex items-center gap-2">
          <Button variant="outline" className="ml-4">
            Learn more
          </Button>
          <Button>Get Started</Button>
        </div>
        <p className="text-xs text-neutral-600">Something here to encourage a click</p>
      </div>
    </section>
  );
}
