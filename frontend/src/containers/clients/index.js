import { useClientStore } from "../../store/clients";

import { DataLayout } from "../../components/dataLayout";

import "./style.scss";

export const Clients = () => {
  const data = useClientStore((state) => state.clients);
  const setClients = useClientStore((state) => state.setClients);

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
      id="clients"
      title="Clients Master"
      name="project"
      api="/test"
      data={data}
      setData={setClients}
      columns={columns}
    />
  );
};
