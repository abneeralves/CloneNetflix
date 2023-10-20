import React, { useEffect, useState } from 'react'
import './App.css'
import Tmdb from './services/Tmdb'
import LinhasFilmes from './components/Filmes/LinhasFilmes'
import FilmeDestaque from './components/Destaque/FilmeDestaque'
import Header from './components/Header/Header'


function App() {

  const [listaFilmes, setlistaFilmes] = useState([])
  const [FilmesDestaques, setFilmeDestaque] = useState(null)
  const [HeaderEfeito, setHeaderEfeito] = useState(true)

  useEffect(() => {
    const carregarTodos = async () => {
      let lista = await Tmdb.getHomeList()
      setlistaFilmes(lista)

      let popular = lista.filter(i => i.slug === 'popular')
      let geraraleatorio = Math.floor(Math.random() * (popular[0].items.results.length - 1))
      let escolhido = popular[0].items.results[geraraleatorio]
      let filmeescolhida = await Tmdb.getMovieInfo(escolhido.id, 'movie')
      setFilmeDestaque(filmeescolhida)

      // console.log(filmeescolhida)
    }

    carregarTodos()
  }, [])

  useEffect(() => {
    const Efeitoscroll = () => {
      if (window.scrollY > 850) {
        setHeaderEfeito(true)
      } else {
        setHeaderEfeito(false)
      }
      
    }

    window.addEventListener('scroll', Efeitoscroll)

    return () => {
      window.removeEventListener('scroll', Efeitoscroll)
    }
  }, [])


  return (
    <div className='pagina'>

      <Header efeito={HeaderEfeito}/> 

      {FilmesDestaques && 
        <FilmeDestaque item={FilmesDestaques}/>
      }

      <section className='listas'>
        {listaFilmes.map((item, key) => (
          <LinhasFilmes key={key} title={item.title} items={item.items}/> 
        ))}
      </section>

      <footer>
          <hr />

        <div class="DivName">
          <span id="logos"><i class="fa-brands fa-github"></i></span>
          <span id="logos"><i class="fa-brands fa-linkedin"></i></span>
          <span id="logos">Abner Alves</span>
        </div>

        <div>
          2023
          <a class="aDiv" id="scrollspyHeading2" href="https://github.com/abneeralves">GitHub</a>
        </div>
      </footer>
      
    </div>
  )
}

export default App
