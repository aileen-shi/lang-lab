import React from "react";
import Header from "./Header";
import ResearchData, { Research } from "../types/research";
import "./styles.scss";

const ResearchSections: React.FC = () => {
  return (
    <div className="pb-10">
      {ResearchData.map((section, s) => (
        <div key={s} className="mx-auto w-3/5 font-open-sans text-cyan-950">
          <Header title={section.title} />
          {/* Body */}
          <div>
            <p className="tracking-wide text-sm leading-tight md:leading-loose lg:text-base ">
              {section.body}
            </p>
            <div>
              {/* Figures */}
              {section.figures.map((figure, f) => (
                <div key={f} className="py-10 w-8/12 min-w-72 mx-auto">
                  <img
                    src={figure.image}
                    alt={figure.caption}
                    className="bg-cover w-full pb-6"
                  ></img>
                  <figcaption className="text-center tracking-wide text-gray-500 text-sm">
                    {figure.caption}
                  </figcaption>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ResearchSections;
