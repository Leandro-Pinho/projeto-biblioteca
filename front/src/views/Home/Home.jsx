import React, { useEffect, useState } from 'react';
import Header from "../../components/Header/Header";
import { LivrosService } from '../../api/LivrosService';
import "./index.scss";


const Home = () => {
  const [livros, setLivros] = useState([]);

  const BuscarLivros = async () => {
    try {
      const result = await LivrosService.getLivros();
      setLivros(result.data.books)
      // console.log(result)
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  useEffect(() => {
    BuscarLivros();
  }, [])

  return (
    <div className='home'>
      <Header />
      <h1>Biblioteca Central Online - Livros</h1>
      {/* <div className='livros'>
        <ul>
          {livros.map((livro) => (
            <li key={livro._id}>
              <h4>Livro: <span>{livro.titulo}</span></h4>
              <h5>Editora: <span> {livro.editora}</span></h5>
              <h5>Nun_paginas: <span> {livro.num_paginas}</span></h5>

            </li>
          ))}
        </ul>
      </div> */}
    </div>
  )
}

export default Home