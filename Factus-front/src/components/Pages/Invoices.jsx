import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import DynaTable from "../DynaTable";

function Invoices() {
  const columns = useMemo(
    () => [
      {
        header: "Number",
        accessorKey: "number",
      },
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Identificación",
        accessorKey: "identification",
      },
      {
        header: "Email",
        accessorKey: "email",
      },
     // {
        //header: "Acción",
        //accessorKey: "email",
      //},
    ],
    []
  );

  const [invoices, setInvoices] = useState([]);
  //const [error, setError] = useState("");

  useEffect(() => {
    const loadInvoices = async () => {
      const accessToken = localStorage.getItem("access_token");

      try {
        const apiUrl = `${
          import.meta.env.VITE_BASE_URL
        }/v1/bills?filter[identification]&filter[names]&filter[number]&filter[prefix]&filter[reference_code]&filter[status]`;
        const res = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const invoices = res.data.data.data.map((inv) => ({
          number: inv.number,
          name: inv.names,
          identification: inv.identification,
          email: inv.email,
        }));
        setInvoices(invoices);
        console.log(invoices);
        console.log(res)
      } catch (error) {
        console.log("error en facuras", error);
      }
    };
    loadInvoices();
  }, []);

  return (
    <div>
      <h1 className="p-4 text-white font-extrabold flex justify-center">Invoices</h1>
      {invoices.length > 0 && <DynaTable columns={columns} data={invoices}/>}
    </div>
  );
}

export default Invoices;
