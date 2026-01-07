import { Hero } from "@/widgets/hero/ui/Hero";
import { Results } from "@/widgets/results/ui/Results";
import { WhoIsIt } from "@/widgets/who-is-it";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <WhoIsIt />
      <Results/>
    </div>
  );
};

export default page;
