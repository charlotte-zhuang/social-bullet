import "../CSS/projectCard.css";
import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import IconTiles from "./iconTiles";
import { Link } from "react-router-dom";

/**
 * A card to showcase a project.
 *
 * @param {Object} props
 * @param {Object} props.project
 */
export default function ProjectCard({ project }) {
  const completion =
    (100 * (new Date() - project.start)) / (project.end - project.start);

  return (
    <div className='d-flex flex-column full-width projectCard'>
      <Link className='d-flex' to={project.url}>
        <img src={project.imgSrc} className='circle-crop-md m-2' alt='' />
        <h3 className='align-self-center m-2'>{project.name}</h3>
      </Link>
      <p className='text-center m-2'>{project.text}</p>
      <div className='d-flex flex-row justify-content-around m-2'>
        <div className='d-flex flex-column'>
          <h4>Milestones</h4>
          <ol>
            {project.milestones.map((elem, index) => (
              <li key={`${project.id}-milestone-${index}`}>{elem}</li>
            ))}
          </ol>
        </div>
        <div className='d-flex flex-column'>
          <h4>Daily Tasks</h4>
          <ol>
            {project.tasks.map((elem, index) => (
              <li key={`${project.id}-tasks-${index}`}>{elem}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className='d-flex justify-content-between'>
        <span>{project.start.toDateString()}</span>
        <span>Progress</span>
        <span>{project.end.toDateString()}</span>
      </div>
      <ProgressBar now={completion} />
      <h4 className='m-2'>Members</h4>
      <IconTiles arr={project.members} size='sm' />
    </div>
  );
}
