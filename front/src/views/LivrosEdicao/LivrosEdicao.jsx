import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import SubmenuLivros from '../../components/SubmenuLivros/SubmenuLivros'
import { useNavigate, useParams } from 'react-router-dom'
import { LivrosService } from '../../api/LivrosService'
import "./index.scss"

const LivrosEdicao = () => {
  let { livroId } = useParams();
  const navigate = useNavigate()

  const [livro, setLivro] = useState([])

  async function getLivro() {
    const result = await LivrosService.getLivro(livroId);
    setLivro(result.data.book)
  }

  const editLivro = async (e) => {
    e.preventDefault()

    const body = {
      id: Number(livro.id),
      titulo: livro.titulo,
      num_paginas: Number(livro.num_paginas),
      isbn: livro.isbn,
      editora: livro.editora
    }


    const result = await LivrosService.updateLivro(livroId, body)
      .then((response) => {
        alert(response.data.message)
      })
      .catch(({ response: { data, status } }) => {
        alert(`${status} - ${data.message}`)
      });

    navigate('/livros')
  }

  useEffect(() => {
    getLivro()
  }, [])

  return (
    <>
      <Header />
      <SubmenuLivros />
      <div className='livrosCadastro'>
        <h1>Edição de Livros</h1>
        <div>
          <form id="formulario" onSubmit={editLivro}>
            <div className='form-group'>
              <label>Id</label>
              <input type="text" disabled required onChange={(event) => { setLivro({ ...livro, id: event.target.value }) }} value={livro._id || ''}></input>
            </div>
            <div className='form-group'>
              <label>Titulo</label>
              <input type="text" required onChange={(event) => { setLivro({ ...livro, titulo: event.target.value }) }} value={livro.titulo || ''} ></input>
            </div>
            <div className='form-group'>
              <label>Número de Páginas</label>
              <input type="text" required onChange={(event) => { setLivro({ ...livro, num_paginas: event.target.value }) }} value={livro.num_paginas || ''}></input>
            </div>
            <div className='form-group'>
              <label>ISBN</label>
              <input type="text" required onChange={(event) => { setLivro({ ...livro, isbn: event.target.value }) }} value={livro.isbn || ''}></input>
            </div>
            <div className='form-group'>
              <label>Editora</label>
              <input type="text" required onChange={(event) => { setLivro({ ...livro, editora: event.target.value }) }} value={livro.editora || ''}></input>
            </div>
            <div className='form-group'>
              <button type='submit'>Atualizar Livro</button>
            </div>
          </form>
        </div>
      </div>
    </>)

}

export default LivrosEdicao