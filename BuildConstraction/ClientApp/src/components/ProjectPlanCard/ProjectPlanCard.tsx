import React from "react";

import { IProject } from "../../types/project";
import "./styles.css";

interface IProps {
  plan: IProject;
}

const ProjectPlanCard = ({ plan }: IProps) => {
  const { pathImg, name } = plan;

  return (
    <div className="projectPlanContainer">
      <img
        className="projectPlanImage"
        src={require(`../../assets/images/${pathImg}`)}
        alt="projectPlanImage"
      />
      <p className="projectPlanName">{name}</p>

      <div className="planButtonBlock">
        <button className="projectPlanButton">DETAILS</button>
      </div>
    </div>
  );
};

export default ProjectPlanCard;
