import React, { useEffect, useState } from "react";
import VoluntariosService from "../../../services/VoluntariosService";
import "./style.css";

const CandidatosVoluntarios = () => {

  const [voluntarios, setVoluntarios] = useState([])

  useEffect(() => {

    getTodosOsVoluntarios();
  }, [])


  const getTodosOsVoluntarios = () => {
    VoluntariosService.getAllVoluntarios().then((response) => {
      setVoluntarios(response.data);
      console.log(response.data)
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <main>
        <section className="overflow">
          <table className="table table_candidatos">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Idade</th>
                <th scope="col">Email</th>
                <th scope="col">Telefone</th>
                <th scope="col">Mensagem</th>
              </tr>
            </thead>
            <tbody>
              {
                voluntarios.map(
                  voluntario =>
                    <tr key={voluntario.id}>
                      <td> {voluntario.nomeVoluntario} </td>
                      <td> {voluntario.idade} </td>
                      <td> {voluntario.email} </td>
                      <td> {voluntario.telefone} </td>
                      <td> {voluntario.mensagem} </td>
                    </tr>
                )
              }

            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}


export default CandidatosVoluntarios;
