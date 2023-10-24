import React from "react";
import { FeaturedProjects, Hero } from "../components";
import { customFetch } from "../utils";

const url = '/products?featured=true';

export const loader = async () => {
  const response = await customFetch(url);
  const products =  response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProjects/>
    </>
  );
};

export default Landing;
