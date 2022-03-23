import React, { useEffect, useState } from "react";
import "./style.css";
import Delete from "../../../assets/img/delete-icon.svg";
import Edit from "../../../assets/img/edit-icon.svg";
import EmpregosService from "../../../services/EmpregosService";
import { Link } from "react-router-dom";

const VagasIndicadas = () => {
  const [empregos, setEmpregos] = useState([]);

  useEffect(() => {
    getTodosOsEmpregos();
  }, []);

  const getTodosOsEmpregos = () => {
    EmpregosService.getAllEmpregos()
      .then((response) => {
        setEmpregos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEmprego = (empregoId) => {
    EmpregosService.deleteEmpregos(empregoId).then((response) => {
      getTodosOsEmpregos();
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <main>
        <section className="overflow">
          <table class="table table__vagas__indicadas">
            <thead>
              <tr>
                <th scope="col">Empresa</th>
                <th scope="col">Cargo</th>
                <th scope="col">Cidade</th>
                <th scope="col">Salario</th>
                <th scope="col">Benefícios</th>
                <th scope="col">Editar / Deletar</th>
              </tr>
            </thead>
            <tbody>
              {
                empregos.map(
                  emprego =>
                    <tr key={emprego.id}>
                      <td> {emprego.nomeEmpresa} </td>
                      <td> {emprego.cargo} </td>
                      <td> {emprego.estadoCidade} </td>
                      <td> {emprego.salario} </td>
                      <td> {emprego.beneficios} </td>
                      <td>
                        <Link to={`/admin/editar-vaga/${emprego.id}`} className="btn btn-info btn__funcoes btn__color-edit">
                          <img src={Edit} alt="icone de editar"></img>
                        </Link>
                        <button className="btn btn-danger btn__funcoes btn__color-delete" onClick={() => deleteEmprego(emprego.id)}>
                          <img src={Delete} alt="icone de deletar" ></img>
                        </button>
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
};

export default VagasIndicadas;
