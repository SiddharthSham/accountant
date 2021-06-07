import { useEffect } from "react";
import { client } from "../../services/client";

import { Input, Button, Table } from "antd";
import { Layout } from "../layout";

import "./styles.scss";

export const DataLayout = ({
  api,
  data,
  setData,
  columns,
  name,
  title,
  id = "wrapper",
}) => {
  useEffect(() => {
    const mountdata = async () => {
      const res = await client.get(api);
      const data = await res.json();

      setData(
        data.rows.map((el, i) => ({
          ...el,
          key: el.code,
        }))
      );
      console.log(data);
    };

    mountdata();
  }, [setData, api]);

  return (
    <Layout id={id} className="data-layout">
      <h1>{title}</h1>
      <div id="control-panel" className="df jcb">
        <Input placeholder={`Search for ${name}`} id="searchbar" />
        <div>
          <Button type="primary" id="add-btn">
            + &nbsp; Add {name}
          </Button>
          <Button type="secondary" id="export-btn">
            Export
          </Button>
        </div>
      </div>
      <Table dataSource={data} columns={columns} />
    </Layout>
  );
};
