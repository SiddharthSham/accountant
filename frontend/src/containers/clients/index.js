import { useEffect } from "react";
import { client } from "../../services/client";

import "./style.scss";

export const Clients = () => {
  useEffect(() => {
    const mountdata = async () => {
      const res = await client.get("/test");
      const data = await res.json();
      console.log(data);
    };
    mountdata();
  });
  return <h1>Clients</h1>;
};
