import { useProjectsStore } from "../../store/projects";

import { DataLayout } from "../../components/dataLayout";

import "./style.scss";

export const Projects = () => {
  const data = useProjectsStore((state) => state.projects);
  const setProjects = useProjectsStore((state) => state.setProjects);
  

  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Telephone",
      dataIndex: "telephone",
      key: "telephone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return (
    <DataLayout
      id="projects"
      title="Projects Master"
      name="project"
      api="/test"
      data={data}
      setData={setProjects}
      columns={columns}
    />
  );
};
