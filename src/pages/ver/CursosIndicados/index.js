import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CursosService from "../../../services/CursosService";
import "./style.css";
import Delete from "../../../assets/img/delete-icon.svg"
import Edit from "../../../assets/img/edit-icon.svg"

const CursosIndicados = () => {

  const [cursos, setCursos] = useState([])

  useEffect(() => {

    getTodosOsCursos();
  }, [])

  const getTodosOsCursos = () => {
    CursosService.getAllCursos().then((response) => {
      setCursos(response.data);
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  const deleteCurso = (cursoId) => {
    CursosService.deleteCursos(cursoId).then((response) => {
      getTodosOsCursos();
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <main>
        <section className="overflow">
          <table className="table table__cursos">
            <thead>
              <tr>
                <th scope="col">Instituição</th>
                <th scope="col">Curso</th>
                <th scope="col">Cidade - UF</th>
                <th scope="col">Duração</th>
                <th scope="col">Turno</th>
                <th scope="col">Editar / Deletar</th>
              </tr>
            </thead>
            <tbody>
              {
                cursos.map(
                  cursos =>
                    <tr key={cursos.id}>
                      <td> {cursos.nomeInstituicao} </td>
                      <td> {cursos.nomeCurso} </td>
                      <td> {cursos.estadoCidade} </td>
                      <td> {cursos.duracao} </td>
                      <td> {cursos.turno} </td>
                      <td>
                        <Link className="btn btn-info btn__funcoes btn__color-edit" to={`/admin/editar-curso/${cursos.id}`}><img src={Edit} alt="icone de editar"></img></Link>
                        <button className='btn btn-danger btn__funcoes btn__color-delete' onClick={() => deleteCurso(cursos.id)}
                          ><img src={Delete} alt="icone de deletar"></img></button>
                      </td>
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


export default CursosIndicados;
