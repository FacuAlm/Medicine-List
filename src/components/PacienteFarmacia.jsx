let date = new Date();
console.log(date.toISOString().split('T')[0]);


export const PacienteFarmacia = ({ paciente, setEdicion, Eliminar }) => {

  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar esta orden?")

    if (respuesta) {
      Eliminar(paciente.id)
    }
  }
  return (
    <div>
      <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">


        <p className="font-bold mb-3 uppercase text-gray-700">Nro. Matrícula: <span className="font-normal normal-case">{paciente.Cliente}</span></p>


        <p className="font-bold mb-3 uppercase text-gray-700">Nombre Médico: <span className="font-normal normal-case">{paciente.Propietario}</span></p>


        <p className="font-bold mb-3 uppercase text-gray-700">Nombre Medicamento: <span className="font-normal normal-case">{paciente.Email}</span></p>


        <p className="font-bold mb-3 uppercase text-gray-700">Fecha Solicitud: <span className="font-normal normal-case">{date.toISOString().split('T')[0]}</span></p>






      </div>

    </div>
  )
}
