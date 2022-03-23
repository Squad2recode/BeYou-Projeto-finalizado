import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CasasAcolhimentoService from "../../../services/CasasAcolhimentoService";
import "./style.css";
import Delete from "../../../assets/img/delete-icon.svg"
import Edit from "../../../assets/img/edit-icon.svg"

const CasasIndicadas = () => {

  const [casas, setCasas] = useState([])

  useEffect(() => {

    getTodasAsCasas();
  }, [])


  const getTodasAsCasas = () => {
    CasasAcolhimentoService.getAllCasas().then((response) => {
      setCasas(response.data);
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  const deleteCasa = (casasId) => {
    CasasAcolhimentoService.deleteCasa(casasId).then((response) => {
      getTodasAsCasas();
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <main>
        <section className="table__overflow">
          <table className="table table__casas">
            <thead>
              <tr>
                <th scope="col">Casa de Acolhimento</th>
                <th scope="col">Site</th>
                <th scope="col">Estado</th>
                <th scope="col">Cidade</th>
                <th scope="col">Editar / Deletar</th>
              </tr>
            </thead>
            <tbody>
              {
                casas.map(
                  casa =>
                    <tr key={casa.id}>                      
                      <td> {casa.nomeCasa} </td>
                      <td> {casa.site} </td>
                      <td> {casa.estado} </td>
                      <td> {casa.cidade} </td>
                      <td>
                        <Link className="btn btn-info btn__funcoes btn__color-edit" to={`/acolhimento/editar-casa/${casa.id}`}><img src={Edit} alt="icone de editar"></img></Link>
                        <button className='btn btn-danger btn__funcoes btn__color-delete' onClick={() => deleteCasa(casa.id)}
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

export default CasasIndicadas;
