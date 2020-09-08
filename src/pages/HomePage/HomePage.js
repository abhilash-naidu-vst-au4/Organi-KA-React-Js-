import React from "react";
import { Landing, Pricing } from "../../components";
import {
  homeObjectOne,
  homeObjectTwo,
  homeObjectThree,
  homeObjectFour,
} from "./data";

const HomePage = () => {
  return (
    <>
      <Landing {...homeObjectOne} />
      <Landing {...homeObjectTwo} />
      <Landing {...homeObjectThree} />
      <Landing {...homeObjectFour} />
      <Pricing />
    </>
  );
};

export default HomePage;
