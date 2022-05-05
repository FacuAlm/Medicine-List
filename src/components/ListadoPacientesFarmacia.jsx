import React, { useEffect } from 'react'
import { PacienteFarmacia } from './PacienteFarmacia'

export const ListadoPacientesFarmacia = ({ Pacientes, setEdicion, Eliminar }) => {

  useEffect(() => {
    if (Pacientes.length > 0) {
      console.log('Nuevo paciente')
    }

  }, [Pacientes])

  return (
    <div className="md:w-1/2">
      {Pacientes && Pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center mt-5 mb-5">Listado Medicamentos</h2>

          <p className="font-black">Listado de {' '} <span className="text-indigo-600">Medicamentos Prescriptos</span></p>


          {
            Pacientes.map((paciente) => {
              return (
                <PacienteFarmacia
                  key={paciente.id}
                  paciente={paciente}
                  setEdicion={setEdicion}
                  Eliminar={Eliminar}


                />

              )

            })
          }
        </>

      ) : (
        <>
          <h2 className="font-black text-3xl text-center mt-5 mb-5">No hay Pacientes</h2>

          <p className="font-black">Cuando el personal de Laboratorio agregue una orden, {' '} <span className="text-indigo-600">aparecerá aquí</span></p>
        </>
      )}








    </div>
  )
}
