import React, { useEffect, useState } from 'react';
import Header from "../../components/Header/Header";
import { LivrosService } from '../../api/LivrosService';
import "./index.scss";
import axios from 'axios';

const Home = () => {
  const [livros, setLivros] = useState([]);

  const BuscarLivros = async () => {
    try {
      const result = await LivrosService.getLivros();
      setLivros(result.data.books)
      console.log(result)
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
      {livros.map(livro => livro.titulo)}
    </div>
  )
}

export default Home