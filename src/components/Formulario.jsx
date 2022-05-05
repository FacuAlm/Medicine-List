import { useState, useEffect } from "react"

export const Formulario = ({ Pacientes, setPacientes, Edicion,setEdicion }) => {

  const [Cliente, setCliente] = useState('')
  const [Propietario, setPropietario] = useState('')
  const [Email, setEmail] = useState('')
  
  
  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(Edicion).length > 0) {
      setCliente(Edicion.Cliente)
      setPropietario(Edicion.Propietario)
      setEmail(Edicion.Email)
      
      
    }
  }, [Edicion])

  const generarID = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now()

    return fecha
  }

  const handleSubmit = (e) => {


    if ([Cliente, Propietario, Email ].includes('')) {
      setError(true)
    }
    else {

      setError(false)
      e.preventDefault()
      console.log("Enviando")
      const objetoPaciente = {
        Cliente,
        Propietario,
        Email,
        

      }

      if (Edicion.id) {
        objetoPaciente.id = Edicion.id

        const PacientesActualizados = Pacientes.map(pacienteState => pacienteState.id === Edicion.id ? objetoPaciente : pacienteState)

        setPacientes(PacientesActualizados)
        setEdicion({})
      }
      else {
        objetoPaciente.id = generarID()
        setPacientes([...Pacientes, objetoPaciente])
      }



      //Reiniciar formulario
      setCliente('')
      setPropietario('')
      setEmail('')
      setAlta('')
      
    }
  }


  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center mt-5 mb-5">Solicitud medicamentos</h2>

      <p className="font-black">Solicite medicamentos {' '}<span className="text-indigo-600" >Prescriptos</span></p>

      <form
        onSubmit={handleSubmit}
        className="uppercase"
      >
        <div className="mt-5">
          <label htmlFor='mascota' className="font-bold text-indigo-600">Matrícula</label>
          <input
            required
            autoComplete="off"
            id='mascota'
            type="number"
            placeholder='Nro. Matricula'
            className="border-2 w-full p-2 mt-2 rounded-md shadow-md"
            value={Cliente}
            onChange={(e) => setCliente(e.target.value)}
          />
        </div>


        <div className="mt-5">
          <label htmlFor='propietario' className="font-bold text-indigo-600">Nombre Médico</label>
          <input
            required
            autoComplete="off"
            id='propietario'
            type="text"
            placeholder='Nombre Medico'
            className="border-2 w-full p-2 mt-2 rounded-md shadow-md"
            value={Propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mt-5">
          <label htmlFor='email' className="font-bold text-indigo-600 ">Nombre Medicamento</label>
          <input
            required
            autoComplete="off"
            id='email'
            type="text"
            placeholder='Medicamento'
            className="border-2 w-full p-2 mt-2 rounded-md shadow-md"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

       

      

        {error && <p className="text-red-600 normal-case">*Faltan llenar campos</p>}

        <button
          className="shadow-md mt-5 bg-indigo-600 rounded-md w-full p-3 text-white uppercase font-bold"


        >{Edicion.id ? "Editar Orden" : "Agregar Orden"}</button>

      </form>
    </div>

  )
}
