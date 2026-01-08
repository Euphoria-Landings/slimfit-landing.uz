import { Faq } from "@/widgets/faq";
import { Features } from "@/widgets/features";
import { Hero } from "@/widgets/hero/ui/Hero";
import { Ingredients } from "@/widgets/ingredients/ui/Ingredients";
import { Order } from "@/widgets/order";
import { Results } from "@/widgets/results/ui/Results";
import { StickyFooter } from "@/widgets/sticky-footer";
import { WhoIsIt } from "@/widgets/who-is-it";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <StickyFooter />
      <WhoIsIt />
      <Results />
      <Features />
      <Ingredients />
      <Faq />
      <Order/>
    </div>
  );
};

export default page;
