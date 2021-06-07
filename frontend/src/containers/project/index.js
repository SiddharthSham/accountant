import { useParams } from "react-router-dom";

import "./style.scss";

export const Project = () => {
  const { id } = useParams();

  return <h1>Project {id}</h1>;
};
