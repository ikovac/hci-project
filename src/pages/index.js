import React from "react";
// eslint-disable-next-line
import _ from "../styles/index.css";
import Categories from "../components/Categories";
import Slideshow from "../components/Slideshow";
import WhyUs from "../components/WhyUs";

export default ({location}) => (
  <>
    <Slideshow />
    <WhyUs />
    <Categories location={location} />
  </>
);
