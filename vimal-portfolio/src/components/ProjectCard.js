import React from "react";
import Grid from "@mui/material/Grid";

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="project-card border rounded-lg shadow-lg p-4 bg-white">
      <Grid container spacing={2} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} sm={4} md={5}>
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-lg object-cover"
          />
        </Grid>

        {/* Content Section */}
        <Grid item xs={12} sm={8} md={7}>
          <div className="content pl-4">
            <h2 className="title text-lg font-bold text-gray-800 mb-2">{title}</h2>
            <p className="description text-sm text-gray-600">{description}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectCard;
