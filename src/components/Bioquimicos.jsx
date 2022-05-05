import { useState, useEffect } from "react";
import { Formulario } from "./Formulario";


import { ListadoPacientes } from "./ListadoPacientes";

export const Bioquimicos = () => {
  const INITIAL = JSON.parse(localStorage.getItem("Pacientes")) ?? [];
  const [Pacientes, setPacientes] = useState(INITIAL);
  const [Edicion, setEdicion] = useState({});
  
  useEffect(() => {
    localStorage.setItem("Pacientes", JSON.stringify(Pacientes));
  }, [Pacientes]);



  const Eliminar = (id) => {
    const PacientesActualizados = Pacientes.filter(
      (paciente) => paciente.id !== id
    );

    setPacientes(PacientesActualizados);
  };

  return (

      <div className="mx-3 mt-12 md:flex">
        <Formulario
          setPacientes={setPacientes}
          Pacientes={Pacientes}
          Edicion={Edicion}
          setEdicion={setEdicion}
        />
        <ListadoPacientes
          Pacientes={Pacientes}
          setEdicion={setEdicion}
          Eliminar={Eliminar}
        />
        
      </div>
    
  );
}