import React, { useRef } from "react";
const HowIWork = React.lazy(() => import("./HowIWork"));
import { useScroll } from "../../util/useScroll";
import { project } from '../../portfolioData';

const Portfolio = () => {
  const feature1 = useRef(null);

  useScroll([feature1], {
    origin: "bottom"
  });

  return (
    <section className="max-w-6xl mx-auto px-6 py-20" id="project">
      <h2 className="md:w-[60%] lg:leading-12 text-2xl lg:text-4xl font-semibold text-gray-700 mb-10">Here are some things I've built fot the joy of it and to challenge myself.</h2>
      <div className="grid md:grid-cols-3 gap-8" ref={feature1}>
        {project.map((projectType, index) => (
          projectType.essentialSeniorDeveloperProjects.map((project) => (
            <div key={project.id} className="rounded-md shadow-sm">
              <div className="p-6">
                <h2 className="font-semibold text-xl">{project.name.substring(0, 25) + "..."}</h2>
                <p className="mt-3 text-md text-gray-600">
                  {project.coreFeatures}
                </p>
                <p className="mt-4 text-sm text-gray-500">{project.techExpectations.frontend[0]}, {project.techExpectations.backend[0]}, {project.techExpectations.database[0]}</p>
                <button className="mt-6 w-full cursor-pointer">View Case Study</button>
              </div>
            </div>
          ))
        ))}
      </div>
      <HowIWork />
    </section>
  )
}

export default Portfolio
