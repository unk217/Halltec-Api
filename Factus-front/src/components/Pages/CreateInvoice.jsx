import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Input } from "../UI";
import Select from "react-select";

function CreateInvoice() {
  const [idcos, setIdcos] = useState([]);
  const [idchoices, setIdchoices] = useState([]);
  const [mun, setMun] = useState([]);
  /*const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const apiUrl = `${import.meta.env.VITE_BASE_URL}/v1/bills/validate`;
      const res = await axios.post(apiUrl, data);
      toast.success("Factura creada", { style: { background: "3EAC70" } });
    } catch (error) {
      console.log("error fetching data", error);
    }
  });*/

  useEffect(() => {
    const loadCostumers = async () => {
      try {
        const apiUrl = "http://127.0.0.1:8000/costumer/api/v1/costumer/";
        const res = await axios.get(apiUrl);

        const idcos = res.data.map((ids) => ({
          name: ids.names,
          //idChoice: ids.tipo_documento_display,
        }));
        setIdcos(idcos);
        const idchoices = res.data[0].tipo_documento_display;
        setIdchoices(idchoices);
        console.log(res);
        console.log(idchoices);
      } catch (error) {
        console.log("error en costumer", error);
      }
    };
    loadCostumers();
  }, []);

  useEffect(() => {
    const loadmun = async () => {
      const accessToken = localStorage.getItem("access_token");
      //console.log(accessToken);
      try {
        const apiUrl = `${
          import.meta.env.VITE_BASE_URL
        }/v1/municipalities?name=`;
        const res = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const mun = res.data.data.map((m)=>({
          code: m.code,
          department: m.department,
          id: m.id,
          name: m.name,
        }))

        setMun(mun);
        console.log(res);
      } catch (error) {
        console.log("error data", error);
      }
    };
    loadmun();
  }, []);

  const document = [
    { label: "Cedula", value: "CC" },
    { label: "Tarjeta", value: "TI" },
    { label: "NUIP", value: "NUIP" },
  ];

  const handleSelectChange = (event) => {
    console.log(event.value);
  };

  return (
    <div>
      <h1 className="text-white font-extrabold flex justify-center text-6xl p-4">
        CREAR FACTURA
      </h1>
      <label className="text-white font-bold py-4">Tipo de documento</label>
      <Select
        defaultValue={idchoices[1]}
        options={idchoices.map((i) => ({ label: i[1], value: i[0] }))}
        onChange={handleSelectChange}
      />
      <label className="text-white font-bold py-4">Municipios</label>
      <Select
        defaultValue={idchoices[1]}
        options={mun.map((i)=>({label: i.name, value: i.id}))}
        onChange={handleSelectChange}
      />
      {/* <div className="columns-2 ">
        <form onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="Tipo de identificación"
            {...register("tId", { required: true })}
          />
          <Input
            type="text"
            placeholder="id"
            {...register("id", { required: true })}
          />
          <Input
            type="text"
            placeholder="empresa"
            {...register("company", { required: true })}
          />
          <Input
            type="text"
            placeholder="nombre"
            {...register("names", { required: true })}
          />
          <Select options={document} />

          <Input
            type="text"
            placeholder="direccion"
            {...register("addrest", { required: true })}
          />
          <Input
            type="text"
            placeholder="email"
            {...register("email", { required: true })}
          />
          <Input
            type="text"
            placeholder="celular"
            {...register("phone", { required: true })}
          />
          <Input
            type="text"
            placeholder="tipo de persona"
            {...register("typeId", { required: true })}
          />
          <Input
            type="text"
            placeholder="tributante"
            {...register("tributeType", { required: true })}
          />
          <Input
            type="text"
            placeholder="municipio"
            {...register("municipality", { required: true })}
          />

          <button
            className="bg-lime-700 p-3 rounded-lg block w-32 mt-3
         hover:bg-lime-600 hover:cursor-pointer font-bold uppfont-bold uppercase"
          >
            Save
          </button>
        </form>
      </div>*/}
    </div>
  );
}

export default CreateInvoice;
