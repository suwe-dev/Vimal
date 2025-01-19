import React from "react";
import ProjectCard from "../components/ProjectCard";
import supportticket from "../assets/supportticket.png";

const Projects = () => {
  return (
    <div className="mt-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="sectionhead text-4xl">What I Build?</span>
        <div className="border-t-4 border-indigo-700 my-4 w-16 mx-auto"></div>
        <p className="paragraph text-center text-base md:text-lg">
          Turning ideas into impactful applications with innovative tech solutions.
        </p>
      </div>

      {/* Card Section */}
      <div className="flex justify-center">
        <div className="w-full px-4 md:w-3/4 lg:w-2/3">
          <ProjectCard
            image={supportticket}
            title={"Support Ticket System"}
            description={
              "This project provides users with a platform to raise their problems and queries through a support ticket system. Users can submit tickets detailing their issues, and the support team will respond within 24 hours. Submitted tickets can be tracked with essential details such as Ticket ID, Status, and Created Date, ensuring streamlined issue management and resolution."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
