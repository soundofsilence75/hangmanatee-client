import React from "react";
import LandingCard from "../components/LandingCard";
import "../styles/LandingSection.css";

const LandingSection = props => (
  <section className="landing-section">
    {/* <h3>{props.heading}</h3> */}
    {/* <h4>{props.subheading}</h4> */}
    <LandingCard title={props.heading} subtitle={props.subheading} image={props.image} text={props.text} />
    {/* <p>{props.text}</p>
    <img className="landing__image" src={props.image} alt={props.alt} /> */}
  </section>
);

export default LandingSection;