import React from "react";
import propTypes from "prop-types";

function Section({ title, children }) {
  return (
    <section>
      <h1 className="feedback__title">{title}</h1>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.any.isRequired,
};
export default Section;
